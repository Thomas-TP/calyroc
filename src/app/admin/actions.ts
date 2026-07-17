"use server";

import { getCloudflareContext } from "@opennextjs/cloudflare";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import type Stripe from "stripe";
import { z } from "zod";
import { isLocale } from "@/i18n/locales";
import { SITE_URL } from "@/i18n/seo";
import { clearSessionCookie, isAuthenticated, setSessionCookie } from "@/lib/adminAuth";
import { renderClientMessageEmail } from "@/lib/email/clientMessage";
import { renderPaymentLinkEmail } from "@/lib/email/paymentLink";
import { sendEmail } from "@/lib/email/resend";
import { ensureStatusToken, type Lead, PROJECT_STAGE_COUNT } from "@/lib/leads";
import { PACK_BASE_PRICE_CHF, PACK_IDS } from "@/lib/packs";
import { getStripeClient } from "@/lib/stripe";

const LoginSchema = z.object({ password: z.string().min(1) });

export interface LoginState {
  status: "idle" | "error";
}

export async function login(_prevState: LoginState, formData: FormData): Promise<LoginState> {
  const parsed = LoginSchema.safeParse({ password: formData.get("password") });
  const expected = process.env.ADMIN_PASSWORD;

  if (!parsed.success || !expected || parsed.data.password !== expected) {
    return { status: "error" };
  }

  await setSessionCookie();
  redirect("/admin");
}

export async function logout(): Promise<void> {
  await clearSessionCookie();
  redirect("/admin/login");
}

const UpdateLeadSchema = z.object({
  id: z.coerce.number(),
  status: z.enum(["new", "contacted", "quoted", "won", "lost"]),
  notes: z.string().max(2000),
  previewUrl: z.union([z.url(), z.literal("")]),
});

export async function updateLead(formData: FormData): Promise<void> {
  if (!(await isAuthenticated())) redirect("/admin/login");

  const parsed = UpdateLeadSchema.safeParse({
    id: formData.get("id"),
    status: formData.get("status"),
    notes: formData.get("notes"),
    previewUrl: formData.get("previewUrl") ?? "",
  });
  if (!parsed.success) return;

  const { env } = await getCloudflareContext({ async: true });
  await env.DB.prepare("UPDATE leads SET status = ?, notes = ?, preview_url = ? WHERE id = ?")
    .bind(parsed.data.status, parsed.data.notes, parsed.data.previewUrl || null, parsed.data.id)
    .run();

  revalidatePath("/admin");
  revalidatePath(`/admin/leads/${parsed.data.id}`);
}

const CreatePaymentLinkSchema = z.object({
  leadId: z.coerce.number(),
  packId: z.enum(PACK_IDS),
  kind: z.enum(["deposit", "balance", "custom"]),
  depositPercent: z.coerce.number().optional(),
  amountChf: z.coerce.number().min(1).max(50000),
  description: z.string().min(1).max(200),
  sendEmail: z.string().optional(),
  personalMessage: z.string().max(2000).optional(),
});

export interface PaymentLinkState {
  status: "idle" | "success" | "error";
  url?: string;
  message?: string;
  emailSent?: boolean;
}

export async function createPaymentLink(
  _prevState: PaymentLinkState,
  formData: FormData,
): Promise<PaymentLinkState> {
  if (!(await isAuthenticated())) redirect("/admin/login");

  const parsed = CreatePaymentLinkSchema.safeParse({
    leadId: formData.get("leadId"),
    packId: formData.get("packId"),
    kind: formData.get("kind"),
    depositPercent: formData.get("depositPercent") || undefined,
    amountChf: formData.get("amountChf"),
    description: formData.get("description"),
    sendEmail: formData.get("sendEmail") || undefined,
    personalMessage: formData.get("personalMessage") || undefined,
  });
  if (!parsed.success) {
    return { status: "error", message: "invalid" };
  }

  const stripe = getStripeClient();
  if (!stripe) {
    return { status: "error", message: "not-configured" };
  }

  const { env } = await getCloudflareContext({ async: true });
  const lead = await env.DB.prepare("SELECT * FROM leads WHERE id = ?")
    .bind(parsed.data.leadId)
    .first<Lead>();
  if (!lead) {
    return { status: "error", message: "lead-not-found" };
  }

  let amountChf = parsed.data.amountChf;
  if (parsed.data.kind === "deposit" && parsed.data.depositPercent) {
    const basePrice = PACK_BASE_PRICE_CHF[parsed.data.packId];
    if (basePrice) {
      amountChf = Math.round((basePrice * parsed.data.depositPercent) / 100);
    }
  }

  const leadLocale = isLocale(lead.locale) ? lead.locale : "fr";
  const stripeLocale = (
    isLocale(lead.locale) ? lead.locale : "auto"
  ) as Stripe.Checkout.SessionCreateParams.Locale;

  // A durable token-scoped tracking link, not the raw Stripe session URL, is
  // what actually gets shown/emailed below -- see the comment further down.
  const token = await ensureStatusToken(env.DB, parsed.data.leadId);
  const trackingPaymentUrl = `${SITE_URL}/${leadLocale}/suivi/${token}/paiement`;

  try {
    // Generating a second link for the same kind (e.g. re-sending a deposit
    // request) must retire the previous one -- otherwise both stay payable
    // at once and the client could pay twice. Expiring the old Stripe
    // session is best-effort (it may already be paid/expired/gone); either
    // way the D1 row is what the client-facing pages actually check.
    const priorPending = await env.DB.prepare(
      "SELECT id, stripe_checkout_session_id FROM payments WHERE lead_id = ? AND kind = ? AND status = 'pending'",
    )
      .bind(parsed.data.leadId, parsed.data.kind)
      .all<{ id: number; stripe_checkout_session_id: string }>();
    for (const prior of priorPending.results) {
      try {
        await stripe.checkout.sessions.expire(prior.stripe_checkout_session_id);
      } catch {
        // Already paid, expired, or otherwise unusable -- fine, it's being
        // cancelled in our own records regardless.
      }
    }
    if (priorPending.results.length > 0) {
      await env.DB.prepare(
        "UPDATE payments SET status = 'cancelled' WHERE lead_id = ? AND kind = ? AND status = 'pending'",
      )
        .bind(parsed.data.leadId, parsed.data.kind)
        .run();
    }

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      // No payment_method_types: Stripe automatically offers every payment method
      // enabled in the Dashboard (card, TWINT, etc.) when this is omitted.
      locale: stripeLocale,
      line_items: [
        {
          price_data: {
            currency: "chf",
            product_data: { name: parsed.data.description },
            unit_amount: Math.round(amountChf * 100),
          },
          quantity: 1,
        },
      ],
      success_url: `${trackingPaymentUrl}?payment=success`,
      cancel_url: `${trackingPaymentUrl}?payment=cancelled`,
      metadata: { leadId: String(parsed.data.leadId) },
    });

    if (!session.url) {
      return { status: "error", message: "no-url" };
    }

    const now = new Date().toISOString();
    await env.DB.prepare(
      "INSERT INTO payments (lead_id, kind, pack_id, description, stripe_checkout_session_id, amount_due_cents, status) VALUES (?, ?, ?, ?, ?, ?, 'pending')",
    )
      .bind(
        parsed.data.leadId,
        parsed.data.kind,
        parsed.data.packId,
        parsed.data.description,
        session.id,
        Math.round(amountChf * 100),
      )
      .run();
    await env.DB.prepare("UPDATE leads SET pack_id = ?, updated_at = ? WHERE id = ?")
      .bind(parsed.data.packId, now, parsed.data.leadId)
      .run();

    // The link shown to Thomas (to copy) and emailed to the client always
    // points at the tracking page, never at session.url directly: Stripe
    // Checkout Sessions expire 24h after creation and can't be extended, so
    // a raw session link silently stops working if it sits unopened for a
    // day or two. The tracking page instead generates a fresh session at
    // the moment of the click (see suivi/[token]/actions.ts), so the same
    // link stays usable indefinitely.
    let emailSent = false;
    if (parsed.data.sendEmail === "true") {
      const emailContent = renderPaymentLinkEmail({
        locale: leadLocale,
        amountLabel: `${amountChf.toFixed(2)} CHF`,
        description: parsed.data.description,
        url: trackingPaymentUrl,
        suiviUrl: `${SITE_URL}/${leadLocale}/suivi/${token}`,
        personalMessage: parsed.data.personalMessage,
      });
      emailSent = await sendEmail({
        to: lead.email,
        subject: emailContent.subject,
        html: emailContent.html,
        text: emailContent.text,
      });
    }

    revalidatePath("/admin");
    revalidatePath(`/admin/leads/${parsed.data.leadId}`);
    return { status: "success", url: trackingPaymentUrl, emailSent };
  } catch (error) {
    console.error("Failed to create Stripe checkout session", error);
    return { status: "error", message: "stripe-error" };
  }
}

const UpdateProjectStageSchema = z.object({
  id: z.coerce.number(),
  projectStage: z.coerce.number().min(1).max(PROJECT_STAGE_COUNT),
});

export interface ProjectStageState {
  status: "idle" | "success" | "error";
  trackingUrl?: string;
}

/** Sets which of the 4 client-facing stages a project is at, generating a
 * shareable tracking token the first time (kept stable afterwards so a
 * previously-sent link keeps working). No separate "generate link" action
 * -- setting a stage always yields a usable URL in one step. */
export async function updateProjectStage(
  _prevState: ProjectStageState,
  formData: FormData,
): Promise<ProjectStageState> {
  if (!(await isAuthenticated())) redirect("/admin/login");

  const parsed = UpdateProjectStageSchema.safeParse({
    id: formData.get("id"),
    projectStage: formData.get("projectStage"),
  });
  if (!parsed.success) {
    return { status: "error" };
  }

  const { env } = await getCloudflareContext({ async: true });
  const lead = await env.DB.prepare("SELECT * FROM leads WHERE id = ?")
    .bind(parsed.data.id)
    .first<Lead>();
  if (!lead) {
    return { status: "error" };
  }

  const token = lead.status_token ?? crypto.randomUUID().replace(/-/g, "");
  const now = new Date().toISOString();

  await env.DB.prepare(
    "UPDATE leads SET project_stage = ?, status_token = ?, updated_at = ? WHERE id = ?",
  )
    .bind(parsed.data.projectStage, token, now, parsed.data.id)
    .run();

  const leadLocale = isLocale(lead.locale) ? lead.locale : "fr";
  revalidatePath("/admin");
  revalidatePath(`/admin/leads/${parsed.data.id}`);
  return { status: "success", trackingUrl: `${SITE_URL}/${leadLocale}/suivi/${token}` };
}

const AddProjectUpdateSchema = z.object({
  leadId: z.coerce.number(),
  message: z.string().min(1).max(500),
});

export interface ProjectUpdateState {
  status: "idle" | "success" | "error";
}

/** Posts a short, timestamped note visible on the client's public /suivi
 * page -- the one-way "keep clients out of your inbox" channel from the
 * project-tracking research: Thomas writes here, the client reads there,
 * no email round-trip either way. */
export async function addProjectUpdate(
  _prevState: ProjectUpdateState,
  formData: FormData,
): Promise<ProjectUpdateState> {
  if (!(await isAuthenticated())) redirect("/admin/login");

  const parsed = AddProjectUpdateSchema.safeParse({
    leadId: formData.get("leadId"),
    message: formData.get("message"),
  });
  if (!parsed.success) {
    return { status: "error" };
  }

  const { env } = await getCloudflareContext({ async: true });
  await env.DB.prepare("INSERT INTO project_updates (lead_id, message) VALUES (?, ?)")
    .bind(parsed.data.leadId, parsed.data.message)
    .run();

  revalidatePath("/admin");
  revalidatePath(`/admin/leads/${parsed.data.leadId}`);
  return { status: "success" };
}

const DeleteProjectUpdateSchema = z.object({
  id: z.coerce.number(),
  leadId: z.coerce.number(),
});

export async function deleteProjectUpdate(formData: FormData): Promise<void> {
  if (!(await isAuthenticated())) redirect("/admin/login");

  const parsed = DeleteProjectUpdateSchema.safeParse({
    id: formData.get("id"),
    leadId: formData.get("leadId"),
  });
  if (!parsed.success) return;

  const { env } = await getCloudflareContext({ async: true });
  await env.DB.prepare("DELETE FROM project_updates WHERE id = ?").bind(parsed.data.id).run();

  revalidatePath("/admin");
  revalidatePath(`/admin/leads/${parsed.data.leadId}`);
}

const MAX_FILE_BYTES = 8 * 1024 * 1024;
const ALLOWED_FILE_TYPES = new Set(["image/png", "image/jpeg", "image/webp", "image/svg+xml"]);

export interface ProjectFileState {
  status: "idle" | "success" | "error";
  message?: string;
}

/** Stores an image/logo in R2 under the lead's own tracking token (not its
 * numeric id) so the public serving route (/api/files/[token]/[key]) can
 * stay unauthenticated and still be safely scoped -- same trust boundary
 * as the /suivi/[token] page itself, no separate access-control system. */
export async function uploadProjectFile(
  _prevState: ProjectFileState,
  formData: FormData,
): Promise<ProjectFileState> {
  if (!(await isAuthenticated())) redirect("/admin/login");

  const leadId = Number(formData.get("leadId"));
  const file = formData.get("file");
  if (!leadId || !(file instanceof File)) {
    return { status: "error", message: "invalid" };
  }
  if (!ALLOWED_FILE_TYPES.has(file.type)) {
    return { status: "error", message: "type" };
  }
  if (file.size > MAX_FILE_BYTES) {
    return { status: "error", message: "size" };
  }

  const { env } = await getCloudflareContext({ async: true });
  const token = await ensureStatusToken(env.DB, leadId);

  const safeName = file.name.replace(/[^a-zA-Z0-9.-]/g, "_").slice(-100);
  const key = `leads/${token}/${Date.now()}-${safeName}`;
  await env.PROJECT_FILES.put(key, await file.arrayBuffer(), {
    httpMetadata: { contentType: file.type },
  });

  revalidatePath("/admin");
  revalidatePath(`/admin/leads/${leadId}`);
  return { status: "success" };
}

const DeleteProjectFileSchema = z.object({
  leadId: z.coerce.number(),
  key: z.string().min(1),
});

export async function deleteProjectFile(formData: FormData): Promise<void> {
  if (!(await isAuthenticated())) redirect("/admin/login");

  const parsed = DeleteProjectFileSchema.safeParse({
    leadId: formData.get("leadId"),
    key: formData.get("key"),
  });
  if (!parsed.success) return;

  const { env } = await getCloudflareContext({ async: true });
  // `key` from the client is only the filename portion (see
  // ProjectFileManager) -- the actual R2 object lives under the lead's
  // token prefix, so deleting by the bare key alone silently no-ops
  // against an object that doesn't exist, leaving the real file in place.
  const lead = await env.DB.prepare("SELECT status_token FROM leads WHERE id = ?")
    .bind(parsed.data.leadId)
    .first<{ status_token: string | null }>();
  if (lead?.status_token) {
    await env.PROJECT_FILES.delete(`leads/${lead.status_token}/${parsed.data.key}`);
  }

  revalidatePath("/admin");
  revalidatePath(`/admin/leads/${parsed.data.leadId}`);
}

const SendClientMessageSchema = z.object({
  leadId: z.coerce.number(),
  subject: z.string().min(1).max(200),
  message: z.string().min(1).max(5000),
});

export interface ClientMessageState {
  status: "idle" | "success" | "error";
  message?: string;
}

/** The direct-email counterpart to addProjectUpdate: that one posts a note
 * to the client's public timeline (one-way, Thomas -> visible log), this
 * one sends an actual email to the client's inbox -- the "I have nowhere
 * to write to the client" gap. Every send is logged in client_messages so
 * Thomas has a history of what was said, even though the client's replies
 * still land in hello@calyroc.com (already forwarded to Thomas) rather
 * than anywhere in this admin. */
export async function sendMessageToClient(
  _prevState: ClientMessageState,
  formData: FormData,
): Promise<ClientMessageState> {
  if (!(await isAuthenticated())) redirect("/admin/login");

  const parsed = SendClientMessageSchema.safeParse({
    leadId: formData.get("leadId"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  });
  if (!parsed.success) {
    return { status: "error", message: "invalid" };
  }

  const { env } = await getCloudflareContext({ async: true });
  const lead = await env.DB.prepare("SELECT * FROM leads WHERE id = ?")
    .bind(parsed.data.leadId)
    .first<Lead>();
  if (!lead) {
    return { status: "error", message: "lead-not-found" };
  }

  const leadLocale = isLocale(lead.locale) ? lead.locale : "fr";
  const token = await ensureStatusToken(env.DB, parsed.data.leadId);
  const emailContent = renderClientMessageEmail({
    locale: leadLocale,
    subject: parsed.data.subject,
    message: parsed.data.message,
    suiviUrl: `${SITE_URL}/${leadLocale}/suivi/${token}`,
  });
  const sent = await sendEmail({
    to: lead.email,
    subject: emailContent.subject,
    html: emailContent.html,
    text: emailContent.text,
    replyTo: "hello@calyroc.com",
  });
  if (!sent) {
    return { status: "error", message: "send-failed" };
  }

  await env.DB.prepare("INSERT INTO client_messages (lead_id, subject, message) VALUES (?, ?, ?)")
    .bind(parsed.data.leadId, parsed.data.subject, parsed.data.message)
    .run();

  revalidatePath(`/admin/leads/${parsed.data.leadId}`);
  return { status: "success" };
}

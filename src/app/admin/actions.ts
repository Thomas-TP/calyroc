"use server";

import { getCloudflareContext } from "@opennextjs/cloudflare";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import type Stripe from "stripe";
import { z } from "zod";
import { isLocale } from "@/i18n/locales";
import { SITE_URL } from "@/i18n/seo";
import { clearSessionCookie, isAuthenticated, setSessionCookie } from "@/lib/adminAuth";
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

  try {
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
      success_url: `${SITE_URL}/${leadLocale}/contact?payment=success`,
      cancel_url: `${SITE_URL}/${leadLocale}/contact?payment=cancelled`,
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

    let emailSent = false;
    if (parsed.data.sendEmail === "true") {
      const emailContent = renderPaymentLinkEmail({
        locale: leadLocale,
        amountLabel: `${amountChf.toFixed(2)} CHF`,
        description: parsed.data.description,
        url: session.url,
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
    return { status: "success", url: session.url, emailSent };
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

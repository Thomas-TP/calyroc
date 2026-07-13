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
import type { Lead } from "@/lib/leads";
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
});

export async function updateLead(formData: FormData): Promise<void> {
  if (!(await isAuthenticated())) redirect("/admin/login");

  const parsed = UpdateLeadSchema.safeParse({
    id: formData.get("id"),
    status: formData.get("status"),
    notes: formData.get("notes"),
  });
  if (!parsed.success) return;

  const { env } = await getCloudflareContext({ async: true });
  await env.DB.prepare("UPDATE leads SET status = ?, notes = ? WHERE id = ?")
    .bind(parsed.data.status, parsed.data.notes, parsed.data.id)
    .run();

  revalidatePath("/admin");
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

    if (parsed.data.sendEmail === "true") {
      const emailContent = renderPaymentLinkEmail({
        locale: leadLocale,
        amountLabel: `${amountChf.toFixed(2)} CHF`,
        description: parsed.data.description,
        url: session.url,
        personalMessage: parsed.data.personalMessage,
      });
      await sendEmail({
        to: lead.email,
        subject: emailContent.subject,
        html: emailContent.html,
        text: emailContent.text,
      });
    }

    revalidatePath("/admin");
    return { status: "success", url: session.url };
  } catch (error) {
    console.error("Failed to create Stripe checkout session", error);
    return { status: "error", message: "stripe-error" };
  }
}

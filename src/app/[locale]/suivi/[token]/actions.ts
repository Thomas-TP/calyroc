"use server";

import { getCloudflareContext } from "@opennextjs/cloudflare";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import type Stripe from "stripe";
import { z } from "zod";
import { isLocale } from "@/i18n/locales";
import { SITE_URL } from "@/i18n/seo";
import { getLeadByToken } from "@/lib/leads";
import type { Payment } from "@/lib/payments";
import { getStripeClient } from "@/lib/stripe";

// Public actions reachable from /suivi/[token] -- no admin auth. Every
// action here re-resolves the lead from the token itself (never trusts a
// client-supplied leadId) and only ever reads/pays data Thomas already
// created from the admin -- a client can never create or change an amount.

const ApproveSchema = z.object({
  token: z.string().min(1),
  locale: z.string(),
});

/** Records that the client has reviewed the preview link and is ready for
 * launch. Idempotent -- only sets the timestamp once. This is the signal
 * Thomas watches for in the admin to know it's the right moment to send
 * the balance invoice: after approval, before the revision window that
 * comes with going live (see PLAN.md for the reasoning). */
export async function approveProject(formData: FormData): Promise<void> {
  const parsed = ApproveSchema.safeParse({
    token: formData.get("token"),
    locale: formData.get("locale"),
  });
  if (!parsed.success) return;

  const { env } = await getCloudflareContext({ async: true });
  const lead = await getLeadByToken(env.DB, parsed.data.token);
  if (!lead) return;

  if (!lead.client_approved_at) {
    await env.DB.prepare("UPDATE leads SET client_approved_at = datetime('now') WHERE id = ?")
      .bind(lead.id)
      .run();
  }

  const locale = isLocale(parsed.data.locale) ? parsed.data.locale : "fr";
  revalidatePath(`/${locale}/suivi/${parsed.data.token}`);
}

const CreateCheckoutSchema = z.object({
  token: z.string().min(1),
  paymentId: z.coerce.number(),
  locale: z.string(),
});

export interface ClientCheckoutState {
  status: "idle" | "error";
  message?: string;
}

/** Stripe Checkout Sessions expire 24h after creation (not configurable
 * further out) -- a link generated once in the admin and only emailed
 * can't stay clickable indefinitely from this page. So instead of storing
 * and re-showing a URL, this creates a fresh session at the moment the
 * client actually clicks "pay", against the amount Thomas already set on
 * the payments row. */
export async function createBalanceCheckout(
  _prevState: ClientCheckoutState,
  formData: FormData,
): Promise<ClientCheckoutState> {
  const parsed = CreateCheckoutSchema.safeParse({
    token: formData.get("token"),
    paymentId: formData.get("paymentId"),
    locale: formData.get("locale"),
  });
  if (!parsed.success) return { status: "error" };

  const { env } = await getCloudflareContext({ async: true });
  const lead = await getLeadByToken(env.DB, parsed.data.token);
  if (!lead) return { status: "error" };

  const payment = await env.DB.prepare("SELECT * FROM payments WHERE id = ?")
    .bind(parsed.data.paymentId)
    .first<Payment>();
  // Ownership check: the payment must belong to THIS lead, resolved from
  // the trusted token -- never from a client-supplied id. Without this, a
  // client could pay a different lead's invoice by guessing a paymentId,
  // or re-trigger checkout on an already-paid one.
  if (!payment || payment.lead_id !== lead.id || payment.status !== "pending") {
    return { status: "error", message: "invalid" };
  }

  const stripe = getStripeClient();
  if (!stripe) return { status: "error", message: "not-configured" };

  const locale = isLocale(parsed.data.locale) ? parsed.data.locale : "fr";
  const stripeLocale = locale as Stripe.Checkout.SessionCreateParams.Locale;

  // If the client already opened a session for this row on a previous visit
  // (or Thomas emailed/copied one manually), expire it before creating a
  // fresh one -- two live sessions for the same row would let the client
  // pay through whichever one they still have open, twice. Best-effort:
  // it's fine if the old one is already paid, expired, or invalid.
  if (payment.stripe_checkout_session_id) {
    try {
      await stripe.checkout.sessions.expire(payment.stripe_checkout_session_id);
    } catch {
      // Already expired/completed -- nothing to do.
    }
  }

  let session: Stripe.Checkout.Session;
  try {
    session = await stripe.checkout.sessions.create({
      mode: "payment",
      locale: stripeLocale,
      line_items: [
        {
          price_data: {
            currency: "chf",
            product_data: { name: payment.description },
            unit_amount: payment.amount_due_cents,
          },
          quantity: 1,
        },
      ],
      success_url: `${SITE_URL}/${locale}/suivi/${parsed.data.token}/paiement?payment=success`,
      cancel_url: `${SITE_URL}/${locale}/suivi/${parsed.data.token}/paiement?payment=cancelled`,
      metadata: { leadId: String(lead.id), paymentId: String(payment.id) },
    });
  } catch (error) {
    console.error("Failed to create client-initiated checkout session", error);
    return { status: "error", message: "stripe-error" };
  }

  if (!session.url) return { status: "error", message: "no-url" };

  await env.DB.prepare("UPDATE payments SET stripe_checkout_session_id = ? WHERE id = ?")
    .bind(session.id, payment.id)
    .run();

  redirect(session.url);
}

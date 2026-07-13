import { getCloudflareContext } from "@opennextjs/cloudflare";
import type Stripe from "stripe";
import { isLocale } from "@/i18n/locales";
import { renderPaymentReceiptEmail } from "@/lib/email/paymentReceipt";
import { sendEmail } from "@/lib/email/resend";
import { renderThomasPaymentNotificationEmail } from "@/lib/email/thomasPaymentNotification";
import type { Lead } from "@/lib/leads";
import type { Payment } from "@/lib/payments";
import { getStripeClient } from "@/lib/stripe";

export async function POST(request: Request) {
  const stripe = getStripeClient();
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!stripe || !webhookSecret) {
    console.error("Stripe webhook received but Stripe is not configured");
    return new Response("not-configured", { status: 500 });
  }

  const signature = request.headers.get("stripe-signature");
  if (!signature) {
    return new Response("missing-signature", { status: 400 });
  }

  const payload = await request.text();

  let event: Stripe.Event;
  try {
    event = await stripe.webhooks.constructEventAsync(payload, signature, webhookSecret);
  } catch (error) {
    console.error("Stripe webhook signature verification failed", error);
    return new Response("invalid-signature", { status: 400 });
  }

  if (event.type !== "checkout.session.completed") {
    return new Response("ignored", { status: 200 });
  }

  const session = event.data.object as Stripe.Checkout.Session;
  const amountPaidCents = session.amount_total ?? 0;
  const paymentIntentId =
    typeof session.payment_intent === "string"
      ? session.payment_intent
      : (session.payment_intent?.id ?? null);
  const paidAt = new Date().toISOString();

  const { env } = await getCloudflareContext({ async: true });

  const updateResult = await env.DB.prepare(
    "UPDATE payments SET status = 'paid', amount_paid_cents = ?, stripe_payment_intent_id = ?, paid_at = ? WHERE stripe_checkout_session_id = ? AND status != 'paid'",
  )
    .bind(amountPaidCents, paymentIntentId, paidAt, session.id)
    .run();

  if (!updateResult.meta.changes) {
    // Already processed (duplicate webhook delivery) or unknown session -- stop to avoid double emails.
    return new Response("ok", { status: 200 });
  }

  const payment = await env.DB.prepare(
    "SELECT * FROM payments WHERE stripe_checkout_session_id = ?",
  )
    .bind(session.id)
    .first<Payment>();
  if (!payment) {
    return new Response("ok", { status: 200 });
  }

  const lead = await env.DB.prepare("SELECT * FROM leads WHERE id = ?")
    .bind(payment.lead_id)
    .first<Lead>();
  if (!lead) {
    return new Response("ok", { status: 200 });
  }

  await env.DB.prepare("UPDATE leads SET status = 'won', updated_at = ? WHERE id = ?")
    .bind(paidAt, lead.id)
    .run();

  const amountLabel = `${(amountPaidCents / 100).toFixed(2)} CHF`;
  const receiptLocale = isLocale(lead.locale) ? lead.locale : "fr";
  const dateLabel = new Date(paidAt).toLocaleDateString(receiptLocale, {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  const receiptEmail = renderPaymentReceiptEmail({ locale: receiptLocale, amountLabel, dateLabel });
  await sendEmail({
    to: lead.email,
    subject: receiptEmail.subject,
    html: receiptEmail.html,
    text: receiptEmail.text,
  });

  const thomasEmail = renderThomasPaymentNotificationEmail({
    leadName: lead.name,
    description: payment.description,
    amountLabel,
  });
  await sendEmail({
    to: process.env.CALYROC_CONTACT_TO ?? "hello@calyroc.com",
    subject: thomasEmail.subject,
    html: thomasEmail.html,
    text: thomasEmail.text,
  });

  return new Response("ok", { status: 200 });
}

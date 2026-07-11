"use server";

import { getCloudflareContext } from "@opennextjs/cloudflare";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { SITE_URL } from "@/i18n/seo";
import { clearSessionCookie, isAuthenticated, setSessionCookie } from "@/lib/adminAuth";
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
  amountChf: z.coerce.number().min(1).max(50000),
  description: z.string().min(1).max(200),
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
    amountChf: formData.get("amountChf"),
    description: formData.get("description"),
  });
  if (!parsed.success) {
    return { status: "error", message: "invalid" };
  }

  const stripe = getStripeClient();
  if (!stripe) {
    return { status: "error", message: "not-configured" };
  }

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "chf",
            product_data: { name: parsed.data.description },
            unit_amount: Math.round(parsed.data.amountChf * 100),
          },
          quantity: 1,
        },
      ],
      success_url: `${SITE_URL}/fr/contact?payment=success`,
      cancel_url: `${SITE_URL}/fr/contact?payment=cancelled`,
      metadata: { leadId: String(parsed.data.leadId) },
    });

    if (!session.url) {
      return { status: "error", message: "no-url" };
    }
    return { status: "success", url: session.url };
  } catch (error) {
    console.error("Failed to create Stripe checkout session", error);
    return { status: "error", message: "stripe-error" };
  }
}

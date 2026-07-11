"use server";

import { getCloudflareContext } from "@opennextjs/cloudflare";
import { Resend } from "resend";
import { z } from "zod";

const ContactSchema = z.object({
  name: z.string().min(1).max(200),
  email: z.email(),
  budget: z.string().max(200),
  message: z.string().min(10).max(5000),
  locale: z.string().max(5),
});

export interface ContactState {
  status: "idle" | "success" | "error";
  message?: string;
}

export async function submitContactForm(
  _prevState: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const parsed = ContactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    budget: formData.get("budget"),
    message: formData.get("message"),
    locale: formData.get("locale"),
  });

  if (!parsed.success) {
    return { status: "error", message: "invalid" };
  }

  const { name, email, budget, message, locale } = parsed.data;

  try {
    const { env } = await getCloudflareContext({ async: true });
    await env.DB.prepare(
      "INSERT INTO leads (name, email, budget, message, locale) VALUES (?, ?, ?, ?, ?)",
    )
      .bind(name, email, budget, message, locale)
      .run();
  } catch (error) {
    console.error("Failed to store lead in D1", error);
    return { status: "error", message: "storage-failed" };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set -- lead stored, but no notification email sent");
    return { status: "success" };
  }

  try {
    const resend = new Resend(apiKey);
    const to = process.env.CALYROC_CONTACT_TO ?? "hello@calyroc.com";
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL ?? "Calyroc <hello@calyroc.com>",
      to,
      replyTo: email,
      subject: `Nouveau contact -- ${name}`,
      text: `Nom: ${name}\nEmail: ${email}\nBudget: ${budget}\nLangue: ${locale}\n\n${message}`,
    });
  } catch (error) {
    console.error("Lead stored, but failed to send notification email", error);
  }

  return { status: "success" };
}

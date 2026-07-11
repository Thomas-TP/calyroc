"use server";

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

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set -- contact form submission was not sent");
    return { status: "error", message: "not-configured" };
  }

  const resend = new Resend(apiKey);
  const to = process.env.CALYROC_CONTACT_TO ?? "hello@calyroc.com";
  const { name, email, budget, message, locale } = parsed.data;

  try {
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL ?? "Calyroc <hello@calyroc.com>",
      to,
      replyTo: email,
      subject: `Nouveau contact -- ${name}`,
      text: `Nom: ${name}\nEmail: ${email}\nBudget: ${budget}\nLangue: ${locale}\n\n${message}`,
    });
    return { status: "success" };
  } catch (error) {
    console.error("Failed to send contact email", error);
    return { status: "error", message: "send-failed" };
  }
}

"use server";

import { getCloudflareContext } from "@opennextjs/cloudflare";
import { z } from "zod";
import { getDictionary } from "@/i18n/dictionary";
import { isLocale } from "@/i18n/locales";
import { renderClientConfirmationEmail } from "@/lib/email/clientConfirmation";
import { sendEmail } from "@/lib/email/resend";
import { renderThomasNewLeadEmail } from "@/lib/email/thomasNewLead";
import { PACK_IDS } from "@/lib/packs";
import { verifyTurnstileToken } from "@/lib/turnstile";

const ContactSchema = z.object({
  name: z.string().min(1).max(200),
  email: z.email(),
  packId: z.union([z.enum(PACK_IDS), z.literal("unsure")]),
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
    packId: formData.get("packId"),
    message: formData.get("message"),
    locale: formData.get("locale"),
  });

  if (!parsed.success) {
    return { status: "error", message: "invalid" };
  }

  const turnstileToken = formData.get("cf-turnstile-response");
  if (typeof turnstileToken !== "string" || !turnstileToken) {
    return { status: "error", message: "captcha-missing" };
  }
  if (!(await verifyTurnstileToken(turnstileToken))) {
    return { status: "error", message: "captcha-failed" };
  }

  const { name, email, packId, message, locale } = parsed.data;
  const dictionaryLocale = isLocale(locale) ? locale : "fr";
  const dictionary = getDictionary(dictionaryLocale);
  const pack = dictionary.pricingPage.packs.find((p) => p.id === packId);
  const packLabel = pack ? `${pack.name} (${pack.price})` : dictionary.contactPage.formPackUnsureLabel;

  try {
    const { env } = await getCloudflareContext({ async: true });
    await env.DB.prepare(
      "INSERT INTO leads (name, email, budget, message, locale, pack_id) VALUES (?, ?, ?, ?, ?, ?)",
    )
      .bind(name, email, packLabel, message, locale, packId)
      .run();
  } catch (error) {
    console.error("Failed to store lead in D1", error);
    return { status: "error", message: "storage-failed" };
  }

  const thomasEmail = renderThomasNewLeadEmail({ name, email, packLabel, message, locale });
  await sendEmail({
    to: process.env.CALYROC_CONTACT_TO ?? "hello@calyroc.com",
    replyTo: email,
    subject: thomasEmail.subject,
    html: thomasEmail.html,
    text: thomasEmail.text,
  });

  const clientEmail = renderClientConfirmationEmail({ locale, packLabel, message });
  await sendEmail({
    to: email,
    subject: clientEmail.subject,
    html: clientEmail.html,
    text: clientEmail.text,
  });

  return { status: "success" };
}

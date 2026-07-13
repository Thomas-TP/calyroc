import { getDictionary } from "@/i18n/dictionary";
import { isLocale, type Locale } from "@/i18n/locales";
import { emailButton, emailSection, escapeHtml, renderEmailLayout } from "./base";

export function renderPaymentLinkEmail({
  locale,
  amountLabel,
  description,
  url,
  personalMessage,
}: {
  locale: string;
  amountLabel: string;
  description: string;
  url: string;
  personalMessage?: string;
}): { subject: string; html: string; text: string } {
  const safeLocale: Locale = isLocale(locale) ? locale : "fr";
  const copy = getDictionary(safeLocale).email.paymentLink;

  const bodyHtml = `
    <h1 style="margin:0 0 16px; font-family: Georgia, 'Times New Roman', serif; font-size:20px; color:#16140f;">${escapeHtml(copy.heading)}</h1>
    <p style="margin:0 0 8px;">${escapeHtml(copy.intro)}</p>
    ${personalMessage ? `<p style="margin:16px 0; white-space:pre-wrap;">${escapeHtml(personalMessage)}</p>` : ""}
    ${emailSection("", [
      { label: copy.amountLabel, value: amountLabel },
      { label: copy.descriptionLabel, value: description },
    ])}
    ${emailButton(url, copy.ctaLabel)}
    <p style="margin:16px 0 0; font-size:13px; color:#6b6459;">${escapeHtml(copy.expiryNote)}</p>
    <p style="margin:24px 0 0;">${copy.signature}</p>
  `;

  const text = [
    copy.heading,
    "",
    copy.intro,
    ...(personalMessage ? ["", personalMessage] : []),
    "",
    `${copy.amountLabel}: ${amountLabel}`,
    `${copy.descriptionLabel}: ${description}`,
    "",
    `${copy.ctaLabel}: ${url}`,
    "",
    copy.expiryNote,
    "",
    copy.signature.replace(/<br\s*\/?>/gi, "\n"),
  ].join("\n");

  return {
    subject: copy.subject,
    html: renderEmailLayout({ previewText: copy.preview, bodyHtml, lang: safeLocale }),
    text,
  };
}

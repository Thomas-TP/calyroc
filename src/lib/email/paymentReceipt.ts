import { getDictionary } from "@/i18n/dictionary";
import { isLocale, type Locale } from "@/i18n/locales";
import { emailSection, escapeHtml, renderEmailLayout } from "./base";

export function renderPaymentReceiptEmail({
  locale,
  amountLabel,
  dateLabel,
}: {
  locale: string;
  amountLabel: string;
  dateLabel: string;
}): { subject: string; html: string; text: string } {
  const safeLocale: Locale = isLocale(locale) ? locale : "fr";
  const copy = getDictionary(safeLocale).email.paymentReceipt;

  const bodyHtml = `
    <h1 style="margin:0 0 16px; font-family: Georgia, 'Times New Roman', serif; font-size:20px; color:#16140f;">${escapeHtml(copy.heading)}</h1>
    <p style="margin:0 0 8px;">${escapeHtml(copy.intro)}</p>
    ${emailSection("", [
      { label: copy.amountLabel, value: amountLabel },
      { label: copy.dateLabel, value: dateLabel },
    ])}
    <p style="margin:16px 0 0; font-size:13px; color:#6b6459;">${escapeHtml(copy.nextStepsText)}</p>
    <p style="margin:24px 0 0;">${copy.signature}</p>
  `;

  const text = [
    copy.heading,
    "",
    copy.intro,
    "",
    `${copy.amountLabel}: ${amountLabel}`,
    `${copy.dateLabel}: ${dateLabel}`,
    "",
    copy.nextStepsText,
    "",
    copy.signature.replace(/<br\s*\/?>/gi, "\n"),
  ].join("\n");

  return {
    subject: copy.subject,
    html: renderEmailLayout({ previewText: copy.preview, bodyHtml, lang: safeLocale }),
    text,
  };
}

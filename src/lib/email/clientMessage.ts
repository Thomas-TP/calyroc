import { getDictionary } from "@/i18n/dictionary";
import { isLocale, type Locale } from "@/i18n/locales";
import { escapeHtml, renderEmailLayout } from "./base";

/** Renders a one-off message Thomas writes to a client from the admin --
 * the "I have nowhere to write to the client" gap: everything else in this
 * inbox is either an automated transactional email or the one-way project
 * timeline, neither of which lets Thomas start a conversation. The subject
 * is whatever Thomas typed (not a fixed dictionary string, unlike the other
 * renderers here) since each message is about something different. */
export function renderClientMessageEmail({
  locale,
  subject,
  message,
  suiviUrl,
}: {
  locale: string;
  subject: string;
  message: string;
  suiviUrl: string;
}): { subject: string; html: string; text: string } {
  const safeLocale: Locale = isLocale(locale) ? locale : "fr";
  const copy = getDictionary(safeLocale).email.clientMessage;

  const bodyHtml = `
    <h1 style="margin:0 0 16px; font-family: Georgia, 'Times New Roman', serif; font-size:20px; color:#16140f;">${escapeHtml(copy.heading)}</h1>
    <p style="margin:16px 0; white-space:pre-wrap;">${escapeHtml(message)}</p>
    <p style="margin:24px 0 0;">${copy.signature}</p>
    <p style="margin:24px 0 0; padding-top:16px; border-top:1px solid #e0dacb; font-size:13px;"><a href="${suiviUrl}" style="color:#b8862e;">${escapeHtml(copy.suiviLinkLabel)}</a></p>
  `;

  const text = [
    copy.heading,
    "",
    message,
    "",
    copy.signature.replace(/<br\s*\/?>/gi, "\n"),
    "",
    `${copy.suiviLinkLabel}: ${suiviUrl}`,
  ].join("\n");

  return {
    subject,
    html: renderEmailLayout({ previewText: copy.preview, bodyHtml, lang: safeLocale }),
    text,
  };
}

import { SITE_URL } from "@/i18n/seo";
import { emailButton, emailSection, escapeHtml, renderEmailLayout } from "./base";

export function renderThomasNewLeadEmail({
  name,
  email,
  packLabel,
  message,
  locale,
}: {
  name: string;
  email: string;
  packLabel: string;
  message: string;
  locale: string;
}): { subject: string; html: string; text: string } {
  const subject = `Nouveau contact — ${name}`;

  const bodyHtml = `
    <p style="margin:0 0 8px;">Nouveau message reçu via le formulaire de contact.</p>
    ${emailSection("Détails", [
      { label: "Nom", value: name },
      { label: "Email", value: email },
      { label: "Formule", value: packLabel },
      { label: "Langue", value: locale.toUpperCase() },
    ])}
    <p style="margin:24px 0 8px; font-weight:600;">Message</p>
    <p style="margin:0; white-space:pre-wrap;">${escapeHtml(message)}</p>
    ${emailButton(`${SITE_URL}/admin`, "Voir dans l'admin")}
  `;

  const text = `Nouveau contact -- ${name}\nEmail: ${email}\nFormule: ${packLabel}\nLangue: ${locale}\n\n${message}`;

  return { subject, html: renderEmailLayout({ previewText: subject, bodyHtml }), text };
}

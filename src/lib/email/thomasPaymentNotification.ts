import { SITE_URL } from "@/i18n/seo";
import { emailButton, emailSection, renderEmailLayout } from "./base";

export function renderThomasPaymentNotificationEmail({
  leadName,
  description,
  amountLabel,
}: {
  leadName: string;
  description: string;
  amountLabel: string;
}): { subject: string; html: string; text: string } {
  const subject = `Paiement reçu — ${leadName}`;

  const bodyHtml = `
    <p style="margin:0 0 8px;">Un paiement vient d'être confirmé.</p>
    ${emailSection("Détails", [
      { label: "Client", value: leadName },
      { label: "Description", value: description },
      { label: "Montant", value: amountLabel },
    ])}
    ${emailButton(`${SITE_URL}/admin`, "Voir dans l'admin")}
  `;

  const text = `Paiement reçu -- ${leadName}\nDescription: ${description}\nMontant: ${amountLabel}`;

  return { subject, html: renderEmailLayout({ previewText: subject, bodyHtml }), text };
}

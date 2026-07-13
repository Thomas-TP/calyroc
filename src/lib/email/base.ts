const BG = "#ede9e1";
const CARD_BG = "#ffffff";
const TEXT = "#16140f";
const MUTED = "#6b6459";
const BRONZE = "#b8862e";
const LINE = "#e0dacb";

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function renderEmailLayout({
  previewText,
  bodyHtml,
  lang = "fr",
}: {
  previewText: string;
  bodyHtml: string;
  lang?: string;
}): string {
  return `<!DOCTYPE html>
<html lang="${lang}">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Calyroc</title>
  </head>
  <body style="margin:0; padding:0; background-color:${BG}; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;">
    <div style="display:none; max-height:0; overflow:hidden; opacity:0;">${escapeHtml(previewText)}</div>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:${BG}; padding: 32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px; background-color:${CARD_BG}; border-radius:16px; overflow:hidden;">
            <tr>
              <td style="padding: 28px 40px 24px; border-bottom: 1px solid ${LINE};">
                <img src="https://calyroc.com/logo.png" alt="Calyroc" height="28" style="display:block; height:28px; width:auto; border:0;" />
              </td>
            </tr>
            <tr>
              <td style="padding: 32px 40px; color:${TEXT}; font-size:15px; line-height:1.6;">
                ${bodyHtml}
              </td>
            </tr>
            <tr>
              <td style="padding: 24px 40px 32px; border-top: 1px solid ${LINE};">
                <p style="margin:0; font-size:12px; color:${MUTED};">Calyroc — Genève, Suisse<br /><a href="https://calyroc.com" style="color:${BRONZE}; text-decoration:none;">calyroc.com</a></p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

export function emailButton(url: string, label: string): string {
  return `<table role="presentation" cellpadding="0" cellspacing="0" style="margin: 24px 0;"><tr><td style="border-radius:10px; background-color:${BRONZE};"><a href="${url}" style="display:inline-block; padding:14px 28px; font-size:14px; font-weight:600; color:#ffffff; text-decoration:none; border-radius:10px;">${escapeHtml(label)}</a></td></tr></table>`;
}

export function emailSection(title: string, rows: Array<{ label: string; value: string }>): string {
  const titleHtml = title
    ? `<p style="margin:0 0 8px; font-size:12px; font-weight:600; text-transform:uppercase; letter-spacing:0.04em; color:${MUTED};">${escapeHtml(title)}</p>`
    : "";
  const rowsHtml = rows
    .map(
      (row) =>
        `<tr><td style="padding:6px 0; font-size:13px; color:${MUTED};">${escapeHtml(row.label)}</td><td style="padding:6px 0; font-size:13px; color:${TEXT}; text-align:right;">${escapeHtml(row.value)}</td></tr>`,
    )
    .join("");
  return `<div style="margin: 24px 0; padding: 16px 20px; background-color:${BG}; border-radius:12px;">${titleHtml}<table role="presentation" width="100%" cellpadding="0" cellspacing="0">${rowsHtml}</table></div>`;
}

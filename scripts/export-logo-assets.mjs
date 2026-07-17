import sharp from "sharp";

const FULL = "scripts/logo-out/logo-full.png";
const ICON = "scripts/logo-out/icon-mark.png";
const DARK_BG = "#0b0b0c";

// Full combination mark for header/footer/admin -- WebP compresses this
// gradient/textured artwork far better than PNG at the same quality.
// Largest on-page display is 130px wide (header); 320px covers 2x retina
// with headroom while keeping the file small (was 800px/138KB PNG, wildly
// oversized for a logo that never renders larger than 130px).
await sharp(FULL).resize({ width: 320 }).webp({ quality: 92 }).toFile("public/logo.webp");

// Same mark, PNG, for transactional emails specifically -- WebP support in
// email clients is unreliable (Gmail re-encodes to JPEG and drops alpha
// transparency, Outlook desktop's Word rendering engine doesn't render WebP
// at all), so email templates reference this file instead of logo.webp.
await sharp(FULL)
  .resize({ width: 320 })
  .png({ compressionLevel: 9 })
  .toFile("public/logo-email.png");

// Standalone icon mark, large -- transparent, 512 square canvas. Used only
// for the JSON-LD Organization `logo` field (crawler-facing, not rendered
// in-page), where PNG stays the safe universal choice.
await sharp(ICON)
  .resize({ width: 480, height: 480, fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .extend({ top: 16, bottom: 16, left: 16, right: 16, background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png({ compressionLevel: 9 })
  .toFile("public/logo-icon.png");

// Same icon, small and WebP -- for the 404 page, which only ever displays it
// at 56px. 140px covers 2x retina with headroom; WebP over PNG for the same
// reason as logo.webp.
await sharp(ICON)
  .resize({ width: 140, height: 140, fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .extend({ top: 4, bottom: 4, left: 4, right: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .webp({ quality: 92 })
  .toFile("public/logo-icon-sm.webp");

// Browser tab favicon (Next.js convention file) -- transparent, 512 square.
await sharp(ICON)
  .resize({ width: 460, height: 460, fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .extend({ top: 26, bottom: 26, left: 26, right: 26, background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png({ compressionLevel: 9 })
  .toFile("src/app/icon.png");

// Apple touch icon -- iOS renders transparency as black, so use a solid dark
// background matching the site's primary (dark) theme instead.
await sharp(ICON)
  .resize({ width: 120, height: 120, fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .extend({ top: 30, bottom: 30, left: 30, right: 30, background: DARK_BG })
  .flatten({ background: DARK_BG })
  .png({ compressionLevel: 9 })
  .toFile("src/app/apple-icon.png");

console.log(
  "exported: public/logo.webp, public/logo-email.png, public/logo-icon.png, public/logo-icon-sm.webp, src/app/icon.png, src/app/apple-icon.png",
);

import sharp from "sharp";

const FULL = "scripts/logo-out/logo-full.png";
const ICON = "scripts/logo-out/icon-mark.png";
const DARK_BG = "#0b0b0c";

// Full combination mark for header/footer/emails -- transparent, ~800px wide.
await sharp(FULL).resize({ width: 800 }).png({ compressionLevel: 9 }).toFile("public/logo.png");

// Standalone icon mark for UI use (admin header, etc.) -- transparent, 512 square canvas.
await sharp(ICON)
  .resize({ width: 480, height: 480, fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .extend({ top: 16, bottom: 16, left: 16, right: 16, background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png({ compressionLevel: 9 })
  .toFile("public/logo-icon.png");

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

console.log("exported: public/logo.png, public/logo-icon.png, src/app/icon.png, src/app/apple-icon.png");

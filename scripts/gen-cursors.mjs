import { mkdir } from "node:fs/promises";
import sharp from "sharp";

await mkdir("./public/cursors", { recursive: true });

const SUPERSAMPLE = 8;

/** Rasterizes an SVG at SUPERSAMPLE x the target size, then downsamples
 * with a high-quality kernel -- much smoother edges than rendering
 * directly at the final (small) pixel size. */
async function renderCursor(svg, targetSize, outPath) {
  const [w, h] = targetSize;
  await sharp(Buffer.from(svg), { density: 96 * SUPERSAMPLE })
    .resize(w * SUPERSAMPLE, h * SUPERSAMPLE)
    .resize(w, h, { kernel: "lanczos3" })
    .png()
    .toFile(outPath);
}

// Thin-outline cursor set (stroke only, no fill) in two color variants:
// "dark" for use on the site's dark theme, "light" a deepened shade for
// legible contrast if a light surface is ever introduced. Style: extra
// thin stroke, hollow shapes -- not a solid-color glyph.
const palette = {
  dark: "#C9A567",
  light: "#8A6A2E",
};

function arrowSvg(color) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path d="M4 2.2 L4 18.3 L8.1 14.6 L10.8 20.8 L13.3 19.7 L10.7 13.6 L16.2 13.6 Z"
      fill="none" stroke="${color}" stroke-width="1.4" stroke-linejoin="round" stroke-linecap="round"/>
  </svg>`;
}

function ringSvg(color) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
    <circle cx="10" cy="10" r="6.8" fill="none" stroke="${color}" stroke-width="1.4"/>
    <circle cx="10" cy="10" r="1.1" fill="${color}"/>
  </svg>`;
}

function textSvg(color) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="10" height="20" viewBox="0 0 10 20">
    <path d="M2.5 2 H7.5 M2.5 18 H7.5 M5 2 V18" fill="none" stroke="${color}" stroke-width="1.3" stroke-linecap="round"/>
  </svg>`;
}

function disabledSvg(color) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
    <circle cx="9" cy="9" r="6.2" fill="none" stroke="${color}" stroke-width="1.3" opacity="0.6"/>
    <line x1="5" y1="13" x2="13" y2="5" stroke="${color}" stroke-width="1.3" stroke-linecap="round" opacity="0.6"/>
  </svg>`;
}

for (const [scheme, color] of Object.entries(palette)) {
  await renderCursor(arrowSvg(color), [24, 24], `./public/cursors/default-${scheme}.png`);
  await renderCursor(ringSvg(color), [20, 20], `./public/cursors/pointer-${scheme}.png`);
  await renderCursor(textSvg(color), [10, 20], `./public/cursors/text-${scheme}.png`);
  await renderCursor(disabledSvg(color), [18, 18], `./public/cursors/disabled-${scheme}.png`);
}

console.log("Wrote 8 cursor images (4 states x dark/light) at 8x supersampling");

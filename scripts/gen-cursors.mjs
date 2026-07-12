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

// Default: a clean arrow silhouette close to the Windows pointer's own
// proportions, modernized (slightly slimmer, rounded joins). No dark
// outline -- that's what made the last attempt read as chunky/pixelated
// at cursor size; a single solid bronze fill supersamples much more
// cleanly. Hotspot at the tip (top-left).
const arrow = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
  <path d="M4 2 L4 18.5 L8.2 14.7 L11 21 L13.6 19.8 L10.9 13.6 L16.5 13.6 Z"
    fill="#C9A567" stroke="#0B0B0C" stroke-width="0.6" stroke-linejoin="round"/>
</svg>`;

// Clickable elements: filled dot, kept simple and precise -- a hand/
// pointer silhouette is hard to render cleanly at this size without
// looking muddy, a clean dot reads clearly at a glance instead.
const dot = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
  <circle cx="9" cy="9" r="6.2" fill="#C9A567"/>
</svg>`;

// Text / editable: thin line with short serif caps top and bottom --
// reads clearly as a text-insertion caret without the earlier bulky
// I-beam block ends.
const textCursor = `<svg xmlns="http://www.w3.org/2000/svg" width="10" height="20" viewBox="0 0 10 20">
  <path d="M2.5 2 H7.5 M2.5 18 H7.5 M5 2 V18" stroke="#C9A567" stroke-width="1.4" stroke-linecap="round"/>
</svg>`;

// Disabled: same bronze family, muted via opacity rather than switching
// to grey, so it still reads as "this site's cursor", just dimmed.
const disabled = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
  <circle cx="9" cy="9" r="6.2" fill="none" stroke="#C9A567" stroke-width="1.4" opacity="0.55"/>
  <line x1="5" y1="13" x2="13" y2="5" stroke="#C9A567" stroke-width="1.4" stroke-linecap="round" opacity="0.55"/>
</svg>`;

await renderCursor(arrow, [24, 24], "./public/cursors/default.png");
await renderCursor(dot, [18, 18], "./public/cursors/pointer.png");
await renderCursor(textCursor, [10, 20], "./public/cursors/text.png");
await renderCursor(disabled, [18, 18], "./public/cursors/disabled.png");

console.log("Wrote default.png, pointer.png, text.png, disabled.png (8x supersampled)");

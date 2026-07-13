import sharp from "sharp";
import { mkdirSync } from "node:fs";

const SRC = "public/logo.webp";
mkdirSync("scripts/logo-out", { recursive: true });

async function makeTransparent(input) {
  const { data, info } = await sharp(input)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  for (let i = 0; i < data.length; i += channels) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    // Near-white background -> transparent. Distance-from-white threshold
    // keeps anti-aliased gold edges soft instead of leaving a white halo.
    const whiteness = Math.min(r, g, b);
    if (whiteness > 235) {
      data[i + 3] = 0;
    } else if (whiteness > 200) {
      const alpha = Math.round(((235 - whiteness) / 35) * 255);
      data[i + 3] = alpha;
    }
  }
  return sharp(data, { raw: { width, height, channels } });
}

const meta = await sharp(SRC).metadata();
console.log("source size", meta.width, meta.height);

const transparent = await makeTransparent(SRC);
const transparentBuffer = await transparent.png().toBuffer();
const tMeta = await sharp(transparentBuffer).metadata();
console.log("transparent buffer size", tMeta.width, tMeta.height);

// Full combination mark, transparent background, trimmed to content.
await sharp(transparentBuffer)
  .trim({ threshold: 10 })
  .png()
  .toFile("scripts/logo-out/logo-full.png");

// Icon-only crop: left region of the source (rock, excludes wordmark),
// then trim to the exact shape bounds.
const iconRegionWidth = Math.min(Math.round(tMeta.width * 0.37), tMeta.width);
console.log("icon region width", iconRegionWidth);
const extractedBuffer = await sharp(transparentBuffer)
  .extract({ left: 0, top: 0, width: iconRegionWidth, height: tMeta.height })
  .png()
  .toBuffer();
console.log("extracted", (await sharp(extractedBuffer).metadata()).width);
await sharp(extractedBuffer).trim({ threshold: 10 }).png().toFile("scripts/logo-out/icon-mark.png");

console.log("done");

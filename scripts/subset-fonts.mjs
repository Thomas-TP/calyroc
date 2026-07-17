import { readFile, writeFile } from "node:fs/promises";
import subsetFont from "subset-font";

// The two self-hosted variable fonts ship full multi-script Unicode coverage
// (Latin, Cyrillic, Greek, Vietnamese, etc.) even though the site only ever
// renders French/English/Spanish/Italian/German/Portuguese/Dutch/Polish
// (Latin script) plus Russian (Cyrillic). Subsetting to the ranges those
// languages actually need cuts most of that dead weight. The variation
// (weight) axis is left untouched so every font-weight the CSS uses keeps
// working exactly as before -- only unused glyphs are dropped, which is a
// purely mechanical, lossless operation for any text made of the characters
// below (anything outside it, e.g. an emoji typed into the chat widget,
// silently falls back to the browser's default sans-serif for that one
// character instead of breaking). Polish diacritics (ż ć ł ń ó ś ź ą ę) are
// already covered by Latin Extended-A, no separate range needed for them.
function charRange(startCodePoint, endCodePointInclusive) {
  let chars = "";
  for (let codePoint = startCodePoint; codePoint <= endCodePointInclusive; codePoint++) {
    chars += String.fromCodePoint(codePoint);
  }
  return chars;
}

const TEXT =
  charRange(0x0020, 0x007e) + // Basic Latin: letters, digits, ASCII punctuation
  charRange(0x00a0, 0x00ff) + // Latin-1 Supplement: à é ü ñ ç ß « » ¿ ¡ etc.
  charRange(0x0100, 0x017f) + // Latin Extended-A: extra diacritics (incl. Polish)
  charRange(0x0400, 0x04ff) + // Cyrillic: Russian alphabet + common extensions
  "–—‘’‚“”„†‡•…№"; // – — ‘ ’ ‚ “ ” „ † ‡ • … № (No. sign, common in Russian)

// Pristine, never-subsetted originals -- re-running this script always
// starts from the full font, so it stays safely repeatable if the character
// set above needs to grow later.
const FONTS = [
  { source: "scripts/font-source/InterVariable.woff2", output: "public/fonts/InterVariable.woff2" },
  {
    source: "scripts/font-source/SpaceGroteskVariable.woff2",
    output: "public/fonts/SpaceGroteskVariable.woff2",
  },
];

for (const font of FONTS) {
  const original = await readFile(font.source);
  const subset = await subsetFont(original, TEXT, { targetFormat: "woff2" });
  await writeFile(font.output, subset);
  console.log(
    `${font.output}: ${(original.length / 1024).toFixed(1)} KiB -> ${(subset.length / 1024).toFixed(1)} KiB`,
  );
}

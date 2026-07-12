import { mkdir, writeFile } from "node:fs/promises";
import sharp from "sharp";

await mkdir("./public/cursors", { recursive: true });

const ring = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
  <circle cx="12" cy="12" r="8.5" fill="none" stroke="#C9A567" stroke-width="1.6"/>
  <circle cx="12" cy="12" r="1.4" fill="#C9A567"/>
</svg>`;

const dot = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
  <circle cx="12" cy="12" r="7" fill="#C9A567"/>
</svg>`;

await sharp(Buffer.from(ring)).png().toFile("./public/cursors/default.png");
await sharp(Buffer.from(dot)).png().toFile("./public/cursors/pointer.png");

console.log("Wrote public/cursors/default.png and pointer.png");

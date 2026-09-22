import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const svg = await readFile(new URL("../public/favicon.svg", import.meta.url));
const out = (name) => fileURLToPath(new URL(`../public/${name}`, import.meta.url));

// Standard favicons
for (const [name, size] of [["favicon-16.png", 16], ["favicon-32.png", 32], ["apple-touch-icon.png", 180]]) {
  await sharp(svg).resize(size, size).png().toFile(out(name));
}

// PWA icons (192 / 512)
for (const [name, size] of [["icon-192.png", 192], ["icon-512.png", 512]]) {
  await sharp(svg).resize(size, size).png().toFile(out(name));
}

// Maskable variants with a safe-zone padding on the brand background
const bg = { r: 248, g: 252, b: 255, alpha: 1 };
for (const [name, size] of [["icon-192-maskable.png", 192], ["icon-512-maskable.png", 512]]) {
  const inner = Math.round(size * 0.8);
  const pad = Math.round((size - inner) / 2);
  await sharp(svg)
    .resize(inner, inner)
    .extend({ top: pad, bottom: pad, left: pad, right: pad, background: bg })
    .png()
    .toFile(out(name));
}

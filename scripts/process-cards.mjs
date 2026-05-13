import sharp from "sharp";
import { readdir, unlink, mkdir } from "fs/promises";
import { join, extname, basename } from "path";

const ROOT = "/home/user/Web";
const OUT = "/home/user/Web/public/cards";

await mkdir(OUT, { recursive: true });

const all = await readdir(ROOT);
const images = all.filter((f) =>
  /\.(jpeg|jpg|heic)$/i.test(f) &&
  /^[0-9A-F]{8}-/i.test(f)
);

images.sort();
console.log(`Found ${images.length} UUID images:`);
images.forEach((f) => console.log(" ", f));

const results = [];

for (let i = 0; i < images.length; i++) {
  const src = join(ROOT, images[i]);
  const destName = `card-${i + 1}.jpg`;
  const dest = join(OUT, destName);
  const isHeic = /\.heic$/i.test(images[i]);

  if (isHeic) {
    // No HEIF codec available — copy raw so the file is preserved
    const { copyFile } = await import("fs/promises");
    const rawDest = join(OUT, `card-${i + 1}.heic`);
    await copyFile(src, rawDest);
    const { size } = await import("fs").then((m) => m.promises.stat(rawDest));
    results.push({ card: `card-${i + 1}.heic`, original: images[i], width: "?", height: "?", fileSize: size, note: "HEIC — no decoder, copied raw" });
    console.log(`card-${i + 1}.heic ← ${images[i]} (HEIC, copied raw)`);
    continue;
  }

  const meta = await sharp(src).jpeg({ quality: 90 }).toFile(dest);
  const { size } = await import("fs").then((m) =>
    m.promises.stat(dest)
  );

  results.push({ card: destName, original: images[i], ...meta, fileSize: size });
  console.log(`card-${i + 1}.jpg ← ${images[i]}`);
}

console.log("\nDeleting originals...");
for (const f of images) {
  await unlink(join(ROOT, f));
  console.log("  deleted", f);
}

console.log("\nSummary:");
for (const r of results) {
  console.log(`  ${r.card}: ${r.width}×${r.height}px, ${(r.fileSize / 1024).toFixed(1)} KB  [${r.original}]`);
}

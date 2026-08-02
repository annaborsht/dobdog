// compress-images.mjs
// Batch-compresses everything in public/images into public/images-optimized
// Usage:
//   npm install sharp --save-dev
//   node compress-images.mjs

import sharp from "sharp";
import fs from "fs/promises";
import path from "path";

const SRC_DIR = "public/images";
const OUT_DIR = "public/images-optimized";
const MAX_WIDTH = 2000; // plenty for full-bleed hero/gallery use; drop to 1600 if you want smaller
const JPEG_QUALITY = 82; // 80-85 is a good balance of quality vs size

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  let files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files = files.concat(await walk(full));
    } else if (/\.(jpe?g|png)$/i.test(entry.name)) {
      files.push(full);
    }
  }
  return files;
}

async function main() {
  const files = await walk(SRC_DIR);
  console.log(`Found ${files.length} images to process...\n`);

  let totalBefore = 0;
  let totalAfter = 0;

  for (const file of files) {
    const rel = path.relative(SRC_DIR, file);
    const outPath = path.join(OUT_DIR, rel);
    await fs.mkdir(path.dirname(outPath), { recursive: true });

    const beforeStat = await fs.stat(file);
    totalBefore += beforeStat.size;

    const img = sharp(file).rotate(); // auto-orient based on EXIF
    const metadata = await img.metadata();

    let pipeline = img;
    if (metadata.width && metadata.width > MAX_WIDTH) {
      pipeline = pipeline.resize({ width: MAX_WIDTH });
    }

    if (/\.png$/i.test(file)) {
      pipeline = pipeline.png({ quality: JPEG_QUALITY, compressionLevel: 9 });
    } else {
      pipeline = pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true });
    }

    await pipeline.toFile(outPath);

    const afterStat = await fs.stat(outPath);
    totalAfter += afterStat.size;

    const savedPct = (100 * (1 - afterStat.size / beforeStat.size)).toFixed(0);
    console.log(
      `${rel}: ${(beforeStat.size / 1024 / 1024).toFixed(2)}MB -> ${(afterStat.size / 1024 / 1024).toFixed(2)}MB (-${savedPct}%)`,
    );
  }

  console.log(
    `\nTotal: ${(totalBefore / 1024 / 1024).toFixed(1)}MB -> ${(totalAfter / 1024 / 1024).toFixed(1)}MB`,
  );
  console.log(`\nReview public/images-optimized, then if it looks good:`);
  console.log(`  rm -rf public/images && mv public/images-optimized public/images`);
}

main().catch(console.error);

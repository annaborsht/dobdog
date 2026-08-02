// upload-videos.mjs
// Uploads every video in a local folder to Vercel Blob and prints the resulting URLs.
//
// Setup:
//   npm install @vercel/blob dotenv
//   vercel env pull .env.local   (only needed once, gets BLOB_READ_WRITE_TOKEN)
//
// Usage:
//   node upload-videos.mjs ./videos-to-upload
//
// After running, copy the printed URLs into your components/config,
// then you can delete the local video files from public/videos and git.

import { put } from "@vercel/blob";
import fs from "fs/promises";
import path from "path";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const SRC_DIR = process.argv[2] || "public/videos";
const folderName = path.basename(SRC_DIR); // e.g. "mia", "sirius"

async function main() {
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    console.error(
      "Missing BLOB_READ_WRITE_TOKEN. Run `vercel env pull .env.local` first.",
    );
    process.exit(1);
  }

  const files = (await fs.readdir(SRC_DIR)).filter((f) =>
    /\.(mp4|mov|webm)$/i.test(f),
  );

  if (files.length === 0) {
    console.log(`No video files found in ${SRC_DIR}`);
    return;
  }

  console.log(`Uploading ${files.length} video(s) from ${SRC_DIR}...\n`);

  const results = {};

  for (const file of files) {
    const filePath = path.join(SRC_DIR, file);
    const buffer = await fs.readFile(filePath);

    const blob = await put(`videos/${folderName}/${file}`, buffer, {
      access: "public",
      addRandomSuffix: false, // keep predictable filenames; set true if you want to avoid overwrites
      token: process.env.BLOB_READ_WRITE_TOKEN,
    });

    results[file] = blob.url;
    console.log(`${file} -> ${blob.url}`);
  }

  console.log(
    "\nDone. Save these URLs somewhere in your codebase, e.g. a videos.ts config file:\n",
  );
  console.log(JSON.stringify(results, null, 2));
}

main().catch(console.error);

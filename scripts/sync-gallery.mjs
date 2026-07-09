import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = process.cwd();
const DIST_GALLERY_DIR = path.resolve(ROOT, "dist", "gallery");
const PUBLIC_GALLERY_DIR = path.resolve(ROOT, "public", "gallery");

const TARGET_MAX_BYTES = 24 * 1024 * 1024;
const MAX_DIMENSION_PX = 3200;

async function ensureDir(dirPath) {
  await fs.mkdir(dirPath, { recursive: true });
}

async function exists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function copyIfMissing(fileName) {
  const src = path.resolve(DIST_GALLERY_DIR, fileName);
  const dst = path.resolve(PUBLIC_GALLERY_DIR, fileName);

  if (await exists(dst)) return;
  if (!(await exists(src))) {
    throw new Error(`Missing source file: ${path.relative(ROOT, src)}`);
  }

  await fs.copyFile(src, dst);
}

async function optimizeJpegToTarget({ srcPath, dstPath }) {
  if (!(await exists(srcPath))) {
    throw new Error(`Missing source file: ${path.relative(ROOT, srcPath)}`);
  }

  const input = sharp(srcPath, { failOn: "none" });
  const meta = await input.metadata();

  const base = sharp(srcPath, { failOn: "none" }).resize({
    width: meta.width && meta.height && meta.width >= meta.height ? MAX_DIMENSION_PX : undefined,
    height: meta.width && meta.height && meta.height > meta.width ? MAX_DIMENSION_PX : undefined,
    fit: "inside",
    withoutEnlargement: true,
  });

  const qualities = [82, 78, 74, 70, 66, 62, 58, 54, 50];
  let bestBuffer = null;

  for (const quality of qualities) {
    const buffer = await base
      .clone()
      .jpeg({
        quality,
        mozjpeg: true,
        chromaSubsampling: "4:2:0",
      })
      .toBuffer();

    bestBuffer = buffer;
    if (buffer.byteLength <= TARGET_MAX_BYTES) break;
  }

  await fs.writeFile(dstPath, bestBuffer);
}

async function main() {
  await ensureDir(PUBLIC_GALLERY_DIR);

  await copyIfMissing("praia-bela-pitimbu-21.jpg");

  const src24 = path.resolve(DIST_GALLERY_DIR, "praia-bela-pitimbu-24.jpg");
  const dst24 = path.resolve(PUBLIC_GALLERY_DIR, "praia-bela-pitimbu-24.jpg");
  await optimizeJpegToTarget({ srcPath: src24, dstPath: dst24 });
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});

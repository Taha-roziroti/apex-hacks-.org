/**
 * Export user-provided Apex Legends gameplay PNGs into public/media/apex-* at 4K.
 * Source folder (default): assets/gameplay/*.png — numbered images_1.png … images_11.png.
 * Override: APEX_MEDIA_ASSETS=/path/to/pngs
 */
import { mkdir, readdir } from 'node:fs/promises'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'
import {
  JPEG_EXPORT,
  UHD_HEIGHT,
  UHD_WIDTH,
  WEBP_EXPORT,
  resize4kCover,
  resize4kWidth,
} from './media-quality.mjs'

const root = join(fileURLToPath(new URL('.', import.meta.url)), '..')
const assetsDir = process.env.APEX_MEDIA_ASSETS ?? join(root, 'assets', 'gameplay')
const mediaDir = join(root, 'public', 'media')

await mkdir(mediaDir, { recursive: true })

const files = (await readdir(assetsDir)).filter((f) => /\.(png|jpe?g)$/i.test(f))
const nums = files
  .map((f) => {
    const m = f.match(/images?_(\d+)/i) ?? f.match(/^(\d+)\./)
    return { n: m ? parseInt(m[1], 10) : 99, f }
  })
  .sort((a, b) => a.n - b.n || a.f.localeCompare(b.f))

if (!nums.length) {
  throw new Error(`No PNG/JPEG files in ${assetsDir} — add images_1.png … images_11.png`)
}

for (let i = 0; i < Math.min(9, nums.length); i++) {
  const src = join(assetsDir, nums[i].f)
  let pipeline = sharp(src).ensureAlpha()
  pipeline = resize4kWidth(pipeline)
  await pipeline.webp(WEBP_EXPORT).toFile(join(mediaDir, `apex-screenshot-${i + 1}.webp`))
}

const pick = (index) => join(assetsDir, nums[Math.min(index, nums.length - 1)].f)

const heroSrc = pick(4)
await resize4kCover(sharp(heroSrc)).webp(WEBP_EXPORT).toFile(join(mediaDir, 'apex-hero-full.webp'))
await resize4kCover(sharp(heroSrc)).webp(WEBP_EXPORT).toFile(join(mediaDir, 'apex-cover.webp'))
await resize4kCover(sharp(heroSrc))
  .jpeg(JPEG_EXPORT)
  .toFile(join(mediaDir, 'apex-video-thumb.jpg'))

await resize4kWidth(sharp(pick(7))).webp(WEBP_EXPORT).toFile(join(mediaDir, 'apex-menu.webp'))

for (const name of ['apex-home-art.jpg', 'apex-tactical-art.jpg', 'apex-control-art.jpg']) {
  await resize4kCover(sharp(heroSrc)).jpeg(JPEG_EXPORT).toFile(join(mediaDir, name))
}

console.log(
  `Prepared ${Math.min(9, nums.length)} screenshots + hero/cover/menu at ${UHD_WIDTH}x${UHD_HEIGHT} in public/media`,
)

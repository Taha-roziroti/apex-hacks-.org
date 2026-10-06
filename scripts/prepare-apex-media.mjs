/**
 * Compress user-provided Apex Legends gameplay PNGs into public/media/apex-*.
 * Source folder (default): assets/gameplay/*.png — numbered images_1.png … images_11.png.
 * Override: APEX_MEDIA_ASSETS=/path/to/pngs
 */
import { mkdir, readdir } from 'node:fs/promises'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

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
  await sharp(src).webp({ quality: 82 }).toFile(join(mediaDir, `apex-screenshot-${i + 1}.webp`))
}

const pick = (index) => join(assetsDir, nums[Math.min(index, nums.length - 1)].f)

// Hero / cover: wide Olympus-style frame (default index 4 → images_5)
const heroSrc = pick(4)
await sharp(heroSrc)
  .webp({ quality: 85 })
  .resize(1920, 1080, { fit: 'cover', position: 'centre' })
  .toFile(join(mediaDir, 'apex-hero-full.webp'))
await sharp(heroSrc)
  .webp({ quality: 85 })
  .resize(1440, 810, { fit: 'cover', position: 'centre' })
  .toFile(join(mediaDir, 'apex-cover.webp'))
await sharp(heroSrc)
  .jpeg({ quality: 88 })
  .resize(1280, 720, { fit: 'cover', position: 'centre' })
  .toFile(join(mediaDir, 'apex-video-thumb.jpg'))

// Menu art: dense ESP labels (default index 7 → images_8)
await sharp(pick(7)).webp({ quality: 82 }).toFile(join(mediaDir, 'apex-menu.webp'))

console.log(`Prepared ${Math.min(9, nums.length)} screenshots + hero/cover/menu in public/media`)

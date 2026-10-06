/**
 * Upscale the self-hosted animated hero WebP to 4K (3840×2160 per frame).
 */
import { access } from 'node:fs/promises'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'
import { UHD_HEIGHT, UHD_WIDTH, WEBP_EXPORT } from './media-quality.mjs'

const root = join(fileURLToPath(new URL('.', import.meta.url)), '..')
const input = join(root, 'public', 'videos', 'catalyst-apex-legends-10mb.webp')
const output = join(root, 'public', 'videos', 'catalyst-apex-legends-10mb.webp')
const temp = `${output}.4k.tmp`

try {
  await access(input)
} catch {
  console.warn('Hero animated WebP missing — skip upscale')
  process.exit(0)
}

process.env.SHARP_PIXEL_LIMIT = '0'

const meta = await sharp(input, { animated: true, limitInputPixels: false }).metadata()
if (meta.width >= UHD_WIDTH) {
  console.log(`Hero WebP already at least ${UHD_WIDTH}px wide — no upscale needed`)
  process.exit(0)
}

console.log(`Upscaling hero WebP (${meta.pages ?? 1} frames) from ${meta.width}px to ${UHD_WIDTH}px…`)

await sharp(input, { animated: true, limitInputPixels: false })
  .resize(UHD_WIDTH, UHD_HEIGHT, {
    fit: 'cover',
    position: 'centre',
    kernel: 'lanczos3',
    withoutEnlargement: false,
  })
  .webp({ ...WEBP_EXPORT, effort: 4 })
  .toFile(temp)

const { rename } = await import('node:fs/promises')
await rename(temp, output)
console.log(`Wrote ${output}`)

/**
 * Build homepage hero background from assets/brand/apex-hero-banner-source.jpg
 */
import { access } from 'node:fs/promises'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'
import { resize4kCover, WEBP_EXPORT } from './media-quality.mjs'

const root = join(fileURLToPath(new URL('.', import.meta.url)), '..')
const src = join(root, 'assets', 'brand', 'apex-hero-banner-source.jpg')
const out = join(root, 'public', 'media', 'apex-hero-banner.webp')

try {
  await access(src)
} catch {
  console.warn('Skip hero banner — missing assets/brand/apex-hero-banner-source.jpg')
  process.exit(0)
}

await resize4kCover(sharp(src)).webp(WEBP_EXPORT).toFile(out)
console.log('Wrote public/media/apex-hero-banner.webp')

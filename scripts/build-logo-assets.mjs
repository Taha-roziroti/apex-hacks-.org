/**
 * Build favicon + header logo from public/brand/apex-logo-source.png (or CLI path).
 * Preserves full-color artwork; transparent areas stay transparent.
 */
import { readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const publicDir = fileURLToPath(new URL('../public/', import.meta.url))
const defaultSrc = join(publicDir, 'brand/apex-logo-source.png')
const src = process.argv[2] || defaultSrc

async function exportLogo(input, output, size) {
  await sharp(input)
    .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png({ compressionLevel: 9 })
    .toFile(output)
}

await exportLogo(src, join(publicDir, 'logo.png'), 1024)
await exportLogo(src, join(publicDir, 'favicon-32.png'), 32)
await exportLogo(src, join(publicDir, 'apple-touch-icon.png'), 180)

const png = readFileSync(join(publicDir, 'logo.png'))
const b64 = png.toString('base64')
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" role="img" aria-label="Apex Legends">
  <image width="1024" height="1024" href="data:image/png;base64,${b64}"/>
</svg>`
writeFileSync(join(publicDir, 'favicon.svg'), svg)

console.log(`Logo assets written from ${src}`)

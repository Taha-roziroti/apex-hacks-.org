/** Shared export targets for gameplay / hero raster assets. */
export const UHD_WIDTH = 3840
export const UHD_HEIGHT = 2160

export const WEBP_EXPORT = {
  quality: 98,
  effort: 6,
  smartSubsample: false,
  alphaQuality: 100,
}

export const JPEG_EXPORT = {
  quality: 95,
  chromaSubsampling: '4:4:4',
  mozjpeg: true,
}

/**
 * Mild sharpen after Lanczos upscale — reduces mushy edges from low-res sources.
 * Keep subtle to avoid halos on ESP UI lines.
 */
export function enhanceUpscaled(sharpInstance) {
  return sharpInstance.sharpen({
    sigma: 0.9,
    m1: 1.15,
    m2: 0.35,
    x1: 2,
    y2: 10,
    y3: 20,
  })
}

/** Upscale to 4K (16:9 cover) with a high-quality filter + sharpen. */
export function resize4kCover(sharpInstance) {
  return enhanceUpscaled(
    sharpInstance.resize(UHD_WIDTH, UHD_HEIGHT, {
      fit: 'cover',
      position: 'centre',
      kernel: 'lanczos3',
      withoutEnlargement: false,
    }),
  )
}

/** Upscale to 4K width, preserve aspect ratio + sharpen. */
export function resize4kWidth(sharpInstance) {
  return enhanceUpscaled(
    sharpInstance.resize(UHD_WIDTH, null, {
      fit: 'inside',
      withoutEnlargement: false,
      kernel: 'lanczos3',
    }),
  )
}

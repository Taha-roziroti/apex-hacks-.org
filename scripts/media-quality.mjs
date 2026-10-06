/** Shared export targets for gameplay / hero raster assets. */
export const UHD_WIDTH = 3840
export const UHD_HEIGHT = 2160

export const WEBP_EXPORT = {
  quality: 94,
  effort: 6,
  smartSubsample: false,
  alphaQuality: 100,
}

export const JPEG_EXPORT = {
  quality: 92,
  chromaSubsampling: '4:4:4',
  mozjpeg: true,
}

/** Upscale to 4K (16:9 cover) with a high-quality filter. */
export function resize4kCover(sharpInstance) {
  return sharpInstance.resize(UHD_WIDTH, UHD_HEIGHT, {
    fit: 'cover',
    position: 'centre',
    kernel: 'lanczos3',
    withoutEnlargement: false,
  })
}

/** Upscale to 4K width, preserve aspect ratio. */
export function resize4kWidth(sharpInstance) {
  return sharpInstance.resize(UHD_WIDTH, null, {
    fit: 'inside',
    withoutEnlargement: false,
    kernel: 'lanczos3',
  })
}

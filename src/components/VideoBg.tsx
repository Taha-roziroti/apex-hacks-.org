import { HeroAnimatedBg } from './HeroAnimatedBg'

type VideoBgProps = {
  /** Static fallback when reduced motion / save-data */
  image?: string
  imageAlt?: string
}

/** Full-bleed hero animated WebP — muted loop equivalent via animated asset. */
export function VideoBg({ image, imageAlt }: VideoBgProps) {
  return <HeroAnimatedBg image={image} imageAlt={imageAlt ?? ''} />
}

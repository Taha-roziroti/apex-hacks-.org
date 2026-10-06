import { HeroAnimatedBg } from './HeroAnimatedBg'

type VideoBgProps = {
  imageAlt?: string
}

/** Full-bleed hero banner background. */
export function VideoBg({ imageAlt }: VideoBgProps) {
  return <HeroAnimatedBg imageAlt={imageAlt ?? ''} />
}

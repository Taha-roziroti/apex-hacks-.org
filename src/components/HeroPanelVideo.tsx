import { HeroAnimatedBg } from './HeroAnimatedBg'

type HeroPanelVideoProps = {
  variant?: 'home' | 'forums'
}

/** Hero animated preview inside the panel (absolute fill). */
export function HeroPanelVideo({ variant = 'home' }: HeroPanelVideoProps) {
  const imageAlt = variant === 'forums' ? 'Forums – apex' : ''
  return <HeroAnimatedBg imageAlt={imageAlt} />
}

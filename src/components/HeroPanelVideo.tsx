import { HeroAnimatedBg } from './HeroAnimatedBg'

type HeroPanelVideoProps = {
  variant?: 'home' | 'forums'
}

/** Hero animated preview inside the panel (absolute fill). */
export function HeroPanelVideo(_props: HeroPanelVideoProps) {
  return <HeroAnimatedBg />
}

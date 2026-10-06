import { useEffect, useState } from 'react'
import { APEX_HERO, APEX_HOME_VIDEO } from '../data/media'
import { prefersStaticHero } from '../lib/hero-media'

type HeroAnimatedBgProps = {
  /** Static fallback when reduced motion / save-data */
  image?: string
  imageAlt?: string
  showGradients?: boolean
  className?: string
}

/** Full-bleed hero animated WebP — cover fit with tint overlays. */
export function HeroAnimatedBg({
  image = APEX_HERO,
  imageAlt = '',
  showGradients = true,
  className = '',
}: HeroAnimatedBgProps) {
  const [src, setSrc] = useState(APEX_HOME_VIDEO.src)

  useEffect(() => {
    if (prefersStaticHero()) setSrc(image)
  }, [image])

  return (
    <div
      className={`hero-video-wrap pointer-events-none absolute inset-0 z-0 overflow-hidden select-none ${className}`}
      data-hero-video
      aria-hidden
    >
      <img
        src={src}
        alt={imageAlt}
        className="hero-video-bg absolute inset-0 z-[1] h-full w-full object-cover object-center"
        decoding="async"
        fetchPriority="high"
      />
      <div className="hero-video-tint pointer-events-none absolute inset-0 z-[2]" />
      <div className="hero-video-tint-glow pointer-events-none absolute inset-0 z-[2]" />
      {showGradients ? (
        <>
          <div className="absolute inset-x-0 bottom-0 z-[3] h-40 bg-gradient-to-t from-z-bg via-z-bg/80 to-transparent" />
          <div className="absolute inset-x-0 top-0 z-[3] h-24 bg-gradient-to-b from-z-bg/70 to-transparent" />
        </>
      ) : null}
    </div>
  )
}

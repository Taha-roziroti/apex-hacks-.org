import { APEX_HERO_BANNER } from '../data/media'

type HeroAnimatedBgProps = {
  imageAlt?: string
  showGradients?: boolean
  className?: string
}

/** Full-bleed hero banner — cover fit with tint overlays. */
export function HeroAnimatedBg({
  imageAlt = '',
  showGradients = true,
  className = '',
}: HeroAnimatedBgProps) {
  return (
    <div
      className={`hero-video-wrap pointer-events-none absolute inset-0 z-0 overflow-hidden select-none ${className}`}
      data-hero-video
      aria-hidden
    >
      <img
        src={APEX_HERO_BANNER}
        alt={imageAlt}
        className="hero-video-bg absolute inset-0 z-[1] h-full w-full object-cover object-center"
        decoding="async"
        fetchPriority="high"
        width={3840}
        height={2160}
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

import { useEffect, useState } from 'react'
import { APEX_HOME_VIDEO } from '../data/media'
import { prefersStaticHero } from '../lib/hero-media'

type ProductPreviewProps = {
  className?: string
}

/** Looping gameplay preview (animated WebP, cover fit). */
export function ProductPreview({ className = '' }: ProductPreviewProps) {
  const [src, setSrc] = useState(APEX_HOME_VIDEO.src)

  useEffect(() => {
    if (prefersStaticHero()) setSrc(APEX_HOME_VIDEO.poster)
  }, [])

  return (
    <div className={`overflow-hidden rounded-2xl border border-z-soft/15 bg-black/40 ${className}`}>
      <div className="relative aspect-video w-full">
        <img
          src={src}
          className="absolute inset-0 h-full w-full object-cover object-center"
          decoding="async"
          alt=""
          aria-label={APEX_HOME_VIDEO.title}
        />
      </div>
      <p className="sr-only">{APEX_HOME_VIDEO.title}</p>
    </div>
  )
}

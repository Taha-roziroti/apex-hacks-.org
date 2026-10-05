import { useCallback, useEffect, useRef, useState } from 'react'
import { X } from 'lucide-react'
import { PRODUCT_PREVIEW_GALLERY } from '../data/media'

const MARQUEE_LOOP_S = 48
/** Higher = faster stop on hover (1/s). */
const HOVER_DECEL = 5.5
/** Higher = faster return to scroll speed after hover (1/s). */
const LEAVE_ACCEL = 4

type GameplayPreviewGalleryProps = {
  className?: string
}

export function GameplayPreviewGallery({ className = '' }: GameplayPreviewGalleryProps) {
  const trackRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number | null>(null)
  const motionRef = useRef({
    translateX: 0,
    velocity: 0,
    halfWidth: 0,
    hover: false,
    lastTime: 0,
    reducedMotion: false,
  })
  const [lightbox, setLightbox] = useState<(typeof PRODUCT_PREVIEW_GALLERY)[number] | null>(null)

  const items = [...PRODUCT_PREVIEW_GALLERY, ...PRODUCT_PREVIEW_GALLERY]

  const measureTrack = useCallback(() => {
    const el = trackRef.current
    if (!el) return
    const half = el.scrollWidth / 2
    if (half <= 0) return
    const m = motionRef.current
    const prevHalf = m.halfWidth
    m.halfWidth = half
    if (prevHalf === 0) {
      m.translateX = -half
      m.velocity = half / MARQUEE_LOOP_S
    } else if (prevHalf !== half) {
      const progress = (m.translateX + prevHalf) / prevHalf
      m.translateX = -half + progress * half
      m.velocity *= half / prevHalf
    }
  }, [])

  useEffect(() => {
    const el = trackRef.current
    if (!el) return

    motionRef.current.reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    measureTrack()

    const ro = new ResizeObserver(() => measureTrack())
    ro.observe(el)

    const baseSpeed = () => {
      const { halfWidth, reducedMotion } = motionRef.current
      const duration = reducedMotion ? MARQUEE_LOOP_S * 2.5 : MARQUEE_LOOP_S
      return halfWidth > 0 ? halfWidth / duration : 0
    }

    const tick = (time: number) => {
      const m = motionRef.current
      if (!m.lastTime) m.lastTime = time
      const dt = Math.min((time - m.lastTime) / 1000, 0.05)
      m.lastTime = time

      const target = baseSpeed()

      if (m.hover) {
        const k = 1 - Math.exp(-HOVER_DECEL * dt)
        m.velocity += (0 - m.velocity) * k
      } else {
        const k = 1 - Math.exp(-LEAVE_ACCEL * dt)
        m.velocity += (target - m.velocity) * k
      }

      if (m.halfWidth > 0) {
        m.translateX += m.velocity * dt
        while (m.translateX >= 0) m.translateX -= m.halfWidth
        while (m.translateX < -m.halfWidth) m.translateX += m.halfWidth
        el.style.transform = `translateX(${m.translateX}px)`
      }

      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)

    return () => {
      ro.disconnect()
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
    }
  }, [measureTrack])

  const handleMouseEnter = useCallback(() => {
    motionRef.current.hover = true
  }, [])

  const handleMouseLeave = useCallback(() => {
    motionRef.current.hover = false
  }, [])

  useEffect(() => {
    if (!lightbox) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [lightbox])

  return (
    <>
      <div
        className={`preview-marquee-root group ${className}`.trim()}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="preview-marquee-fade preview-marquee-fade--left" aria-hidden />
        <div className="preview-marquee-fade preview-marquee-fade--right" aria-hidden />
        <div ref={trackRef} className="preview-marquee-track">
          {items.map((item, i) => (
            <button
              key={`${item.src}-${i}`}
              type="button"
              className="preview-marquee-item"
              onClick={() => setLightbox(item)}
              aria-label={`View larger: ${item.alt}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                width={640}
                height={360}
                loading={i < 4 ? 'eager' : 'lazy'}
                decoding="async"
                draggable={false}
                className="preview-marquee-img"
                onLoad={measureTrack}
              />
            </button>
          ))}
        </div>
      </div>

      {lightbox ? (
        <div
          className="preview-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Gameplay preview enlarged"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            className="preview-lightbox-close"
            aria-label="Close preview"
            onClick={() => setLightbox(null)}
          >
            <X className="h-5 w-5" strokeWidth={2} />
          </button>
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            className="preview-lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      ) : null}
    </>
  )
}

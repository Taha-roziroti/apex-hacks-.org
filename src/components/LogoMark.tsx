import { SITE_NAME } from '../data/site'

type LogoMarkProps = {
  className?: string
  /** Above-the-fold brand mark (header). Footer should omit for lazy load. */
  priority?: boolean
}

export function LogoMark({ className = '', priority = false }: LogoMarkProps) {
  return (
    <img
      src="/logo.png"
      srcSet="/logo.png 1x, /logo.png 2x"
      width={56}
      height={56}
      alt={`${SITE_NAME} logo`}
      className={`h-14 w-14 shrink-0 rounded-full object-contain ${className}`}
      decoding="async"
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : undefined}
    />
  )
}

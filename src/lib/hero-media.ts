/** When true, hero should show a static image instead of the animated preview. */
export function prefersStaticHero(): boolean {
  if (typeof window === 'undefined') return false
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const conn = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection
  return reduceMotion || conn?.saveData === true
}

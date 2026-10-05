export type SeoMediaItem = {
  image: string
  video?: string
  alt: string
  title: string
  caption: string
  videoTitle?: string
  videoDescription?: string
}

export const APEX_HERO = '/media/apex-hero-full.webp'
export const APEX_COVER = '/media/apex-cover.webp'
export const APEX_MENU = '/media/apex-menu.webp'
export const APEX_VIDEO_THUMB = '/media/apex-video-thumb.jpg'

export const APEX_HOME_VIDEO = {
  src: '/videos/hero.webm',
  poster: APEX_VIDEO_THUMB,
  title: 'Apex Legends cheat gameplay preview with ESP and aimbot FOV',
  caption: 'Preview of Apex Legends ESP skeleton overlays, aimbot FOV circle, and 2D radar during control-zone gameplay on PC.',
} as const

function shot(n: number) {
  return `/media/apex-screenshot-${n}.webp`
}

/** Product page gameplay preview carousel (screenshots 1–9). */
export const PRODUCT_PREVIEW_GALLERY = [
  { src: shot(1), alt: 'Apex Legends aimbot FOV circle with skeleton ESP through cover on PC' },
  { src: shot(2), alt: 'Apex Legends player ESP wallhack on industrial stairs gameplay' },
  { src: shot(3), alt: 'Apex Legends ESP skeleton markers through metal structure' },
  { src: shot(4), alt: 'Apex Legends aimbot FOV with green box ESP on enemy behind van' },
  { src: shot(5), alt: 'Apex Legends skeleton ESP and purple player chams in control zone' },
  { src: shot(6), alt: 'Apex Legends warehouse fight with skeleton ESP and health bar overlay' },
  { src: shot(7), alt: 'Apex Legends autumn map player ESP and aimbot FOV circle' },
  { src: shot(8), alt: 'Apex Legends alley ESP skeleton through brick wall gameplay' },
  { src: shot(9), alt: 'Apex Legends open yard aimbot FOV with tactical HUD on PC' },
] as const

export const PAGE_MEDIA = {
  home: {
    image: APEX_HERO,
    alt: 'Apex Legends ESP and aimbot gameplay banner on PC',
    title: 'Apex Legends Cheats',
    caption: 'ESP, aimbot, vehicle radar, and wallhack-style visuals for control-zone fights.',
  },
  product: {
    image: APEX_COVER,
    video: APEX_HOME_VIDEO.src,
    alt: 'Apex Legends cheats product — player ESP, vehicle ESP, and aimbot features',
    title: 'Apex Legends ESP, Aimbot & Wallhack',
    caption: 'Full module list for Apex Legends on Windows PC.',
    videoTitle: APEX_HOME_VIDEO.title,
    videoDescription: APEX_HOME_VIDEO.caption,
  },
  forums: {
    image: shot(4),
    alt: 'Apex Legends player ESP wallhack gameplay screenshot',
    title: 'Apex Legends Cheat Forums',
    caption: 'Setup threads for aimbot, ESP, vehicle radar, and loader help.',
  },
  reviews: {
    image: shot(2),
    alt: 'Apex Legends aimbot FOV gameplay screenshot for reviews',
    title: 'Apex Legends Cheat Reviews',
    caption: 'Buyer feedback on ESP, aimbot, and radar modules.',
  },
  faq: {
    image: shot(8),
    alt: 'Apex Legends ESP skeleton overlay screenshot for FAQ',
    title: 'Apex Legends Cheats FAQ',
    caption: 'Compatibility, pricing, and setup answers for Apex Legends.',
  },
  support: {
    image: shot(6),
    alt: 'Apex Legends scoped ESP target tracking screenshot',
    title: 'Apex Legends Cheat Support',
    caption: 'Loader, delivery, and Windows troubleshooting.',
  },
} as const satisfies Record<string, SeoMediaItem>

function forumMediaFromSlug(slug: string): SeoMediaItem {
  let h = 0
  for (let i = 0; i < slug.length; i++) h = (h * 31 + slug.charCodeAt(i)) >>> 0
  const n = 1 + (h % 9)
  const title = slug.replace(/-/g, ' ')
  return {
    image: shot(n),
    alt: `Apex Legends cheats forum guide — ${title} gameplay screenshot`,
    title: `Apex Legends forum — ${title}`,
    caption: 'In-game ESP and aimbot overlay reference for this guide.',
  }
}

export function getForumMedia(slug: string): SeoMediaItem {
  return forumMediaFromSlug(slug)
}

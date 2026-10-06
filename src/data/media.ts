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

/** Self-hosted homepage hero loop (animated WebP). */
export const APEX_HOME_HERO_ANIMATED = '/videos/catalyst-apex-legends-10mb.webp'

export const APEX_HOME_VIDEO = {
  src: APEX_HOME_HERO_ANIMATED,
  poster: APEX_VIDEO_THUMB,
  mime: 'image/webp',
  title: 'Apex Legends cheat gameplay preview with ESP and aimbot FOV',
  caption:
    'Preview of Apex Legends ESP boxes, skeleton wallhacks, aimbot FOV circle, and distance tags on Olympus-style BR maps on PC.',
} as const

function shot(n: number) {
  return `/media/apex-screenshot-${n}.webp`
}

/** Product page gameplay preview carousel (screenshots 1–9). */
export const PRODUCT_PREVIEW_GALLERY = [
  {
    src: shot(1),
    alt: 'Apex Legends R-99 ADS with aimbot FOV circle, elimination damage, and green ESP through cover on Olympus',
  },
  {
    src: shot(2),
    alt: 'Apex Legends player ESP wallhack with green boxes, name tags, and distance meters on a sunny plaza',
  },
  {
    src: shot(3),
    alt: 'Apex Legends skeleton ESP through a blue wall with aimbot FOV ring and off-screen enemy arrows',
  },
  {
    src: shot(4),
    alt: 'Apex Legends scoped aim with green box ESP, username tag, and ring-range reticle on Olympus skyline',
  },
  {
    src: shot(5),
    alt: 'Apex Legends wooden walkway fight with white aimbot FOV circle and multi-target green ESP labels',
  },
  {
    src: shot(6),
    alt: 'Apex Legends ESP through glass showing green player boxes and distance readouts inside a building',
  },
  {
    src: shot(7),
    alt: 'Apex Legends deck firefight with green bounding boxes, health bars, and distance tags on enemies',
  },
  {
    src: shot(8),
    alt: 'Apex Legends hostile skeleton wallhack through metal cover with 114m distance indicator',
  },
  {
    src: shot(9),
    alt: 'Apex Legends green skeleton ESP through a round structure with directional threat arrows on Olympus',
  },
] as const

export const PAGE_MEDIA = {
  home: {
    image: APEX_HERO,
    alt: 'Apex Legends ESP and aimbot gameplay banner on PC',
    title: 'Apex Legends Cheats',
    caption: 'ESP, aimbot, loot radar, and wallhack-style visuals for Apex Legends BR trios on PC.',
  },
  product: {
    image: APEX_COVER,
    video: APEX_HOME_VIDEO.src,
    alt: 'Apex Legends cheats product — player ESP, loot ESP, and aimbot features on Olympus gameplay',
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

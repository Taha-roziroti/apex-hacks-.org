import { APEX_OG } from './images'
import { PAGE_OG } from './og'

export const SITE_URL = 'https://apexhacks.org'
export const SITE_NAME = 'Apex Legends Cheats'
export const SITE_HOST = 'apexhacks.org'

/** Stable site identity — Organization, WebSite, and about copy (not per-route). */
export const SITE_PURPOSE =
  'Single-game site for Apex Legends on PC: feature overview, setup forums, and loader status. This site does not sell cheats for other games.'

/** Site-wide subject terms for schema knowsAbout (max 6). */
export const SITE_ABOUT = [
  'Apex Legends Cheats',
  'Apex Legends',
  'Apex Legends cheat features',
  'Apex Legends ESP',
  'Apex Legends gameplay tools',
  'Apex Legends cheat setup',
] as const

/** Legitimate brand variants only — not a meta keyword list. */
export const ORGANIZATION_ALTERNATE_NAMES = [
  'Apex Legends Cheats',
  'Apex Legends cheats',
  'apexlegendscheats',
  'apexhacks.org',
] as const

/**
 * Short intent-specific terms per main route (3–6 each). Not rendered as meta keywords.
 * Used for docs, verification, and internal SEO discipline.
 */
export const SEO_ROUTE_INTENTS = {
  home: ['Apex Legends hacks', 'Apex Legends cheats', 'Apex Legends ESP', 'Apex Legends aimbot'],
  product: ['Apex Legends Cheats', 'Apex Legends cheat', 'Apex Legends features', 'Apex Legends setup'],
  featuresHub: ['Apex Legends cheat features', 'Apex Legends tools', 'Apex Legends features', 'Apex Legends cheats'],
  reviews: ['Apex Legends Cheats reviews', 'Apex Legends cheat review', 'Apex Legends player feedback'],
  forums: ['Apex Legends Cheats forum', 'Apex Legends discussions', 'Apex Legends cheat discussions'],
  faq: ['Apex Legends Cheats FAQ', 'Apex Legends cheat questions', 'Apex Legends setup questions'],
} as const

/** Product JSON-LD description (features + delivery — distinct from SITE_PURPOSE). */
export const PRODUCT_SCHEMA_DESCRIPTION =
  'Windows PC cheat menu for Apex Legends with aimbot, player ESP, loot ESP, 2D radar, misc weapon helpers, configs, and digital license delivery.'

/** Offer price shown on product schema + purchase UI. */
export const PRODUCT_PRICE_USD = '35'

export const SEO_REGIONS = [
  { hreflang: 'en', label: 'English' },
  { hreflang: 'x-default', label: 'Default' },
] as const

export const OG_IMAGE = APEX_OG

export type PageSeo = {
  title: string
  description: string
  path: string
  ogType?: 'website' | 'article' | 'product'
  image?: string
  imageAlt?: string
  robots?: string
}

const INDEX_ROBOTS =
  'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'

export const SEO = {
  home: {
    title: 'Apex Legends Hacks — ESP, Aimbot & More',
    description:
      'PC overlays for BR trios — ESP, optional aimbot, loot radar, and configs. Compare plans and check loader status before you buy.',
    path: '/',
    ogType: 'website',
    image: PAGE_OG.home,
    imageAlt: 'Apex Legends hacks gameplay showing ESP and aimbot on PC',
    robots: INDEX_ROBOTS,
  },
  forums: {
    title: 'Apex Legends Cheats Forum | Community Discussions',
    description:
      'Community guides and discussions for Apex Legends cheats — setup, ESP, aimbot tuning, loot radar, loader help, and patch-day checklists.',
    path: '/forums',
    ogType: 'website',
    image: PAGE_OG.forums,
    imageAlt: 'Apex Legends ESP wallhack gameplay screenshot from forum guides',
    robots: INDEX_ROBOTS,
  },
  reviews: {
    title: 'Apex Legends Cheats Reviews | Player Feedback',
    description:
      'Player feedback on Apex Legends cheats — ESP clarity, aimbot smoothing, loot radar, and loader updates after game patches.',
    path: '/reviews',
    ogType: 'website',
    image: PAGE_OG.reviews,
    imageAlt: 'Apex Legends aimbot FOV gameplay screenshot referenced in reviews',
    robots: INDEX_ROBOTS,
  },
  faq: {
    title: 'Apex Legends Cheats FAQ | Common Questions',
    description:
      'Answers about Apex Legends cheats — Windows requirements, ESP and aimbot features, pricing from $35, digital delivery, loader status, and setup steps.',
    path: '/faq',
    ogType: 'website',
    image: PAGE_OG.faq,
    imageAlt: 'Apex Legends player ESP overlay screenshot from FAQ',
    robots: INDEX_ROBOTS,
  },
  support: {
    title: 'Apex Legends Cheats Support | Loader & Delivery',
    description:
      'Help with Apex Legends cheat orders, license delivery, Windows loader steps, antivirus exclusions, and common menu errors.',
    path: '/support',
    ogType: 'website',
    image: PAGE_OG.support,
    imageAlt: 'Apex Legends cheat support and loader help',
    robots: INDEX_ROBOTS,
  },
  product: {
    title: 'Apex Legends Cheats | Features & Setup',
    description:
      'Full module list for Windows — combat assist, player visuals, loot overlays, radar, and saved profiles. Requirements, pricing from $35, and live status.',
    path: '/apex-legends-cheats',
    ogType: 'product',
    image: PAGE_OG.product,
    imageAlt: 'Apex Legends hacks gameplay showing ESP skeleton and aimbot FOV on PC',
    robots: INDEX_ROBOTS,
  },
  buy: {
    title: 'Buy Apex Legends Cheats — Price & Plans',
    description:
      'Monthly and lifetime access from $35. Review modules, Windows requirements, and Active status before checkout.',
    path: '/buy-apex-legends-cheats',
    ogType: 'product',
    image: PAGE_OG.product,
    imageAlt: 'Apex Legends cheat pricing and feature overview',
    robots: INDEX_ROBOTS,
  },
  best: {
    title: 'Best Apex Legends Cheats — 2026 Comparison',
    description:
      'Side-by-side look at features, pricing, PC support, and how honestly status is published after patches.',
    path: '/best-apex-legends-cheats',
    ogType: 'article',
    image: PAGE_OG.home,
    imageAlt: 'Best Apex Legends cheats comparison table for 2026',
    robots: INDEX_ROBOTS,
  },
  guidePc: {
    title: 'Apex Legends Cheats for PC — Requirements Guide',
    description:
      'Windows 10/11, Steam and EA app clients, exclusions, and what to verify before your first inject.',
    path: '/guides/apex-legends-cheats-pc',
    ogType: 'article',
    image: PAGE_OG.home,
    imageAlt: 'Apex Legends cheats running on Windows PC',
    robots: INDEX_ROBOTS,
  },
  guideUndetected: {
    title: 'Apex Legends Cheats Undetected — Status & Risk Guide',
    description:
      'Easy Anti-Cheat basics, what Active and Updating mean, and why no vendor can promise zero ban risk.',
    path: '/guides/apex-legends-cheats-undetected',
    ogType: 'article',
    image: PAGE_OG.faq,
    imageAlt: 'Apex Legends cheat detection and EAC status guide',
    robots: INDEX_ROBOTS,
  },
} as const satisfies Record<string, PageSeo>

export const HOME_HEADINGS = {
  h1: 'Apex Legends Hacks',
  h2Pc: 'Built for PC',
  h2Requirements: 'Before you load',
  h2Ranked: 'Ranked trios',
  h2Reviews: 'Player reviews',
  h2Forums: 'Community forums',
  h2Faq: 'Common questions',
  h2Access: 'Ready when you are',
} as const

export function absoluteUrl(path: string) {
  if (!path || path === '/') return `${SITE_URL}/`
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
}

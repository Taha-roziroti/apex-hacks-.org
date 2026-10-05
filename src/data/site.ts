import { APEX_OG } from './images'
import { PAGE_OG } from './og'

export const SITE_URL = 'https://apexhacks.org'
export const SITE_NAME = 'Apex Legends Cheats'
export const SITE_HOST = 'apexhacks.org'

/** Stable site identity — Organization, WebSite, and about copy (not per-route). */
export const SITE_PURPOSE =
  'Apex Legends Cheats is a single-game site focused on Apex Legends cheats, tools, and related gameplay features. The site is dedicated to Apex Legends only and does not sell cheats for other games.'

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
  home: ['Apex Legends Cheats', 'Apex Legends cheats', 'Apex Legends', 'Apex Legends tools'],
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
    title: 'Apex Legends Cheats | Features, Tools & Updates',
    description:
      'Apex Legends Cheats for PC — feature overview, setup forums, player reviews, and loader status. Single-game site dedicated to Apex Legends only.',
    path: '/',
    ogType: 'website',
    image: PAGE_OG.home,
    imageAlt: 'Apex Legends gameplay with ESP skeleton and aimbot FOV circle on PC',
    robots: INDEX_ROBOTS,
  },
  forums: {
    title: 'Apex Legends Cheats Forum | Community Discussions',
    description:
      'Community guides and discussions for Apex Legends cheats — setup, ESP, aimbot tuning, vehicle radar, loader help, and patch-day checklists.',
    path: '/forums',
    ogType: 'website',
    image: PAGE_OG.forums,
    imageAlt: 'Apex Legends ESP wallhack gameplay screenshot from forum guides',
    robots: INDEX_ROBOTS,
  },
  reviews: {
    title: 'Apex Legends Cheats Reviews | Player Feedback',
    description:
      'Player feedback on Apex Legends cheats — ESP clarity, aimbot smoothing, vehicle radar, and loader updates after game patches.',
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
      'Apex Legends cheat menu for PC — aimbot, player ESP, vehicle ESP, 2D radar, and config tools. System requirements, pricing from $35, and loader status.',
    path: '/apex-legends-cheats',
    ogType: 'product',
    image: PAGE_OG.product,
    imageAlt: 'Apex Legends product page showing ESP skeleton and aimbot FOV gameplay',
    robots: INDEX_ROBOTS,
  },
} as const satisfies Record<string, PageSeo>

export const HOME_HEADINGS = {
  h1: 'Apex Legends Cheats',
  h2Features: 'Apex Legends Cheats Features',
  h2HowItWorks: 'How Apex Legends Cheats Works',
  h2Reviews: 'Apex Legends Cheats Reviews',
  h2Forums: 'Apex Legends Cheats Forum',
  h2Faq: 'Apex Legends Cheats FAQ',
  h2Access: 'Ready when you are',
} as const

export function absoluteUrl(path: string) {
  if (!path || path === '/') return `${SITE_URL}/`
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
}

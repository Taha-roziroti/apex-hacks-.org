import { APEX_COVER, APEX_HERO, APEX_MENU } from './media'
import { APEX_OG, getOgImageForPath, PAGE_OG } from './og'

export { APEX_OG, getOgImageForPath, PAGE_OG }
export { forumOgImage } from './og'

export const APEX_PRODUCT_HERO = APEX_HERO
export const APEX_PRODUCT_COVER = APEX_COVER

export type ImageSeoFields = {
  alt: string
  title: string
  caption: string
}

export const IMAGE_SEO: Record<
  string,
  ImageSeoFields & {
    heroAlt: string
    heroTitle: string
    heroCaption: string
  }
> = {
  'apex-legends': {
    alt: 'Apex Legends cheats product artwork for PC',
    title: 'Apex Legends Cheats Product Details',
    caption: 'Apex Legends aimbot, ESP, loot radar, and wallhack-style overlays',
    heroAlt: 'Apex Legends ESP and aimbot features',
    heroTitle: 'Apex Legends Cheats Features',
    heroCaption: 'Review Apex Legends aimbot, ESP, loot radar, and loader status',
  },
}

type PageImage = ImageSeoFields & { src: string; og: string }

export const PAGE_IMAGES: Record<
  'home' | 'forums' | 'reviews' | 'faq' | 'support' | 'product',
  PageImage
> = {
  home: {
    src: APEX_HERO,
    og: PAGE_OG.home,
    alt: 'Apex Legends cheats ESP and aimbot artwork for PC',
    title: 'Apex Legends Cheats',
    caption: 'Apex Legends aimbot, ESP, loot radar, and wallhack-style overview on Olympus gameplay.',
  },
  forums: {
    src: '/media/apex-screenshot-4.webp',
    og: PAGE_OG.forums,
    alt: 'Apex Legends Olympus scoped aim with green box ESP wallhack screenshot',
    title: 'Apex Legends Cheat Guides',
    caption: 'Setup, aimbot, and ESP forum threads.',
  },
  reviews: {
    src: '/media/apex-screenshot-2.webp',
    og: PAGE_OG.reviews,
    alt: 'Apex Legends ESP name tags and distance meters gameplay review screenshot',
    title: 'Apex Legends Cheat Reviews',
    caption: 'Feature feedback from Apex Legends players.',
  },
  faq: {
    src: '/media/apex-screenshot-8.webp',
    og: PAGE_OG.faq,
    alt: 'Apex Legends skeleton wallhack ESP through cover for FAQ',
    title: 'Apex Legends Cheats FAQ',
    caption: 'Pricing, features, and setup answers.',
  },
  support: {
    src: '/media/apex-screenshot-6.webp',
    og: PAGE_OG.support,
    alt: 'Apex Legends ESP through glass building support screenshot',
    title: 'Apex Legends Cheat Support',
    caption: 'Delivery, loader, and Windows help.',
  },
  product: {
    src: APEX_COVER,
    og: PAGE_OG.product,
    alt: 'Apex Legends aimbot ESP and wallhack product artwork',
    title: 'Apex Legends Cheats Features',
    caption: 'Product details for Apex Legends aimbot and ESP.',
  },
}

export function getGameImage(_slug: string): string {
  return APEX_PRODUCT_COVER
}

export function getProductHeroImage(_slug: string): string {
  return APEX_PRODUCT_COVER
}

export function getOgImage(path?: string): string {
  return getOgImageForPath(path)
}

export function getPageImage(key: keyof typeof PAGE_IMAGES) {
  return PAGE_IMAGES[key]
}

export function getImageAlt(
  slug: string,
  name: string,
  variant: 'catalog' | 'product' = 'catalog',
): string {
  const seo = IMAGE_SEO[slug]
  if (seo) return variant === 'product' ? seo.heroAlt : seo.alt
  return variant === 'product' ? `${name} product details` : `${name} product artwork`
}

export function getImageTitle(
  slug: string,
  name: string,
  variant: 'catalog' | 'product' = 'catalog',
): string {
  const seo = IMAGE_SEO[slug]
  if (seo) return variant === 'product' ? seo.heroTitle : seo.title
  return `${name} product`
}

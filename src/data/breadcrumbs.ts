import type { BreadcrumbItem } from '../components/Breadcrumbs'

export const HOME_CRUMB: BreadcrumbItem = { label: 'Home', href: '/' }

export const FORUMS_CRUMB: BreadcrumbItem = { label: 'Forums', href: '/forums' }

export const PRODUCT_CRUMB: BreadcrumbItem = {
  label: 'Product',
  href: '/apex-legends-cheats',
}

export const BUY_CRUMB: BreadcrumbItem = {
  label: 'Buy',
  href: '/buy-apex-legends-cheats',
}

export function crumbs(...items: BreadcrumbItem[]): BreadcrumbItem[] {
  return items
}

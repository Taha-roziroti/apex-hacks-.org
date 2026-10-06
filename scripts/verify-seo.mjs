import { existsSync, readFileSync, readdirSync } from 'node:fs'
import { join, relative } from 'node:path'

const root = join(import.meta.dirname, '..')
const dist = join(root, 'dist')
const site = 'https://apexhacks.org'
const failures = []

function fail(message) {
  failures.push(message)
}

function htmlFiles(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name)
    return entry.isDirectory() ? htmlFiles(path) : entry.name.endsWith('.html') ? [path] : []
  })
}

function pageUrl(file) {
  const page = relative(dist, file).replaceAll('\\', '/')
  if (page === 'index.html') return `${site}/`
  if (page.endsWith('/index.html')) return `${site}/${page.slice(0, -11)}`
  return `${site}/${page.slice(0, -5)}`
}

const files = htmlFiles(dist)
const titles = new Map()
const descriptions = new Map()

for (const file of files) {
  const html = readFileSync(file, 'utf8')
  const page = relative(dist, file).replaceAll('\\', '/')
  const h1Count = (html.match(/<h1(?:\s|>)/g) || []).length
  const title = html.match(/<title>(.*?)<\/title>/)?.[1]
  const description = html.match(/<meta name="description" content="([^"]+)"/)?.[1]
  const canonicalUrl = pageUrl(file)

  if (h1Count !== 1) fail(`${page}: expected one H1, found ${h1Count}`)
  if (!title) fail(`${page}: missing title`)
  else if (titles.has(title)) fail(`${page}: duplicate title also used by ${titles.get(title)}`)
  else titles.set(title, page)
  if (!description) fail(`${page}: missing description`)
  else if (descriptions.has(description)) {
    fail(`${page}: duplicate description also used by ${descriptions.get(description)}`)
  } else descriptions.set(description, page)

  if (page !== '404.html') {
    if (!html.includes(`rel="canonical" href="${canonicalUrl}"`)) {
      fail(`${page}: missing self-referencing canonical ${canonicalUrl}`)
    }
    const hasHreflangEn =
      html.includes(`hreflang="en" href="${canonicalUrl}"`) ||
      html.includes(`href="${canonicalUrl}" hreflang="en"`)
    const hasHreflangDefault =
      html.includes(`hreflang="x-default" href="${canonicalUrl}"`) ||
      html.includes(`href="${canonicalUrl}" hreflang="x-default"`)
    if (!hasHreflangEn) {
      fail(`${page}: missing self-referencing hreflang=en`)
    }
    if (!hasHreflangDefault) {
      fail(`${page}: missing self-referencing hreflang=x-default`)
    }
  }

  if (html.includes('assets-prd.ignimgs.com')) fail(`${page}: contains third-party IGN image`)
  if (html.includes('cdn.cosmocheats.com')) fail(`${page}: contains third-party media hotlink`)
  if (html.includes('SearchAction')) fail(`${page}: contains invalid SearchAction`)
  if (html.includes('"keywords"')) fail(`${page}: contains keyword-list structured data`)
  if (/forums\/(instructions|how-to-load)/.test(html)) {
    fail(`${page}: links to a retired forum route`)
  }
}

const home = readFileSync(join(dist, 'index.html'), 'utf8')
const product = readFileSync(join(dist, 'apex-legends-cheats', 'index.html'), 'utf8')
const reviews = readFileSync(join(dist, 'reviews', 'index.html'), 'utf8')
const faq = readFileSync(join(dist, 'faq', 'index.html'), 'utf8')
const support = readFileSync(join(dist, 'support', 'index.html'), 'utf8')
const forums = readFileSync(join(dist, 'forums', 'index.html'), 'utf8')
const siteTs = readFileSync(join(root, 'src', 'data', 'site.ts'), 'utf8')

if (!home.includes('<title>Apex Legends Hacks — ESP, Aimbot &amp; More</title>')) {
  fail('Homepage does not own the exact title')
}
const buy = readFileSync(join(dist, 'buy-apex-legends-cheats', 'index.html'), 'utf8')
const best = readFileSync(join(dist, 'best-apex-legends-cheats', 'index.html'), 'utf8')
const guidePc = readFileSync(join(dist, 'guides', 'apex-legends-cheats-pc', 'index.html'), 'utf8')
const guideUndetected = readFileSync(
  join(dist, 'guides', 'apex-legends-cheats-undetected', 'index.html'),
  'utf8',
)
if (!buy.includes('<title>Buy Apex Legends Cheats — Price &amp; Plans</title>')) {
  fail('Buy page title must match SEO.buy')
}
if (!best.includes('<title>Best Apex Legends Cheats — 2026 Comparison</title>')) {
  fail('Best comparison page title must match SEO.best')
}
if (!product.includes('<title>Apex Legends Cheats | Features &amp; Setup</title>')) {
  fail('Product page title must match SEO.product')
}
if (!forums.includes('<title>Apex Legends Cheats Forum | Community Discussions</title>')) {
  fail('Forums index title must match SEO.forums')
}
if (!siteTs.includes('Apex Legends gameplay tools')) {
  fail('SITE_ABOUT must include Apex Legends gameplay tools (6-term cap)')
}
if (!siteTs.includes('apexhacks.org')) {
  fail('ORGANIZATION_ALTERNATE_NAMES must include apexhacks.org')
}
if (/name="keywords"/.test(home + product + forums)) {
  fail('Pages must not use meta keywords')
}
const purposeMatch = siteTs.match(/export const SITE_PURPOSE =\s*\n\s*'([^']+)'/)
const sitePurpose = purposeMatch?.[1] ?? ''
if (!sitePurpose.includes('does not sell cheats for other games')) {
  fail('SITE_PURPOSE must state single-game Apex Legends focus')
}
if ((siteTs.match(/SITE_ABOUT = \[[\s\S]*?\] as const/)?.[0].match(/'/g) || []).length !== 12) {
  fail('SITE_ABOUT must contain exactly 6 terms')
}
if (!home.includes(JSON.stringify(sitePurpose).slice(1, -1))) {
  fail('Homepage JSON-LD must include stable SITE_PURPOSE on Organization/WebSite')
}
if (product.includes('<title>Buy ')) fail('Product details page competes with buy page title')
const faqPageOwners = new Map([
  ['/', 1],
  ['/faq', 1],
  ['/buy-apex-legends-cheats', 1],
  ['/best-apex-legends-cheats', 1],
  ['/guides/apex-legends-cheats-pc', 1],
  ['/guides/apex-legends-cheats-undetected', 1],
])
const faqCounts = new Map()
for (const file of files) {
  const page = relative(dist, file).replaceAll('\\', '/')
  if (page === '404.html') continue
  const html = readFileSync(file, 'utf8')
  const count = (html.match(/"@type":"FAQPage"/g) || []).length
  if (!count) continue
  const urlPath =
    page === 'index.html'
      ? '/'
      : page.endsWith('/index.html')
        ? `/${page.slice(0, -11)}`
        : `/${page.slice(0, -5)}`
  faqCounts.set(urlPath, count)
}
for (const [path, expected] of faqPageOwners) {
  const got = faqCounts.get(path) ?? 0
  if (got !== expected) fail(`${path} must expose exactly ${expected} FAQPage graph (found ${got})`)
}
for (const [path, count] of faqCounts) {
  if (!faqPageOwners.has(path)) fail(`${path}: unexpected FAQPage schema (${count})`)
}
for (const [name, html] of [
  ['home', home],
  ['product', product],
  ['buy', buy],
  ['reviews', reviews],
]) {
  if (!html.includes('"@id":"https://apexhacks.org/#product"')) {
    fail(`${name}: missing shared Product ID`)
  }
}
if ((reviews.match(/"@type":"Review"/g) || []).length !== 8) {
  fail('Reviews schema must contain exactly 8 visible buyer reviews')
}
if (
  !reviews.includes('"reviewCount":"8"') ||
  !reviews.includes('"ratingValue":"4.6"')
) {
  fail('Reviews AggregateRating must report 8 reviews averaging 4.6')
}
if (support.includes('noindex')) fail('Support page must be indexable')
if (!forums.includes('"@type":"BreadcrumbList"')) {
  fail('/forums must expose BreadcrumbList schema')
}
function decodeEntities(value = '') {
  return value
    .replaceAll('&amp;', '&')
    .replaceAll('&#38;', '&')
    .replaceAll('&lt;', '<')
    .replaceAll('&gt;', '>')
    .replaceAll('&quot;', '"')
    .replaceAll('&#39;', "'")
}

for (const file of files) {
  const page = relative(dist, file).replaceAll('\\', '/')
  if (page === '404.html') continue
  const html = readFileSync(file, 'utf8')
  if (html.includes('content="noindex')) fail(`${page}: content page must not be noindex`)

  const title = decodeEntities(html.match(/<title>(.*?)<\/title>/)?.[1])
  const description = decodeEntities(html.match(/<meta name="description" content="([^"]+)"/)?.[1])
  const ogImage = html.match(/<meta property="og:image" content="([^"]+)"/)?.[1]
  const ogTitle = decodeEntities(html.match(/<meta property="og:title" content="([^"]+)"/)?.[1])
  const ogDesc = decodeEntities(html.match(/<meta property="og:description" content="([^"]+)"/)?.[1])
  const twImage = html.match(/<meta name="twitter:image" content="([^"]+)"/)?.[1]
  const robotsMeta = html.match(/<meta name="robots" content="([^"]+)"/)?.[1]

  if (!ogImage?.startsWith('https://apexhacks.org/og/') || !ogImage.endsWith('.jpg')) {
    fail(`${page}: og:image must be https://apexhacks.org/og/*.jpg for SERP thumbnails`)
  }
  if (!twImage || twImage !== ogImage) {
    fail(`${page}: twitter:image must match og:image`)
  }
  if (ogTitle !== title) fail(`${page}: og:title must match <title>`)
  if (ogDesc !== description) fail(`${page}: og:description must match meta description`)
  if (!html.includes('property="og:image:width" content="1200"')) {
    fail(`${page}: og:image:width must be 1200`)
  }
  if (!html.includes('property="og:image:height" content="630"')) {
    fail(`${page}: og:image:height must be 630`)
  }
  if (!robotsMeta?.includes('max-image-preview:large')) {
    fail(`${page}: robots must allow max-image-preview:large`)
  }
  if (!html.includes('rel="image_src"')) {
    fail(`${page}: missing link rel=image_src for thumbnail crawlers`)
  }
}
for (const [name, html] of [
  ['home', home],
  ['product', product],
  ['forums', forums],
]) {
  if (
    !html.includes('/media/apex-') &&
    !html.includes('/videos/catalyst-apex-legends-30fps.webp')
  ) {
    fail(`${name}: missing visible Apex Legends media in page body`)
  }
}
for (const [name, html, og] of [
  ['reviews', reviews, '/og/reviews.jpg'],
  ['faq', faq, '/og/faq.jpg'],
  ['support', support, '/og/support.jpg'],
]) {
  if (!html.includes(og)) {
    fail(`${name}: missing Open Graph image ${og}`)
  }
}
if (!product.includes('preview-marquee-track') || !product.includes('/media/apex-screenshot-1.webp')) {
  fail('Product page is missing the gameplay preview image carousel')
}
if (home.includes('iframe.mediadelivery.net') || product.includes('iframe.mediadelivery.net')) {
  fail('Pages still embed blocked mediadelivery video (403 off-domain)')
}
if (
  /tarkovcheats|Escape from Tarkov|tarkov-reaper|warzonecheats|wardogshacks|theislecheats|\.uk\/|Delta Product|Auron Product/i.test(
    home + product,
  )
) {
  fail('Built pages still contain legacy Tarkov/Warzone branding')
}

const sitemap = readFileSync(join(dist, 'sitemap.xml'), 'utf8')
if (sitemap.includes('<sitemapindex')) fail('sitemap.xml must be a single urlset, not an index')
if (/forums\/(instructions|how-to-load)/.test(sitemap)) fail('Retired forum remains in sitemap.xml')
if (!sitemap.includes('https://apexhacks.org/')) {
  fail('sitemap.xml must use https://apexhacks.org URLs')
}
if (!sitemap.includes('/videos/catalyst-apex-legends-30fps.webp')) {
  fail('sitemap.xml missing Apex Legends preview video entry')
}
if (!sitemap.includes('xmlns:video=')) {
  fail('sitemap.xml missing video namespace for Google video indexing')
}
if (/tarkovcheats|Tarkov|warzonecheats|Delta Product|Auron Product|Ricochet/i.test(sitemap)) {
  fail('sitemap.xml still contains legacy Tarkov/Warzone branding')
}
const expectedUrls = new Set(
  files
    .filter((file) => relative(dist, file).replaceAll('\\', '/') !== '404.html')
    .map(pageUrl),
)
const urlBlocks = sitemap.match(/<url>[\s\S]*?<\/url>/g) || []
const pageLocs = urlBlocks.map((block) => block.match(/<loc>([^<]+)<\/loc>/)?.[1]).filter(Boolean)
const uniqueSitemapUrls = new Set(pageLocs)
const imageLocs = [...sitemap.matchAll(/<image:loc>([^<]+)<\/image:loc>/g)].map((match) => match[1])
const requiredImages = [
  '/og/home.jpg',
  '/og/apex-legends-cheats.jpg',
  '/og/forums.jpg',
  '/og/reviews.jpg',
  '/og/faq.jpg',
  '/og/support.jpg',
  '/media/apex-hero-full.webp',
  '/media/apex-cover.webp',
  '/media/apex-screenshot-5.webp',
  '/media/apex-menu.webp',
  '/media/apex-video-thumb.jpg',
]

for (const url of expectedUrls) {
  if (!uniqueSitemapUrls.has(url)) fail(`sitemap.xml missing built page ${url}`)
}
for (const url of uniqueSitemapUrls) {
  if (!expectedUrls.has(url)) fail(`sitemap.xml contains URL without a built page: ${url}`)
}
if (uniqueSitemapUrls.size !== pageLocs.length) fail('sitemap.xml contains duplicate URLs')
if (urlBlocks.length !== expectedUrls.size) {
  fail(`sitemap.xml must contain exactly ${expectedUrls.size} built page URLs`)
}
if ((sitemap.match(/<image:image>/g) || []).length < expectedUrls.size) {
  fail('Every sitemap URL must include at least one image entry')
}
for (const block of urlBlocks) {
  const loc = block.match(/<loc>([^<]+)<\/loc>/)?.[1] || '(unknown)'
  if (!block.includes('<image:image>') || !block.includes('<image:loc>')) {
    fail(`sitemap URL missing image entry: ${loc}`)
  }
}
for (const image of requiredImages) {
  if (!imageLocs.some((loc) => loc.endsWith(image))) {
    fail(`sitemap.xml missing required image ${image}`)
  }
}
if (!sitemap.trimStart().startsWith('<?xml version="1.0" encoding="UTF-8"?>')) {
  fail('sitemap.xml must start with an XML declaration')
}
if (!sitemap.includes('<?xml-stylesheet type="text/css" href="/sitemap.css"?>')) {
  fail('sitemap.xml must reference /sitemap.css for readable browser view (Googlebot ignores the PI)')
}
if (sitemap.includes('xmlns:xhtml=') || sitemap.includes('hreflang=')) {
  fail('sitemap.xml must not duplicate hreflang entries (single-locale site; use HTML link tags)')
}
for (const stale of [
  'sitemap-pages.xml',
  'sitemap-products.xml',
  'sitemap-forums.xml',
  'sitemap-images.xml',
  'sitemap-blogs.xml',
  'sitemap-regions.xml',
  'sitemap-index.xml',
  'sitemap_index.xml',
]) {
  if (existsSync(join(dist, stale))) fail(`Stale split sitemap still published: ${stale}`)
}

if (!existsSync(join(dist, 'sitemap.xml'))) fail('dist/sitemap.xml is missing')
if (!existsSync(join(dist, 'robots.txt'))) fail('dist/robots.txt is missing')
if (!existsSync(join(dist, '_routes.json'))) fail('dist/_routes.json is missing')

const robots = readFileSync(join(dist, 'robots.txt'), 'utf8')
if (!robots.includes('Sitemap: https://apexhacks.org/sitemap.xml')) {
  fail('robots.txt must point at the canonical HTTPS sitemap')
}
if (!robots.includes('Allow: /sitemap.xml')) {
  fail('robots.txt must explicitly allow /sitemap.xml')
}
if (!robots.includes('Allow: /videos/')) {
  fail('robots.txt must allow /videos/ for preview crawlability')
}
if (!robots.includes('User-agent: Googlebot')) {
  fail('robots.txt must explicitly allow Googlebot')
}

const routes = JSON.parse(readFileSync(join(dist, '_routes.json'), 'utf8'))
if (!routes.exclude?.includes('/sitemap.xml') || !routes.exclude?.includes('/robots.txt')) {
  fail('_routes.json must exclude /sitemap.xml and /robots.txt from Functions')
}

for (const asset of [
  'public/og/home.jpg',
  'public/og/apex-legends-cheats.jpg',
  'public/og/forums.jpg',
  'public/og/reviews.jpg',
  'public/og/faq.jpg',
  'public/og/support.jpg',
  'public/media/apex-hero-full.webp',
  'public/media/apex-cover.webp',
  'public/media/apex-menu.webp',
  'public/media/apex-video-thumb.jpg',
  'public/media/apex-screenshot-1.webp',
  'public/videos/catalyst-apex-legends-30fps.webp',
  'public/sitemap.css',
  'public/_routes.json',
  'functions/_middleware.js',
]) {
  if (!existsSync(join(root, asset))) fail(`Missing first-party asset: ${asset}`)
}
if (existsSync(join(root, 'public/videos/dayz-preview.mp4'))) {
  fail('Remove unused legacy asset: public/videos/dayz-preview.mp4')
}

const redirects = readFileSync(join(root, 'public', '_redirects'), 'utf8')
if (!redirects.includes('/sitemap-pages.xml')) {
  fail('_redirects missing legacy sitemap -> /sitemap.xml redirects')
}
if (!redirects.includes('/sitemap-index.xml')) {
  fail('_redirects missing sitemap-index.xml -> /sitemap.xml redirect')
}
if (!redirects.includes('/buy-apex-legends-cheats')) {
  fail('_redirects must map buy-apex-legends-cheats keyword alias')
}
if (!redirects.includes('/abi-cheats')) {
  fail('_redirects must map legacy /abi-cheats to /apex-legends-cheats')
}
if (/^\/apex-legends-cheats\s+\/apex-legends-cheats\s/m.test(redirects)) {
  fail('_redirects must not 301 /apex-legends-cheats to itself (redirect loop)')
}

const worker = readFileSync(join(root, 'workers', 'site.js'), 'utf8')
if (!worker.includes("startsWith('www.')") && !worker.includes('startsWith("www.")')) {
  fail('workers/site.js must detect www. hostnames for apex redirect')
}
if (!worker.includes('301')) {
  fail('workers/site.js must 301 www ? apex for a single canonical host')
}

const middleware = readFileSync(join(root, 'functions', '_middleware.js'), 'utf8')
if (!middleware.includes("startsWith('www.')") && !middleware.includes('startsWith("www.")')) {
  fail('functions/_middleware.js must 301 www ? apex')
}

if (site.includes('://www.')) {
  fail('Canonical SITE_URL must be apex (no www) Â www redirects to apex')
}

for (const file of files) {
  if (file.endsWith('404.html')) continue
  const html = readFileSync(file, 'utf8')
  if (/rel="canonical" href="https:\/\/www\./.test(html)) {
    fail(`${relative(dist, file)}: canonical must not use www`)
  }
  if (/hreflang="en" href="https:\/\/www\./.test(html)) {
    fail(`${relative(dist, file)}: hreflang must not use www`)
  }
}

const headers = readFileSync(join(root, 'public', '_headers'), 'utf8')
if (!headers.includes('Content-Type: text/html; charset=utf-8')) {
  fail('_headers missing HTML charset Content-Type')
}
if (!headers.includes('/sitemap.xml')) {
  fail('_headers missing /sitemap.xml Content-Type')
}
if (!headers.includes('application/xml; charset=utf-8')) {
  fail('_headers missing application/xml charset Content-Type for /sitemap.xml')
}

if (failures.length) {
  throw new Error(`SEO verification failed:\n- ${failures.join('\n- ')}`)
}

console.log(`SEO verification passed: ${files.length} HTML files, 14 forums, 8 reviews`)

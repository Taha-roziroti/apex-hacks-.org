# Apex Legends Cheats (apexhacks.org)

Static Astro site for Apex Legends cheats — aimbot, ESP, loot radar, wallhack-style visuals — Cloudflare Workers ready.

SEO targets **apex legends cheats**, **apex legends esp**, **apex legends aimbot**, and related PC keywords.

See **[SEO-SUPER-BOOSTER.md](./SEO-SUPER-BOOSTER.md)** for the full SEO implementation checklist (enforced on every `npm run build`).

## Commands

- `npm run prepare:logo` — rebuild `logo.png`, `favicon.svg`, and touch icons from `public/brand/apex-logo-source.png`
- `npm run prepare:hero-banner` — rebuild `public/media/apex-hero-banner.webp` from `assets/brand/apex-hero-banner-source.jpg`
- `npm run prepare:media` — upscale `assets/gameplay/images_*.png` to 4K WebP in `public/media/apex-*` (use native 1080p+ captures when possible; low-res sources are sharpened but cannot recover real detail)
- `npm run generate:forums` — regenerate forum posts from `scripts/generate-apex-forums.mjs`
- `npm run build` — OG images, sitemap, Astro build, SEO verification
- `npm run dev` — local dev on port 5174

Set `SITE_URL=https://apexhacks.org` when generating sitemaps for production.

## Deploy (Cloudflare)

1. `npm ci`
2. `npm run build` — output in `dist/` (sitemap, robots, `_routes.json`, static HTML)
3. `npm run deploy` — Wrangler publishes `dist/` via `workers/site.js` to **apexhacks.org** (see `wrangler.toml`)

Ensure Cloudflare Pages/Workers has the repo’s `functions/` middleware and `public/_redirects` copied into `dist/` by the build (Astro static + verify scripts).

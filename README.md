# Apex Legends Cheats (apexhacks.org)

Static Astro site for Apex Legends cheats — aimbot, ESP, loot radar, wallhack-style visuals — Cloudflare Workers ready.

SEO targets **apex legends cheats**, **apex legends esp**, **apex legends aimbot**, and related PC keywords.

See **[SEO-SUPER-BOOSTER.md](./SEO-SUPER-BOOSTER.md)** for the full SEO implementation checklist (enforced on every `npm run build`).

## Commands

- `npm run prepare:logo` — rebuild `logo.png`, `favicon.svg`, and touch icons from `public/brand/apex-logo-source.png`
- `npm run prepare:media` — compress `assets/gameplay/images_*.png` into `public/media/apex-*`
- `npm run generate:forums` — regenerate forum posts from `scripts/generate-apex-forums.mjs`
- `npm run build` — OG images, sitemap, Astro build, SEO verification
- `npm run dev` — local dev on port 5174

Set `SITE_URL=https://apexhacks.org` when generating sitemaps for production.

export type FaqItem = { q: string; a: string }

export const HOME_FAQS: FaqItem[] = [
  {
    q: 'What are Apex Legends hacks?',
    a: 'Apex Legends hacks on apexhacks.org are Windows PC tools with player ESP, optional aimbot, loot ESP, 2D radar, and config profiles — with Active or Updating loader status after patches.',
  },
  {
    q: 'How much do Apex Legends cheats cost?',
    a: 'Apex Legends cheats start from $35 for monthly access. Lifetime plans cost more. Confirm Active status and pricing on apexhacks.org before checkout.',
  },
  {
    q: 'Do you sell hacks for other games?',
    a: 'No. apexhacks.org covers Apex Legends only — one product, no multi-game catalog.',
  },
  {
    q: 'Is aimbot required?',
    a: 'Aimbot is optional. Many players lead with player ESP, loot highlights, and radar, then enable combat assist only when they want it.',
  },
  {
    q: 'How do you handle game patches?',
    a: 'We publish Active or Updating labels after Apex Legends updates. Always check status on apexhacks.org before you load.',
  },
  {
    q: 'What is Apex Legends ESP / wallhack?',
    a: 'Apex Legends ESP and wallhack-style visuals show players through cover with box, skeleton, health, distance, weapon, and team filters — plus loot and care package highlights.',
  },
]

export const PRODUCT_PAGE_FAQS: FaqItem[] = [
  ...HOME_FAQS,
  {
    q: 'Which features are included?',
    a: 'Aimbot options (FOV, smooth, bone selection, visible check, prediction, draw overlays), player visual options, vehicle ESP, 2D radar, and misc no recoil / no spread / full bright / crosshair / configs — Apex Legends on Windows PC. See the features checklist forum for the full list.',
  },
  {
    q: 'Do Apex Legends cheats work on Steam?',
    a: 'Yes. The loader supports Apex Legends on Steam when status is Active.',
  },
  {
    q: 'How do I buy Apex Legends cheats?',
    a: 'Start on the homepage, review features and Active status, open buy Apex Legends cheats, then continue to checkout for digital delivery.',
  },
  {
    q: 'How do I load Apex Legends cheats?',
    a: 'Follow the complete setup forum: exclusions, launch game, run loader, configure ESP and radar, save a config. Re-check status after every patch.',
  },
  {
    q: 'Where do I get support?',
    a: 'Use the Support page and your checkout order channel. Include current status and whether you need load, menu, or delivery help.',
  },
  {
    q: 'Where can I read reviews?',
    a: 'Visit the Reviews page for buyer feedback on ESP, aimbot, vehicle radar, and loader updates.',
  },
  {
    q: 'Is this the official Apex Legends site?',
    a: 'No. We cover Apex Legends cheat software only. Buy and play the game from official stores. We are not affiliated with the game publisher.',
  },
]

export const FAQ_PAGE_FAQS: FaqItem[] = PRODUCT_PAGE_FAQS

export const SITE_FAQS = FAQ_PAGE_FAQS

export type FaqItem = { q: string; a: string }

export const HOME_FAQS: FaqItem[] = [
  {
    q: 'What does the menu include?',
    a: 'Player ESP, optional aimbot, loot overlays, 2D radar, and config profiles on Windows. Status is labeled Active or Updating after patches.',
  },
  {
    q: 'How much does access cost?',
    a: 'Plans start at $35 per month; lifetime tiers cost more. Confirm pricing and status on the buy page before checkout.',
  },
  {
    q: 'Do you cover other games?',
    a: 'No — one product for Apex Legends only.',
  },
  {
    q: 'Is aimbot required?',
    a: 'No. Many players start with ESP, loot highlights, and radar, then enable combat assist only when they want it.',
  },
  {
    q: 'How do patches affect the loader?',
    a: 'We switch labels to Updating when the game updates, then back to Active once the build is verified. Check status before every session.',
  },
  {
    q: 'What is ESP / wallhack-style visuals?',
    a: 'On-screen overlays for players through cover — box, skeleton, health, distance, weapon, and team filters — plus loot and care package tags.',
  },
]

/** Product / buy pages — not duplicated on the homepage FAQ block. */
export const PRODUCT_DETAIL_FAQS: FaqItem[] = [
  {
    q: 'Which modules can I toggle?',
    a: 'Combat assist (FOV, smooth, bones, visible check, prediction, draw overlays), player visuals, loot and world ESP, 2D radar, and misc recoil / spread / vision helpers with saved configs. See the features checklist forum for the full list.',
  },
  {
    q: 'Does this work on Steam or the EA app?',
    a: 'Yes on Windows when status is Active and you use a supported client listed on the buy page.',
  },
  {
    q: 'How do I purchase?',
    a: 'Review modules and status here, open the buy page, then continue to checkout for digital delivery.',
  },
  {
    q: 'How do I load after delivery?',
    a: 'Follow the complete setup forum: exclusions, launch the game, run the loader, tune ESP and radar, save a profile. Re-check status after each patch.',
  },
  {
    q: 'Where do I get help?',
    a: 'Use Support and your order channel. Include current status and whether you need load, menu, or delivery help.',
  },
  {
    q: 'Where are buyer reviews?',
    a: 'On the Reviews page — feedback on visuals, tuning, and loader updates.',
  },
  {
    q: 'Is this an official EA site?',
    a: 'No. Buy and play the game from official stores. We are not affiliated with the publisher.',
  },
]

export const FAQ_PAGE_FAQS: FaqItem[] = [...HOME_FAQS, ...PRODUCT_DETAIL_FAQS]

/** @deprecated Use PRODUCT_DETAIL_FAQS or FAQ_PAGE_FAQS */
export const PRODUCT_PAGE_FAQS = FAQ_PAGE_FAQS

export const SITE_FAQS = FAQ_PAGE_FAQS

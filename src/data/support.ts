export const SUPPORT_INTRO =
  'Help desk for Apex Legends cheat buyers on apexhacks.org — loader setup, Active status, menu config and delivery after purchase.'

export const SUPPORT_HIGHLIGHTS = [
  {
    title: 'Loader & menu',
    text: 'Menu not opening, inject failures, and overlay conflicts — we walk through exclusions and load order.',
  },
  {
    title: 'Patch windows',
    text: 'Game patches can invalidate yesterday’s build. Status honesty matters more than rushing a queue.',
  },
  {
    title: 'Delivery',
    text: 'Digital licenses arrive via checkout email. Use only the official delivery link from your order.',
  },
] as const

export const SUPPORT_FAQ = [
  {
    q: 'What do you help with?',
    a: 'We assist with Apex Legends on Windows PC (Steam), loader and menu help for paid licenses.',
  },
  {
    q: 'How do I reach the team?',
    a: 'Open your order on apexhacks.org and use the checkout channel tied to your purchase. Include a status screenshot (Active / Updating) and whether you need load, menu or delivery help.',
  },
  {
    q: 'Loader fails after exclusions',
    a: 'Do not spam launch. Restart the game, confirm antivirus exclusions, re-check status, then try one clean load. If it still fails, contact us with your order ID.',
  },
  {
    q: 'Which clients are supported?',
    a: 'Steam when loader status is Active.',
  },
  {
    q: 'Delivery safety',
    a: 'Delivery is digital after checkout on apexhacks.org. Use only that loader link. Third-party mirrors are unsupported and unsafe.',
  },
] as const

export const SUPPORT_TOPICS = SUPPORT_HIGHLIGHTS.map(({ title, text }) => ({
  heading: title,
  body: [text],
}))

export const SUPPORT_FAQS = [...SUPPORT_FAQ]

export const SUPPORT_EXTRA =
  'Before you open a ticket, skim the forums index for patch-day threads and loader screenshots — many fixes are documented there. When you write in, attach your order ID, Windows version, and whether status showed Active or Updating. That context lets the desk route you faster without back-and-forth pings.'

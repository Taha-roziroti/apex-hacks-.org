import type { FaqItem } from './faqs'

export type LandingSection = {
  h2: string
  paragraphs: string[]
  bullets?: string[]
}

export type InternalLink = { label: string; href: string }

export const HOME_INTERNAL_LINKS: InternalLink[] = [
  { label: 'buy Apex Legends cheats', href: '/buy-apex-legends-cheats' },
  { label: 'best Apex Legends cheats', href: '/best-apex-legends-cheats' },
  { label: 'Apex Legends cheats for PC', href: '/guides/apex-legends-cheats-pc' },
]

export const BUY_INTERNAL_LINKS: InternalLink[] = [
  { label: 'Apex Legends hacks', href: '/' },
  { label: 'best Apex Legends cheats', href: '/best-apex-legends-cheats' },
  { label: 'Apex Legends cheats for PC', href: '/guides/apex-legends-cheats-pc' },
]

export const BEST_INTERNAL_LINKS: InternalLink[] = [
  { label: 'buy Apex Legends cheats', href: '/buy-apex-legends-cheats' },
  { label: 'Apex Legends hacks', href: '/' },
  { label: 'Apex Legends cheats undetected', href: '/guides/apex-legends-cheats-undetected' },
]

export const PC_GUIDE_INTERNAL_LINKS: InternalLink[] = [
  { label: 'buy Apex Legends cheats', href: '/buy-apex-legends-cheats' },
  { label: 'Apex Legends hacks', href: '/' },
  { label: 'Apex Legends cheat status', href: '/guides/apex-legends-cheats-undetected' },
]

export const UNDETECTED_GUIDE_INTERNAL_LINKS: InternalLink[] = [
  { label: 'buy Apex Legends cheats', href: '/buy-apex-legends-cheats' },
  { label: 'best Apex Legends cheats', href: '/best-apex-legends-cheats' },
  { label: 'Apex Legends cheats for PC', href: '/guides/apex-legends-cheats-pc' },
]

export const BEST_COMPARISON_ROWS = [
  {
    name: 'Apex Legends Cheats (apexhacks.org)',
    features: 'Aimbot, player ESP, loot ESP, 2D radar, configs',
    platform: 'Windows 10/11 · Steam & EA app',
    pricing: 'From $35 monthly · lifetime options',
    status: 'Active / Updating labels after patches',
    href: '/buy-apex-legends-cheats',
    highlight: true,
  },
  {
    name: 'Generic multi-game menus',
    features: 'Mixed modules · often outdated for Apex',
    platform: 'Varies · unclear client support',
    pricing: 'Wide price range',
    status: 'Rarely publishes patch-day status',
    href: '/guides/apex-legends-cheats-undetected',
    highlight: false,
  },
  {
    name: 'Free or cracked loaders',
    features: 'Unknown code · high malware risk',
    platform: 'Unsupported',
    pricing: 'Hidden costs (bans, malware)',
    status: 'No legitimate support channel',
    href: '/guides/apex-legends-cheats-undetected',
    highlight: false,
  },
] as const

export const PC_GUIDE_SECTIONS: LandingSection[] = [
  {
    h2: 'Apex Legends Cheat PC Compatibility',
    paragraphs: [
      'Apex Legends cheats on PC run as external overlays and loaders on Windows — not on console. Match your game client (Steam or EA app) to the build notes on the buy page before you purchase.',
    ],
  },
  {
    h2: 'Windows 10 and Windows 11 Support',
    paragraphs: [
      'Use a clean Windows 10 or 11 install with current updates. Close conflicting overlays (Discord, GeForce Experience hooks, RGB tools) before first inject — the setup forums walk through exclusions step by step.',
    ],
    bullets: [
      '64-bit Windows 10 or 11',
      'Administrator rights for loader setup',
      'Defender exclusions for the delivery folder',
    ],
  },
  {
    h2: 'Steam and PC Requirements',
    paragraphs: [
      'The supported clients are Steam and the EA app for Apex Legends on PC. Verify Active loader status on apexhacks.org after every seasonal patch — loading while status shows Updating wastes a session.',
    ],
  },
  {
    h2: 'ESP, Aimbot and Other Features',
    paragraphs: [
      'Typical modules include player ESP and wallhack-style visuals, optional aimbot with FOV and smooth sliders, loot ESP for death boxes and care packages, and a 2D radar for squad awareness in trios and ranked.',
    ],
  },
  {
    h2: 'Before You Buy an Apex Cheat',
    paragraphs: [
      'Read the PC requirements here, review detection risks on the status guide, compare plans on the best cheats page, then open buy Apex Legends cheats when loader status is Active.',
    ],
  },
]

export const UNDETECTED_GUIDE_SECTIONS: LandingSection[] = [
  {
    h2: 'Are Apex Legends Cheats Safe?',
    paragraphs: [
      'No third-party cheat is “safe” in the sense of zero risk. EA prohibits cheating and may close or penalize accounts. Treat any menu as high risk — use only what you accept losing.',
    ],
  },
  {
    h2: 'Apex Legends and Easy Anti-Cheat',
    paragraphs: [
      'Apex Legends uses Easy Anti-Cheat (EAC) on PC. EAC and server-side checks can change without notice. We rebuild after major updates, but compatibility and detection risk can shift at any time.',
    ],
  },
  {
    h2: 'How Cheat Detection Can Change',
    paragraphs: [
      'Seasonal updates, hotfixes, and anti-cheat tuning can flip a build from usable to flagged. That is why we publish Active or Updating status instead of promising permanent bypasses.',
    ],
  },
  {
    h2: 'Current Cheat Status and Updates',
    paragraphs: [
      'Check the product card and buy page before every session. If status is Updating after a patch, wait for the rebuild — loading early is the most common self-inflicted failure.',
    ],
  },
  {
    h2: 'What “Undetected” Actually Means',
    paragraphs: [
      'In marketing copy, “undetected” usually means “not flagged right now” — not a guarantee. We do not claim 100% undetected status or zero ban risk. Read EA’s player conduct rules and decide if the risk is acceptable.',
    ],
  },
]

export const BEST_GUIDE_SECTIONS: LandingSection[] = [
  {
    h2: 'Best Apex Legends Cheat Features',
    paragraphs: [
      'Prioritize modules you will actually use: clear player ESP, distance tags, loot highlights, and an optional aimbot with visible-check and FOV limits. Skip bloated multi-game menus that rarely track Apex patch cadence.',
    ],
  },
  {
    h2: 'Apex Legends Cheats Compared',
    paragraphs: [
      'Use the table below to compare access models. We bias toward transparent status labels, single-game focus, and documented setup forums — not vague “lifetime undetected” slogans.',
    ],
  },
  {
    h2: 'Apex Legends Cheats 2026',
    paragraphs: [
      'In 2026, expect more frequent mid-season balance patches and regular EAC maintenance. The best option is the one with honest Updating windows and PC requirements you can verify before checkout.',
    ],
  },
  {
    h2: 'Pricing and Access Options',
    paragraphs: [
      'Monthly access starts from $35 on apexhacks.org with lifetime tiers for longer commitments. Confirm pricing on the buy page — digital delivery only, no physical goods.',
    ],
  },
  {
    h2: 'Which Apex Legends Cheat Fits You?',
    paragraphs: [
      'Solo ranked players may want ESP-first configs; trio leads may lean on radar and loot ESP. If you need Windows and client compatibility detail, read the PC guide before you buy.',
    ],
  },
]

export const PC_GUIDE_FAQS: FaqItem[] = [
  {
    q: 'Do Apex Legends cheats work on Steam and EA app?',
    a: 'Yes, when loader status is Active and you use the supported Windows PC client listed on the buy page. Always re-check status after patches.',
  },
  {
    q: 'Which Windows versions are supported?',
    a: 'Windows 10 and 11 (64-bit) with current updates. Follow antivirus exclusion steps in the setup forums before first inject.',
  },
  {
    q: 'Can I run cheats on console?',
    a: 'No. These tools are built for PC only. Console platforms are out of scope.',
  },
]

export const UNDETECTED_GUIDE_FAQS: FaqItem[] = [
  {
    q: 'Are Apex Legends cheats 100% undetected?',
    a: 'No. We do not guarantee permanent undetected status or zero ban risk. Easy Anti-Cheat and publisher enforcement can change at any time.',
  },
  {
    q: 'What does Active vs Updating mean?',
    a: 'Active means the current build matches the live game client in our tests. Updating means a patch landed and you should wait before loading.',
  },
  {
    q: 'Can EA ban my account for cheating?',
    a: 'Yes. EA states that cheating violates its user agreement and may result in account action. You assume that risk if you use third-party software.',
  },
]

export const BEST_PAGE_FAQS: FaqItem[] = [
  {
    q: 'What makes the best Apex Legends cheats in 2026?',
    a: 'Honest status labels, PC requirements you can verify, modules you will use (ESP, loot, radar, optional aimbot), and setup help — not vague undetected marketing.',
  },
  {
    q: 'How do I compare pricing?',
    a: 'Start on the best cheats comparison, then open buy Apex Legends cheats for live plans from $35 monthly and lifetime options.',
  },
  {
    q: 'Should I trust free cheat downloads?',
    a: 'No. Unknown loaders carry malware and ban risk. Use only the delivery channel from your order.',
  },
]

export const BUY_PAGE_FAQS: FaqItem[] = [
  {
    q: 'How much do Apex Legends cheats cost?',
    a: 'Plans start from $35 for monthly access. Lifetime options cost more. Pricing and Active status are shown on this buy page before checkout.',
  },
  {
    q: 'What is included after purchase?',
    a: 'Digital license delivery, access to the current Windows loader build while your plan is active, and setup forums for ESP, aimbot, and radar tuning.',
  },
  {
    q: 'When should I not buy?',
    a: 'If loader status shows Updating after a patch, wait for Active. If you cannot accept account ban risk, do not purchase.',
  },
]

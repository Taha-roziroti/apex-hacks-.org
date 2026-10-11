import type { FaqItem } from './faqs'

export type LandingSection = {
  h2: string
  paragraphs: string[]
  bullets?: string[]
}

export type InternalLink = { label: string; href: string }

export const HOME_INTERNAL_LINKS: InternalLink[] = [
  { label: 'Pricing & plans', href: '/buy-apex-legends-cheats' },
  { label: 'Compare options', href: '/best-apex-legends-cheats' },
  { label: 'PC requirements', href: '/guides/apex-legends-cheats-pc' },
]

export const BUY_INTERNAL_LINKS: InternalLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Compare options', href: '/best-apex-legends-cheats' },
  { label: 'PC requirements', href: '/guides/apex-legends-cheats-pc' },
]

export const BEST_INTERNAL_LINKS: InternalLink[] = [
  { label: 'Pricing & plans', href: '/buy-apex-legends-cheats' },
  { label: 'Home', href: '/' },
  { label: 'Status & risk', href: '/guides/apex-legends-cheats-undetected' },
]

export const PC_GUIDE_INTERNAL_LINKS: InternalLink[] = [
  { label: 'Pricing & plans', href: '/buy-apex-legends-cheats' },
  { label: 'Home', href: '/' },
  { label: 'Status & risk', href: '/guides/apex-legends-cheats-undetected' },
]

export const UNDETECTED_GUIDE_INTERNAL_LINKS: InternalLink[] = [
  { label: 'Pricing & plans', href: '/buy-apex-legends-cheats' },
  { label: 'Compare options', href: '/best-apex-legends-cheats' },
  { label: 'PC requirements', href: '/guides/apex-legends-cheats-pc' },
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
    h2: 'PC compatibility',
    paragraphs: [
      'Tools run as external overlays and loaders on Windows — not on console. Match your game client (Steam or EA app) to the build notes on the buy page before you purchase.',
    ],
  },
  {
    h2: 'Windows 10 and 11',
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
    h2: 'Steam and EA app',
    paragraphs: [
      'Supported clients are Steam and the EA app. Verify Active status after every seasonal patch — loading while status shows Updating wastes a session.',
    ],
  },
  {
    h2: 'Typical modules',
    paragraphs: [
      'Player visuals, optional combat assist with FOV and smooth sliders, loot tags for death boxes and care packages, and a 2D radar for squad awareness in trios and ranked.',
    ],
  },
  {
    h2: 'Before you buy',
    paragraphs: [
      'Read requirements here, review risks on the status guide, compare plans on the comparison page, then checkout when status is Active.',
    ],
  },
]

export const UNDETECTED_GUIDE_SECTIONS: LandingSection[] = [
  {
    h2: 'Is any menu “safe”?',
    paragraphs: [
      'No third-party cheat is “safe” in the sense of zero risk. EA prohibits cheating and may close or penalize accounts. Treat any menu as high risk — use only what you accept losing.',
    ],
  },
  {
    h2: 'Easy Anti-Cheat on PC',
    paragraphs: [
      'Apex Legends uses Easy Anti-Cheat (EAC) on PC. EAC and server-side checks can change without notice. We rebuild after major updates, but compatibility and detection risk can shift at any time.',
    ],
  },
  {
    h2: 'When detection shifts',
    paragraphs: [
      'Seasonal updates, hotfixes, and anti-cheat tuning can flip a build from usable to flagged. That is why we publish Active or Updating status instead of promising permanent bypasses.',
    ],
  },
  {
    h2: 'Active vs Updating',
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
    h2: 'What to prioritize',
    paragraphs: [
      'Modules you will actually use: clear player visuals, distance tags, loot highlights, and optional combat assist with visible-check and FOV limits. Skip bloated multi-game menus that rarely track patch cadence.',
    ],
  },
  {
    h2: 'How we compare options',
    paragraphs: [
      'Use the table below for access models. We bias toward transparent status labels, single-game focus, and documented setup forums — not vague “lifetime undetected” slogans.',
    ],
  },
  {
    h2: 'Patch cadence in 2026',
    paragraphs: [
      'Expect frequent mid-season balance updates and regular EAC maintenance. Favor vendors that publish honest Updating windows and requirements you can verify before checkout.',
    ],
  },
  {
    h2: 'Pricing and access',
    paragraphs: [
      'Monthly access starts from $35 with lifetime tiers for longer commitments. Confirm live pricing on the buy page — digital delivery only.',
    ],
  },
  {
    h2: 'Fit for your queue style',
    paragraphs: [
      'Solo ranked players often prefer ESP-first configs; trio leads may lean on radar and loot tags. For Windows and client detail, read the PC guide before you buy.',
    ],
  },
]

export const PC_GUIDE_FAQS: FaqItem[] = [
  {
    q: 'Do builds work on Steam and the EA app?',
    a: 'Yes, when status is Active and you use a supported Windows client listed on the buy page. Re-check after patches.',
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
    q: 'Is anything 100% undetected?',
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
    q: 'What should I look for in 2026?',
    a: 'Honest status labels, verifiable PC requirements, modules you will use, and setup help — not vague undetected marketing.',
  },
  {
    q: 'How do I compare pricing?',
    a: 'Use this comparison, then open the buy page for live plans from $35 monthly and lifetime options.',
  },
  {
    q: 'Should I trust free cheat downloads?',
    a: 'No. Unknown loaders carry malware and ban risk. Use only the delivery channel from your order.',
  },
]

export const BUY_PAGE_FAQS: FaqItem[] = [
  {
    q: 'How much does access cost?',
    a: 'From $35 monthly; lifetime tiers cost more. Pricing and Active status are shown here before checkout.',
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

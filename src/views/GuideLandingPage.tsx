import { ArrowRight } from 'lucide-react'
import { Navbar } from '../components/Navbar'
import { SiteFooter } from '../components/SiteFooter'
import { FaqSection } from '../components/FaqSection'
import type { FaqItem } from '../data/faqs'
import type { InternalLink, LandingSection } from '../data/seo-landings'
import { BEST_COMPARISON_ROWS } from '../data/seo-landings'

type GuideLandingPageProps = {
  currentPath: string
  h1: string
  intro: string
  sections: LandingSection[]
  internalLinks: InternalLink[]
  imageSrc: string
  imageAlt: string
  faqs: FaqItem[]
  faqHeading: string
  showComparison?: boolean
  breadcrumbLabel: string
}

export function GuideLandingPage({
  currentPath,
  h1,
  intro,
  sections,
  internalLinks,
  imageSrc,
  imageAlt,
  faqs,
  faqHeading,
  showComparison = false,
  breadcrumbLabel,
}: GuideLandingPageProps) {
  return (
    <div className="content-surface min-h-screen overflow-x-hidden text-white">
      <div className="content-surface-nav">
        <Navbar currentPath={currentPath} />
      </div>

      <main className="page-x py-10 sm:py-14">
        <div className="mx-auto max-w-6xl">
          <nav
            className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-xs text-white/40"
            aria-label="Breadcrumb"
          >
            <a href="/" className="shrink-0 hover:text-white/70">Home</a>
            <span className="shrink-0">/</span>
            <span className="min-w-0 text-white/70">{breadcrumbLabel}</span>
          </nav>

          <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
              <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{h1}</h1>
              <p className="mt-4 text-sm leading-relaxed text-white/60 sm:text-base">{intro}</p>

              <ul className="mt-6 flex flex-wrap gap-3 text-sm">
                {internalLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="inline-flex items-center gap-1 rounded-full border border-z-soft/25 bg-white/5 px-3 py-1.5 text-white/85 transition-colors hover:border-z-soft/40 hover:text-white"
                    >
                      {link.label}
                      <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.75} />
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-10 space-y-12">
                {sections.map((section) => (
                  <section key={section.h2}>
                    <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                      {section.h2}
                    </h2>
                    {section.paragraphs.map((p) => (
                      <p key={p.slice(0, 40)} className="mt-3 text-sm leading-relaxed text-white/60">
                        {p}
                      </p>
                    ))}
                    {section.bullets && (
                      <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-white/60">
                        {section.bullets.map((b) => (
                          <li key={b}>{b}</li>
                        ))}
                      </ul>
                    )}
                  </section>
                ))}
              </div>

              {showComparison && (
                <section className="mt-12 overflow-x-auto">
                  <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                    Comparison table
                  </h2>
                  <table className="mt-4 w-full min-w-[640px] border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b border-white/10 text-white/50">
                        <th className="py-3 pr-4 font-medium">Option</th>
                        <th className="py-3 pr-4 font-medium">Features</th>
                        <th className="py-3 pr-4 font-medium">PC support</th>
                        <th className="py-3 pr-4 font-medium">Pricing</th>
                        <th className="py-3 font-medium">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {BEST_COMPARISON_ROWS.map((row) => (
                        <tr
                          key={row.name}
                          className={`border-b border-white/10 ${row.highlight ? 'bg-z-accent/10' : ''}`}
                        >
                          <td className="py-4 pr-4 font-medium text-white">
                            <a href={row.href} className="underline-offset-2 hover:underline">
                              {row.name}
                            </a>
                          </td>
                          <td className="py-4 pr-4 text-white/60">{row.features}</td>
                          <td className="py-4 pr-4 text-white/60">{row.platform}</td>
                          <td className="py-4 pr-4 text-white/60">{row.pricing}</td>
                          <td className="py-4 text-white/60">{row.status}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </section>
              )}
            </div>

            <div className="lg:col-span-5">
              <figure className="overflow-hidden rounded-2xl border border-z-soft/20">
                <img
                  src={imageSrc}
                  alt={imageAlt}
                  width={1200}
                  height={675}
                  loading="lazy"
                  className="h-auto w-full object-cover"
                />
              </figure>
            </div>
          </div>

          <FaqSection
            id="faq"
            className="mt-16"
            heading={faqHeading}
            intro="Short answers — see the full FAQ for delivery and loader detail."
            items={faqs}
            moreHref="/faq"
            moreLabel="Full FAQ →"
          />
        </div>
      </main>

      <SiteFooter currentPath={currentPath} />
    </div>
  )
}

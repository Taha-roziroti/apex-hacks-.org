export type BreadcrumbItem = {
  label: string
  href?: string
}

type BreadcrumbsProps = {
  items: BreadcrumbItem[]
  className?: string
}

/** Accessible breadcrumb trail — last item is the current page (not linked). */
export function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  if (!items.length) return null

  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-xs text-white/50">
        {items.map((item, index) => {
          const isLast = index === items.length - 1
          const showLink = Boolean(item.href) && !isLast

          return (
            <li key={`${item.label}-${index}`} className="flex min-w-0 max-w-full items-center gap-x-1.5">
              {index > 0 ? (
                <span className="shrink-0 text-white/30" aria-hidden>
                  /
                </span>
              ) : null}
              {showLink ? (
                <a href={item.href} className="shrink-0 hover:text-white/70">
                  {item.label}
                </a>
              ) : (
                <span
                  className={`min-w-0 truncate ${isLast ? 'text-white/70' : ''}`}
                  aria-current={isLast ? 'page' : undefined}
                  title={item.label}
                >
                  {item.label}
                </span>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

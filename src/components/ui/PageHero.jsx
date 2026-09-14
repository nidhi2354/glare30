import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Container from '@/components/ui/Container'
import Icon from '@/components/ui/Icon'

/**
 * Compact navy hero for inner pages — same visual language as the home Hero,
 * just shorter, with a breadcrumb trail on top.
 *
 * <PageHero eyebrow="About Us" title="Get to know" accent="Glare30" description="…" />
 */
export default function PageHero({ eyebrow, title, accent, description, breadcrumb = [] }) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-800">
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-50" />
      <div className="pointer-events-none absolute -top-28 -left-20 size-80 rounded-full bg-leaf-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 -bottom-28 size-80 rounded-full bg-gold-300/10 blur-3xl" />

      <Container className="relative pt-10 pb-14 sm:pt-12 sm:pb-16 lg:pt-16 lg:pb-20">
        {breadcrumb.length > 0 && (
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-medium text-navy-300 sm:text-sm">
              <li>
                <Link to="/" className="inline-flex items-center gap-1.5 transition-colors hover:text-gold-300">
                  <Icon name="home" className="size-3.5" />
                  Home
                </Link>
              </li>
              {breadcrumb.map((crumb) => (
                <Fragment key={crumb.label}>
                  <li aria-hidden="true" className="text-navy-500">
                    /
                  </li>
                  <li>
                    {crumb.to ? (
                      <Link to={crumb.to} className="transition-colors hover:text-gold-300">
                        {crumb.label}
                      </Link>
                    ) : (
                      <span aria-current="page" className="text-gold-300">
                        {crumb.label}
                      </span>
                    )}
                  </li>
                </Fragment>
              ))}
            </ol>
          </nav>
        )}

        <div className="animate-rise mt-7 max-w-3xl sm:mt-8">
          {eyebrow && (
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-[0.6875rem] font-semibold tracking-widest text-gold-200 uppercase ring-1 ring-white/15 sm:text-xs">
              <span className="size-1.5 shrink-0 rounded-full bg-leaf-400" />
              {eyebrow}
            </span>
          )}

          <h1 className="mt-5 text-3xl leading-[1.1] font-extrabold text-white sm:text-4xl lg:text-5xl xl:text-[3.5rem]">
            {title} {accent && <span className="text-gradient-gold">{accent}</span>}
          </h1>

          {description && (
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-navy-100 sm:text-lg">{description}</p>
          )}
        </div>
      </Container>

      {/* Soft fade into the next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-navy-900/50 to-transparent" />
    </section>
  )
}

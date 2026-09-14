import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'
import Icon from '@/components/ui/Icon'
import Reveal from '@/components/ui/Reveal'
import { contact, ctaBanner } from '@/data/site'

/**
 * Shared closing call-to-action. Used at the bottom of every page —
 * pass different copy (see `aboutPage.cta`) to tailor it per page.
 */
export default function CtaBanner({
  eyebrow = ctaBanner.eyebrow,
  title = ctaBanner.title,
  accent = ctaBanner.accent,
  description = ctaBanner.description,
  primaryLabel = 'Book Free Demo',
}) {
  return (
    <section className="bg-white py-14 sm:py-16">
      <Container>
        <Reveal className="relative overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-navy-700 via-navy-800 to-navy-900 px-6 py-10 sm:rounded-[2rem] sm:px-10 sm:py-12 lg:px-14 lg:py-14">
          <div className="pointer-events-none absolute inset-0 grid-pattern opacity-40" />
          <div className="pointer-events-none absolute -top-20 -right-10 size-64 rounded-full bg-gold-300/15 blur-3xl" />

          <div className="relative flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-leaf-500/20 px-3.5 py-1.5 text-xs font-bold tracking-wider text-leaf-300 uppercase">
                <Icon name="sparkles" className="size-3.5" />
                {eyebrow}
              </span>

              <h2 className="mt-5 text-2xl leading-tight font-bold text-white sm:text-3xl lg:text-4xl">
                {title} {accent && <span className="text-gradient-gold">{accent}</span>}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-navy-200 sm:text-base">{description}</p>
            </div>

            <div className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto lg:shrink-0 lg:flex-col xl:flex-row">
              <Button to="/contact" size="lg" icon="arrowRight" className="w-full sm:w-auto">
                {primaryLabel}
              </Button>
              <Button
                href={contact.phoneHref}
                variant="ghostLight"
                size="lg"
                icon="phone"
                iconPosition="left"
                className="w-full sm:w-auto"
              >
                {contact.phone}
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

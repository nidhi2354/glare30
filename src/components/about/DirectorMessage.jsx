import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'
import Icon from '@/components/ui/Icon'
import Reveal from '@/components/ui/Reveal'
import { aboutPage, brand, contact } from '@/data/site'

const { director } = aboutPage

/** Values still waiting on the client are marked `TODO:` in site.js — don't print those. */
const isPlaceholder = (value) => !value || value.trim().startsWith('TODO')

export default function DirectorMessage() {
  const showName = !isPlaceholder(director.name)

  return (
    <section className="relative isolate overflow-hidden bg-navy-800 py-16 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-40" />
      <div className="pointer-events-none absolute -top-24 -left-20 size-80 rounded-full bg-leaf-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 -bottom-24 size-80 rounded-full bg-gold-300/10 blur-3xl" />

      <Container className="relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-[0.6875rem] font-semibold tracking-widest text-gold-300 uppercase ring-1 ring-white/15 sm:text-xs">
            <span className="size-1.5 rounded-full bg-gold-300" />
            {director.eyebrow}
          </span>

          <Icon name="quote" className="mx-auto mt-8 size-9 text-gold-300/50 sm:size-10" />

          <blockquote className="mt-6">
            <p className="font-display text-xl leading-snug font-semibold text-white text-balance sm:text-2xl lg:text-[1.75rem]">
              &ldquo;{director.quote}&rdquo;
            </p>
          </blockquote>

          <figcaption className="mt-8 flex flex-col items-center gap-3">
            <span className="inline-flex size-14 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15">
              <img src={brand.logo} alt="" width="40" height="40" className="size-9 rounded-full" />
            </span>
            <span className="leading-tight">
              {showName && <span className="block font-display text-base font-bold text-white">{director.name}</span>}
              <span className="mt-0.5 block text-sm font-medium text-navy-300">{director.role}</span>
            </span>
          </figcaption>

          <div className="mx-auto mt-10 max-w-xl rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm sm:p-6">
            <p className="text-sm leading-relaxed text-navy-100 sm:text-base">{director.note}</p>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Button to="/contact" size="md" icon="arrowRight" className="w-full sm:w-auto">
                Book a Free Demo
              </Button>
              <Button
                href={`https://wa.me/${contact.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                variant="ghostLight"
                size="md"
                icon="whatsapp"
                iconPosition="left"
                className="w-full sm:w-auto"
              >
                WhatsApp Us
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

import Container from '@/components/ui/Container'
import Icon from '@/components/ui/Icon'
import Reveal from '@/components/ui/Reveal'
import SectionHeading from '@/components/ui/SectionHeading'
import { coursesPage } from '@/data/site'

const { includes } = coursesPage

export default function Includes() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-800 py-16 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-40" />
      <div className="pointer-events-none absolute -top-24 -left-24 size-96 rounded-full bg-leaf-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 -bottom-24 size-96 rounded-full bg-gold-300/10 blur-3xl" />

      <Container className="relative">
        <SectionHeading
          light
          eyebrow={includes.eyebrow}
          title={includes.title}
          accent={includes.accent}
          description={includes.description}
        />

        <ul className="mt-12 grid gap-4 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {includes.items.map((item, i) => (
            <Reveal
              key={item.title}
              as="li"
              delay={i * 70}
              className="group flex h-full flex-col rounded-3xl bg-white/[0.06] p-6 ring-1 ring-white/10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:ring-gold-300/40"
            >
              <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-gold-300/15 text-gold-300 ring-1 ring-gold-300/20 transition-colors group-hover:bg-gold-300 group-hover:text-navy-800">
                <Icon name={item.icon} className="size-6" />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-white">{item.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-navy-200">{item.description}</p>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  )
}

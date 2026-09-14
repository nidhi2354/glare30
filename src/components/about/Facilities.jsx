import Container from '@/components/ui/Container'
import Icon from '@/components/ui/Icon'
import Reveal from '@/components/ui/Reveal'
import SectionHeading from '@/components/ui/SectionHeading'
import { aboutPage, contact } from '@/data/site'

const { facilities } = aboutPage

export default function Facilities() {
  return (
    <section className="bg-navy-50/40 py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow={facilities.eyebrow}
          title={facilities.title}
          accent={facilities.accent}
          description={facilities.description}
        />

        <ul className="mt-12 grid gap-5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {facilities.items.map((item, i) => (
            <Reveal
              key={item.title}
              as="li"
              delay={i * 80}
              className="group flex h-full flex-col rounded-3xl border border-navy-100 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
            >
              <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-navy-800 text-gold-300 transition-transform duration-300 group-hover:scale-105">
                <Icon name={item.icon} className="size-6" />
              </span>
              <h3 className="mt-5 text-base font-bold text-navy-800 sm:text-lg">{item.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-navy-500">{item.description}</p>
            </Reveal>
          ))}
        </ul>

        {/* Where to find us */}
        <Reveal
          delay={120}
          className="mt-8 flex flex-col gap-5 rounded-3xl border border-navy-100 bg-white p-6 sm:mt-10 sm:flex-row sm:items-center sm:justify-between sm:p-7"
        >
          <div className="flex items-start gap-4">
            <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-2xl bg-leaf-50 text-leaf-600">
              <Icon name="mapPin" className="size-6" />
            </span>
            <div className="min-w-0">
              <p className="text-[0.6875rem] font-bold tracking-widest text-navy-400 uppercase">Where to find us</p>
              <p className="mt-1.5 text-sm leading-relaxed font-semibold text-navy-700 sm:text-base">
                {contact.address}
              </p>
              <p className="mt-1 flex items-center gap-2 text-xs text-navy-500 sm:text-sm">
                <Icon name="clock" className="size-4 shrink-0 text-leaf-500" />
                {contact.timings}
              </p>
            </div>
          </div>

          <a
            href={contact.mapUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-navy-200 px-5 py-3 text-sm font-semibold text-navy-700 transition-colors hover:border-navy-400 hover:bg-navy-50"
          >
            Open in Maps
            <Icon name="arrowRight" className="size-4" />
          </a>
        </Reveal>
      </Container>
    </section>
  )
}

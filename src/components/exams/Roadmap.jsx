import Container from '@/components/ui/Container'
import Icon from '@/components/ui/Icon'
import Reveal from '@/components/ui/Reveal'
import SectionHeading from '@/components/ui/SectionHeading'
import { examsPage } from '@/data/site'
import { cn } from '@/utils/cn'

const { roadmap } = examsPage

const ACCENTS = {
  leaf: { dot: 'bg-leaf-500', icon: 'bg-leaf-500 text-white', tag: 'bg-leaf-50 text-leaf-700 ring-leaf-100' },
  navy: { dot: 'bg-navy-700', icon: 'bg-navy-700 text-white', tag: 'bg-navy-50 text-navy-700 ring-navy-100' },
  gold: { dot: 'bg-gold-300', icon: 'bg-gold-300 text-navy-800', tag: 'bg-gold-50 text-gold-700 ring-gold-100' },
}

/** Class-by-class view of which exam is prepared for when. */
export default function Roadmap() {
  return (
    <section className="bg-navy-50/40 py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow={roadmap.eyebrow}
          title={roadmap.title}
          accent={roadmap.accent}
          description={roadmap.description}
        />

        <ol className="relative mt-12 grid gap-5 sm:mt-14 lg:grid-cols-4 lg:gap-6">
          {/* Desktop connector */}
          <span className="pointer-events-none absolute top-6 right-12 left-12 hidden h-px bg-gradient-to-r from-navy-200 via-navy-200 to-transparent lg:block" />

          {roadmap.stages.map((stage, i) => {
            const accent = ACCENTS[stage.accent] ?? ACCENTS.navy

            return (
              <Reveal key={stage.classes} as="li" delay={i * 90} className="relative">
                <div className="flex h-full flex-col rounded-3xl border border-navy-100 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                  <span
                    className={cn(
                      'relative z-10 inline-flex size-12 items-center justify-center rounded-2xl',
                      accent.icon,
                    )}
                  >
                    <Icon name={stage.icon} className="size-6" />
                  </span>

                  <h3 className="mt-5 font-display text-lg font-bold text-navy-800">{stage.classes}</h3>

                  <ul className="mt-3 flex flex-wrap gap-2">
                    {stage.exams.map((exam) => (
                      <li
                        key={exam}
                        className={cn(
                          'rounded-full px-2.5 py-1 text-[0.6875rem] font-bold tracking-wide ring-1',
                          accent.tag,
                        )}
                      >
                        {exam}
                      </li>
                    ))}
                  </ul>

                  <p className="mt-4 text-sm leading-relaxed text-navy-500">{stage.description}</p>
                </div>
              </Reveal>
            )
          })}
        </ol>
      </Container>
    </section>
  )
}

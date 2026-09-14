import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'
import Icon from '@/components/ui/Icon'
import Reveal from '@/components/ui/Reveal'
import { cn } from '@/utils/cn'

const ACCENTS = {
  leaf: { rule: 'bg-leaf-500', tick: 'text-leaf-500' },
  navy: { rule: 'bg-navy-700', tick: 'text-navy-600' },
  gold: { rule: 'bg-gold-300', tick: 'text-gold-500' },
}

/** The body of a single course page: what is covered, plus a facts panel. */
export default function CourseOverview({ program }) {
  const accent = ACCENTS[program.accent] ?? ACCENTS.navy

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-16">
          {/* What is covered */}
          <div className="lg:col-span-7">
            <h2 className="text-2xl font-bold text-navy-800 sm:text-3xl">What is covered</h2>
            <span className={cn('mt-4 block h-1 w-16 rounded-full', accent.rule)} />

            <ol className="mt-8 space-y-4">
              {program.detail.covers.map((item, i) => (
                <Reveal
                  key={item.title}
                  as="li"
                  delay={i * 80}
                  className="flex gap-4 rounded-3xl border border-navy-100 bg-white p-5 transition-shadow duration-300 hover:shadow-card sm:p-6"
                >
                  <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-xl bg-navy-800 font-display text-sm font-extrabold text-gold-300">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="min-w-0">
                    <span className="block text-base font-bold text-navy-800">{item.title}</span>
                    <span className="mt-1.5 block text-sm leading-relaxed text-navy-500">{item.description}</span>
                  </span>
                </Reveal>
              ))}
            </ol>

            <p className="mt-6 flex gap-3 rounded-3xl border border-leaf-100 bg-leaf-50 p-5 text-sm leading-relaxed font-medium text-leaf-700 sm:text-base">
              <Icon name="target" className="size-5 shrink-0 translate-y-0.5" />
              <span>
                <span className="font-bold">Where it leads — </span>
                {program.detail.outcome}
              </span>
            </p>
          </div>

          {/* Facts panel */}
          <Reveal delay={120} className="lg:col-span-5">
            <div className="rounded-[1.75rem] border border-navy-100 bg-white p-6 shadow-card sm:rounded-[2rem] sm:p-7 lg:sticky lg:top-28">
              <p className="text-[0.6875rem] font-bold tracking-widest text-navy-400 uppercase">Subjects Covered</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {program.subjects.map((subject) => (
                  <li
                    key={subject}
                    className="rounded-lg border border-navy-100 bg-navy-50/60 px-3 py-1.5 text-xs font-semibold text-navy-600 sm:text-sm"
                  >
                    {subject}
                  </li>
                ))}
              </ul>

              {program.note && (
                <p className="mt-5 flex gap-2.5 rounded-2xl border border-leaf-100 bg-leaf-50 p-3.5 text-xs leading-relaxed font-medium text-leaf-700 sm:text-sm">
                  <Icon name="sparkles" className="size-4 shrink-0 translate-y-0.5" />
                  {program.note}
                </p>
              )}

              {program.streams && (
                <>
                  <p className="mt-6 text-[0.6875rem] font-bold tracking-widest text-navy-400 uppercase">
                    Streams Available
                  </p>
                  <ul className="mt-3 grid gap-3 sm:grid-cols-2">
                    {program.streams.map((stream) => (
                      <li
                        key={stream.code}
                        className="flex items-center gap-3 rounded-2xl bg-navy-800 px-3.5 py-3 text-white"
                      >
                        <Icon name={stream.icon} className="size-5 shrink-0 text-gold-300" />
                        <span className="min-w-0 leading-tight">
                          <span className="block text-sm font-bold">{stream.code}</span>
                          <span className="block truncate text-[0.6875rem] text-navy-200">{stream.for}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              <p className="mt-6 text-[0.6875rem] font-bold tracking-widest text-navy-400 uppercase">Highlights</p>
              <ul className="mt-3 space-y-2.5">
                {program.highlights.map((point) => (
                  <li key={point} className="flex gap-2.5 text-sm text-navy-600">
                    <Icon
                      name="check"
                      className={cn('size-4 shrink-0 translate-y-0.5', accent.tick)}
                      strokeWidth={2.5}
                    />
                    {point}
                  </li>
                ))}
              </ul>

              <Button to="/contact" size="md" icon="arrowRight" className="mt-7 w-full">
                Enquire About This Batch
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

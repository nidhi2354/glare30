import Container from '@/components/ui/Container'
import Icon from '@/components/ui/Icon'
import Reveal from '@/components/ui/Reveal'
import { exams } from '@/data/site'

/**
 * Full detail for each competitive exam — what it is, who sits it,
 * and exactly how it is prepared for in class.
 */
export default function ExamList() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <ul className="grid gap-6 lg:gap-7">
          {exams.map((exam, i) => (
            <Reveal
              key={exam.name}
              as="li"
              delay={i * 60}
              className="group overflow-hidden rounded-[1.75rem] border border-navy-100 bg-white shadow-sm transition-all duration-300 hover:shadow-card sm:rounded-[2rem]"
            >
              <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-12 lg:gap-10">
                {/* Identity */}
                <div className="lg:col-span-5">
                  <div className="flex items-start justify-between gap-4">
                    <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-navy-800 text-gold-300 transition-transform duration-300 group-hover:scale-105">
                      <Icon name={exam.icon} className="size-6" />
                    </span>
                    <span className="rounded-full bg-navy-50 px-3 py-1 text-[0.6875rem] font-bold text-navy-600 ring-1 ring-navy-100">
                      {exam.level}
                    </span>
                  </div>

                  <h2 className="mt-5 font-display text-2xl font-extrabold text-navy-800 sm:text-3xl">{exam.name}</h2>
                  <p className="mt-1 text-sm font-semibold text-leaf-600">{exam.full}</p>
                  <p className="mt-4 text-sm leading-relaxed text-navy-500 sm:text-base">{exam.description}</p>
                </div>

                {/* Preparation */}
                <div className="lg:col-span-7">
                  <div className="h-full rounded-3xl bg-navy-50/60 p-5 ring-1 ring-navy-100 sm:p-6">
                    <p className="text-[0.6875rem] font-bold tracking-widest text-navy-400 uppercase">
                      How we prepare for it
                    </p>
                    <ul className="mt-4 space-y-3">
                      {exam.prepare.map((point) => (
                        <li key={point} className="flex gap-3 text-sm leading-relaxed text-navy-600 sm:text-base">
                          <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-leaf-500/15">
                            <Icon name="check" className="size-3.5 text-leaf-600" strokeWidth={2.5} />
                          </span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  )
}

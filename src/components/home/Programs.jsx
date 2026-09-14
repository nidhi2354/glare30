import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'
import Icon from '@/components/ui/Icon'
import Reveal from '@/components/ui/Reveal'
import SectionHeading from '@/components/ui/SectionHeading'
import { programs } from '@/data/site'
import { cn } from '@/utils/cn'

const ACCENTS = {
  leaf: { chip: 'bg-leaf-50 text-leaf-700 ring-leaf-100', icon: 'bg-leaf-500', bar: 'bg-leaf-500' },
  navy: { chip: 'bg-navy-50 text-navy-700 ring-navy-100', icon: 'bg-navy-700', bar: 'bg-navy-700' },
  gold: { chip: 'bg-gold-50 text-gold-700 ring-gold-100', icon: 'bg-gold-300 !text-navy-800', bar: 'bg-gold-300' },
}

function ProgramCard({ program, index }) {
  const accent = ACCENTS[program.accent] ?? ACCENTS.navy

  return (
    <Reveal
      as="article"
      delay={index * 100}
      className={cn(
        'group relative flex h-full flex-col overflow-hidden rounded-3xl border bg-white p-6 transition-all duration-300 sm:p-7',
        'hover:-translate-y-1 hover:shadow-card',
        program.featured ? 'border-navy-700/15 shadow-card ring-1 ring-navy-700/5' : 'border-navy-100 shadow-sm',
      )}
    >
      <span className={cn('absolute inset-x-0 top-0 h-1', accent.bar)} />

      {program.featured && (
        <span className="absolute top-5 right-5 rounded-full bg-gold-300 px-3 py-1 text-[0.625rem] font-bold tracking-wider text-navy-800 uppercase">
          Most Popular
        </span>
      )}

      <span className={cn('inline-flex size-12 items-center justify-center rounded-2xl text-white', accent.icon)}>
        <Icon name={program.icon} className="size-6" />
      </span>

      <span
        className={cn(
          'mt-6 inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-bold tracking-wide ring-1',
          accent.chip,
        )}
      >
        {program.classes}
      </span>

      <h3 className="mt-3 text-xl font-bold text-navy-800 sm:text-2xl">{program.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-navy-500 sm:text-base">{program.summary}</p>

      {/* Subjects */}
      <div className="mt-6">
        <p className="text-[0.6875rem] font-bold tracking-widest text-navy-400 uppercase">Subjects Covered</p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {program.subjects.map((subject) => (
            <li
              key={subject}
              className="rounded-lg border border-navy-100 bg-navy-50/60 px-2.5 py-1.5 text-xs font-semibold text-navy-600"
            >
              {subject}
            </li>
          ))}
        </ul>
      </div>

      {/* Streams (Class 11th–12th only) */}
      {program.streams && (
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {program.streams.map((stream) => (
            <li key={stream.code} className="flex items-center gap-3 rounded-2xl bg-navy-800 px-3.5 py-3 text-white">
              <Icon name={stream.icon} className="size-5 shrink-0 text-gold-300" />
              <span className="min-w-0 leading-tight">
                <span className="block text-sm font-bold">{stream.code}</span>
                <span className="block truncate text-[0.6875rem] text-navy-200">{stream.for}</span>
              </span>
            </li>
          ))}
        </ul>
      )}

      {/* Note */}
      {program.note && (
        <p className="mt-5 flex gap-2.5 rounded-2xl border border-leaf-100 bg-leaf-50 p-3.5 text-xs leading-relaxed font-medium text-leaf-700 sm:text-sm">
          <Icon name="sparkles" className="size-4 shrink-0 translate-y-0.5" />
          {program.note}
        </p>
      )}

      {/* Highlights */}
      <ul className="mt-6 space-y-2.5 border-t border-navy-50 pt-6">
        {program.highlights.map((point) => (
          <li key={point} className="flex gap-2.5 text-sm text-navy-600">
            <Icon name="check" className="size-4 shrink-0 translate-y-0.5 text-leaf-500" strokeWidth={2.5} />
            {point}
          </li>
        ))}
      </ul>

      <Button
        to={`/courses/${program.id}`}
        variant="outline"
        size="sm"
        icon="arrowRight"
        className="mt-7 w-full group-hover:border-navy-400"
      >
        View Full Details
      </Button>
    </Reveal>
  )
}

export default function Programs() {
  return (
    <section id="programs" className="scroll-mt-24 bg-navy-50/40 py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow="Our Programs"
          title="From Class 6th to 12th,"
          accent="with you at every step"
          description="We follow the C.B.S.E. curriculum, along with preparation for competitive exams like NTSE, JSTSE and various Olympiads."
        />

        <div className="mt-12 grid gap-6 sm:mt-14 lg:grid-cols-3 lg:gap-7">
          {programs.map((program, i) => (
            <ProgramCard key={program.id} program={program} index={i} />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button to="/courses" variant="navy" size="md" icon="arrowRight">
            Explore All Courses
          </Button>
        </div>
      </Container>
    </section>
  )
}

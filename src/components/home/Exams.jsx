import { Link } from 'react-router-dom'
import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'
import Icon from '@/components/ui/Icon'
import Reveal from '@/components/ui/Reveal'
import SectionHeading from '@/components/ui/SectionHeading'
import { exams } from '@/data/site'

export default function Exams() {
  return (
    <section id="exams" className="relative scroll-mt-24 overflow-hidden bg-navy-800 py-16 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-40" />
      <div className="pointer-events-none absolute top-1/3 -left-32 size-96 rounded-full bg-leaf-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 -bottom-24 size-96 rounded-full bg-gold-300/10 blur-3xl" />

      <Container className="relative">
        <SectionHeading
          light
          eyebrow="Competitive Exams"
          title="Boards and entrance exams,"
          accent="prepared together"
          description="School syllabus and competitive preparation are never treated as two separate things — both run in parallel inside the same classroom."
        />

        <div className="mt-12 grid gap-4 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {exams.map((exam, i) => (
            <Reveal
              key={exam.name}
              as="article"
              delay={i * 80}
              className="group relative flex flex-col rounded-3xl bg-white/[0.06] p-6 ring-1 ring-white/10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:ring-gold-300/40"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-gold-300/15 text-gold-300 ring-1 ring-gold-300/20 transition-colors group-hover:bg-gold-300 group-hover:text-navy-800">
                  <Icon name={exam.icon} className="size-6" />
                </span>
                <span className="rounded-full bg-white/5 px-3 py-1 text-[0.6875rem] font-semibold text-navy-200 ring-1 ring-white/10">
                  {exam.level}
                </span>
              </div>

              <h3 className="mt-5 font-display text-xl font-bold text-white">{exam.name}</h3>
              <p className="mt-1 text-xs font-medium tracking-wide text-gold-200/80">{exam.full}</p>
              <p className="mt-3 text-sm leading-relaxed text-navy-200">{exam.description}</p>
            </Reveal>
          ))}

          {/* CTA tile */}
          <Reveal
            delay={exams.length * 80}
            className="flex flex-col justify-center rounded-3xl bg-gradient-to-br from-leaf-500 to-leaf-600 p-6 text-white shadow-soft sm:col-span-2 lg:col-span-1"
          >
            <Icon name="chat" className="size-8 text-white/90" />
            <h3 className="mt-4 font-display text-xl font-bold">Not sure which program is right?</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/85">
              Talk to us — we&apos;ll suggest the right batch based on your child&apos;s class and goals.
            </p>
            <Link
              to="/contact"
              className="mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-leaf-700 transition-transform hover:-translate-y-0.5"
            >
              Talk to us
              <Icon name="arrowRight" className="size-4" />
            </Link>
          </Reveal>
        </div>
        <div className="mt-10 flex justify-center">
          <Button to="/exams" variant="ghostLight" size="md" icon="arrowRight">
            See How We Prepare for Each Exam
          </Button>
        </div>
      </Container>
    </section>
  )
}

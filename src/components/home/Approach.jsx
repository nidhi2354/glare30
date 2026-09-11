import Container from '@/components/ui/Container'
import Reveal from '@/components/ui/Reveal'
import SectionHeading from '@/components/ui/SectionHeading'
import { approach } from '@/data/site'

export default function Approach() {
  return (
    <section className="bg-navy-50/40 py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading
          align="left"
          eyebrow="How We Teach"
          title="A simple four-step"
          accent="learning cycle"
          description="Every topic moves through these four steps — which is exactly why the concepts stay with students far longer."
        />

        <ol className="relative mt-12 grid gap-6 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {/* Desktop connector line */}
          <span className="pointer-events-none absolute top-7 right-10 left-10 hidden h-px bg-gradient-to-r from-navy-200 via-navy-200 to-transparent lg:block" />

          {approach.map((step, i) => (
            <Reveal key={step.step} as="li" delay={i * 90} className="relative">
              <span className="relative z-10 inline-flex size-14 items-center justify-center rounded-2xl bg-white font-display text-lg font-extrabold text-navy-700 shadow-card ring-1 ring-navy-100">
                {step.step}
              </span>
              <h3 className="mt-5 text-lg font-bold text-navy-800">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-500">{step.description}</p>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  )
}

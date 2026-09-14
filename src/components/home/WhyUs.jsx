import Container from '@/components/ui/Container'
import Icon from '@/components/ui/Icon'
import Reveal from '@/components/ui/Reveal'
import SectionHeading from '@/components/ui/SectionHeading'
import { whyUs } from '@/data/site'

export default function WhyUs() {
  return (
    <section id="why-us" className="scroll-mt-24 bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow="Why Glare30"
          title="A way of teaching that"
          accent="delivers results"
          description="Every batch is built around the things that make a student confident in both board and competitive exams."
        />

        <div className="mt-12 grid gap-5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {whyUs.map((item, i) => (
            <Reveal
              key={item.title}
              as="article"
              delay={i * 70}
              className="group relative overflow-hidden rounded-3xl border border-navy-100 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-card sm:p-7"
            >
              <span className="absolute -top-10 -right-10 size-28 rounded-full bg-gold-300/0 blur-2xl transition-colors duration-500 group-hover:bg-gold-300/25" />

              <span className="relative inline-flex size-12 items-center justify-center rounded-2xl bg-navy-50 text-navy-700 transition-colors duration-300 group-hover:bg-navy-700 group-hover:text-gold-300">
                <Icon name={item.icon} className="size-6" />
              </span>

              <h3 className="relative mt-5 text-lg font-bold text-navy-800">{item.title}</h3>
              <p className="relative mt-2.5 text-sm leading-relaxed text-navy-500">{item.description}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}

import Container from '@/components/ui/Container'
import Icon from '@/components/ui/Icon'
import Reveal from '@/components/ui/Reveal'
import SectionHeading from '@/components/ui/SectionHeading'
import { aboutPage } from '@/data/site'

const { values } = aboutPage

export default function Values() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow={values.eyebrow}
          title={values.title}
          accent={values.accent}
          description={values.description}
        />

        <ul className="mt-12 grid gap-5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {values.items.map((item, i) => (
            <Reveal
              key={item.title}
              as="li"
              delay={i * 70}
              className="group relative overflow-hidden rounded-3xl border border-navy-100 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-card sm:p-7"
            >
              <span className="absolute -top-10 -right-10 size-28 rounded-full bg-leaf-500/0 blur-2xl transition-colors duration-500 group-hover:bg-leaf-500/20" />

              <span className="relative inline-flex size-12 items-center justify-center rounded-2xl bg-navy-50 text-navy-700 transition-colors duration-300 group-hover:bg-navy-700 group-hover:text-gold-300">
                <Icon name={item.icon} className="size-6" />
              </span>

              <h3 className="relative mt-5 text-lg font-bold text-navy-800">{item.title}</h3>
              <p className="relative mt-2.5 text-sm leading-relaxed text-navy-500">{item.description}</p>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  )
}

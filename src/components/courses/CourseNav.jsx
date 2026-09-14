import { Link } from 'react-router-dom'
import Container from '@/components/ui/Container'
import Icon from '@/components/ui/Icon'
import Reveal from '@/components/ui/Reveal'
import SectionHeading from '@/components/ui/SectionHeading'
import { coursesPage, programs } from '@/data/site'

const { intro } = coursesPage

/** The three class groups — each card opens its own course page. */
export default function CourseNav() {
  return (
    <section className="bg-white py-14 sm:py-16 lg:py-20">
      <Container>
        <SectionHeading
          eyebrow={intro.eyebrow}
          title={intro.title}
          accent={intro.accent}
          description={intro.description}
        />

        <ol className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-3 sm:gap-5">
          {programs.map((program, i) => (
            <Reveal key={program.id} as="li" delay={i * 80}>
              <Link
                to={`/courses/${program.id}`}
                className="group flex h-full flex-col rounded-3xl border border-navy-100 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-navy-300 hover:shadow-card sm:p-6"
              >
                <span className="font-display text-3xl font-extrabold text-navy-100 transition-colors group-hover:text-gold-300">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="mt-3 text-sm font-bold tracking-wide text-leaf-600">{program.classes}</span>
                <span className="mt-1 text-lg font-bold text-navy-800">{program.title}</span>
                <span className="mt-3 line-clamp-3 text-sm leading-relaxed text-navy-500">{program.summary}</span>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-navy-500 transition-colors group-hover:text-navy-800">
                  See what is covered
                  <Icon
                    name="arrowRight"
                    className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </span>
              </Link>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  )
}

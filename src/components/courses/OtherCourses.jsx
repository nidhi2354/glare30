import { Link } from 'react-router-dom'
import Container from '@/components/ui/Container'
import Icon from '@/components/ui/Icon'
import Reveal from '@/components/ui/Reveal'
import { programs } from '@/data/site'

/** Links to the other class groups, so a visitor never hits a dead end. */
export default function OtherCourses({ currentId }) {
  const others = programs.filter((program) => program.id !== currentId)

  return (
    <section className="bg-navy-50/40 py-16 sm:py-20">
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold tracking-widest text-navy-600 uppercase ring-1 ring-navy-100">
              <span className="size-1.5 rounded-full bg-leaf-500" />
              Other Programs
            </span>
            <h2 className="mt-4 text-2xl font-bold text-navy-800 sm:text-3xl">Looking for a different class?</h2>
          </div>

          <Link
            to="/courses"
            className="inline-flex items-center gap-2 text-sm font-semibold text-navy-600 transition-colors hover:text-navy-800"
          >
            All courses
            <Icon name="arrowRight" className="size-4" />
          </Link>
        </div>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2 sm:gap-5">
          {others.map((program, i) => (
            <Reveal key={program.id} as="li" delay={i * 80}>
              <Link
                to={`/courses/${program.id}`}
                className="group flex h-full flex-col rounded-3xl border border-navy-100 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-navy-300 hover:shadow-card"
              >
                <span className="inline-flex size-11 items-center justify-center rounded-2xl bg-navy-50 text-navy-700 transition-colors duration-300 group-hover:bg-navy-800 group-hover:text-gold-300">
                  <Icon name={program.icon} className="size-5" />
                </span>
                <span className="mt-4 text-sm font-bold tracking-wide text-leaf-600">{program.classes}</span>
                <span className="mt-1 text-lg font-bold text-navy-800">{program.title}</span>
                <span className="mt-3 line-clamp-2 text-sm leading-relaxed text-navy-500">{program.summary}</span>
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
        </ul>
      </Container>
    </section>
  )
}

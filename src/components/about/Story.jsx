import Container from '@/components/ui/Container'
import Icon from '@/components/ui/Icon'
import Reveal from '@/components/ui/Reveal'
import SectionHeading from '@/components/ui/SectionHeading'
import { aboutPage, brand } from '@/data/site'

const { story, glance } = aboutPage

export default function Story() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-12 xl:gap-16">
          {/* Copy */}
          <div className="lg:col-span-7">
            <SectionHeading
              align="left"
              eyebrow={story.eyebrow}
              title={story.title}
              accent={story.accent}
            />

            <div className="mt-6 space-y-4">
              {story.paragraphs.map((paragraph) => (
                <p key={paragraph} className="max-w-2xl text-base leading-relaxed text-navy-500 sm:text-lg">
                  {paragraph}
                </p>
              ))}
            </div>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {story.points.map((point, i) => (
                <Reveal
                  key={point}
                  as="li"
                  delay={i * 70}
                  className="flex items-start gap-3 rounded-2xl border border-navy-100 bg-navy-50/50 px-4 py-3.5"
                >
                  <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-leaf-500/15">
                    <Icon name="check" className="size-3.5 text-leaf-600" strokeWidth={2.5} />
                  </span>
                  <span className="text-sm leading-snug font-medium text-navy-700">{point}</span>
                </Reveal>
              ))}
            </ul>
          </div>

          {/* At a glance */}
          <Reveal delay={120} className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-navy-700 via-navy-800 to-navy-900 p-6 sm:rounded-[2rem] sm:p-8">
              <div className="pointer-events-none absolute inset-0 grid-pattern opacity-40" />
              <div className="pointer-events-none absolute -top-16 -right-12 size-56 rounded-full bg-leaf-500/20 blur-3xl" />

              <div className="relative flex items-center gap-3">
                <img src={brand.logo} alt="" width="48" height="48" className="size-11 shrink-0 rounded-full" />
                <span className="leading-tight">
                  <span className="block font-display text-base font-bold text-white sm:text-lg">
                    {brand.fullName}
                  </span>
                  <span className="block text-xs font-medium text-navy-300">{brand.tagline}</span>
                </span>
              </div>

              <p className="relative mt-6 text-[0.6875rem] font-bold tracking-widest text-gold-300 uppercase">
                At a Glance
              </p>

              <dl className="relative mt-4 grid grid-cols-2 gap-3 sm:gap-4">
                {glance.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 transition-colors hover:bg-white/10"
                  >
                    <Icon name={item.icon} className="size-5 text-leaf-300" />
                    <dt className="sr-only">{item.label}</dt>
                    <dd className="mt-3 font-display text-xl font-extrabold text-white sm:text-2xl">{item.value}</dd>
                    <p className="mt-1 text-[0.6875rem] leading-tight font-semibold tracking-wide text-navy-300 uppercase">
                      {item.label}
                    </p>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

import Container from '@/components/ui/Container'
import Icon from '@/components/ui/Icon'
import Reveal from '@/components/ui/Reveal'
import { aboutPage } from '@/data/site'
import { cn } from '@/utils/cn'

const ACCENTS = {
  mission: { bar: 'bg-leaf-500', icon: 'bg-leaf-500 text-white', label: 'text-leaf-600', tick: 'text-leaf-500' },
  vision: { bar: 'bg-gold-300', icon: 'bg-gold-300 text-navy-800', label: 'text-gold-600', tick: 'text-gold-500' },
}

export default function MissionVision() {
  return (
    <section className="bg-navy-50/40 py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-7">
          {aboutPage.missionVision.map((item, i) => {
            const accent = ACCENTS[item.key] ?? ACCENTS.mission

            return (
              <Reveal
                key={item.key}
                as="article"
                delay={i * 110}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-navy-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-card sm:p-8"
              >
                <span className={cn('absolute inset-x-0 top-0 h-1', accent.bar)} />

                <span
                  className={cn(
                    'inline-flex size-12 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-105',
                    accent.icon,
                  )}
                >
                  <Icon name={item.icon} className="size-6" />
                </span>

                <p className={cn('mt-6 text-xs font-bold tracking-widest uppercase', accent.label)}>{item.label}</p>
                <h2 className="mt-2 text-xl leading-snug font-bold text-navy-800 sm:text-2xl">{item.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-navy-500 sm:text-base">{item.description}</p>

                <ul className="mt-6 space-y-2.5 border-t border-navy-50 pt-6">
                  {item.points.map((point) => (
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
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

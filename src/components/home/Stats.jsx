import Container from '@/components/ui/Container'
import Icon from '@/components/ui/Icon'
import Reveal from '@/components/ui/Reveal'
import { stats } from '@/data/site'

export default function Stats() {
  return (
    <section className="relative z-10 -mt-px bg-navy-900 py-10 sm:py-12">
      <Container>
        <dl className="grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-6 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal
              key={stat.label}
              delay={i * 80}
              className="flex items-center gap-3 sm:gap-4 lg:justify-center lg:border-l lg:border-white/10 lg:first:border-l-0"
            >
              <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-2xl bg-white/5 text-gold-300 ring-1 ring-white/10 sm:size-12">
                <Icon name={stat.icon} className="size-5 sm:size-6" />
              </span>
              <div className="min-w-0">
                <dd className="font-display text-lg leading-tight font-extrabold text-white sm:text-xl lg:text-2xl">
                  {stat.value}
                </dd>
                <dt className="mt-0.5 text-xs leading-snug font-medium text-navy-300 sm:text-sm">{stat.label}</dt>
              </div>
            </Reveal>
          ))}
        </dl>
      </Container>
    </section>
  )
}

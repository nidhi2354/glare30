import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'
import Icon from '@/components/ui/Icon'
import { brand, hero } from '@/data/site'

const FLOATING = [
  { icon: 'calculator', label: 'PCM', sub: 'IIT-JEE', position: 'left-0 top-6 sm:top-10', accent: 'text-gold-300' },
  { icon: 'atom', label: 'PCB', sub: 'NEET', position: 'right-0 bottom-10 sm:bottom-16', accent: 'text-leaf-400' },
]

export default function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-navy-800">
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-50" />
      <div className="pointer-events-none absolute -top-32 -left-24 size-[26rem] rounded-full bg-leaf-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 -bottom-32 size-[28rem] rounded-full bg-gold-300/10 blur-3xl" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-navy-900/60 to-transparent" />

      <Container className="relative pt-14 pb-16 sm:pt-20 sm:pb-20 lg:pt-24 lg:pb-28">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10 xl:gap-16">
          {/* Copy */}
          <div className="animate-rise lg:col-span-7">
            <span className="inline-flex max-w-full items-center gap-2 rounded-full bg-white/10 px-3.5 py-2 text-[0.6875rem] font-semibold tracking-wider text-gold-200 uppercase ring-1 ring-white/15 sm:text-xs">
              <span className="size-1.5 shrink-0 animate-pulse rounded-full bg-leaf-400" />
              <span className="truncate">{hero.eyebrow}</span>
            </span>

            <h1 className="mt-6 text-4xl leading-[1.08] font-extrabold text-white sm:text-5xl lg:text-6xl xl:text-[4.25rem]">
              {hero.title}
              <br className="hidden sm:block" />{' '}
              <span className="text-gradient-gold">{hero.titleAccent}</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-navy-100 sm:text-lg">{hero.subtitle}</p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <Button href={hero.primaryCta.href} size="lg" icon="arrowRight" className="w-full sm:w-auto">
                {hero.primaryCta.label}
              </Button>
              <Button href={hero.secondaryCta.href} variant="ghostLight" size="lg" className="w-full sm:w-auto">
                {hero.secondaryCta.label}
              </Button>
            </div>

            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
              {hero.chips.map((chip) => (
                <li key={chip} className="flex items-center gap-2 text-sm font-medium text-navy-100">
                  <span className="inline-flex size-5 items-center justify-center rounded-full bg-leaf-500/20">
                    <Icon name="check" className="size-3.5 text-leaf-300" strokeWidth={2.5} />
                  </span>
                  {chip}
                </li>
              ))}
            </ul>
          </div>

          {/* Visual */}
          <div className="relative mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none">
            <div className="relative mx-auto aspect-square w-full max-w-sm lg:max-w-md">
              {/* Rings */}
              <div className="absolute inset-0 rounded-full border border-white/10" />
              <div className="absolute inset-[8%] rounded-full border border-dashed border-gold-300/25" />
              <div className="absolute inset-[16%] rounded-full bg-gradient-to-br from-white/10 to-white/0 ring-1 ring-white/10 backdrop-blur-sm" />

              <img
                src={brand.logo}
                alt={`${brand.fullName} logo`}
                className="animate-float absolute inset-[26%] h-auto w-auto object-contain drop-shadow-[0_24px_44px_rgba(0,0,0,0.45)]"
              />

              {/* Floating cards */}
              {FLOATING.map((card) => (
                <div
                  key={card.label}
                  className={`animate-float-slow absolute ${card.position} flex items-center gap-3 rounded-2xl bg-white/95 px-4 py-3 shadow-soft ring-1 ring-white/40`}
                >
                  <span className="inline-flex size-10 items-center justify-center rounded-xl bg-navy-800">
                    <Icon name={card.icon} className={`size-5 ${card.accent}`} />
                  </span>
                  <span className="leading-tight">
                    <span className="block text-sm font-bold text-navy-800">{card.label}</span>
                    <span className="block text-xs font-medium text-navy-400">{card.sub}</span>
                  </span>
                </div>
              ))}

              <div className="animate-float absolute top-1/2 -right-2 hidden -translate-y-1/2 rounded-2xl bg-gold-300 px-4 py-3 text-center shadow-soft sm:block">
                <span className="block font-display text-xl font-extrabold text-navy-800">6–12</span>
                <span className="block text-[0.625rem] font-bold tracking-widest text-navy-700 uppercase">Classes</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

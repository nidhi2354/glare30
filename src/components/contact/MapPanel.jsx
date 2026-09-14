import Container from '@/components/ui/Container'
import Icon from '@/components/ui/Icon'
import Reveal from '@/components/ui/Reveal'
import { brand, contact } from '@/data/site'

/**
 * Map + directions.
 * The embed is built from the address itself, so it keeps working when the
 * client sends a proper Google Maps link — only `contact.mapUrl` changes.
 */
const embedUrl = `https://www.google.com/maps?q=${encodeURIComponent(contact.address)}&output=embed`

const REACH = [
  { icon: 'phone', label: 'Call us', value: contact.phone, href: contact.phoneHref },
  { icon: 'whatsapp', label: 'WhatsApp', value: 'Message us anytime', href: `https://wa.me/${contact.whatsapp}` },
  { icon: 'mail', label: 'Email', value: contact.email, href: `mailto:${contact.email}` },
  { icon: 'clock', label: 'Open on', value: contact.timings },
]

export default function MapPanel() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
          {/* Map */}
          <Reveal className="lg:col-span-7">
            <div className="overflow-hidden rounded-[1.75rem] border border-navy-100 shadow-card sm:rounded-[2rem]">
              <iframe
                title={`Map to ${brand.fullName}`}
                src={embedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="block h-[20rem] w-full border-0 sm:h-[24rem] lg:h-full lg:min-h-[28rem]"
              />
            </div>
          </Reveal>

          {/* Reach us */}
          <Reveal delay={120} className="lg:col-span-5">
            <div className="flex h-full flex-col rounded-[1.75rem] border border-navy-100 bg-navy-50/50 p-6 sm:rounded-[2rem] sm:p-8">
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-xs font-bold tracking-widest text-navy-600 uppercase ring-1 ring-navy-100">
                <span className="size-1.5 rounded-full bg-leaf-500" />
                Visit Us
              </span>

              <h2 className="mt-5 font-display text-xl font-bold text-navy-800 sm:text-2xl">Where we are</h2>
              <p className="mt-3 text-sm leading-relaxed text-navy-600 sm:text-base">{contact.address}</p>

              <a
                href={contact.mapUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex w-fit items-center gap-2 rounded-full border border-navy-200 bg-white px-5 py-3 text-sm font-semibold text-navy-700 transition-colors hover:border-navy-400 hover:bg-navy-50"
              >
                <Icon name="mapPin" className="size-4 text-leaf-500" />
                Get Directions
              </a>

              <ul className="mt-8 space-y-4 border-t border-navy-100 pt-8">
                {REACH.map((item) => {
                  const Tag = item.href ? 'a' : 'div'
                  const external = item.href?.startsWith('http')

                  return (
                    <li key={item.label}>
                      <Tag
                        {...(item.href
                          ? { href: item.href, target: external ? '_blank' : undefined, rel: 'noreferrer' }
                          : {})}
                        className="group flex items-start gap-4"
                      >
                        <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-2xl bg-white text-navy-700 ring-1 ring-navy-100 transition-colors group-hover:bg-navy-800 group-hover:text-gold-300">
                          <Icon name={item.icon} className="size-5" />
                        </span>
                        <span className="min-w-0 leading-snug">
                          <span className="block text-xs font-semibold tracking-widest text-navy-400 uppercase">
                            {item.label}
                          </span>
                          <span className="mt-1 block text-sm font-semibold break-words text-navy-800 sm:text-base">
                            {item.value}
                          </span>
                        </span>
                      </Tag>
                    </li>
                  )
                })}
              </ul>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

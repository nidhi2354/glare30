import { useState } from 'react'
import Container from '@/components/ui/Container'
import Icon from '@/components/ui/Icon'
import Reveal from '@/components/ui/Reveal'
import SectionHeading from '@/components/ui/SectionHeading'
import { contact, faqs } from '@/data/site'
import { cn } from '@/utils/cn'

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faqs" className="scroll-mt-24 bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Left column */}
          <div className="lg:col-span-5">
            <SectionHeading
              align="left"
              eyebrow="FAQs"
              title="Frequently asked"
              accent="questions"
              description="Answers to the things parents ask us most. For anything else, just give us a call or drop a WhatsApp message."
            />

            <a
              href={contact.phoneHref}
              className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-navy-100 bg-navy-50/60 p-4 transition-colors hover:border-navy-300 hover:bg-navy-50"
            >
              <span className="inline-flex size-11 items-center justify-center rounded-xl bg-leaf-500 text-white">
                <Icon name="phone" className="size-5" />
              </span>
              <span className="leading-tight">
                <span className="block text-xs font-semibold tracking-wide text-navy-400 uppercase">Call us</span>
                <span className="block font-display text-base font-bold text-navy-800">{contact.phone}</span>
              </span>
            </a>
          </div>

          {/* Accordion */}
          <div className="lg:col-span-7">
            <dl className="divide-y divide-navy-100 border-y border-navy-100">
              {faqs.map((faq, i) => {
                const isOpen = openIndex === i

                return (
                  <Reveal key={faq.q} delay={i * 60}>
                    <dt>
                      <button
                        type="button"
                        onClick={() => setOpenIndex(isOpen ? -1 : i)}
                        aria-expanded={isOpen}
                        className="flex w-full items-start justify-between gap-4 py-5 text-left"
                      >
                        <span
                          className={cn(
                            'text-base font-semibold transition-colors sm:text-lg',
                            isOpen ? 'text-leaf-600' : 'text-navy-800',
                          )}
                        >
                          {faq.q}
                        </span>
                        <span
                          className={cn(
                            'mt-0.5 inline-flex size-8 shrink-0 items-center justify-center rounded-full transition-all duration-300',
                            isOpen ? 'rotate-180 bg-leaf-500 text-white' : 'bg-navy-50 text-navy-500',
                          )}
                        >
                          <Icon name="chevronDown" className="size-4" strokeWidth={2.5} />
                        </span>
                      </button>
                    </dt>
                    <dd
                      className={cn(
                        'grid transition-all duration-300 ease-out',
                        isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
                      )}
                    >
                      <div className="overflow-hidden">
                        <p className="pr-12 pb-5 text-sm leading-relaxed text-navy-500 sm:text-base">{faq.a}</p>
                      </div>
                    </dd>
                  </Reveal>
                )
              })}
            </dl>
          </div>
        </div>
      </Container>
    </section>
  )
}

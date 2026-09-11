import Icon from '@/components/ui/Icon'
import { useScrolled } from '@/hooks/useScrolled'
import { contact } from '@/data/site'
import { cn } from '@/utils/cn'

/** Always-reachable call and WhatsApp buttons on mobile, plus a back-to-top control. */
export default function FloatingActions() {
  const scrolled = useScrolled(600)

  return (
    <div className="fixed right-4 bottom-4 z-40 flex flex-col gap-3 sm:right-6 sm:bottom-6">
      <a
        href="#home"
        aria-label="Back to top"
        className={cn(
          'inline-flex size-12 items-center justify-center rounded-full bg-white text-navy-700 shadow-card ring-1 ring-navy-100 transition-all duration-300 hover:-translate-y-0.5',
          scrolled ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0',
        )}
      >
        <Icon name="arrowRight" className="size-5 -rotate-90" strokeWidth={2.2} />
      </a>

      <a
        href={contact.phoneHref}
        aria-label="Call us"
        className="inline-flex size-12 items-center justify-center rounded-full bg-navy-700 text-white shadow-card transition-transform hover:-translate-y-0.5 sm:hidden"
      >
        <Icon name="phone" className="size-5" />
      </a>

      <a
        href={`https://wa.me/${contact.whatsapp}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="inline-flex size-13 items-center justify-center rounded-full bg-leaf-500 text-white shadow-soft transition-transform hover:-translate-y-0.5 sm:size-14"
      >
        <Icon name="whatsapp" className="size-6 sm:size-7" />
      </a>
    </div>
  )
}

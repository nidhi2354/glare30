import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'
import { useSeo } from '@/hooks/useSeo'
import { contact } from '@/data/site'

export default function NotFound() {
  useSeo({ title: 'Page Not Found' })

  return (
    <section className="relative isolate overflow-hidden bg-navy-800">
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-50" />
      <div className="pointer-events-none absolute -top-24 -left-20 size-80 rounded-full bg-leaf-500/20 blur-3xl" />

      <Container className="relative flex min-h-[60vh] flex-col items-center justify-center py-20 text-center sm:py-24">
        <p className="font-display text-6xl font-extrabold text-gradient-gold sm:text-7xl">404</p>

        <h1 className="mt-5 text-2xl font-bold text-white sm:text-3xl lg:text-4xl">This page doesn&rsquo;t exist</h1>
        <p className="mt-4 max-w-md text-base leading-relaxed text-navy-100">
          The link may be outdated. Head back to the home page, or give us a call — we&rsquo;ll point you the right way.
        </p>

        <div className="mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Button to="/" size="lg" icon="arrowRight" className="w-full sm:w-auto">
            Back to Home
          </Button>
          <Button
            href={contact.phoneHref}
            variant="ghostLight"
            size="lg"
            icon="phone"
            iconPosition="left"
            className="w-full sm:w-auto"
          >
            {contact.phone}
          </Button>
        </div>
      </Container>
    </section>
  )
}

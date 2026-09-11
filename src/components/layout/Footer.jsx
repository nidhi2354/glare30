import Container from '@/components/ui/Container'
import Icon from '@/components/ui/Icon'
import Logo from '@/components/ui/Logo'
import { brand, contact, navLinks, programs, socials } from '@/data/site'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-navy-900 text-navy-200">
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-40" />
      <div className="pointer-events-none absolute -top-24 -right-16 size-72 rounded-full bg-leaf-500/15 blur-3xl" />

      <Container className="relative py-14 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Logo light />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-navy-300">{brand.description}</p>

            <div className="mt-6 flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="inline-flex size-10 items-center justify-center rounded-xl bg-white/5 text-navy-200 ring-1 ring-white/10 transition-all hover:-translate-y-0.5 hover:bg-gold-300 hover:text-navy-800"
                >
                  <Icon name={social.icon} className="size-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold tracking-widest text-white uppercase">Quick Links</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition-colors hover:text-gold-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold tracking-widest text-white uppercase">Programs</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {programs.map((program) => (
                <li key={program.id}>
                  <a href="#programs" className="transition-colors hover:text-gold-300">
                    {program.classes} — {program.title}
                  </a>
                </li>
              ))}
              <li>
                <a href="#exams" className="transition-colors hover:text-gold-300">
                  NTSE · JSTSE · Olympiads
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold tracking-widest text-white uppercase">Get in Touch</h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li>
                <a href={contact.phoneHref} className="flex items-start gap-3 transition-colors hover:text-gold-300">
                  <Icon name="phone" className="mt-0.5 size-4 shrink-0 text-leaf-400" />
                  {contact.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${contact.email}`} className="flex items-start gap-3 transition-colors hover:text-gold-300">
                  <Icon name="mail" className="mt-0.5 size-4 shrink-0 text-leaf-400" />
                  <span className="break-all">{contact.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="mapPin" className="mt-0.5 size-4 shrink-0 text-leaf-400" />
                <span>{contact.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="clock" className="mt-0.5 size-4 shrink-0 text-leaf-400" />
                <span>{contact.timings}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 text-xs text-navy-400 sm:flex-row">
          <p>
            © {year} {brand.fullName}. All rights reserved.
          </p>
          <p>Coaching for Class 6th to 12th · CBSE · JEE · NEET</p>
        </div>
      </Container>
    </footer>
  )
}

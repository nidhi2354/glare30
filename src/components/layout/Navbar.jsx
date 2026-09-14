import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'
import Icon from '@/components/ui/Icon'
import Logo from '@/components/ui/Logo'
import TopBar from '@/components/layout/TopBar'
import { useScrolled } from '@/hooks/useScrolled'
import { contact, navLinks } from '@/data/site'
import { cn } from '@/utils/cn'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const scrolled = useScrolled(16)
  const location = useLocation()

  /**
   * Only real pages get the active underline. Section links like '/#programs'
   * all share the home pathname, so highlighting them would light up the whole
   * nav at once.
   */
  const isActive = (to) => !to.includes('#') && to === location.pathname

  /**
   * Any navigation (including browser back/forward) closes the mobile drawer.
   * Adjusted during render rather than in an effect, so the drawer never paints
   * open for a frame on the new page.
   */
  const [lastKey, setLastKey] = useState(location.key)
  if (lastKey !== location.key) {
    setLastKey(location.key)
    setOpen(false)
  }

  // While the drawer is open: lock background scroll and close on Escape
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKeyDown = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  return (
    <header className="sticky top-0 z-50">
      <TopBar />

      <nav
        className={cn(
          'border-b transition-all duration-300',
          scrolled || open
            ? 'border-navy-100 bg-white/90 shadow-[0_4px_24px_-12px_rgb(20_35_92_/_0.25)] backdrop-blur-xl'
            : 'border-transparent bg-white',
        )}
      >
        <Container className="flex h-16 items-center justify-between gap-4 sm:h-18 lg:h-20">
          <Logo size="md" />

          {/* Desktop links */}
          <ul className="hidden items-center gap-0.5 lg:flex">
            {navLinks.map((link) => {
              const active = isActive(link.to)
              return (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    aria-current={active ? 'page' : undefined}
                    className={cn(
                      'group relative rounded-full px-3 py-2 text-sm font-semibold transition-colors xl:px-3.5',
                      active ? 'text-navy-800' : 'text-navy-600 hover:text-navy-800',
                    )}
                  >
                    {link.label}
                    <span
                      className={cn(
                        'absolute inset-x-3 -bottom-0.5 h-0.5 origin-left rounded-full bg-leaf-500 transition-transform duration-300 xl:inset-x-3.5',
                        active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100',
                      )}
                    />
                  </Link>
                </li>
              )
            })}
          </ul>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={contact.phoneHref}
              className="hidden items-center gap-2 rounded-full border border-navy-100 px-4 py-2.5 text-sm font-semibold text-navy-700 transition-colors hover:border-navy-300 hover:bg-navy-50 md:inline-flex"
            >
              <Icon name="phone" className="size-4 text-leaf-500" />
              <span className="hidden xl:inline">{contact.phone}</span>
              <span className="xl:hidden">Call</span>
            </a>

            <Button to="/contact" size="sm" className="hidden sm:inline-flex">
              Free Demo Class
            </Button>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              className="inline-flex size-11 items-center justify-center rounded-xl border border-navy-100 text-navy-700 transition-colors hover:bg-navy-50 lg:hidden"
            >
              <Icon name={open ? 'close' : 'menu'} className="size-6" />
            </button>
          </div>
        </Container>
      </nav>

      {/* Mobile drawer */}
      <div
        className={cn(
          'fixed inset-x-0 top-16 bottom-0 z-40 lg:hidden',
          open ? 'pointer-events-auto' : 'pointer-events-none',
        )}
      >
        <button
          type="button"
          tabIndex={-1}
          aria-hidden="true"
          onClick={() => setOpen(false)}
          className={cn(
            'absolute inset-0 bg-navy-900/50 backdrop-blur-sm transition-opacity duration-300',
            open ? 'opacity-100' : 'opacity-0',
          )}
        />

        <div
          className={cn(
            'absolute inset-x-0 top-0 max-h-[calc(100dvh-5rem)] overflow-y-auto border-b border-navy-100 bg-white shadow-soft transition-transform duration-300 ease-out sm:top-2',
            open ? 'translate-y-0' : '-translate-y-[110%]',
          )}
        >
          <Container className="py-5">
            <ul className="flex flex-col">
              {navLinks.map((link) => {
                const active = isActive(link.to)
                return (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      onClick={() => setOpen(false)}
                      aria-current={active ? 'page' : undefined}
                      className={cn(
                        'flex items-center justify-between border-b border-navy-50 py-4 text-base font-semibold transition-colors',
                        active ? 'text-leaf-600' : 'text-navy-700 hover:text-leaf-600',
                      )}
                    >
                      {link.label}
                      <Icon name="arrowRight" className={cn('size-4', active ? 'text-leaf-500' : 'text-navy-300')} />
                    </Link>
                  </li>
                )
              })}
            </ul>

            <div className="mt-6 flex flex-col gap-3">
              <Button to="/contact" onClick={() => setOpen(false)} size="md" icon="arrowRight" className="w-full">
                Book a Free Demo Class
              </Button>
              <Button href={contact.phoneHref} variant="outline" size="md" icon="phone" iconPosition="left" className="w-full">
                {contact.phone}
              </Button>
            </div>
          </Container>
        </div>
      </div>
    </header>
  )
}

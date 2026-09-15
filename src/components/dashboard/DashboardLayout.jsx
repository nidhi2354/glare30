import { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import DashHeader from '@/components/dashboard/DashHeader'
import DashSidebar from '@/components/dashboard/DashSidebar'
import { cn } from '@/utils/cn'

/**
 * The admin shell: a fixed sidebar from `lg` up, a drawer below it.
 * The marketing navbar and footer are deliberately absent — this is a tool,
 * not a page of the website.
 */
export default function DashboardLayout() {
  const [navOpen, setNavOpen] = useState(false)
  const location = useLocation()

  // Any navigation (including browser back/forward) closes the drawer, adjusted
  // during render so it never paints open for a frame on the new page.
  const [lastKey, setLastKey] = useState(location.key)
  if (lastKey !== location.key) {
    setLastKey(location.key)
    setNavOpen(false)
  }

  useEffect(() => {
    document.body.style.overflow = navOpen ? 'hidden' : ''
    const onKeyDown = (e) => e.key === 'Escape' && setNavOpen(false)
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [navOpen])

  return (
    <div className="min-h-dvh bg-navy-50/50">
      <a
        href="#dashboard-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:bg-navy-800 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>

      {/* Desktop sidebar */}
      <div className="fixed inset-y-0 left-0 z-40 hidden w-64 lg:block xl:w-72">
        <DashSidebar />
      </div>

      {/* Mobile drawer */}
      <div className={cn('fixed inset-0 z-50 lg:hidden', navOpen ? 'pointer-events-auto' : 'pointer-events-none')}>
        <button
          type="button"
          tabIndex={-1}
          aria-hidden="true"
          onClick={() => setNavOpen(false)}
          className={cn(
            'absolute inset-0 bg-navy-900/60 backdrop-blur-sm transition-opacity duration-300',
            navOpen ? 'opacity-100' : 'opacity-0',
          )}
        />
        <div
          className={cn(
            'absolute inset-y-0 left-0 w-[17rem] max-w-[85vw] shadow-soft transition-transform duration-300 ease-out',
            navOpen ? 'translate-x-0' : '-translate-x-full',
          )}
        >
          <button
            type="button"
            onClick={() => setNavOpen(false)}
            aria-label="Close navigation"
            className="absolute top-4 right-3 z-10 inline-flex size-9 items-center justify-center rounded-lg text-navy-200 hover:bg-white/10 hover:text-white"
          >
            <span aria-hidden="true" className="text-lg leading-none">
              ×
            </span>
          </button>
          <DashSidebar onNavigate={() => setNavOpen(false)} />
        </div>
      </div>

      <div className="lg:pl-64 xl:pl-72">
        <DashHeader onOpenNav={() => setNavOpen(true)} />

        <main id="dashboard-content" className="px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

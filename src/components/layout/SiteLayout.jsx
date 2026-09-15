import { Outlet } from 'react-router-dom'
import FloatingActions from '@/components/layout/FloatingActions'
import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'

/**
 * The public website shell — navbar, footer and the floating call/WhatsApp
 * buttons. The admin dashboard has its own shell and deliberately shares none
 * of this chrome.
 */
export default function SiteLayout() {
  return (
    <div className="flex min-h-dvh flex-col">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:bg-navy-800 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main-content" className="flex-1">
        <Outlet />
      </main>

      <Footer />
      <FloatingActions />
    </div>
  )
}

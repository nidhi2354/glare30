import FloatingActions from '@/components/layout/FloatingActions'
import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import Home from '@/pages/Home'

export default function App() {
  return (
    <div className="flex min-h-dvh flex-col">
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:bg-navy-800 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>

      <Navbar />

      <main className="flex-1">
        <Home />
      </main>

      <Footer />
      <FloatingActions />
    </div>
  )
}

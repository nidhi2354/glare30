import { Route, Routes } from 'react-router-dom'
import FloatingActions from '@/components/layout/FloatingActions'
import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import ScrollManager from '@/components/layout/ScrollManager'
import About from '@/pages/About'
import Contact from '@/pages/Contact'
import CourseDetail from '@/pages/CourseDetail'
import Courses from '@/pages/Courses'
import Exams from '@/pages/Exams'
import Home from '@/pages/Home'
import NotFound from '@/pages/NotFound'

export default function App() {
  return (
    <div className="flex min-h-dvh flex-col">
      <ScrollManager />

      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:bg-navy-800 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main-content" className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:programId" element={<CourseDetail />} />
          <Route path="/exams" element={<Exams />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
      <FloatingActions />
    </div>
  )
}

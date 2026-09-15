import { Navigate, Route, Routes } from 'react-router-dom'
import DashboardLayout from '@/components/dashboard/DashboardLayout'
import ScrollManager from '@/components/layout/ScrollManager'
import SiteLayout from '@/components/layout/SiteLayout'
import About from '@/pages/About'
import Contact from '@/pages/Contact'
import CourseDetail from '@/pages/CourseDetail'
import Courses from '@/pages/Courses'
import Exams from '@/pages/Exams'
import Home from '@/pages/Home'
import NotFound from '@/pages/NotFound'
import Batches from '@/pages/dashboard/Batches'
import Enquiries from '@/pages/dashboard/Enquiries'
import Fees from '@/pages/dashboard/Fees'
import Overview from '@/pages/dashboard/Overview'
import Students from '@/pages/dashboard/Students'

export default function App() {
  return (
    <>
      <ScrollManager />

      <Routes>
        {/* Public website */}
        <Route element={<SiteLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:programId" element={<CourseDetail />} />
          <Route path="/exams" element={<Exams />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* Admin dashboard — its own shell, no site navbar or footer.
            TODO: put this behind a login once auth exists. */}
        <Route path="/admin" element={<DashboardLayout />}>
          <Route index element={<Overview />} />
          <Route path="enquiries" element={<Enquiries />} />
          <Route path="students" element={<Students />} />
          <Route path="batches" element={<Batches />} />
          <Route path="fees" element={<Fees />} />
          {/* An unknown admin URL goes back to the overview rather than showing
              the public 404 inside the admin shell. */}
          <Route path="*" element={<Navigate to="/admin" replace />} />
        </Route>
      </Routes>
    </>
  )
}

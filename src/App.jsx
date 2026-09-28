
import { Navigate, Route, Routes } from 'react-router-dom'

// Layouts
import DashboardLayout from '@/components/dashboard/DashboardLayout'
import ScrollManager from '@/components/layout/ScrollManager'
import SiteLayout from '@/components/layout/SiteLayout'

// Public Pages
import About from '@/pages/About'
import Contact from '@/pages/Contact'
import CourseDetail from '@/pages/CourseDetail'
import Courses from '@/pages/Courses'
import Exams from '@/pages/Exams'
import Home from '@/pages/Home'
import NotFound from '@/pages/NotFound'

// Admin Dashboard Pages
import AddAdmin from '@/pages/dashboard/AddAdmin'
import Batches from '@/pages/dashboard/Batches'
import Enquiries from '@/pages/dashboard/Enquiries'
import Overview from '@/pages/dashboard/Overview'

// Admin Authentication
import AdminLogin from '@/pages/admin/AdminLogin'
import ProtectedRoute from '@/components/admin/ProtectedRoute'

export default function App() {
  return (
    <>
      <ScrollManager />

      <Routes>
        {/* ========================================
            PUBLIC WEBSITE
        ======================================== */}
        <Route element={<SiteLayout />}>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/courses" element={<Courses />} />

          <Route
            path="/courses/:programId"
            element={<CourseDetail />}
          />

          <Route path="/exams" element={<Exams />} />

          <Route path="/contact" element={<Contact />} />

          {/* Public 404 */}
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* ========================================
            ADMIN LOGIN
        ======================================== */}
        <Route
          path="/admin/login"
          element={<AdminLogin />}
        />

        {/* ========================================
            PROTECTED ADMIN DASHBOARD
        ======================================== */}
        <Route element={<ProtectedRoute />}>
          <Route
            path="/admin"
            element={<DashboardLayout />}
          >
            {/* /admin */}
            <Route
              index
              element={<Overview />}
            />

            {/* /admin/enquiries */}
            <Route
              path="enquiries"
              element={<Enquiries />}
            />

            {/* /admin/batches */}
            <Route
              path="batches"
              element={<Batches />}
            />

            {/* /admin/add-admin */}
            <Route
              path="add-admin"
              element={<AddAdmin />}
            />

            {/* Unknown admin route → dashboard */}
            <Route
              path="*"
              element={<Navigate to="/admin" replace />}
            />
          </Route>
        </Route>
      </Routes>
    </>
  )
}





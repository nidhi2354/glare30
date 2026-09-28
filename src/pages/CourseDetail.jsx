import { Navigate, useParams } from 'react-router-dom'
import CtaBanner from '@/components/common/CtaBanner'
import CourseOverview from '@/components/courses/CourseOverview'
import Includes from '@/components/courses/Includes'
import OtherCourses from '@/components/courses/OtherCourses'
import PageHero from '@/components/ui/PageHero'
import { useCourses } from '@/hooks/useCourses'
import { useSeo } from '@/hooks/useSeo'
import { coursesPage } from '@/data/site'

/** One class group, at /courses/:programId */
export default function CourseDetail() {
  const { programId } = useParams()
  const { courses, loading } = useCourses()
  const program = courses.find((item) => item.id === programId)

  // Hooks must run on every render, so this one sits above the early return.
  useSeo({
    title: program ? `${program.title} — ${program.classes}` : 'Courses',
    description: program?.summary ?? coursesPage.hero.description,
  })

  if (loading) return null

  // Unknown slug → send people to the course list rather than a dead end.
  if (!program) return <Navigate to="/courses" replace />

  return (
    <>
      <PageHero
        eyebrow={program.classes}
        title={program.title}
        description={program.detail.overview}
        breadcrumb={[{ label: 'Courses', to: '/courses' }, { label: program.title }]}
      />

      <CourseOverview program={program} />
      <Includes />
      <OtherCourses courses={courses} currentId={program.id} />
      <CtaBanner {...coursesPage.cta} primaryLabel="Book a Free Demo" />
    </>
  )
}

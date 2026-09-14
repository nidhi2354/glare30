import { Navigate, useParams } from 'react-router-dom'
import CtaBanner from '@/components/common/CtaBanner'
import CourseOverview from '@/components/courses/CourseOverview'
import Includes from '@/components/courses/Includes'
import OtherCourses from '@/components/courses/OtherCourses'
import PageHero from '@/components/ui/PageHero'
import { useSeo } from '@/hooks/useSeo'
import { coursesPage, programs } from '@/data/site'

/** One class group, at /courses/foundation | /courses/board | /courses/senior */
export default function CourseDetail() {
  const { programId } = useParams()
  const program = programs.find((item) => item.id === programId)

  // Hooks must run on every render, so this one sits above the early return.
  useSeo({
    title: program ? `${program.title} — ${program.classes}` : 'Courses',
    description: program?.summary ?? coursesPage.hero.description,
  })

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
      <OtherCourses currentId={program.id} />
      <CtaBanner {...coursesPage.cta} primaryLabel="Book a Free Demo" />
    </>
  )
}

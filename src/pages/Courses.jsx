import CtaBanner from '@/components/common/CtaBanner'
import Approach from '@/components/common/Approach'
import CourseNav from '@/components/courses/CourseNav'
import Includes from '@/components/courses/Includes'
import PageHero from '@/components/ui/PageHero'
import { useSeo } from '@/hooks/useSeo'
import { coursesPage } from '@/data/site'

export default function Courses() {
  useSeo({
    title: 'Courses — Class 6th to 12th',
    description: coursesPage.hero.description,
  })

  return (
    <>
      <PageHero {...coursesPage.hero} breadcrumb={[{ label: 'Courses' }]} />
      <CourseNav />
      <Includes />
      <Approach />
      <CtaBanner {...coursesPage.cta} primaryLabel="Book a Free Demo" />
    </>
  )
}

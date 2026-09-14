import CtaBanner from '@/components/common/CtaBanner'
import ExamList from '@/components/exams/ExamList'
import Roadmap from '@/components/exams/Roadmap'
import PageHero from '@/components/ui/PageHero'
import { useSeo } from '@/hooks/useSeo'
import { examsPage } from '@/data/site'

export default function Exams() {
  useSeo({
    title: 'Competitive Exams — NTSE, JSTSE, Olympiads, JEE & NEET',
    description: examsPage.hero.description,
  })

  return (
    <>
      <PageHero {...examsPage.hero} breadcrumb={[{ label: 'Exams' }]} />
      <Roadmap />
      <ExamList />
      <CtaBanner {...examsPage.cta} primaryLabel="Talk to Us" />
    </>
  )
}

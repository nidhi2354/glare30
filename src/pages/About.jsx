import CtaBanner from '@/components/common/CtaBanner'
import DirectorMessage from '@/components/about/DirectorMessage'
import Facilities from '@/components/about/Facilities'
import MissionVision from '@/components/about/MissionVision'
import Story from '@/components/about/Story'
import Values from '@/components/about/Values'
import PageHero from '@/components/ui/PageHero'
import { useSeo } from '@/hooks/useSeo'
import { aboutPage } from '@/data/site'

export default function About() {
  useSeo({
    title: 'About Us',
    description: aboutPage.hero.description,
  })

  return (
    <>
      <PageHero {...aboutPage.hero} breadcrumb={[{ label: 'About Us' }]} />
      <Story />
      <MissionVision />
      <Values />
      <DirectorMessage />
      <Facilities />
      <CtaBanner {...aboutPage.cta} primaryLabel="Book a Free Demo" />
    </>
  )
}

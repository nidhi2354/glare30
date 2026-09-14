import ContactSection from '@/components/common/ContactSection'
import CtaBanner from '@/components/common/CtaBanner'
import Faqs from '@/components/common/Faqs'
import MapPanel from '@/components/contact/MapPanel'
import PageHero from '@/components/ui/PageHero'
import { useSeo } from '@/hooks/useSeo'
import { contactPage } from '@/data/site'

export default function Contact() {
  useSeo({
    title: 'Contact Us',
    description: contactPage.hero.description,
  })

  return (
    <>
      <PageHero {...contactPage.hero} breadcrumb={[{ label: 'Contact' }]} />
      <ContactSection />
      <MapPanel />
      <Faqs />
      <CtaBanner {...contactPage.cta} primaryLabel="Book a Free Demo" />
    </>
  )
}

import Approach from '@/components/common/Approach'
import ContactSection from '@/components/common/ContactSection'
import CtaBanner from '@/components/common/CtaBanner'
import Exams from '@/components/home/Exams'
import Faqs from '@/components/common/Faqs'
import Hero from '@/components/home/Hero'
import Programs from '@/components/home/Programs'
import Stats from '@/components/home/Stats'
import WhyUs from '@/components/home/WhyUs'
import { useSeo } from '@/hooks/useSeo'
import { brand } from '@/data/site'

export default function Home() {
  useSeo({
    title: 'Coaching for Class 6th to 12th · CBSE, JEE & NEET',
    description: brand.description,
  })

  return (
    <>
      <Hero />
      <Stats />
      <Programs />
      <Exams />
      <WhyUs />
      <Approach />
      <CtaBanner />
      <Faqs />
      <ContactSection />
    </>
  )
}

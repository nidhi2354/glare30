import Approach from '@/components/home/Approach'
import Contact from '@/components/home/Contact'
import CtaBanner from '@/components/home/CtaBanner'
import Exams from '@/components/home/Exams'
import Faqs from '@/components/home/Faqs'
import Hero from '@/components/home/Hero'
import Programs from '@/components/home/Programs'
import Stats from '@/components/home/Stats'
import WhyUs from '@/components/home/WhyUs'

export default function Home() {
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
      <Contact />
    </>
  )
}

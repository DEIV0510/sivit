import { useEffect } from 'react'
import { MotionConfig } from 'framer-motion'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { useLenis } from '@/hooks/useLenis'
import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { Stats } from '@/components/Stats'
import { Pricing } from '@/components/Pricing'
import { Benefits } from '@/components/Benefits'
import { WhyUs } from '@/components/WhyUs'
import { Process } from '@/components/Process'
import { Testimonials } from '@/components/Testimonials'
import { Payments } from '@/components/Payments'
import { FAQ } from '@/components/FAQ'
import { FinalCTA } from '@/components/FinalCTA'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import { MobileCTA } from '@/components/MobileCTA'

export default function App() {
  useLenis()

  useEffect(() => {
    const id = requestAnimationFrame(() => ScrollTrigger.refresh())
    return () => cancelAnimationFrame(id)
  }, [])

  return (
    <MotionConfig reducedMotion="user">
      <Navbar />

      <main>
        <Hero revealed />
        <Stats />
        <Pricing />
        <Benefits />
        <WhyUs />
        <Process />
        <Testimonials />
        <Payments />
        <FAQ />
        <FinalCTA />
        <Contact />
      </main>

      <Footer />

      <WhatsAppButton />
      <MobileCTA />
    </MotionConfig>
  )
}

import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, MotionConfig } from 'framer-motion'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { useLenis } from '@/hooks/useLenis'
import { Preloader } from '@/components/Preloader'
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
  const [loaded, setLoaded] = useState(false)
  useLenis()

  const handleComplete = useCallback(() => setLoaded(true), [])

  // Bloquea el scroll mientras se muestra el preloader
  useEffect(() => {
    document.body.style.overflow = loaded ? '' : 'hidden'
    if (!loaded) window.scrollTo(0, 0)
  }, [loaded])

  // Recalcula los ScrollTriggers cuando ya está todo visible
  useEffect(() => {
    if (!loaded) return
    const id = requestAnimationFrame(() => ScrollTrigger.refresh())
    return () => cancelAnimationFrame(id)
  }, [loaded])

  return (
    <MotionConfig reducedMotion="user">
      <AnimatePresence>
        {!loaded && <Preloader onComplete={handleComplete} />}
      </AnimatePresence>

      <Navbar />

      <main>
        <Hero revealed={loaded} />
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

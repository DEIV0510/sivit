import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Section, SectionHeading } from '@/components/ui/Section'
import { steps } from '@/data/process'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

gsap.registerPlugin(ScrollTrigger)

export function Process() {
  const container = useRef(null)
  const fillH = useRef(null)
  const fillV = useRef(null)
  const reduced = usePrefersReducedMotion()

  useEffect(() => {
    const fills = [fillH.current, fillV.current].filter(Boolean)
    if (reduced) {
      gsap.set(fills, { scaleX: 1, scaleY: 1 })
      return
    }

    const ctx = gsap.context(() => {
      const stepEls = gsap.utils.toArray('[data-step]')
      gsap.from(stepEls, {
        opacity: 0,
        y: 42,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: { trigger: container.current, start: 'top 75%' },
      })

      const lineTrigger = {
        trigger: container.current,
        start: 'top 62%',
        end: 'bottom 78%',
        scrub: 0.6,
      }
      if (fillH.current) gsap.to(fillH.current, { scaleX: 1, ease: 'none', scrollTrigger: lineTrigger })
      if (fillV.current) gsap.to(fillV.current, { scaleY: 1, ease: 'none', scrollTrigger: lineTrigger })

      requestAnimationFrame(() => ScrollTrigger.refresh())
    }, container)

    return () => ctx.revert()
  }, [reduced])

  return (
    <Section id="proceso" className="relative overflow-hidden bg-ink-900 py-24 text-white sm:py-32">
      <div className="absolute inset-0 bg-grid-dark opacity-30" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-96 w-96 rounded-full bg-brand-600/15 blur-[120px]" />

      <div className="container-px relative">
        <SectionHeading
          tone="dark"
          eyebrow="Cómo funciona"
          title="Tu licencia en 4 simples pasos"
          description="Un proceso claro y guiado, desde la compra online hasta el día que recibes tu licencia."
        />

        <div ref={container} className="relative mt-16">
          {/* Línea vertical (móvil) */}
          <div className="absolute bottom-3 left-[25px] top-3 w-px bg-white/10 lg:hidden">
            <div
              ref={fillV}
              className="h-full w-full origin-top scale-y-0 bg-gradient-to-b from-brand-300 via-brand-500 to-brand-700"
            />
          </div>
          {/* Línea horizontal (desktop) */}
          <div className="absolute left-6 right-6 top-[26px] hidden h-px bg-white/10 lg:block">
            <div
              ref={fillH}
              className="h-full w-full origin-left scale-x-0 bg-gradient-to-r from-brand-300 via-brand-500 to-brand-700"
            />
          </div>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-4 lg:gap-6">
            {steps.map(({ n, icon: Icon, title, description }) => (
              <div
                key={n}
                data-step
                className="relative flex items-start gap-5 lg:flex-col lg:items-center lg:gap-0 lg:text-center"
              >
                <div className="relative z-10 flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-ink-950 text-brand-300 shadow-glow-sm">
                  <Icon className="h-6 w-6" strokeWidth={1.8} />
                  <span className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-brand-600 text-[0.6rem] font-bold text-white">
                    {n}
                  </span>
                </div>
                <div className="lg:mt-7">
                  <h3 className="font-display text-lg font-semibold text-white">{title}</h3>
                  <p className="mt-2 max-w-xs text-sm leading-relaxed text-white/55">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}

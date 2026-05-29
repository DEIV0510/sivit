import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Star, Quote, ArrowLeft, ArrowRight } from 'lucide-react'
import { Section, SectionHeading } from '@/components/ui/Section'
import { testimonials } from '@/data/testimonials'
import { cn } from '@/lib/utils'

const variants = {
  enter: (dir) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
  center: { opacity: 1, x: 0 },
  exit: (dir) => ({ opacity: 0, x: dir > 0 ? -60 : 60 }),
}

export function Testimonials() {
  const [[index, dir], setState] = useState([0, 0])
  const [paused, setPaused] = useState(false)
  const count = testimonials.length

  const paginate = useCallback(
    (d) => setState(([i]) => [(i + d + count) % count, d]),
    [count],
  )

  useEffect(() => {
    if (paused) return
    const t = setInterval(() => paginate(1), 5500)
    return () => clearInterval(t)
  }, [paused, paginate])

  const item = testimonials[index]

  return (
    <Section id="testimonios" className="bg-white py-24 sm:py-32">
      <div className="container-px">
        <SectionHeading
          tone="light"
          eyebrow="Testimonios"
          title="Historias que avalan a SIVIT"
          description="Personas reales que ya conducen con su licencia gracias a nuestro acompañamiento."
        />

        <div
          className="relative mx-auto mt-14 max-w-3xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative min-h-[300px] overflow-hidden rounded-4xl border border-ink-100 bg-ink-50 p-8 shadow-card sm:min-h-[280px] sm:p-12">
            <Quote className="absolute right-8 top-8 h-16 w-16 text-brand-100" />
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={index}
                custom={dir}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex flex-col"
              >
                <div className="flex gap-1">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-brand-500 text-brand-500" />
                  ))}
                </div>
                <blockquote className="mt-6 font-display text-xl font-medium leading-snug text-ink-900 sm:text-2xl">
                  “{item.quote}”
                </blockquote>
                <div className="mt-8 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-brand-600 to-brand-800 font-display text-sm font-bold text-white">
                    {item.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-ink-900">{item.name}</div>
                    <div className="text-sm text-ink-400">{item.role}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-7 flex items-center justify-center gap-5">
            <button
              type="button"
              onClick={() => paginate(-1)}
              aria-label="Testimonio anterior"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-ink-200 bg-white text-ink-600 transition-colors hover:border-brand-400 hover:text-brand-600"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setState(([prev]) => [i, i > prev ? 1 : -1])}
                  aria-label={`Ir al testimonio ${i + 1}`}
                  className={cn(
                    'h-2 rounded-full transition-all duration-300',
                    i === index ? 'w-7 bg-brand-600' : 'w-2 bg-ink-200 hover:bg-ink-300',
                  )}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => paginate(1)}
              aria-label="Siguiente testimonio"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-ink-200 bg-white text-ink-600 transition-colors hover:border-brand-400 hover:text-brand-600"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </Section>
  )
}

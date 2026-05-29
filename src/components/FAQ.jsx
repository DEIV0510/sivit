import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import { Section, SectionHeading } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import { faqs } from '@/data/faq'
import { cn } from '@/lib/utils'

function FaqJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  )
}

export function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <Section id="faq" className="bg-white py-24 sm:py-32">
      <FaqJsonLd />
      <div className="container-px">
        <SectionHeading
          tone="light"
          eyebrow="Preguntas frecuentes"
          title="Resolvemos tus dudas"
          description="Todo lo que necesitas saber antes de empezar tu proceso con SIVIT."
        />

        <div className="mx-auto mt-12 max-w-3xl">
          {faqs.map((faq, i) => {
            const isOpen = open === i
            return (
              <Reveal key={faq.q} delay={i * 0.04}>
                <div className="border-b border-ink-100">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className="font-display text-lg font-semibold text-ink-900">
                      {faq.q}
                    </span>
                    <span
                      className={cn(
                        'flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300',
                        isOpen
                          ? 'rotate-45 border-brand-600 bg-brand-600 text-white'
                          : 'border-ink-200 text-ink-500',
                      )}
                    >
                      <Plus className="h-4 w-4" />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 pr-12 text-[0.95rem] leading-relaxed text-ink-500">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </Section>
  )
}

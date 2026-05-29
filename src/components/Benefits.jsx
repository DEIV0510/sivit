import { motion } from 'framer-motion'
import { Section, SectionHeading } from '@/components/ui/Section'
import { staggerParent, fadeUpItem } from '@/components/ui/Reveal'
import { benefits } from '@/data/benefits'

export function Benefits() {
  return (
    <Section id="beneficios" className="bg-white py-24 sm:py-32">
      <div className="container-px">
        <SectionHeading
          tone="light"
          eyebrow="Por qué comprar con SIVIT"
          title="Beneficios pensados para ti"
          description="Una experiencia simple, segura y completa para que solo te preocupes por una cosa: conducir."
        />

        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-12 h-scroll h-scroll-4"
        >
          {benefits.map(({ icon: Icon, title, description }) => (
            <motion.div
              key={title}
              variants={fadeUpItem}
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              className="group relative overflow-hidden rounded-3xl border border-ink-100 bg-white p-6 shadow-[0_1px_0_0_rgba(12,20,38,0.04)] transition-shadow duration-300 hover:border-brand-200 hover:shadow-card"
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-brand-50 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600 to-brand-800 text-white shadow-glow-sm">
                <Icon className="h-6 w-6" strokeWidth={1.8} />
              </div>
              <h3 className="relative mt-5 font-display text-lg font-bold text-ink-900">{title}</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-ink-500">{description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  )
}

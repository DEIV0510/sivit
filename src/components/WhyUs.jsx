import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Section } from '@/components/ui/Section'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Reveal, staggerParent, fadeUpItem } from '@/components/ui/Reveal'
import { reasons } from '@/data/whyus'

export function WhyUs() {
  return (
    <Section
      id="por-que-sivit"
      className="relative overflow-hidden bg-ink-950 py-24 text-white sm:py-32"
    >
      <div className="pointer-events-none absolute -left-32 top-1/4 h-[28rem] w-[28rem] rounded-full bg-brand-700/20 blur-[120px]" />
      <div className="absolute inset-0 bg-grid-dark opacity-40 mask-radial" />

      <div className="container-px relative grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        {/* Intro */}
        <div className="flex flex-col items-start">
          <Reveal>
            <Badge tone="dark">¿Por qué elegirnos?</Badge>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 text-heading font-bold text-white">
              Confianza que se <span className="text-gradient">siente</span> en cada paso
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-md text-base leading-relaxed text-white/60">
              No solo te entregamos una licencia: te acompañamos con un equipo profesional,
              instalaciones modernas y un proceso totalmente legal y transparente.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <Button href="#cursos" size="lg" className="mt-8 sheen">
              Empezar mi proceso
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Reveal>

          <Reveal delay={0.2} className="mt-10 hidden w-full sm:block">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-card">
              <img
                src="/images/ride-street.jpg"
                alt="Estudiantes practicando entre conos en la academia de conducción SIVIT"
                loading="lazy"
                className="h-60 w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/75 via-ink-950/10 to-transparent" />
            </div>
          </Reveal>
        </div>

        {/* Grid de razones */}
        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="h-scroll h-scroll-2"
        >
          {reasons.map(({ icon: Icon, title, description }) => (
            <motion.div
              key={title}
              variants={fadeUpItem}
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-colors duration-300 hover:border-brand-400/40 hover:bg-white/[0.07]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-brand-500/10 text-brand-300">
                <Icon className="h-5 w-5" strokeWidth={1.8} />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/55">{description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  )
}

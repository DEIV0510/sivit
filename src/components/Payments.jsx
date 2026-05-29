import { motion } from 'framer-motion'
import { ShieldCheck, Landmark, CreditCard, Lock } from 'lucide-react'
import { Section } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'

const methods = [
  {
    icon: Landmark,
    name: 'PSE',
    description: 'Paga directamente desde tu cuenta bancaria, de forma segura.',
  },
  {
    icon: CreditCard,
    name: 'Addi',
    description: 'Financia tu curso y paga a cuotas. Empieza hoy sin esperar.',
  },
]

export function Payments() {
  return (
    <Section className="bg-ink-50 py-20 sm:py-24">
      <div className="container-px">
        <div className="mx-auto max-w-4xl rounded-4xl border border-ink-100 bg-white p-8 shadow-card sm:p-12">
          <Reveal className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">
              <ShieldCheck className="h-3.5 w-3.5" />
              Métodos de pago
            </div>
            <h2 className="mt-5 text-heading font-bold text-ink-900">Paga fácil y seguro</h2>
            <p className="mt-3 max-w-lg text-ink-500">
              Elige el método que más te convenga. Todas las transacciones están protegidas y
              encriptadas.
            </p>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {methods.map(({ icon: Icon, name, description }, i) => (
              <Reveal key={name} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                  className="group flex h-full items-center gap-5 rounded-3xl border border-ink-100 bg-ink-50/60 p-6 transition-colors duration-300 hover:border-brand-300 hover:bg-white"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600 to-brand-800 text-white shadow-glow-sm">
                    <Icon className="h-7 w-7" strokeWidth={1.7} />
                  </div>
                  <div className="text-left">
                    <div className="font-display text-xl font-bold text-ink-900">{name}</div>
                    <p className="mt-1 text-sm leading-relaxed text-ink-500">{description}</p>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="mt-8 flex items-center justify-center gap-2 text-sm text-ink-400">
              <Lock className="h-4 w-4 text-brand-500" />
              Pago 100% seguro y encriptado
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}

import { Bike, ShieldCheck, CreditCard, Home } from 'lucide-react'
import { motion } from 'framer-motion'
import { staggerParent, fadeUpItem } from '@/components/ui/Reveal'

const stats = [
  { icon: Bike, value: 'A2', label: 'Cualquier cilindraje' },
  { icon: ShieldCheck, value: '100%', label: 'Proceso legal' },
  { icon: CreditCard, value: 'PSE · Addi', label: 'Pago flexible' },
  { icon: Home, value: 'Online', label: 'Empieza desde casa' },
]

export function Stats() {
  return (
    <section className="relative z-10 bg-ink-950">
      <div className="container-px -mt-10 sm:-mt-14">
        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-[0_30px_80px_-40px_rgba(0,0,0,0.8)] backdrop-blur-xl lg:grid-cols-4"
        >
          {stats.map(({ icon: Icon, value, label }) => (
            <motion.div
              key={label}
              variants={fadeUpItem}
              className="flex items-center gap-4 bg-ink-950/40 p-5 sm:p-7"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-500/10 text-brand-300 ring-1 ring-inset ring-white/10">
                <Icon className="h-6 w-6" strokeWidth={1.8} />
              </span>
              <div className="leading-tight">
                <div className="font-display text-xl font-bold text-white sm:text-2xl">{value}</div>
                <div className="text-xs text-white/55 sm:text-sm">{label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

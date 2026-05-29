import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { LogoMark } from '@/components/brand/Logo'

const EASE = [0.22, 1, 0.36, 1]

export function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0)

  const particles = useMemo(
    () =>
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 2 + Math.random() * 4,
        duration: 6 + Math.random() * 8,
        delay: Math.random() * 4,
      })),
    [],
  )

  useEffect(() => {
    let raf
    let start
    const duration = 2100
    const tick = (t) => {
      if (!start) start = t
      const p = Math.min(1, (t - start) / duration)
      const eased = 1 - Math.pow(1 - p, 3)
      setProgress(Math.round(eased * 100))
      if (p < 1) {
        raf = requestAnimationFrame(tick)
      } else {
        setTimeout(() => onComplete?.(), 480)
      }
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [onComplete])

  return (
    <motion.div
      className="fixed inset-0 z-[120] flex flex-col items-center justify-center overflow-hidden bg-ink-950"
      initial={{ y: 0 }}
      exit={{ y: '-100%', transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] } }}
    >
      {/* Glow de fondo */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[60vmax] w-[60vmax] -translate-x-1/2 -translate-y-1/2 rounded-full bg-radial-brand opacity-70" />
      <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-40 mask-radial" />

      {/* Partículas */}
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-brand-300/60"
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
          animate={{ y: [0, -28, 0], opacity: [0, 0.8, 0] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      {/* Contenido */}
      <motion.div
        className="relative flex flex-col items-center"
        exit={{ opacity: 0, transition: { duration: 0.3 } }}
      >
        <motion.div
          initial={{ scale: 0.6, opacity: 0, rotate: -8 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ duration: 0.9, ease: EASE }}
          className="drop-shadow-[0_0_40px_rgba(11,92,255,0.55)]"
        >
          <LogoMark size={84} />
        </motion.div>

        <motion.div
          className="mt-7 flex overflow-hidden font-display text-3xl font-extrabold tracking-[0.3em] text-white sm:text-4xl"
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.07, delayChildren: 0.3 } } }}
        >
          {'SIVIT'.split('').map((c, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { y: '110%', opacity: 0 },
                show: { y: '0%', opacity: 1, transition: { duration: 0.6, ease: EASE } },
              }}
            >
              {c}
            </motion.span>
          ))}
        </motion.div>

        {/* Barra de progreso */}
        <div className="mt-9 h-[3px] w-56 overflow-hidden rounded-full bg-white/10">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-brand-500 to-brand-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="mt-4 flex w-56 items-center justify-between text-[0.7rem] font-medium uppercase tracking-[0.2em] text-white/45">
          <span>Cargando experiencia</span>
          <span className="tabular-nums text-white/70">{progress}%</span>
        </div>
      </motion.div>
    </motion.div>
  )
}

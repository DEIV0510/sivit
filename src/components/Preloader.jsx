import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { LogoMark } from '@/components/brand/Logo'

const EASE = [0.22, 1, 0.36, 1]
const EXIT_EASE = [0.76, 0, 0.24, 1]

export function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let raf
    let start
    const duration = 2000
    const tick = (t) => {
      if (!start) start = t
      const p = Math.min(1, (t - start) / duration)
      const eased = 1 - Math.pow(1 - p, 3)
      setProgress(Math.round(eased * 100))
      if (p < 1) raf = requestAnimationFrame(tick)
      else setTimeout(() => onComplete?.(), 520)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [onComplete])

  return (
    <motion.div
      className="fixed inset-0 z-[120] flex flex-col items-center justify-center overflow-hidden bg-ink-950"
      initial={{ y: 0 }}
      exit={{ y: '-100%', transition: { duration: 0.95, ease: EXIT_EASE } }}
    >
      {/* Profundidad de fondo */}
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[70vmax] w-[70vmax] -translate-x-1/2 -translate-y-1/2 rounded-full bg-radial-brand"
        animate={{ opacity: [0.45, 0.8, 0.45], scale: [1, 1.08, 1] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-30 mask-radial" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(circle at center, transparent 45%, rgba(3,5,12,0.92) 100%)' }}
      />
      {/* Marca de agua */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-[0.035]">
        <LogoMark size={520} />
      </div>

      {/* Contenido central */}
      <motion.div
        className="relative flex flex-col items-center"
        exit={{ opacity: 0, y: -20, transition: { duration: 0.35, ease: EASE } }}
      >
        <motion.div
          initial={{ scale: 1.18, opacity: 0, filter: 'blur(16px)' }}
          animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.05, ease: EASE }}
          className="text-white drop-shadow-[0_0_55px_rgba(11,92,255,0.6)]"
        >
          <LogoMark size={88} />
        </motion.div>

        <motion.div
          className="mt-7 flex overflow-hidden font-display text-3xl font-extrabold tracking-[0.34em] text-white sm:text-4xl"
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.07, delayChildren: 0.45 } } }}
        >
          {'SIVIT'.split('').map((c, i) => (
            <motion.span
              key={i}
              className="inline-block"
              variants={{
                hidden: { y: '110%', opacity: 0 },
                show: { y: '0%', opacity: 1, transition: { duration: 0.6, ease: EASE } },
              }}
            >
              {c}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-4 text-[0.7rem] font-medium uppercase tracking-[0.4em] text-white/40"
        >
          Academia de conducción
        </motion.div>
      </motion.div>

      {/* Barra inferior + contador */}
      <motion.div
        className="absolute inset-x-0 bottom-0"
        exit={{ opacity: 0, transition: { duration: 0.3 } }}
      >
        <div className="container-px flex items-end justify-between pb-5">
          <span className="text-[0.7rem] font-medium uppercase tracking-[0.25em] text-white/45">
            Cargando experiencia
          </span>
          <span className="font-display text-5xl font-bold leading-none tabular-nums text-white sm:text-6xl">
            {String(progress).padStart(2, '0')}
            <span className="ml-1 align-top text-lg font-medium text-white/40 sm:text-xl">%</span>
          </span>
        </div>
        <div className="h-[3px] w-full bg-white/10">
          <div
            className="h-full bg-gradient-to-r from-brand-600 via-brand-500 to-brand-300 shadow-[0_0_14px_rgba(46,107,255,0.85)] transition-[width] duration-150 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </motion.div>
    </motion.div>
  )
}

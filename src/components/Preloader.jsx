import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { LogoMark } from '@/components/brand/Logo'

const EASE = [0.22, 1, 0.36, 1]
const EXIT_EASE = [0.76, 0, 0.24, 1]

/** Ícono de motocicleta (estilo línea) para la barra-carretera. */
function Motorbike({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M2 16a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
      <path d="M16 16a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
      <path d="M7.5 14h5l4 -4h-10.5m1.5 4l4 -4" />
      <path d="M13 6h2l1.5 3l2 4" />
    </svg>
  )
}

export function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let raf
    let start
    const duration = 2200
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
        className="pointer-events-none absolute left-1/2 top-[42%] h-[70vmax] w-[70vmax] -translate-x-1/2 -translate-y-1/2 rounded-full bg-radial-brand"
        animate={{ opacity: [0.45, 0.8, 0.45], scale: [1, 1.08, 1] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-30 mask-radial" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(circle at center, transparent 45%, rgba(3,5,12,0.92) 100%)' }}
      />
      <div className="pointer-events-none absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2 text-white opacity-[0.035]">
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
          Tu licencia A2 en camino
        </motion.div>
      </motion.div>

      {/* Carretera de carga con motocicleta */}
      <motion.div
        className="absolute inset-x-0 bottom-0"
        exit={{ opacity: 0, transition: { duration: 0.3 } }}
      >
        <div className="container-px flex items-end justify-between pb-4">
          <span className="text-[0.7rem] font-medium uppercase tracking-[0.25em] text-white/45">
            Preparando tu ruta
          </span>
          <span className="font-display text-5xl font-bold leading-none tabular-nums text-white sm:text-6xl">
            {String(progress).padStart(2, '0')}
            <span className="ml-1 align-top text-lg font-medium text-white/40 sm:text-xl">%</span>
          </span>
        </div>

        {/* Asfalto + línea de carril + moto */}
        <div className="relative h-14 w-full overflow-hidden border-t border-white/10 bg-gradient-to-b from-ink-900 to-ink-950">
          <div className="road-dashes animate-road absolute inset-x-0 top-1/2 h-[3px] -translate-y-1/2 opacity-70" />
          {/* Estela recorrida */}
          <div
            className="absolute bottom-0 left-0 top-0 bg-gradient-to-r from-brand-700/20 to-brand-500/5"
            style={{ width: `${progress}%` }}
          />
          {/* Motocicleta avanzando */}
          <div
            className="absolute top-1/2 -translate-y-[60%] text-white transition-[left] duration-150 ease-out"
            style={{ left: `${progress}%` }}
          >
            <div className="-translate-x-1/2">
              <span className="absolute right-full top-1/2 mr-1 h-[2px] w-7 -translate-y-1/2 rounded-full bg-gradient-to-l from-brand-400/80 to-transparent" />
              <Motorbike className="h-9 w-9 drop-shadow-[0_0_12px_rgba(46,107,255,0.9)]" />
            </div>
          </div>
        </div>

        {/* Barra de progreso al borde */}
        <div className="h-1 w-full bg-white/10">
          <div
            className="h-full bg-gradient-to-r from-brand-600 via-brand-500 to-brand-300 shadow-[0_0_14px_rgba(46,107,255,0.85)] transition-[width] duration-150 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </motion.div>
    </motion.div>
  )
}

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import {
  ShieldCheck,
  Zap,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  DollarSign,
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { waLink } from '@/config/site'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

const trust = [
  { icon: ShieldCheck, label: 'Pago 100% seguro' },
  { icon: CheckCircle2, label: 'Todo incluido' },
  { icon: Zap, label: 'Proceso rápido' },
]

function HeroVisual({ reduced }) {
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), { stiffness: 120, damping: 18 })
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), { stiffness: 120, damping: 18 })

  const onMove = (e) => {
    if (reduced) return
    const r = e.currentTarget.getBoundingClientRect()
    mx.set((e.clientX - r.left) / r.width - 0.5)
    my.set((e.clientY - r.top) / r.height - 0.5)
  }
  const onLeave = () => { mx.set(0); my.set(0) }

  return (
    <div
      className="relative [perspective:1200px]"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {/* Glow ambiental */}
      <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2.5rem] bg-brand-600/25 blur-3xl" />

      <motion.div
        style={reduced ? undefined : { rotateX: rx, rotateY: ry, transformStyle: 'preserve-3d' }}
        className="relative overflow-hidden rounded-[1.75rem] border border-white/10 shadow-[0_40px_120px_-30px_rgba(11,92,255,0.5)]"
      >
        {/* Imagen principal */}
        <img
          src="/images/hero-moto.jpg"
          alt="Estudiantes practicando entre conos en la academia de conducción SIVIT"
          width={1040}
          height={1387}
          fetchpriority="high"
          className="h-[clamp(320px,55vh,580px)] w-full object-cover object-top"
        />

        {/* Degradados de profundidad */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/20 to-transparent" />
        <div className="pointer-events-none absolute inset-0 rounded-[1.75rem] ring-1 ring-inset ring-white/10" />

        {/* ── ETIQUETA CENTRAL "LICENCIA A2" ── */}
        <div className="absolute left-1/2 top-4 -translate-x-1/2">
          <div className="flex items-center gap-2 rounded-full border border-brand-400/60 bg-brand-600/90 px-4 py-2 shadow-glow-sm backdrop-blur-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-white" />
            <span className="font-display text-sm font-bold uppercase tracking-[0.18em] text-white">
              Licencia A2 · Motocicletas
            </span>
          </div>
        </div>

        {/* ── BANNER INFERIOR: precio destacado ── */}
        <div
          style={reduced ? undefined : { transform: 'translateZ(60px)' }}
          className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-2xl border border-white/15 bg-ink-950/85 px-4 py-3 backdrop-blur-md"
        >
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 text-white">
              <DollarSign className="h-5 w-5" strokeWidth={2.2} />
            </span>
            <div className="leading-tight">
              <div className="text-[0.65rem] font-medium uppercase tracking-wide text-white/55">
                Curso completo A2
              </div>
              <div className="font-display text-lg font-extrabold tabular-nums text-white">
                $1.150.000
                <span className="ml-1 text-xs font-normal text-white/45">COP</span>
              </div>
            </div>
          </div>
          <a
            href="#cursos"
            className="rounded-xl bg-brand-600 px-3.5 py-2 text-xs font-bold text-white shadow-glow-sm transition-colors hover:bg-brand-500"
          >
            Ver detalles
          </a>
        </div>
      </motion.div>
    </div>
  )
}

export function Hero({ revealed }) {
  const root = useRef(null)
  const reduced = usePrefersReducedMotion()

  useEffect(() => {
    if (!revealed || reduced) return
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.set('[data-hero]', { willChange: 'transform, opacity' })
        .from('[data-hero="eyebrow"]', { y: 24, opacity: 0, duration: 0.6 })
        .from('[data-hero="line"]', { yPercent: 115, opacity: 0, duration: 0.9, stagger: 0.12 }, '-=0.3')
        .from('[data-hero="sub"]', { y: 24, opacity: 0, duration: 0.7 }, '-=0.45')
        .from('[data-hero="cta"]', { y: 20, opacity: 0, duration: 0.6, stagger: 0.1 }, '-=0.4')
        .from('[data-hero="trust"]', { y: 16, opacity: 0, duration: 0.6 }, '-=0.3')
        .from('[data-hero="visual"]', { opacity: 0, scale: 0.93, y: 30, duration: 1.1 }, '-=1.2')
        .from('[data-hero="scroll"]', { opacity: 0, y: -8, duration: 0.6 }, '-=0.2')
    }, root)
    return () => ctx.revert()
  }, [revealed, reduced])

  return (
    <section
      id="inicio"
      ref={root}
      className="relative isolate min-h-[100svh] overflow-hidden bg-ink-950 pb-20 pt-28 sm:pt-32"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink-950 via-ink-950 to-ink-900" />
      <div className="absolute inset-0 -z-10 bg-grid-dark opacity-[0.45] mask-b" />
      <div className="pointer-events-none absolute -left-32 top-10 -z-10 h-[34rem] w-[34rem] rounded-full bg-brand-600/20 blur-[120px] animate-aurora" />
      <div className="pointer-events-none absolute -right-24 top-40 -z-10 h-[30rem] w-[30rem] rounded-full bg-brand-400/15 blur-[120px] animate-aurora [animation-delay:-6s]" />

      <div className="container-px relative grid min-h-[calc(100svh-9rem)] grid-cols-1 items-center gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">

        {/* ── Texto ── */}
        <div className="flex min-w-0 flex-col items-start text-left">
          <div data-hero="eyebrow">
            <Badge tone="dark">Academia de conducción · Colombia</Badge>
          </div>

          <h1 className="mt-6 text-display-lg font-bold text-white">
            <span className="block overflow-hidden">
              <span data-hero="line" className="block">Obtén tu licencia</span>
            </span>
            <span className="block overflow-hidden">
              <span data-hero="line" className="block">de conducción</span>
            </span>
            <span className="block overflow-hidden">
              <span data-hero="line" className="block text-gradient">sin complicaciones</span>
            </span>
          </h1>

          {/* Sub-bloque enfocado en la licencia */}
          <p data-hero="sub" className="mt-6 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg">
            Compra tu <span className="font-semibold text-white">Curso A2</span> desde casa y obtén
            tu licencia para motos de cualquier cilindraje. Proceso 100% legal, todo incluido.
          </p>

          <div className="mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
            <span data-hero="cta" className="w-full sm:w-auto">
              <Button href="#cursos" size="xl" className="sheen w-full sm:w-auto">
                Ver cursos y precios
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </span>
            <span data-hero="cta" className="w-full sm:w-auto">
              <Button
                href={waLink('Hola, quiero información sobre el Curso A2 para obtener mi licencia de moto.')}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                size="xl"
                className="w-full sm:w-auto"
              >
                <MessageCircle className="h-5 w-5" />
                Hablar por WhatsApp
              </Button>
            </span>
          </div>

          <ul data-hero="trust" className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
            {trust.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2 text-sm font-medium text-white/55">
                <Icon className="h-4 w-4 text-brand-400" />
                {label}
              </li>
            ))}
          </ul>
        </div>

        {/* ── Visual ── */}
        <div data-hero="visual" className="relative">
          <HeroVisual reduced={reduced} />
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#cursos"
        data-hero="scroll"
        aria-label="Ver los cursos disponibles"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/50 transition-colors hover:text-white sm:flex"
      >
        <span className="text-[0.7rem] font-medium uppercase tracking-[0.2em]">Ver cursos</span>
        <span className="flex h-10 w-6 justify-center rounded-full border border-white/25 p-1.5">
          <span className="h-2 w-1 animate-bounce rounded-full bg-brand-400" />
        </span>
      </a>
    </section>
  )
}

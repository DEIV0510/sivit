import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import {
  ShieldCheck,
  Zap,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Bike,
  BadgeCheck,
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
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [7, -7]), { stiffness: 150, damping: 18 })
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-9, 9]), { stiffness: 150, damping: 18 })

  const onMove = (e) => {
    if (reduced) return
    const r = e.currentTarget.getBoundingClientRect()
    mx.set((e.clientX - r.left) / r.width - 0.5)
    my.set((e.clientY - r.top) / r.height - 0.5)
  }
  const onLeave = () => {
    mx.set(0)
    my.set(0)
  }

  return (
    <div className="relative [perspective:1200px]" onMouseMove={onMove} onMouseLeave={onLeave}>
      {/* glow */}
      <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2.5rem] bg-brand-600/30 blur-3xl" />

      <motion.div
        style={reduced ? undefined : { rotateX: rx, rotateY: ry, transformStyle: 'preserve-3d' }}
        className="relative overflow-hidden rounded-[1.75rem] border border-white/10 shadow-[0_40px_120px_-30px_rgba(11,92,255,0.55)]"
      >
        <img
          src="/images/hero-moto.jpg"
          alt="Motociclista inclinándose en una curva — academia de conducción SIVIT"
          width={1100}
          height={1467}
          fetchpriority="high"
          className="h-[clamp(320px,52vh,560px)] w-full object-cover"
        />
        {/* overlays para profundidad */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-ink-950/10" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink-950/40 to-transparent" />
        <div className="pointer-events-none absolute inset-0 rounded-[1.75rem] ring-1 ring-inset ring-white/10" />

        {/* tarjeta flotante: licencia */}
        <div
          style={reduced ? undefined : { transform: 'translateZ(60px)' }}
          className="absolute left-4 top-4 flex items-center gap-2.5 rounded-2xl border border-white/15 bg-ink-950/70 px-3.5 py-2.5 backdrop-blur-md"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 text-white">
            <Bike className="h-5 w-5" />
          </span>
          <div className="leading-tight">
            <div className="text-sm font-semibold text-white">Licencia A2</div>
            <div className="text-[0.7rem] text-white/55">Cualquier cilindraje</div>
          </div>
        </div>

        {/* tarjeta flotante: legal */}
        <div
          style={reduced ? undefined : { transform: 'translateZ(40px)' }}
          className="absolute bottom-4 right-4 flex items-center gap-2.5 rounded-2xl border border-white/15 bg-ink-950/70 px-3.5 py-2.5 backdrop-blur-md"
        >
          <BadgeCheck className="h-5 w-5 text-brand-400" />
          <div className="leading-tight">
            <div className="text-sm font-semibold text-white">100% Legal</div>
            <div className="text-[0.7rem] text-white/55">RUNT · Tránsito</div>
          </div>
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
        .from(
          '[data-hero="line"]',
          { yPercent: 115, opacity: 0, duration: 0.9, stagger: 0.12 },
          '-=0.3',
        )
        .from('[data-hero="sub"]', { y: 24, opacity: 0, duration: 0.7 }, '-=0.45')
        .from('[data-hero="cta"]', { y: 20, opacity: 0, duration: 0.6, stagger: 0.1 }, '-=0.4')
        .from('[data-hero="trust"]', { y: 16, opacity: 0, duration: 0.6 }, '-=0.3')
        .from('[data-hero="visual"]', { opacity: 0, scale: 0.92, y: 30, duration: 1.1 }, '-=1.2')
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
      {/* Capas de fondo */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink-950 via-ink-950 to-ink-900" />
      <div className="absolute inset-0 -z-10 bg-grid-dark opacity-[0.5] mask-b" />
      <div className="pointer-events-none absolute -left-32 top-10 -z-10 h-[34rem] w-[34rem] rounded-full bg-brand-600/25 blur-[120px] animate-aurora" />
      <div className="pointer-events-none absolute -right-24 top-40 -z-10 h-[30rem] w-[30rem] rounded-full bg-brand-400/15 blur-[120px] animate-aurora [animation-delay:-6s]" />

      <div className="container-px relative grid min-h-[calc(100svh-9rem)] grid-cols-1 items-center gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">
        {/* Texto */}
        <div className="flex min-w-0 flex-col items-start text-left">
          <div data-hero="eyebrow">
            <Badge tone="dark">Academia de conducción · Colombia</Badge>
          </div>

          <h1 className="mt-6 text-display-lg font-bold text-white">
            <span className="block overflow-hidden">
              <span data-hero="line" className="block">
                Obtén tu licencia
              </span>
            </span>
            <span className="block overflow-hidden">
              <span data-hero="line" className="block">
                de conducción
              </span>
            </span>
            <span className="block overflow-hidden">
              <span data-hero="line" className="block text-gradient">
                sin complicaciones
              </span>
            </span>
          </h1>

          <p
            data-hero="sub"
            className="mt-6 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg"
          >
            Compra tu curso de conducción para moto desde la comodidad de tu hogar y finaliza el
            proceso en nuestras instalaciones.
          </p>

          <div className="mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
            <span data-hero="cta" className="w-full sm:w-auto">
              <Button href="#cursos" size="xl" className="sheen w-full sm:w-auto">
                Comprar ahora
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </span>
            <span data-hero="cta" className="w-full sm:w-auto">
              <Button
                href={waLink()}
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

        {/* Visual */}
        <div data-hero="visual" className="relative">
          <HeroVisual reduced={reduced} />
        </div>
      </div>

      {/* Indicador de scroll */}
      <a
        href="#cursos"
        data-hero="scroll"
        aria-label="Desliza para ver los cursos"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/50 transition-colors hover:text-white sm:flex"
      >
        <span className="text-[0.7rem] font-medium uppercase tracking-[0.2em]">Desliza</span>
        <span className="flex h-10 w-6 justify-center rounded-full border border-white/25 p-1.5">
          <span className="h-2 w-1 animate-bounce rounded-full bg-brand-400" />
        </span>
      </a>
    </section>
  )
}

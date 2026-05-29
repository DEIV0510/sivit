import { lazy, Suspense, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ShieldCheck, Zap, CheckCircle2, ArrowRight, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { LogoMark } from '@/components/brand/Logo'
import { waLink } from '@/config/site'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

const HeroScene = lazy(() => import('@/components/three/HeroScene'))

const trust = [
  { icon: ShieldCheck, label: 'Pago 100% seguro' },
  { icon: CheckCircle2, label: 'Todo incluido' },
  { icon: Zap, label: 'Proceso rápido' },
]

function FallbackCard() {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <div className="absolute h-72 w-72 rounded-full bg-radial-brand blur-2xl" />
      <div className="animate-float perspective">
        <div
          className="glass relative flex h-52 w-80 flex-col justify-between rounded-3xl p-6 shadow-glow"
          style={{ transform: 'rotateX(8deg) rotateY(-14deg)' }}
        >
          <div className="flex items-center justify-between">
            <LogoMark size={44} />
            <span className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-white/50">
              Licencia A2
            </span>
          </div>
          <div className="space-y-2">
            <div className="h-2.5 w-3/4 rounded-full bg-white/15" />
            <div className="h-2.5 w-1/2 rounded-full bg-white/10" />
          </div>
          <div className="h-2 w-full rounded-full bg-gradient-to-r from-brand-500 to-brand-300/40" />
        </div>
      </div>
    </div>
  )
}

export function Hero({ revealed }) {
  const root = useRef(null)
  const isDesktop = useMediaQuery('(min-width: 1024px)')
  const reduced = usePrefersReducedMotion()
  const show3D = isDesktop

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
        .from('[data-hero="scene"]', { opacity: 0, scale: 0.9, duration: 1.1 }, '-=1.2')
        .from('[data-hero="scroll"]', { opacity: 0, y: -8, duration: 0.6 }, '-=0.2')
    }, root)
    return () => ctx.revert()
  }, [revealed, reduced])

  return (
    <section
      id="inicio"
      ref={root}
      className="relative isolate min-h-[100svh] overflow-hidden bg-ink-950 pt-28 sm:pt-32"
    >
      {/* Capas de fondo */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink-950 via-ink-950 to-ink-900" />
      <div className="absolute inset-0 -z-10 bg-grid-dark opacity-[0.5] mask-b" />
      <div className="pointer-events-none absolute -left-32 top-10 -z-10 h-[34rem] w-[34rem] rounded-full bg-brand-600/25 blur-[120px] animate-aurora" />
      <div className="pointer-events-none absolute -right-24 top-40 -z-10 h-[30rem] w-[30rem] rounded-full bg-brand-400/20 blur-[120px] animate-aurora [animation-delay:-6s]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-ink-900 to-transparent" />

      <div className="container-px relative grid min-h-[calc(100svh-8rem)] grid-cols-1 items-center gap-8 pb-24 lg:grid-cols-[1.06fr_0.94fr] lg:gap-6">
        {/* Texto */}
        <div className="flex flex-col items-start text-left">
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
            Compra tu curso desde la comodidad de tu hogar y finaliza el proceso en nuestras
            instalaciones.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <span data-hero="cta">
              <Button href="#cursos" size="xl" className="sheen w-full sm:w-auto">
                Comprar ahora
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </span>
            <span data-hero="cta">
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

        {/* Escena 3D */}
        <div
          data-hero="scene"
          className="relative h-[340px] w-full sm:h-[440px] lg:h-[560px]"
        >
          {show3D ? (
            <Suspense fallback={<FallbackCard />}>
              <HeroScene reduced={reduced} />
            </Suspense>
          ) : (
            <FallbackCard />
          )}
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

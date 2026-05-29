import { MessageCircle, ArrowRight } from 'lucide-react'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'
import { LogoMark } from '@/components/brand/Logo'
import { waLink } from '@/config/site'

export function FinalCTA() {
  return (
    <Section className="relative overflow-hidden bg-ink-950 py-20 sm:py-28">
      <div className="container-px">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-brand-700 via-brand-600 to-brand-800 px-6 py-16 text-center shadow-glow sm:px-16 sm:py-24">
          {/* Decoración */}
          <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-40 mask-radial" />
          <div className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -right-10 h-72 w-72 rounded-full bg-brand-900/40 blur-3xl" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 -z-0 -translate-x-1/2 -translate-y-1/2 opacity-[0.08]">
            <LogoMark size={420} />
          </div>

          <div className="relative">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-white backdrop-blur">
                Cupos disponibles
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mx-auto mt-6 max-w-3xl text-heading font-bold text-white">
                Empieza hoy mismo tu proceso
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
                Obtén tu licencia de manera rápida, segura y profesional.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="whatsapp"
                  size="xl"
                  className="w-full sm:w-auto"
                >
                  <MessageCircle className="h-5 w-5" />
                  Hablar por WhatsApp
                </Button>
                <Button href="#cursos" variant="light" size="xl" className="sheen w-full sm:w-auto">
                  Comprar ahora
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </Section>
  )
}

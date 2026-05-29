import { MapPin, Phone, MessageCircle, Instagram, Facebook, ArrowUpRight } from 'lucide-react'
import { Section, SectionHeading } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'
import { site, waLink, telLink } from '@/config/site'

export function Contact() {
  const cards = [
    {
      icon: MapPin,
      title: 'Visítanos',
      lines: [site.address.line1, site.address.line2],
      action: null,
    },
    {
      icon: Phone,
      title: 'Llámanos',
      lines: [site.phoneDisplay],
      action: { label: 'Llamar ahora', href: telLink, external: false },
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      lines: ['Respuesta inmediata'],
      action: { label: 'Escribir', href: waLink(), external: true },
    },
  ]

  return (
    <Section id="contacto" className="relative overflow-hidden bg-ink-950 py-24 text-white sm:py-32">
      <div className="absolute inset-0 bg-grid-dark opacity-30 mask-b" />
      <div className="pointer-events-none absolute -right-20 top-10 h-80 w-80 rounded-full bg-brand-700/20 blur-[120px]" />

      <div className="container-px relative">
        <SectionHeading
          tone="dark"
          eyebrow="Contacto"
          title="Estamos para ayudarte"
          description="Escríbenos o visítanos. Resolvemos tus dudas y te guiamos para que empieces hoy mismo."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {cards.map(({ icon: Icon, title, lines, action }, i) => (
            <Reveal key={title} delay={i * 0.08} className="h-full">
              <div className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-brand-500/10 text-brand-300">
                  <Icon className="h-6 w-6" strokeWidth={1.8} />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-white">{title}</h3>
                <div className="mt-2 flex-1 space-y-0.5 text-sm text-white/60">
                  {lines.map((l) => (
                    <p key={l}>{l}</p>
                  ))}
                </div>
                {action && (
                  <a
                    href={action.href}
                    target={action.external ? '_blank' : undefined}
                    rel={action.external ? 'noopener noreferrer' : undefined}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-300 transition-colors hover:text-brand-200"
                  >
                    {action.label}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        {/* Banner WhatsApp + redes */}
        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-col items-center justify-between gap-6 rounded-4xl border border-white/10 bg-gradient-to-r from-white/[0.06] to-transparent p-8 sm:flex-row sm:p-10">
            <div className="text-center sm:text-left">
              <h3 className="font-display text-xl font-bold text-white">
                ¿Listo para obtener tu licencia?
              </h3>
              <p className="mt-1 text-sm text-white/55">
                Te atendemos al instante por WhatsApp.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Button
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                variant="whatsapp"
                size="lg"
              >
                <MessageCircle className="h-5 w-5" />
                Hablar ahora
              </Button>
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de SIVIT"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 transition-colors hover:border-brand-400 hover:text-white"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook de SIVIT"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 transition-colors hover:border-brand-400 hover:text-white"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}

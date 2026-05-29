import { MapPin, Phone, Instagram, Facebook, MessageCircle } from 'lucide-react'
import { Logo } from '@/components/brand/Logo'
import { site, waLink, telLink, navLinks } from '@/config/site'

const serviceLinks = [
  { label: 'Curso de Conducción A2', href: '#cursos' },
  { label: 'Examen Médico', href: '#cursos' },
  { label: 'Beneficios', href: '#beneficios' },
  { label: 'Proceso', href: '#proceso' },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-ink-950 text-white">
      <div className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-brand-700/15 blur-[120px]" />

      <div className="container-px relative pt-16 pb-28 lg:pb-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4 lg:gap-8">
          {/* Marca */}
          <div className="col-span-2 md:col-span-1">
            <Logo tone="light" size={36} />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/55">
              Academia de conducción. Obtén tu licencia A2 sin complicaciones, con un proceso
              legal, rápido y acompañado.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-colors hover:border-brand-400 hover:text-white"
              >
                <Instagram className="h-[18px] w-[18px]" />
              </a>
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-colors hover:border-brand-400 hover:text-white"
              >
                <Facebook className="h-[18px] w-[18px]" />
              </a>
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-colors hover:border-brand-400 hover:text-white"
              >
                <MessageCircle className="h-[18px] w-[18px]" />
              </a>
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-white/40">
              Servicios
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              {serviceLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-white/65 transition-colors hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navegación */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-white/40">
              Navegación
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-white/65 transition-colors hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-white/40">
              Contacto
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-white/65">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                <span>
                  {site.address.line1}
                  <br />
                  {site.address.line2}
                </span>
              </li>
              <li>
                <a href={telLink} className="flex items-center gap-2.5 transition-colors hover:text-white">
                  <Phone className="h-4 w-4 shrink-0 text-brand-400" />
                  {site.phoneDisplay}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 text-sm text-white/45 sm:flex-row">
          <p>© {year} SIVIT. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-white">
              Política de privacidad
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Términos y condiciones
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

import { motion } from 'framer-motion'
import { Check, Lock, ArrowRight, Info } from 'lucide-react'
import { Section, SectionHeading } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'
import { products } from '@/data/products'
import { waLink } from '@/config/site'
import { cn } from '@/lib/utils'

function PaymentChip({ children }) {
  return (
    <span className="inline-flex items-center rounded-md border border-ink-200 bg-white px-2.5 py-1 text-xs font-semibold text-ink-600">
      {children}
    </span>
  )
}

function ProductCard({ product, index }) {
  const featured = product.featured
  return (
    <Reveal delay={index * 0.1} className="h-full">
      <motion.article
        whileHover={{ y: -6 }}
        transition={{ type: 'spring', stiffness: 300, damping: 24 }}
        className={cn(
          'group relative flex h-full flex-col overflow-hidden rounded-4xl p-7 sm:p-9',
          featured
            ? 'border-glow bg-ink-950 text-white shadow-card-hover'
            : 'border border-ink-200 bg-white text-ink-900 shadow-card',
        )}
      >
        {featured && (
          <>
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand-600/30 blur-3xl" />
            <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-40 mask-radial" />
          </>
        )}

        <div className="relative flex items-center justify-between">
          <span
            className={cn(
              'inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em]',
              featured ? 'bg-brand-600 text-white' : 'bg-brand-50 text-brand-700',
            )}
          >
            {product.badge}
          </span>
          {product.highlight && (
            <span
              className={cn(
                'text-xs font-semibold',
                featured ? 'text-brand-300' : 'text-brand-600',
              )}
            >
              {product.highlight}
            </span>
          )}
        </div>

        <h3 className="relative mt-6 font-display text-2xl font-bold sm:text-[1.75rem]">
          {product.name}
        </h3>
        <p className={cn('relative mt-2 text-sm', featured ? 'text-white/60' : 'text-ink-500')}>
          {product.summary}
        </p>

        <div className="relative mt-6 flex items-end gap-2">
          <span className="font-display text-4xl font-extrabold tracking-tight tabular-nums sm:text-5xl">
            {product.priceLabel}
          </span>
          <span className={cn('mb-1.5 text-sm', featured ? 'text-white/50' : 'text-ink-400')}>
            COP · {product.period}
          </span>
        </div>

        <div
          className={cn(
            'relative my-7 h-px w-full',
            featured ? 'bg-white/10' : 'bg-ink-100',
          )}
        />

        <ul className="relative flex flex-1 flex-col gap-3.5">
          {product.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <span
                className={cn(
                  'mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full',
                  featured ? 'bg-brand-500/20 text-brand-300' : 'bg-brand-50 text-brand-600',
                )}
              >
                <Check className="h-3.5 w-3.5" strokeWidth={3} />
              </span>
              <span className={cn('text-[0.95rem]', featured ? 'text-white/85' : 'text-ink-700')}>
                {feature}
              </span>
            </li>
          ))}
        </ul>

        {product.note && (
          <div
            className={cn(
              'relative mt-6 flex items-start gap-2.5 rounded-2xl p-3.5 text-xs leading-relaxed',
              featured ? 'bg-white/5 text-white/55' : 'bg-ink-50 text-ink-500',
            )}
          >
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
            <span>{product.note}</span>
          </div>
        )}

        <div className="relative mt-8 flex flex-col gap-4">
          <Button
            href={waLink(product.cta.message)}
            target="_blank"
            rel="noopener noreferrer"
            variant={featured ? 'primary' : 'outlineDark'}
            size="lg"
            className="sheen w-full"
          >
            {product.cta.label}
            <ArrowRight className="h-4 w-4" />
          </Button>
          <div className="flex items-center justify-center gap-3">
            <span
              className={cn(
                'flex items-center gap-1.5 text-xs',
                featured ? 'text-white/45' : 'text-ink-400',
              )}
            >
              <Lock className="h-3.5 w-3.5" /> Pago seguro
            </span>
            <div className="flex gap-2">
              {product.payments.map((p) => (
                <PaymentChip key={p}>{p}</PaymentChip>
              ))}
            </div>
          </div>
        </div>
      </motion.article>
    </Reveal>
  )
}

export function Pricing() {
  return (
    <Section id="cursos" className="bg-ink-50 py-24 sm:py-32">
      <div className="absolute inset-0 bg-grid-light opacity-60 mask-b" />
      <div className="container-px relative">
        <SectionHeading
          tone="light"
          eyebrow="Nuestros servicios"
          title="Elige tu camino hacia la licencia"
          description="Dos formas de avanzar con SIVIT. Compra en línea, paga seguro con PSE o Addi y nosotros nos encargamos del resto."
        />

        <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:gap-8">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>

        <Reveal delay={0.15}>
          <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-ink-400">
            ¿Tienes dudas sobre cuál elegir? Escríbenos y un asesor te orienta sin compromiso.
          </p>
        </Reveal>
      </div>
    </Section>
  )
}

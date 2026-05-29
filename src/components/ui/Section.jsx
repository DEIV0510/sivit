import { cn } from '@/lib/utils'
import { Reveal } from './Reveal'
import { Badge } from './Badge'

export function Section({ id, className, children, ...props }) {
  return (
    <section id={id} className={cn('relative', className)} {...props}>
      {children}
    </section>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  tone = 'dark',
  className,
}) {
  const isCenter = align === 'center'
  return (
    <div
      className={cn(
        'flex flex-col gap-4',
        isCenter ? 'mx-auto max-w-3xl items-center text-center' : 'items-start text-left',
        className,
      )}
    >
      {eyebrow && (
        <Reveal>
          <Badge tone={tone}>{eyebrow}</Badge>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2
          className={cn(
            'text-heading font-bold',
            tone === 'dark' ? 'text-white' : 'text-ink-900',
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p
            className={cn(
              'text-base leading-relaxed sm:text-lg',
              tone === 'dark' ? 'text-white/60' : 'text-ink-500',
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  )
}

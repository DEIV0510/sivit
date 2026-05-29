import { cn } from '@/lib/utils'

/** Marca SIVIT: monograma "S" angular (igual al del logo oficial) + wordmark. */
export function Logo({ tone = 'light', className, showText = true, size = 30 }) {
  const textColor = tone === 'light' ? 'text-white' : 'text-ink-900'
  return (
    <span className={cn('inline-flex items-center gap-2.5', textColor, className)}>
      <LogoMark size={size} />
      {showText && (
        <span className="font-display text-[1.4rem] font-extrabold leading-none tracking-tight">
          SIVIT
        </span>
      )}
    </span>
  )
}

/**
 * Monograma "S" de SIVIT: dos cuchillas angulares que se entrelazan con una
 * diagonal central. Usa `currentColor` para heredar el color del texto.
 */
export function LogoMark({ size = 30, className, style }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="currentColor"
      className={cn('shrink-0', className)}
      style={style}
      role="img"
      aria-label="SIVIT"
    >
      <path d="M26 18 L84 18 L80 30 L50 30 L70 48 L40 48 Z" />
      <path d="M74 82 L16 82 L20 70 L50 70 L30 52 L60 52 Z" />
    </svg>
  )
}

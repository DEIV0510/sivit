import { cn } from '@/lib/utils'

/** Marca SIVIT: monograma "S" angular + wordmark. */
export function Logo({ tone = 'light', className, showText = true, size = 36 }) {
  const textColor = tone === 'light' ? 'text-white' : 'text-ink-900'
  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <LogoMark size={size} />
      {showText && (
        <span
          className={cn(
            'font-display text-[1.35rem] font-extrabold leading-none tracking-tight',
            textColor,
          )}
        >
          SIVIT
        </span>
      )}
    </span>
  )
}

export function LogoMark({ size = 36, className }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={cn('shrink-0', className)}
      role="img"
      aria-label="SIVIT"
    >
      <defs>
        <linearGradient id="sivitMarkBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#2E6BFF" />
          <stop offset="0.55" stopColor="#0B5CFF" />
          <stop offset="1" stopColor="#0C3C9E" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="96" height="96" rx="24" fill="url(#sivitMarkBg)" />
      <g transform="translate(50 50) skewX(-11) translate(-50 -50)">
        <polygon
          fill="#ffffff"
          points="20,16 84,16 84,33 36,33 36,44 84,44 84,86 20,86 20,69 68,69 68,58 20,58"
        />
      </g>
    </svg>
  )
}

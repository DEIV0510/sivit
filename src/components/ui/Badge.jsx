import { cn } from '@/lib/utils'

export function Badge({ children, className, tone = 'dark', dot = true }) {
  const tones = {
    dark: 'border-white/15 bg-white/[0.06] text-white/85',
    light: 'border-brand-600/15 bg-brand-50 text-brand-700',
  }
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] backdrop-blur',
        tones[tone],
        className,
      )}
    >
      {dot && (
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-500 opacity-75" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand-500" />
        </span>
      )}
      {children}
    </span>
  )
}

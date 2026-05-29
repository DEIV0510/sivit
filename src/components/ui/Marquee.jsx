import { cn } from '@/lib/utils'

/** Cinta infinita (marquee) que duplica su contenido para un loop continuo. */
export function Marquee({ children, className, pauseOnHover = true }) {
  return (
    <div className={cn('group flex w-full overflow-hidden', className)}>
      <div
        className={cn(
          'flex min-w-full shrink-0 items-center justify-around gap-10 animate-marquee',
          pauseOnHover && 'group-hover:[animation-play-state:paused]',
        )}
      >
        {children}
      </div>
      <div
        aria-hidden="true"
        className={cn(
          'flex min-w-full shrink-0 items-center justify-around gap-10 animate-marquee',
          pauseOnHover && 'group-hover:[animation-play-state:paused]',
        )}
      >
        {children}
      </div>
    </div>
  )
}

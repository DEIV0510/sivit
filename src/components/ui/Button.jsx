import { forwardRef } from 'react'
import { cva } from 'class-variance-authority'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export const buttonVariants = cva(
  'group relative inline-flex select-none items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold tracking-tight transition-[transform,background-color,box-shadow,color,border-color] duration-300 ease-premium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-brand-600 text-white shadow-glow-sm hover:bg-brand-500 hover:shadow-glow',
        light: 'bg-white text-ink-900 shadow-card hover:bg-ink-100',
        outline:
          'border border-white/20 bg-white/[0.04] text-white backdrop-blur hover:border-white/40 hover:bg-white/[0.1]',
        outlineDark:
          'border border-ink-900/15 bg-white text-ink-900 hover:border-brand-500/50 hover:text-brand-700',
        ghost: 'text-white/80 hover:bg-white/10 hover:text-white',
        whatsapp:
          'bg-[#22c35e] text-white shadow-[0_12px_34px_-10px_rgba(34,195,94,0.65)] hover:bg-[#1eb455]',
      },
      size: {
        sm: 'h-9 px-4 text-sm',
        md: 'h-11 px-6 text-[0.95rem]',
        lg: 'h-12 px-8 text-base',
        xl: 'h-14 px-9 text-base sm:text-lg',
        icon: 'h-11 w-11',
      },
    },
    defaultVariants: { variant: 'primary', size: 'md' },
  },
)

export const Button = forwardRef(function Button(
  { className, variant, size, href, children, ...props },
  ref,
) {
  const MotionTag = href ? motion.a : motion.button
  return (
    <MotionTag
      ref={ref}
      href={href}
      className={cn(buttonVariants({ variant, size }), className)}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 22 }}
      {...props}
    >
      {children}
    </MotionTag>
  )
})

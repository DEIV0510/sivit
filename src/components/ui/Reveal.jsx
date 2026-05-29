import { motion } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1]

/** Revela un elemento con fade + desplazamiento al entrar en viewport. */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
  duration = 0.7,
  once = true,
  amount = 0.3,
  as = 'div',
}) {
  const Comp = motion[as] ?? motion.div
  return (
    <Comp
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </Comp>
  )
}

/** Variants para listas/grids escalonados. */
export const staggerParent = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
}

export const fadeUpItem = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
}

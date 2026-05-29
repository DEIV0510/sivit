import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/** Combina clases de Tailwind resolviendo conflictos. */
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

/** Formatea un número como pesos colombianos. */
export function formatCOP(value) {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0,
  }).format(value)
}

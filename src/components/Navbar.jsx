import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, MessageCircle } from 'lucide-react'
import { Logo } from '@/components/brand/Logo'
import { Button } from '@/components/ui/Button'
import { navLinks, waLink } from '@/config/site'
import { cn } from '@/lib/utils'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <motion.header
        initial={{ y: -90, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <div className="container-px">
          <div
            className={cn(
              'mt-3 flex items-center justify-between rounded-full px-3 py-2.5 transition-all duration-500 sm:px-4',
              scrolled
                ? 'border border-white/10 bg-ink-950/70 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.6)] backdrop-blur-xl'
                : 'border border-transparent bg-transparent',
            )}
          >
            <a href="#inicio" aria-label="SIVIT — inicio" className="pl-1">
              <Logo tone="light" size={34} />
            </a>

            <nav className="hidden items-center gap-1 lg:flex">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-full px-3.5 py-2 text-sm font-medium text-white/70 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <Button
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                variant="ghost"
                size="sm"
                className="hidden sm:inline-flex"
                aria-label="Escribir por WhatsApp"
              >
                <MessageCircle className="h-4 w-4" />
                <span className="hidden md:inline">WhatsApp</span>
              </Button>
              <Button href="#cursos" size="sm" className="hidden sm:inline-flex">
                Comprar ahora
              </Button>
              <button
                type="button"
                onClick={() => setOpen(true)}
                aria-label="Abrir menú"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white lg:hidden"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Menú móvil */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] flex flex-col bg-ink-950/95 backdrop-blur-2xl lg:hidden"
          >
            <div className="container-px flex items-center justify-between pt-5">
              <Logo tone="light" size={34} />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Cerrar menú"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="container-px flex flex-1 flex-col justify-center gap-2">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 * i + 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="border-b border-white/5 py-4 font-display text-2xl font-semibold text-white"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            <div className="container-px flex flex-col gap-3 pb-10">
              <Button href="#cursos" size="lg" onClick={() => setOpen(false)}>
                Comprar ahora
              </Button>
              <Button
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                variant="whatsapp"
                size="lg"
                onClick={() => setOpen(false)}
              >
                <MessageCircle className="h-5 w-5" />
                Hablar por WhatsApp
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

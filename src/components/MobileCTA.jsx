import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export function MobileCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.85)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: '130%' }}
          animate={{ y: 0 }}
          exit={{ y: '130%' }}
          transition={{ type: 'spring', stiffness: 320, damping: 30 }}
          className="fixed inset-x-0 bottom-0 z-30 lg:hidden"
          style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
        >
          <div className="container-px pb-3 pt-2">
            <div className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-ink-950/90 p-3 pl-4 shadow-[0_-10px_40px_-12px_rgba(0,0,0,0.7)] backdrop-blur-xl">
              <div className="leading-tight">
                <div className="text-[0.65rem] font-medium uppercase tracking-wide text-white/45">
                  Curso A2 · todo incluido
                </div>
                <div className="font-display text-base font-bold tabular-nums text-white">
                  $1.150.000 <span className="text-xs font-normal text-white/40">COP</span>
                </div>
              </div>
              <Button href="#cursos" size="md" className="shrink-0">
                Comprar
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

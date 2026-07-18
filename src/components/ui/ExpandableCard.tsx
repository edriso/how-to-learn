import { useState, type ReactNode } from 'react'
import { ChevronDown, type LucideIcon } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { ACCENTS, type Accent } from '@/data/accents'
import { cn } from '@/lib/utils'

interface ExpandableCardProps {
  icon: LucideIcon
  accent: Accent
  title: string
  subtitle: string
  badge?: ReactNode
  defaultOpen?: boolean
  children: ReactNode
}

export function ExpandableCard({
  icon: Icon,
  accent,
  title,
  subtitle,
  badge,
  defaultOpen = false,
  children,
}: ExpandableCardProps) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div
      className={cn(
        'overflow-hidden rounded-2xl border bg-white shadow-soft transition-colors dark:bg-slate-900',
        open
          ? 'border-slate-300 dark:border-slate-700'
          : 'border-slate-200/80 dark:border-slate-800',
      )}
    >
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        className="flex w-full items-center gap-4 p-5 text-start"
      >
        <span
          className={cn(
            'flex h-11 w-11 shrink-0 items-center justify-center rounded-xl shadow-soft',
            ACCENTS[accent].chip,
          )}
        >
          <Icon className="h-5 w-5" />
        </span>
        <span className="min-w-0 flex-1">
          <span className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <span className="font-display text-base font-semibold text-slate-900 sm:text-lg dark:text-white">
              {title}
            </span>
            {badge}
          </span>
          <span className="mt-0.5 block text-sm text-slate-600 dark:text-slate-400">
            {subtitle}
          </span>
        </span>
        <ChevronDown
          className={cn(
            'h-5 w-5 shrink-0 text-slate-400 transition-transform duration-300',
            open && 'rotate-180',
          )}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="border-t border-slate-100 px-5 pt-5 pb-6 dark:border-slate-800">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

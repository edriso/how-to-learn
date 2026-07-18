import { Moon, Sun } from 'lucide-react'
import { useI18n } from '@/i18n'
import { cn } from '@/lib/utils'

interface ThemeToggleProps {
  isDark: boolean
  onToggle: () => void
  className?: string
}

export function ThemeToggle({ isDark, onToggle, className }: ThemeToggleProps) {
  const { s } = useI18n()
  const label = isDark ? s.theme.toLight : s.theme.toDark
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={label}
      title={label}
      className={cn(
        'inline-flex h-10 w-10 items-center justify-center rounded-full text-slate-600 ring-1 ring-slate-200/80 transition hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:ring-slate-700/80 dark:hover:bg-slate-800 dark:hover:text-white',
        className,
      )}
    >
      {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </button>
  )
}

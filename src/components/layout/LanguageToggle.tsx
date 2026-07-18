import { Languages } from 'lucide-react'
import { LANG_NAME, useI18n } from '@/i18n'
import { cn } from '@/lib/utils'

interface LanguageToggleProps {
  className?: string
}

/** Switches between English and Arabic; shows the language you'll switch to. */
export function LanguageToggle({ className }: LanguageToggleProps) {
  const { lang, toggleLang, s } = useI18n()
  const target = lang === 'en' ? 'ar' : 'en'

  return (
    <button
      type="button"
      onClick={toggleLang}
      aria-label={s.lang.action}
      title={s.lang.action}
      className={cn(
        'inline-flex h-10 w-10 items-center justify-center gap-2 rounded-full text-sm font-semibold text-slate-600 ring-1 ring-slate-200/80 transition hover:bg-slate-100 hover:text-slate-900 sm:w-auto sm:px-3.5 dark:text-slate-300 dark:ring-slate-700/80 dark:hover:bg-slate-800 dark:hover:text-white',
        className,
      )}
    >
      <Languages className="h-4 w-4 shrink-0" aria-hidden="true" />
      <span className="hidden leading-none sm:inline">{LANG_NAME[target]}</span>
    </button>
  )
}

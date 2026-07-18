import { createContext, useContext } from 'react'
import type { Lang, Localized } from './config'
import type { Strings } from './strings'

export interface I18nValue {
  lang: Lang
  dir: 'ltr' | 'rtl'
  setLang: (lang: Lang) => void
  toggleLang: () => void
  /** Resolve a bilingual value to the active language. */
  l: <T>(value: Localized<T>) => T
  /** UI microcopy for the active language. */
  s: Strings
}

export const I18nContext = createContext<I18nValue | null>(null)

/** Access language state, the `l()` resolver, and UI strings. */
export function useI18n(): I18nValue {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within a LanguageProvider')
  return ctx
}

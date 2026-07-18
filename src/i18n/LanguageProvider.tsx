import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { DIR, LANG_STORAGE_KEY, isLang, type Lang, type Localized } from './config'
import { STRINGS } from './strings'
import { I18nContext, type I18nValue } from './context'

/** Read the language the inline <head> script already applied to <html>. */
function getInitialLang(): Lang {
  if (typeof document !== 'undefined') {
    const attr = document.documentElement.lang
    if (isLang(attr)) return attr
  }
  return 'en'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(getInitialLang)
  const dir = DIR[lang]

  // Reflect the choice on <html>, persist it, and localize <title>/description.
  useEffect(() => {
    const root = document.documentElement
    root.lang = lang
    root.dir = dir
    try {
      localStorage.setItem(LANG_STORAGE_KEY, lang)
    } catch {
      // ignore write failures (e.g. private browsing)
    }
    document.title = STRINGS[lang].meta.title
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', STRINGS[lang].meta.description)
  }, [lang, dir])

  const setLang = useCallback((next: Lang) => setLangState(next), [])
  const toggleLang = useCallback(
    () => setLangState((current) => (current === 'ar' ? 'en' : 'ar')),
    [],
  )
  const l = useCallback(<T,>(value: Localized<T>): T => value[lang], [lang])

  const value = useMemo<I18nValue>(
    () => ({ lang, dir, setLang, toggleLang, l, s: STRINGS[lang] }),
    [lang, dir, setLang, toggleLang, l],
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

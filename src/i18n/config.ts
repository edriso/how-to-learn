/**
 * Core i18n primitives shared across the app.
 *
 * The site ships in two languages: English and Modern Standard Arabic (فُصحى).
 * Content lives as `Localized<T>` values (one entry per language) and is
 * resolved to the active language through the `l()` helper on the i18n context.
 */

export type Lang = 'en' | 'ar'

/** A value that exists in every supported language. */
export interface Localized<T> {
  en: T
  ar: T
}

export const LANGS: readonly Lang[] = ['en', 'ar']

/** Writing direction for each language. */
export const DIR: Record<Lang, 'ltr' | 'rtl'> = { en: 'ltr', ar: 'rtl' }

/** Endonym (native name) of each language, shown in the switcher. */
export const LANG_NAME: Record<Lang, string> = { en: 'English', ar: 'العربية' }

/** localStorage key holding the reader's language choice. */
export const LANG_STORAGE_KEY = 'htl-lang'

/** Narrow an unknown value to a supported language. */
export function isLang(value: unknown): value is Lang {
  return value === 'en' || value === 'ar'
}

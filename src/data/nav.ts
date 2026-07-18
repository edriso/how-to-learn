import type { Localized } from '@/i18n/config'

export interface NavSection {
  id: string
  label: Localized<string>
}

/** Sections shown in the top navigation + scroll-spy (in page order). */
export const NAV_SECTIONS: NavSection[] = [
  { id: 'start', label: { en: 'Start Here', ar: 'ابدأ من هنا' } },
  { id: 'science', label: { en: 'The Science', ar: 'العِلم' } },
  { id: 'techniques', label: { en: 'Techniques', ar: 'التقنيات' } },
  { id: 'focus', label: { en: 'Focus', ar: 'التركيز' } },
  { id: 'mindset', label: { en: 'Mindset', ar: 'العقليّة' } },
  { id: 'brain', label: { en: 'Brain Care', ar: 'العناية بالدماغ' } },
  { id: 'toolkit', label: { en: 'Toolkit', ar: 'صندوق الأدوات' } },
]

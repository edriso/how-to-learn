export interface NavSection {
  id: string
  label: string
}

/** Sections shown in the top navigation + scroll-spy (in page order). */
export const NAV_SECTIONS: NavSection[] = [
  { id: 'start', label: 'Start Here' },
  { id: 'science', label: 'The Science' },
  { id: 'techniques', label: 'Techniques' },
  { id: 'focus', label: 'Focus' },
  { id: 'mindset', label: 'Mindset' },
  { id: 'brain', label: 'Brain Care' },
  { id: 'toolkit', label: 'Toolkit' },
]

/**
 * Per-topic color accents. Every class string is written out in full (no string
 * interpolation) so Tailwind's compiler can detect and include them.
 */
export type Accent =
  | 'violet'
  | 'indigo'
  | 'sky'
  | 'cyan'
  | 'teal'
  | 'emerald'
  | 'amber'
  | 'orange'
  | 'rose'
  | 'fuchsia'

export interface AccentStyle {
  /** Filled gradient chip for an icon. */
  chip: string
  /** Soft tinted surface. */
  soft: string
  /** Colored text. */
  text: string
  /** Ring / subtle border tint. */
  ring: string
  /** Gradient stops for a thin bar or progress fill. */
  bar: string
}

export const ACCENTS: Record<Accent, AccentStyle> = {
  violet: {
    chip: 'bg-linear-to-br from-violet-500 to-violet-700 text-white',
    soft: 'bg-violet-50 dark:bg-violet-500/10',
    text: 'text-violet-700 dark:text-violet-300',
    ring: 'ring-violet-200/70 dark:ring-violet-500/25',
    bar: 'from-violet-500 to-violet-600',
  },
  indigo: {
    chip: 'bg-linear-to-br from-indigo-500 to-indigo-700 text-white',
    soft: 'bg-indigo-50 dark:bg-indigo-500/10',
    text: 'text-indigo-700 dark:text-indigo-300',
    ring: 'ring-indigo-200/70 dark:ring-indigo-500/25',
    bar: 'from-indigo-500 to-indigo-600',
  },
  sky: {
    chip: 'bg-linear-to-br from-sky-500 to-sky-700 text-white',
    soft: 'bg-sky-50 dark:bg-sky-500/10',
    text: 'text-sky-700 dark:text-sky-300',
    ring: 'ring-sky-200/70 dark:ring-sky-500/25',
    bar: 'from-sky-500 to-sky-600',
  },
  cyan: {
    chip: 'bg-linear-to-br from-cyan-500 to-cyan-700 text-white',
    soft: 'bg-cyan-50 dark:bg-cyan-500/10',
    text: 'text-cyan-700 dark:text-cyan-300',
    ring: 'ring-cyan-200/70 dark:ring-cyan-500/25',
    bar: 'from-cyan-500 to-cyan-600',
  },
  teal: {
    chip: 'bg-linear-to-br from-teal-500 to-teal-700 text-white',
    soft: 'bg-teal-50 dark:bg-teal-500/10',
    text: 'text-teal-700 dark:text-teal-300',
    ring: 'ring-teal-200/70 dark:ring-teal-500/25',
    bar: 'from-teal-500 to-teal-600',
  },
  emerald: {
    chip: 'bg-linear-to-br from-emerald-500 to-emerald-700 text-white',
    soft: 'bg-emerald-50 dark:bg-emerald-500/10',
    text: 'text-emerald-700 dark:text-emerald-300',
    ring: 'ring-emerald-200/70 dark:ring-emerald-500/25',
    bar: 'from-emerald-500 to-emerald-600',
  },
  amber: {
    chip: 'bg-linear-to-br from-amber-400 to-amber-600 text-white',
    soft: 'bg-amber-50 dark:bg-amber-500/10',
    text: 'text-amber-700 dark:text-amber-300',
    ring: 'ring-amber-200/70 dark:ring-amber-500/25',
    bar: 'from-amber-400 to-amber-500',
  },
  orange: {
    chip: 'bg-linear-to-br from-orange-500 to-orange-700 text-white',
    soft: 'bg-orange-50 dark:bg-orange-500/10',
    text: 'text-orange-700 dark:text-orange-300',
    ring: 'ring-orange-200/70 dark:ring-orange-500/25',
    bar: 'from-orange-500 to-orange-600',
  },
  rose: {
    chip: 'bg-linear-to-br from-rose-500 to-rose-700 text-white',
    soft: 'bg-rose-50 dark:bg-rose-500/10',
    text: 'text-rose-700 dark:text-rose-300',
    ring: 'ring-rose-200/70 dark:ring-rose-500/25',
    bar: 'from-rose-500 to-rose-600',
  },
  fuchsia: {
    chip: 'bg-linear-to-br from-fuchsia-500 to-fuchsia-700 text-white',
    soft: 'bg-fuchsia-50 dark:bg-fuchsia-500/10',
    text: 'text-fuchsia-700 dark:text-fuchsia-300',
    ring: 'ring-fuchsia-200/70 dark:ring-fuchsia-500/25',
    bar: 'from-fuchsia-500 to-fuchsia-600',
  },
}

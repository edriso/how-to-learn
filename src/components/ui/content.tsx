import type { ReactNode } from 'react'
import { Lightbulb, X } from 'lucide-react'
import { ACCENTS, type Accent } from '@/data/accents'
import { cn } from '@/lib/utils'

/** Numbered how-to steps with accent number badges. */
export function Steps({ items, accent }: { items: string[]; accent: Accent }) {
  return (
    <ol className="space-y-2.5">
      {items.map((step, index) => (
        <li key={index} className="flex gap-3">
          <span
            className={cn(
              'mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold shadow-soft',
              ACCENTS[accent].chip,
            )}
          >
            {index + 1}
          </span>
          <span className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            {step}
          </span>
        </li>
      ))}
    </ol>
  )
}

/** Tinted "real example" callout. */
export function ExampleBox({
  accent,
  children,
}: {
  accent: Accent
  children: ReactNode
}) {
  return (
    <div className={cn('rounded-xl p-4', ACCENTS[accent].soft)}>
      <p
        className={cn(
          'mb-1 text-xs font-semibold tracking-wide uppercase',
          ACCENTS[accent].text,
        )}
      >
        Real example
      </p>
      <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
        {children}
      </p>
    </div>
  )
}

/** Bulleted list of common mistakes. */
export function MistakeList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li
          key={index}
          className="flex gap-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-300"
        >
          <X className="mt-0.5 h-4 w-4 shrink-0 text-rose-500" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

/** Amber "good to know" callout. */
export function NoteBox({ children }: { children: ReactNode }) {
  return (
    <div className="flex gap-3 rounded-xl border border-amber-200/70 bg-amber-50 p-4 dark:border-amber-500/20 dark:bg-amber-500/10">
      <Lightbulb className="h-5 w-5 shrink-0 text-amber-500" />
      <p className="text-sm leading-relaxed text-amber-900 dark:text-amber-200">
        {children}
      </p>
    </div>
  )
}

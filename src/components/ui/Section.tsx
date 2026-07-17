import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { Reveal } from './Reveal'

interface SectionProps {
  id?: string
  eyebrow?: string
  title?: ReactNode
  intro?: ReactNode
  children: ReactNode
  className?: string
  /** Tighten the max width of the heading block for long intros. */
  headingWidth?: 'md' | 'lg'
}

export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  className,
  headingWidth = 'md',
}: SectionProps) {
  const hasHeading = eyebrow || title || intro
  return (
    <section id={id} className={cn('scroll-mt-24 py-20 sm:py-28', className)}>
      <div className="container-page">
        {hasHeading && (
          <Reveal
            className={cn(
              'mx-auto mb-14 text-center',
              headingWidth === 'lg' ? 'max-w-3xl' : 'max-w-2xl',
            )}
          >
            {eyebrow && (
              <p className="mb-3 text-sm font-semibold tracking-wider text-brand-600 uppercase dark:text-brand-400">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="text-3xl font-bold sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
                {title}
              </h2>
            )}
            {intro && (
              <p className="mt-5 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                {intro}
              </p>
            )}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  )
}

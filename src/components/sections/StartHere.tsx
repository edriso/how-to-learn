import { Quote } from 'lucide-react'
import { ACCENTS } from '@/data/accents'
import { BIG_IDEA, SUPER_STRATEGIES } from '@/data/learning'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { useI18n } from '@/i18n'
import { cn } from '@/lib/utils'

export function StartHere() {
  const { l, s } = useI18n()
  return (
    <Section
      id="start"
      eyebrow={s.sections.start.eyebrow}
      title={s.sections.start.title}
      intro={s.sections.start.intro}
    >
      <Reveal className="mx-auto max-w-3xl">
        <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-brand-600 to-brand-800 p-8 text-white shadow-lift sm:p-12">
          <Quote className="absolute top-6 end-6 h-16 w-16 text-white/10 rtl:-scale-x-100" />
          <p className="font-display text-2xl leading-snug font-semibold sm:text-3xl">
            {`“${l(BIG_IDEA.quote)}”`}
          </p>
          <p className="mt-6 leading-relaxed text-brand-50/90">
            {l(BIG_IDEA.body)}
          </p>
          <div className="mt-8 inline-flex flex-wrap items-center gap-x-2 gap-y-1 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold backdrop-blur">
            <span className="text-accent-300">{s.startHere.goldenRule}</span>
            <span>{l(BIG_IDEA.rule)}</span>
          </div>
        </div>
      </Reveal>

      <div className="mx-auto mt-14 max-w-5xl">
        <Reveal className="mb-8 text-center">
          <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white">
            {s.startHere.superTitle}
          </h3>
          <p className="mt-2 text-slate-600 dark:text-slate-400">
            {s.startHere.superIntro}
          </p>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-3">
          {SUPER_STRATEGIES.map((strategy, index) => {
            const Icon = strategy.icon
            return (
              <Reveal key={strategy.id} delay={index * 0.08}>
                <div className="h-full rounded-2xl border border-slate-200/80 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift dark:border-slate-800 dark:bg-slate-900">
                  <span
                    className={cn(
                      'flex h-12 w-12 items-center justify-center rounded-2xl shadow-soft',
                      ACCENTS[strategy.accent].chip,
                    )}
                  >
                    <Icon className="h-6 w-6" />
                  </span>
                  <h4 className="mt-4 font-display text-lg font-semibold text-slate-900 dark:text-white">
                    {l(strategy.title)}
                  </h4>
                  <p
                    className={cn(
                      'mt-1 text-sm font-semibold',
                      ACCENTS[strategy.accent].text,
                    )}
                  >
                    {l(strategy.short)}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {l(strategy.detail)}
                  </p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </Section>
  )
}

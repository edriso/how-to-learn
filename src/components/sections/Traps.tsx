import { ArrowRight } from 'lucide-react'
import { TRAPS, TRAPS_INTRO } from '@/data/learning'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { useI18n } from '@/i18n'

export function Traps() {
  const { l, s } = useI18n()
  return (
    <Section
      id="traps"
      eyebrow={s.sections.traps.eyebrow}
      title={s.sections.traps.title}
      intro={l(TRAPS_INTRO)}
      headingWidth="lg"
    >
      <div className="grid gap-5 md:grid-cols-2">
        {TRAPS.map((trap, index) => {
          const Icon = trap.icon
          return (
            <Reveal key={trap.id} delay={(index % 2) * 0.08}>
              <article className="flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-rose-100 text-rose-600 dark:bg-rose-500/15 dark:text-rose-300">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-white">
                    {l(trap.name)}
                  </h3>
                </div>

                <dl className="mt-5 space-y-4 text-sm">
                  <div>
                    <dt className="font-semibold text-slate-500 dark:text-slate-400">
                      {s.card.feelsLike}
                    </dt>
                    <dd className="mt-0.5 leading-relaxed text-slate-600 dark:text-slate-300">
                      {l(trap.feelsLike)}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-rose-600 dark:text-rose-400">
                      {s.card.theTruth}
                    </dt>
                    <dd className="mt-0.5 leading-relaxed text-slate-600 dark:text-slate-300">
                      {l(trap.truth)}
                    </dd>
                  </div>
                </dl>

                <div className="mt-auto pt-5">
                  <div className="flex gap-2.5 rounded-xl bg-emerald-50 p-3.5 dark:bg-emerald-500/10">
                    <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400 rtl:-scale-x-100" />
                    <p className="text-sm leading-relaxed text-emerald-900 dark:text-emerald-200">
                      <span className="font-semibold">{s.card.doThisInstead}</span>
                      {l(trap.instead)}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}

import { ACCENTS } from '@/data/accents'
import { SCIENCE } from '@/data/learning'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { useI18n } from '@/i18n'
import { cn } from '@/lib/utils'

export function Science() {
  const { l, s } = useI18n()
  return (
    <Section
      id="science"
      eyebrow={s.sections.science.eyebrow}
      title={s.sections.science.title}
      intro={s.sections.science.intro}
      headingWidth="lg"
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SCIENCE.map((concept, index) => {
          const Icon = concept.icon
          return (
            <Reveal key={concept.id} delay={(index % 3) * 0.06}>
              <article className="h-full rounded-2xl border border-slate-200/80 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift dark:border-slate-800 dark:bg-slate-900">
                <span
                  className={cn(
                    'flex h-12 w-12 items-center justify-center rounded-2xl shadow-soft',
                    ACCENTS[concept.accent].chip,
                  )}
                >
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-slate-900 dark:text-white">
                  {l(concept.title)}
                </h3>
                <p
                  className={cn(
                    'mt-1 text-sm font-semibold',
                    ACCENTS[concept.accent].text,
                  )}
                >
                  {l(concept.oneLiner)}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {l(concept.body)}
                </p>
                {concept.analogy && (
                  <p
                    className={cn(
                      'mt-4 rounded-xl p-3 text-sm leading-relaxed text-slate-600 italic dark:text-slate-300',
                      ACCENTS[concept.accent].soft,
                    )}
                  >
                    {l(concept.analogy)}
                  </p>
                )}
              </article>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}

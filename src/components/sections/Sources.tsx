import { BookMarked, ExternalLink } from 'lucide-react'
import { SOURCES } from '@/data/sources'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { useI18n } from '@/i18n'

export function Sources() {
  const { l, s } = useI18n()
  return (
    <Section
      id="sources"
      eyebrow={s.sections.sources.eyebrow}
      title={s.sections.sources.title}
      intro={s.sections.sources.intro}
      headingWidth="lg"
      className="bg-white dark:bg-slate-900/40"
    >
      <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
        {SOURCES.map((group, groupIndex) => (
          <Reveal key={group.label.en} delay={(groupIndex % 2) * 0.06}>
            <div className="h-full rounded-2xl border border-slate-200/80 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900">
              <h3 className="flex items-center gap-2 font-display text-lg font-semibold text-slate-900 dark:text-white">
                <BookMarked className="h-5 w-5 text-brand-500" />
                {l(group.label)}
              </h3>
              <ul className="mt-4 space-y-4">
                {group.items.map((item) => (
                  <li
                    key={item.title}
                    className="border-s-2 border-slate-100 ps-4 dark:border-slate-800"
                  >
                    {item.url ? (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-start gap-1 font-medium text-slate-900 transition-colors hover:text-brand-600 dark:text-white dark:hover:text-brand-300"
                      >
                        <span>{item.title}</span>
                        <ExternalLink className="mt-1 h-3.5 w-3.5 shrink-0 opacity-40 transition-opacity group-hover:opacity-100" />
                      </a>
                    ) : (
                      <p className="font-medium text-slate-900 dark:text-white">
                        {item.title}
                      </p>
                    )}
                    <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-400">
                      {l(item.meta)}
                    </p>
                    {item.note && (
                      <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                        {l(item.note)}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

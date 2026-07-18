import type { Tip } from '@/data/learning'
import { useI18n } from '@/i18n'
import { ExpandableCard } from './ExpandableCard'
import { ExampleBox, NoteBox, Steps } from './content'

export function TipCard({
  tip,
  defaultOpen,
}: {
  tip: Tip
  defaultOpen?: boolean
}) {
  const { l, s } = useI18n()
  return (
    <ExpandableCard
      icon={tip.icon}
      accent={tip.accent}
      title={l(tip.title)}
      subtitle={l(tip.oneLiner)}
      defaultOpen={defaultOpen}
    >
      <div className="space-y-5">
        <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          {l(tip.body)}
        </p>
        {tip.steps && (
          <div>
            <h4 className="mb-2.5 text-sm font-semibold text-slate-900 dark:text-white">
              {s.card.howToDoIt}
            </h4>
            <Steps items={l(tip.steps)} accent={tip.accent} />
          </div>
        )}
        {tip.example && (
          <ExampleBox accent={tip.accent}>{l(tip.example)}</ExampleBox>
        )}
        {tip.note && <NoteBox>{l(tip.note)}</NoteBox>}
      </div>
    </ExpandableCard>
  )
}

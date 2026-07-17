import type { Tip } from '@/data/learning'
import { ExpandableCard } from './ExpandableCard'
import { ExampleBox, NoteBox, Steps } from './content'

export function TipCard({
  tip,
  defaultOpen,
}: {
  tip: Tip
  defaultOpen?: boolean
}) {
  return (
    <ExpandableCard
      icon={tip.icon}
      accent={tip.accent}
      title={tip.title}
      subtitle={tip.oneLiner}
      defaultOpen={defaultOpen}
    >
      <div className="space-y-5">
        <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          {tip.body}
        </p>
        {tip.steps && (
          <div>
            <h4 className="mb-2.5 text-sm font-semibold text-slate-900 dark:text-white">
              How to do it
            </h4>
            <Steps items={tip.steps} accent={tip.accent} />
          </div>
        )}
        {tip.example && <ExampleBox accent={tip.accent}>{tip.example}</ExampleBox>}
        {tip.note && <NoteBox>{tip.note}</NoteBox>}
      </div>
    </ExpandableCard>
  )
}

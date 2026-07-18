import type { Technique, TechTier } from '@/data/learning'
import { useI18n } from '@/i18n'
import { cn } from '@/lib/utils'
import { Badge } from './Badge'
import { ExpandableCard } from './ExpandableCard'
import { ExampleBox, MistakeList, Steps } from './content'

const tierBadge: Record<TechTier, string> = {
  top: 'bg-brand-100 text-brand-700 dark:bg-brand-500/15 dark:text-brand-300',
  strong: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300',
  boost: 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300',
}

export function TechniqueCard({
  technique,
  defaultOpen,
}: {
  technique: Technique
  defaultOpen?: boolean
}) {
  const { l, s } = useI18n()
  return (
    <ExpandableCard
      icon={technique.icon}
      accent={technique.accent}
      title={l(technique.name)}
      subtitle={l(technique.tagline)}
      defaultOpen={defaultOpen}
      badge={
        <Badge className={cn(tierBadge[technique.tier])}>
          {l(technique.utility)}
        </Badge>
      }
    >
      <div className="space-y-5">
        <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          {l(technique.what)}
        </p>

        <div>
          <h4 className="mb-1.5 text-sm font-semibold text-slate-900 dark:text-white">
            {s.card.whyItWorks}
          </h4>
          <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            {l(technique.why)}
          </p>
        </div>

        <div>
          <h4 className="mb-2.5 text-sm font-semibold text-slate-900 dark:text-white">
            {s.card.howToDoIt}
          </h4>
          <Steps items={l(technique.steps)} accent={technique.accent} />
        </div>

        <ExampleBox accent={technique.accent}>{l(technique.example)}</ExampleBox>

        <div>
          <h4 className="mb-2.5 text-sm font-semibold text-slate-900 dark:text-white">
            {s.card.commonMistakes}
          </h4>
          <MistakeList items={l(technique.mistakes)} />
        </div>
      </div>
    </ExpandableCard>
  )
}

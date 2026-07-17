import type { Tip } from '@/data/learning'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { TipCard } from '@/components/ui/TipCard'

interface TipSectionProps {
  id: string
  eyebrow: string
  title: string
  intro: string
  tips: Tip[]
  className?: string
}

export function TipSection({
  id,
  eyebrow,
  title,
  intro,
  tips,
  className,
}: TipSectionProps) {
  return (
    <Section
      id={id}
      eyebrow={eyebrow}
      title={title}
      intro={intro}
      headingWidth="lg"
      className={className}
    >
      <div className="mx-auto grid max-w-4xl items-start gap-4 md:grid-cols-2">
        {tips.map((tip, index) => (
          <Reveal key={tip.id} delay={(index % 2) * 0.06}>
            <TipCard tip={tip} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

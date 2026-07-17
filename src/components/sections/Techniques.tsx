import { TECHNIQUES } from '@/data/learning'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { TechniqueCard } from '@/components/ui/TechniqueCard'

export function Techniques() {
  return (
    <Section
      id="techniques"
      eyebrow="Techniques"
      title="The methods that actually work"
      intro="These have the strongest research support. Tap any card to see what it is, why it works, how to do it, and a real example."
      headingWidth="lg"
      className="bg-white dark:bg-slate-900/40"
    >
      <div className="mx-auto flex max-w-3xl flex-col gap-4">
        {TECHNIQUES.map((technique, index) => (
          <Reveal key={technique.id} delay={Math.min(index * 0.04, 0.2)}>
            <TechniqueCard technique={technique} defaultOpen={index === 0} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

import { TECHNIQUES } from '@/data/learning'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { TechniqueCard } from '@/components/ui/TechniqueCard'
import { useI18n } from '@/i18n'

export function Techniques() {
  const { s } = useI18n()
  return (
    <Section
      id="techniques"
      eyebrow={s.sections.techniques.eyebrow}
      title={s.sections.techniques.title}
      intro={s.sections.techniques.intro}
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

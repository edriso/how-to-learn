import {
  CalendarClock,
  Layers,
  ListChecks,
  Timer,
  type LucideIcon,
} from 'lucide-react'
import { ACCENTS, type Accent } from '@/data/accents'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { useI18n, type Localized } from '@/i18n'
import { cn } from '@/lib/utils'
import { Flashcards } from '@/components/tools/Flashcards'
import { HabitChecklist } from '@/components/tools/HabitChecklist'
import { PomodoroTimer } from '@/components/tools/PomodoroTimer'
import { SpacedRepetition } from '@/components/tools/SpacedRepetition'
import type { ReactNode } from 'react'

interface ToolEntry {
  id: string
  icon: LucideIcon
  accent: Accent
  title: Localized<string>
  description: Localized<string>
  node: ReactNode
}

const TOOLS: ToolEntry[] = [
  {
    id: 'pomodoro',
    icon: Timer,
    accent: 'violet',
    title: { en: 'Focus Timer', ar: 'مؤقّت التركيز' },
    description: {
      en: 'Beat procrastination with focused 25-minute sessions and timed breaks.',
      ar: 'اهزِم التسويف بجلسات تركيزٍ مدّتها 25 دقيقةً واستراحاتٍ موقوتة.',
    },
    node: <PomodoroTimer />,
  },
  {
    id: 'flashcards',
    icon: Layers,
    accent: 'fuchsia',
    title: { en: 'Active-Recall Flashcards', ar: 'بطاقات الاستدعاء النشط' },
    description: {
      en: 'Practice the single most powerful method with a quick demo deck.',
      ar: 'تمرَّن على أقوى طريقةٍ منفردةٍ عبر مجموعةٍ تجريبيّةٍ سريعة.',
    },
    node: <Flashcards />,
  },
  {
    id: 'spacing',
    icon: CalendarClock,
    accent: 'sky',
    title: { en: 'Spaced-Review Planner', ar: 'مُخطِّط المراجعة المتباعدة' },
    description: {
      en: 'Turn any topic into a spaced review plan so you forget less.',
      ar: 'حوِّل أيّ موضوعٍ إلى خطّة مراجعةٍ متباعدةٍ لتنسى أقلّ.',
    },
    node: <SpacedRepetition />,
  },
  {
    id: 'habits',
    icon: ListChecks,
    accent: 'amber',
    title: { en: 'Daily Habit Tracker', ar: 'مُتتبِّع العادات اليوميّة' },
    description: {
      en: 'Check off good study habits and build a learning streak.',
      ar: 'علِّم عادات الدراسة الجيّدة وابنِ سلسلة تعلُّمٍ متواصلة.',
    },
    node: <HabitChecklist />,
  },
]

export function Toolkit() {
  const { l, s } = useI18n()
  return (
    <Section
      id="toolkit"
      eyebrow={s.sections.toolkit.eyebrow}
      title={s.sections.toolkit.title}
      intro={s.sections.toolkit.intro}
      headingWidth="lg"
      className="bg-white dark:bg-slate-900/40"
    >
      <div className="grid items-start gap-8 lg:grid-cols-2">
        {TOOLS.map((tool, index) => {
          const Icon = tool.icon
          return (
            <Reveal key={tool.id} delay={(index % 2) * 0.08}>
              <div className="flex flex-col">
                <div className="mb-4 flex items-start gap-3">
                  <span
                    className={cn(
                      'flex h-11 w-11 shrink-0 items-center justify-center rounded-xl shadow-soft',
                      ACCENTS[tool.accent].chip,
                    )}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-white">
                      {l(tool.title)}
                    </h3>
                    <p className="mt-0.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                      {l(tool.description)}
                    </p>
                  </div>
                </div>
                {tool.node}
              </div>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}

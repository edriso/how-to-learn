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
  title: string
  description: string
  node: ReactNode
}

const TOOLS: ToolEntry[] = [
  {
    id: 'pomodoro',
    icon: Timer,
    accent: 'violet',
    title: 'Focus Timer',
    description:
      'Beat procrastination with focused 25-minute sessions and timed breaks.',
    node: <PomodoroTimer />,
  },
  {
    id: 'flashcards',
    icon: Layers,
    accent: 'fuchsia',
    title: 'Active-Recall Flashcards',
    description:
      'Practice the single most powerful method with a quick demo deck.',
    node: <Flashcards />,
  },
  {
    id: 'spacing',
    icon: CalendarClock,
    accent: 'sky',
    title: 'Spaced-Review Planner',
    description: 'Turn any topic into a spaced review plan so you forget less.',
    node: <SpacedRepetition />,
  },
  {
    id: 'habits',
    icon: ListChecks,
    accent: 'amber',
    title: 'Daily Habit Tracker',
    description: 'Check off good study habits and build a learning streak.',
    node: <HabitChecklist />,
  },
]

export function Toolkit() {
  return (
    <Section
      id="toolkit"
      eyebrow="Toolkit"
      title="Try it right now"
      intro="Reading about learning is not learning. Use these free, hands-on tools to practice the methods — your progress saves right here on your device."
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
                      {tool.title}
                    </h3>
                    <p className="mt-0.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                      {tool.description}
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

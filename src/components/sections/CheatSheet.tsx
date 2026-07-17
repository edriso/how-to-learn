import {
  BrainCircuit,
  CircleSlash,
  ClipboardList,
  Focus,
  HeartPulse,
  Rocket,
  type LucideIcon,
} from 'lucide-react'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { cn } from '@/lib/utils'
import type { Accent } from '@/data/accents'
import { ACCENTS } from '@/data/accents'

interface CheatGroup {
  icon: LucideIcon
  accent: Accent
  title: string
  items: string[]
}

const GROUPS: CheatGroup[] = [
  {
    icon: BrainCircuit,
    accent: 'violet',
    title: 'Do these above all',
    items: [
      'Test yourself (active recall)',
      'Space it out over days',
      'Mix related topics (interleaving)',
    ],
  },
  {
    icon: Rocket,
    accent: 'sky',
    title: 'Add these boosters',
    items: [
      'Ask why & how (elaboration)',
      'Words + visuals (dual coding)',
      'Concrete examples',
      'Teach it simply (Feynman)',
    ],
  },
  {
    icon: CircleSlash,
    accent: 'rose',
    title: 'Stop doing (low value)',
    items: [
      'Passive rereading',
      'Heavy highlighting',
      'Cramming',
      'Chasing a “learning style” (a myth)',
    ],
  },
  {
    icon: Focus,
    accent: 'indigo',
    title: 'Protect your focus',
    items: [
      'Work in Pomodoro sessions',
      'Remove distractions (no multitasking)',
      'Use the 2-minute rule to start',
      'Do deep, uninterrupted work',
    ],
  },
  {
    icon: HeartPulse,
    accent: 'emerald',
    title: 'Fuel your brain',
    items: [
      'Sleep — memory is saved then',
      'Exercise and move',
      'Good food, water, real breaks',
      'Manage stress',
    ],
  },
  {
    icon: ClipboardList,
    accent: 'amber',
    title: 'Get organized',
    items: [
      'A spaced study schedule',
      'Notes you can self-test from',
      'Practice tests, real conditions',
    ],
  },
]

export function CheatSheet() {
  return (
    <Section
      id="summary"
      eyebrow="Cheat Sheet"
      title="The whole guide in one screen"
      intro="Save this. It is everything above, boiled down to what you actually do."
      headingWidth="lg"
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {GROUPS.map((group, index) => {
          const Icon = group.icon
          return (
            <Reveal key={group.title} delay={(index % 3) * 0.06}>
              <div className="h-full rounded-2xl border border-slate-200/80 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900">
                <div className="flex items-center gap-3">
                  <span
                    className={cn(
                      'flex h-10 w-10 items-center justify-center rounded-xl shadow-soft',
                      ACCENTS[group.accent].chip,
                    )}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-base font-semibold text-slate-900 dark:text-white">
                    {group.title}
                  </h3>
                </div>
                <ul className="mt-4 space-y-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-300"
                    >
                      <span
                        className={cn(
                          'mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full',
                          ACCENTS[group.accent].text,
                          'bg-current',
                        )}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          )
        })}
      </div>

      <Reveal className="mx-auto mt-10 max-w-3xl">
        <div className="rounded-2xl border border-brand-200/70 bg-brand-50/70 p-6 text-center dark:border-brand-500/20 dark:bg-brand-500/10">
          <p className="font-display text-lg font-semibold text-slate-900 sm:text-xl dark:text-white">
            If studying feels a little hard in the right way, it is probably
            working.
          </p>
          <p className="mt-2 text-slate-600 dark:text-slate-300">
            If it feels easy and comfortable, be suspicious.
          </p>
        </div>
      </Reveal>
    </Section>
  )
}

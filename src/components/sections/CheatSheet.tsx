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
import { useI18n, type Localized } from '@/i18n'
import { cn } from '@/lib/utils'
import type { Accent } from '@/data/accents'
import { ACCENTS } from '@/data/accents'

interface CheatGroup {
  id: string
  icon: LucideIcon
  accent: Accent
  title: Localized<string>
  items: Localized<string[]>
}

const GROUPS: CheatGroup[] = [
  {
    id: 'core',
    icon: BrainCircuit,
    accent: 'violet',
    title: { en: 'Do these above all', ar: 'افعَل هذه قبل كلّ شيء' },
    items: {
      en: [
        'Test yourself (active recall)',
        'Space it out over days',
        'Mix related topics (interleaving)',
      ],
      ar: [
        'اختبِر نفسك (الاستدعاء النشط)',
        'وزِّعها على الأيّام',
        'امزُج مواضيع مترابطة (المزج)',
      ],
    },
  },
  {
    id: 'boosters',
    icon: Rocket,
    accent: 'sky',
    title: { en: 'Add these boosters', ar: 'أضِف هذه المُعزِّزات' },
    items: {
      en: [
        'Ask why & how (elaboration)',
        'Words + visuals (dual coding)',
        'Concrete examples',
        'Teach it simply (Feynman)',
      ],
      ar: [
        'اسأل لماذا وكيف (التوسُّع)',
        'كلماتٌ + مرئيّات (الترميز المزدوج)',
        'أمثلةٌ محسوسة',
        'علِّمها ببساطة (فاينمان)',
      ],
    },
  },
  {
    id: 'stop',
    icon: CircleSlash,
    accent: 'rose',
    title: { en: 'Stop doing (low value)', ar: 'توقَّف عن هذه (قليلة الفائدة)' },
    items: {
      en: [
        'Passive rereading',
        'Heavy highlighting',
        'Cramming',
        'Chasing a “learning style” (a myth)',
      ],
      ar: [
        'إعادة القراءة السلبيّة',
        'التظليل المُفرِط',
        'الحشو',
        'ملاحقة «نمط تعلُّم» (خرافة)',
      ],
    },
  },
  {
    id: 'focus',
    icon: Focus,
    accent: 'indigo',
    title: { en: 'Protect your focus', ar: 'احمِ تركيزك' },
    items: {
      en: [
        'Work in Pomodoro sessions',
        'Remove distractions (no multitasking)',
        'Use the 2-minute rule to start',
        'Do deep, uninterrupted work',
      ],
      ar: [
        'اعمَل بجلسات بومودورو',
        'أزِل المُشتِّتات (بلا تعدُّد مهامّ)',
        'استخدِم قاعدة الدقيقتين للبدء',
        'أنجِز عملًا عميقًا بلا انقطاع',
      ],
    },
  },
  {
    id: 'fuel',
    icon: HeartPulse,
    accent: 'emerald',
    title: { en: 'Fuel your brain', ar: 'غذِّ دماغك' },
    items: {
      en: [
        'Sleep — memory is saved then',
        'Exercise and move',
        'Good food, water, real breaks',
        'Manage stress',
      ],
      ar: [
        'النوم — فحينها تُحفَظ الذاكرة',
        'مارِس الرياضة وتحرَّك',
        'طعامٌ جيّد، وماء، واستراحاتٌ حقيقيّة',
        'أدِر التوتُّر',
      ],
    },
  },
  {
    id: 'organize',
    icon: ClipboardList,
    accent: 'amber',
    title: { en: 'Get organized', ar: 'نظِّم نفسك' },
    items: {
      en: [
        'A spaced study schedule',
        'Notes you can self-test from',
        'Practice tests, real conditions',
      ],
      ar: [
        'جدول دراسةٍ متباعد',
        'ملاحظاتٌ تختبر نفسك منها',
        'اختباراتٌ تدريبيّةٌ بظروفٍ واقعيّة',
      ],
    },
  },
]

export function CheatSheet() {
  const { l, s } = useI18n()
  return (
    <Section
      id="summary"
      eyebrow={s.sections.summary.eyebrow}
      title={s.sections.summary.title}
      intro={s.sections.summary.intro}
      headingWidth="lg"
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {GROUPS.map((group, index) => {
          const Icon = group.icon
          return (
            <Reveal key={group.id} delay={(index % 3) * 0.06}>
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
                    {l(group.title)}
                  </h3>
                </div>
                <ul className="mt-4 space-y-2">
                  {l(group.items).map((item) => (
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
            {s.cheatSheet.closingA}
          </p>
          <p className="mt-2 text-slate-600 dark:text-slate-300">
            {s.cheatSheet.closingB}
          </p>
        </div>
      </Reveal>
    </Section>
  )
}

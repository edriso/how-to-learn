import { useMemo } from 'react'
import { Brain, CalendarDays } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { useI18n, type Localized } from '@/i18n'

interface SpacingState {
  topic: string
  startDate: string
}

interface ScheduleStep {
  offset: number
  gapLabel: Localized<string>
  tip: Localized<string>
}

const STEPS: readonly ScheduleStep[] = [
  {
    offset: 0,
    gapLabel: { en: 'Learn it', ar: 'تعلَّمها' },
    tip: {
      en: 'Study actively — understand the ideas, don’t just highlight.',
      ar: 'ادرُس بنشاط — افهَمِ الأفكار، لا تكتفِ بالتظليل.',
    },
  },
  {
    offset: 1,
    gapLabel: { en: '+1 day', ar: '+1 يوم' },
    tip: {
      en: 'Quick self-test from memory before you peek at notes.',
      ar: 'اختبارٌ ذاتيٌّ سريعٌ من الذاكرة قبل أن تختلس النظر إلى الملاحظات.',
    },
  },
  {
    offset: 3,
    gapLabel: { en: '+2 days', ar: '+2 يوم' },
    tip: {
      en: 'Recall the key points, then check what you missed.',
      ar: 'استدعِ النقاط الأساسيّة، ثم تحقَّق ممّا فاتك.',
    },
  },
  {
    offset: 7,
    gapLabel: { en: '+3 days', ar: '+3 أيّام' },
    tip: {
      en: 'Explain it aloud in your own words (Feynman technique).',
      ar: 'اشرَحها بصوتٍ عالٍ بكلماتك (تقنية فاينمان).',
    },
  },
  {
    offset: 14,
    gapLabel: { en: '+1 week', ar: '+1 أسبوع' },
    tip: {
      en: 'Mix in related topics and older questions (interleave).',
      ar: 'امزُج مواضيع مترابطةً وأسئلةً أقدم (المزج).',
    },
  },
  {
    offset: 30,
    gapLabel: { en: '+2 weeks', ar: '+2 أسبوع' },
    tip: {
      en: 'Final recall pass — teach it or write a short summary.',
      ar: 'جولة استدعاءٍ أخيرة — علِّمها أو اكتُب ملخّصًا قصيرًا.',
    },
  },
]

/** Local YYYY-MM-DD (avoids the UTC shift of toISOString). */
function toLocalISODate(date: Date): string {
  const y = date.getFullYear()
  const m = String(date.getMonth() + 1).padStart(2, '0')
  const d = String(date.getDate()).padStart(2, '0')
  return `${y}-${m}-${d}`
}

/** Parse a YYYY-MM-DD string as a *local* date (not UTC). */
function parseLocalISODate(value: string): Date {
  const parts = value.split('-').map(Number)
  const [y, m, d] = parts
  if (!y || !m || !d) return new Date()
  return new Date(y, m - 1, d)
}

function addDays(date: Date, days: number): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() + days)
}

const DATE_FMT: Intl.DateTimeFormatOptions = {
  weekday: 'short',
  month: 'short',
  day: 'numeric',
}

export function SpacedRepetition() {
  const { l, s, lang } = useI18n()
  const t = s.tools.spaced
  const [state, setState] = useLocalStorage<SpacingState>('htl-spacing', {
    topic: t.defaultTopic,
    startDate: toLocalISODate(new Date()),
  })

  const rtl = lang === 'ar'
  // Arabic month/weekday names with Western digits (…-nu-latn) for consistency.
  const dateLocale = rtl ? 'ar-u-nu-latn' : 'en-US'

  const schedule = useMemo(() => {
    const start = parseLocalISODate(state.startDate)
    return STEPS.map((step) => {
      const date = addDays(start, step.offset)
      return {
        ...step,
        dateLabel: date.toLocaleDateString(dateLocale, DATE_FMT),
      }
    })
  }, [state.startDate, dateLocale])

  return (
    <Card className="mx-auto w-full max-w-2xl">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-100 text-brand-600 dark:bg-brand-900/50 dark:text-brand-300">
          <CalendarDays className="h-5 w-5" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            {t.title}
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            {t.subtitle}
          </p>
        </div>
      </div>

      <div className="mb-6 grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5">
          <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
            {t.topic}
          </span>
          <input
            type="text"
            value={state.topic}
            onChange={(e) =>
              setState((prev) => ({ ...prev, topic: e.target.value }))
            }
            placeholder={t.topicPlaceholder}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder:text-slate-400 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
          />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
            {t.startDate}
          </span>
          <input
            type="date"
            value={state.startDate}
            onChange={(e) =>
              setState((prev) => ({ ...prev, startDate: e.target.value }))
            }
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:[color-scheme:dark]"
          />
        </label>
      </div>

      {/* Illustrative forgetting-curve chart */}
      <figure className="mb-6 rounded-xl border border-slate-200/80 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-800/40">
        <figcaption className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
          <Brain className="h-4 w-4 text-brand-500" />
          {t.chartTitle}
        </figcaption>
        <svg
          viewBox="0 0 320 170"
          className="h-auto w-full"
          role="img"
          aria-label={t.chartAlt}
        >
          {/* In RTL the plot geometry is mirrored so time reads right-to-left,
              while the text labels below stay upright and readable. */}
          <g transform={rtl ? 'translate(320 0) scale(-1 1)' : undefined}>
            {/* Axes */}
            <line
              x1="28"
              y1="18"
              x2="28"
              y2="140"
              className="stroke-slate-300 dark:stroke-slate-600"
              strokeWidth="1.5"
            />
            <line
              x1="28"
              y1="140"
              x2="308"
              y2="140"
              className="stroke-slate-300 dark:stroke-slate-600"
              strokeWidth="1.5"
            />

            {/* Without review — fast decay */}
            <path
              d="M32,26 C 80,96 130,124 304,132"
              fill="none"
              className="stroke-slate-400 dark:stroke-slate-500"
              strokeWidth="2"
              strokeDasharray="5 4"
            />

            {/* With spaced review — saw-tooth that decays more slowly */}
            <polyline
              points="32,26 92,80 92,30 152,66 152,32 212,54 212,33 272,46 272,34 304,42"
              fill="none"
              className="stroke-brand-500"
              strokeWidth="2.5"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
            {/* Review markers */}
            {[
              [32, 26],
              [92, 30],
              [152, 32],
              [212, 33],
              [272, 34],
            ].map(([cx, cy]) => (
              <circle
                key={`${cx}-${cy}`}
                cx={cx}
                cy={cy}
                r="3.5"
                className="fill-accent-500"
              />
            ))}
          </g>

          {/* Memory axis label — sits beside the y-axis on its current side. */}
          <text
            x={rtl ? 312 : 8}
            y="82"
            className="fill-slate-400 dark:fill-slate-500"
            fontSize="9"
            transform={`rotate(-90 ${rtl ? 312 : 8} 82)`}
            textAnchor="middle"
          >
            {t.axisMemory}
          </text>
          <text
            x="160"
            y="158"
            className="fill-slate-400 dark:fill-slate-500"
            fontSize="9"
            textAnchor="middle"
          >
            {t.axisTime}
          </text>
        </svg>
        <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs">
          <span className="inline-flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-brand-500" />
            {t.legendWith}
          </span>
          <span className="inline-flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
            <span className="inline-block h-0.5 w-4 rounded bg-slate-400 dark:bg-slate-500" />
            {t.legendWithout}
          </span>
        </div>
      </figure>

      {/* Timeline */}
      <ol className="relative space-y-4 border-s-2 border-slate-200 ps-6 dark:border-slate-700">
        {schedule.map((step, i) => (
          <li key={step.offset} className="relative">
            <span
              className="absolute -start-[31px] flex h-4 w-4 items-center justify-center rounded-full border-2 border-white bg-brand-500 dark:border-slate-900"
              aria-hidden="true"
            />
            <div className="flex flex-col gap-1 rounded-xl border border-slate-200/80 bg-white p-3 shadow-soft dark:border-slate-800 dark:bg-slate-900 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-slate-900 dark:text-white">
                  {step.dateLabel}
                </span>
                <span
                  className={
                    i === 0
                      ? 'rounded-full bg-accent-100 px-2.5 py-0.5 text-xs font-bold text-accent-700 dark:bg-accent-900/50 dark:text-accent-200'
                      : 'rounded-full bg-brand-100 px-2.5 py-0.5 text-xs font-semibold text-brand-700 dark:bg-brand-900/50 dark:text-brand-200'
                  }
                >
                  {l(step.gapLabel)}
                </span>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400 sm:max-w-[60%] sm:text-end">
                {l(step.tip)}
              </p>
            </div>
          </li>
        ))}
      </ol>

      <p className="mt-4 text-center text-xs text-slate-400 dark:text-slate-500">
        {t.planningBefore}{' '}
        <span className="font-medium text-slate-500 dark:text-slate-400">
          {state.topic || t.yourTopic}
        </span>
        . {s.common.savedOnDevice}
      </p>
    </Card>
  )
}

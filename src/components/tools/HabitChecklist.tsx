import { useMemo } from 'react'
import { Flame, Sparkles } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { cn } from '@/lib/utils'

interface Habit {
  id: string
  label: string
}

const HABITS: readonly Habit[] = [
  { id: 'recall', label: 'Tested myself from memory (active recall)' },
  { id: 'focus', label: 'Did a focused block with no phone' },
  { id: 'spacing', label: 'Reviewed older material (spacing)' },
  { id: 'breaks', label: 'Took real breaks (no doom-scrolling)' },
  { id: 'explain', label: 'Explained an idea in my own words' },
  { id: 'move', label: 'Moved my body / took a walk' },
  { id: 'sleep', label: 'Slept 7–9 hours' },
]

const TOTAL = HABITS.length
const STREAK_THRESHOLD = 4

type HabitLog = Record<string, string[]>

function toLocalISODate(date: Date): string {
  const y = date.getFullYear()
  const m = String(date.getMonth() + 1).padStart(2, '0')
  const d = String(date.getDate()).padStart(2, '0')
  return `${y}-${m}-${d}`
}

function addDays(date: Date, days: number): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() + days)
}

/**
 * Consecutive days ending today (or yesterday if today isn't started yet)
 * where at least STREAK_THRESHOLD habits were checked.
 */
function computeStreak(log: HabitLog, today: Date): number {
  const todayCount = log[toLocalISODate(today)]?.length ?? 0

  let startOffset: number
  if (todayCount >= STREAK_THRESHOLD) {
    startOffset = 0 // today qualifies — chain ends today
  } else if (todayCount === 0) {
    startOffset = 1 // today not started yet — don't penalize, count from yesterday
  } else {
    return 0 // today started but under threshold — streak is broken
  }

  let streak = 0
  for (let i = startOffset; i < 3660; i++) {
    const key = toLocalISODate(addDays(today, -i))
    const count = log[key]?.length ?? 0
    if (count >= STREAK_THRESHOLD) {
      streak += 1
    } else {
      break
    }
  }
  return streak
}

const RADIUS = 34
const CIRCUMFERENCE = 2 * Math.PI * RADIUS

export function HabitChecklist() {
  const [log, setLog] = useLocalStorage<HabitLog>('htl-habits', {})

  const today = useMemo(() => new Date(), [])
  const todayKey = useMemo(() => toLocalISODate(today), [today])

  const checkedToday = log[todayKey] ?? []
  const doneCount = checkedToday.filter((id) =>
    HABITS.some((h) => h.id === id),
  ).length
  const allDone = doneCount === TOTAL
  const streak = useMemo(() => computeStreak(log, today), [log, today])

  const toggle = (id: string) => {
    setLog((prev) => {
      const current = prev[todayKey] ?? []
      const next = current.includes(id)
        ? current.filter((x) => x !== id)
        : [...current, id]
      return { ...prev, [todayKey]: next }
    })
  }

  const progress = TOTAL > 0 ? doneCount / TOTAL : 0
  const dashOffset = CIRCUMFERENCE * (1 - progress)

  return (
    <Card className="mx-auto w-full max-w-lg">
      <div className="mb-6 flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <div className="relative h-[88px] w-[88px] shrink-0">
            <svg viewBox="0 0 88 88" className="h-full w-full -rotate-90" aria-hidden="true">
              <circle
                cx="44"
                cy="44"
                r={RADIUS}
                fill="none"
                strokeWidth="8"
                className="stroke-slate-200 dark:stroke-slate-800"
              />
              <circle
                cx="44"
                cy="44"
                r={RADIUS}
                fill="none"
                strokeWidth="8"
                strokeLinecap="round"
                className="stroke-brand-500 transition-[stroke-dashoffset] duration-500"
                strokeDasharray={CIRCUMFERENCE}
                strokeDashoffset={dashOffset}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-lg font-bold tabular-nums text-slate-900 dark:text-white">
                {doneCount}/{TOTAL}
              </span>
              <span className="text-[10px] font-medium uppercase tracking-wide text-slate-400 dark:text-slate-500">
                Today
              </span>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Daily study habits
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Small habits, compounded daily.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 rounded-full bg-accent-100 px-4 py-2 dark:bg-accent-900/40">
          <Flame
            className={cn(
              'h-5 w-5',
              streak > 0
                ? 'text-accent-600 dark:text-accent-300'
                : 'text-slate-400 dark:text-slate-500',
            )}
          />
          <span className="text-sm font-bold text-accent-700 dark:text-accent-200">
            {streak} day{streak === 1 ? '' : 's'}
          </span>
        </div>
      </div>

      <ul className="space-y-2" aria-label="Today's habits">
        {HABITS.map((habit) => {
          const checked = checkedToday.includes(habit.id)
          return (
            <li key={habit.id}>
              <label
                className={cn(
                  'flex cursor-pointer items-center gap-3 rounded-xl border p-3 transition-colors',
                  checked
                    ? 'border-brand-200 bg-brand-50 dark:border-brand-800/60 dark:bg-brand-900/25'
                    : 'border-slate-200/80 bg-white hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-700',
                )}
              >
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => toggle(habit.id)}
                  className="h-5 w-5 shrink-0 rounded border-slate-300 accent-brand-600 dark:border-slate-600"
                />
                <span
                  className={cn(
                    'text-sm',
                    checked
                      ? 'font-medium text-slate-500 line-through decoration-brand-400 dark:text-slate-400'
                      : 'text-slate-700 dark:text-slate-200',
                  )}
                >
                  {habit.label}
                </span>
              </label>
            </li>
          )
        })}
      </ul>

      <div className="mt-5 min-h-[1.5rem] text-center" aria-live="polite">
        {allDone ? (
          <p className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 dark:text-brand-300">
            <Sparkles className="h-4 w-4" />
            Great day of learning! 🎉
          </p>
        ) : (
          <p className="text-sm text-slate-500 dark:text-slate-400">
            {doneCount === 0
              ? 'Check off your first habit to get started.'
              : `${TOTAL - doneCount} to go — you’ve got this.`}
          </p>
        )}
      </div>

      <p className="mt-3 text-center text-xs text-slate-400 dark:text-slate-500">
        Saved on this device.
      </p>
    </Card>
  )
}

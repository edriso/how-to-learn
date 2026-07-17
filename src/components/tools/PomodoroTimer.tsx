import { useCallback, useEffect, useRef, useState } from 'react'
import { Pause, Play, RotateCcw, Settings } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { cn } from '@/lib/utils'

type Mode = 'focus' | 'short' | 'long'

interface Settings {
  focus: number
  short: number
  long: number
}

const DEFAULT_SETTINGS: Settings = { focus: 25, short: 5, long: 15 }

const MODE_LABEL: Record<Mode, string> = {
  focus: 'Focus',
  short: 'Short break',
  long: 'Long break',
}

const MODE_ACCENT: Record<Mode, string> = {
  focus: 'text-brand-600 dark:text-brand-300',
  short: 'text-accent-600 dark:text-accent-300',
  long: 'text-accent-600 dark:text-accent-300',
}

const RING_STROKE: Record<Mode, string> = {
  focus: 'stroke-brand-500',
  short: 'stroke-accent-500',
  long: 'stroke-accent-500',
}

const clampMinutes = (n: number): number => {
  if (Number.isNaN(n)) return 1
  return Math.min(90, Math.max(1, Math.round(n)))
}

const formatTime = (totalSeconds: number): string => {
  const safe = Math.max(0, totalSeconds)
  const minutes = Math.floor(safe / 60)
  const seconds = safe % 60
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
}

/** Small, optional completion chime. Fails silently if Web Audio is unavailable. */
function playBeep() {
  try {
    const Ctx =
      window.AudioContext ??
      (window as unknown as { webkitAudioContext?: typeof AudioContext })
        .webkitAudioContext
    if (!Ctx) return
    const ctx = new Ctx()
    const oscillator = ctx.createOscillator()
    const gain = ctx.createGain()
    oscillator.type = 'sine'
    oscillator.frequency.value = 660
    gain.gain.setValueAtTime(0.0001, ctx.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.15, ctx.currentTime + 0.02)
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.4)
    oscillator.connect(gain)
    gain.connect(ctx.destination)
    oscillator.start()
    oscillator.stop(ctx.currentTime + 0.42)
    oscillator.onended = () => {
      try {
        void ctx.close()
      } catch {
        // ignore
      }
    }
  } catch {
    // ignore — audio is a nice-to-have
  }
}

const RADIUS = 130
const CIRCUMFERENCE = 2 * Math.PI * RADIUS

export function PomodoroTimer() {
  const [settings, setSettings] = useLocalStorage<Settings>(
    'htl-pomodoro-settings',
    DEFAULT_SETTINGS,
  )
  const [completed, setCompleted] = useLocalStorage<number>(
    'htl-pomodoro-count',
    0,
  )

  const [mode, setMode] = useState<Mode>('focus')
  const [running, setRunning] = useState(false)
  // `started` = the current phase has been begun (running or paused mid-way),
  // so settings edits must not reset the displayed clock.
  const [started, setStarted] = useState(false)
  const [remaining, setRemaining] = useState(settings.focus * 60)
  const [showSettings, setShowSettings] = useState(false)

  const endRef = useRef<number | null>(null)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const modeRef = useRef<Mode>(mode)
  const completedRef = useRef(completed)

  useEffect(() => {
    modeRef.current = mode
  }, [mode])
  useEffect(() => {
    completedRef.current = completed
  }, [completed])

  const durationFor = useCallback(
    (m: Mode): number => settings[m] * 60,
    [settings],
  )

  const clearTimer = useCallback(() => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }, [])

  // Advance to the next phase when the clock hits zero.
  const handlePhaseEnd = useCallback(() => {
    clearTimer()
    setRunning(false)
    setStarted(false)
    endRef.current = null
    playBeep()

    const finished = modeRef.current
    let next: Mode
    if (finished === 'focus') {
      const newCount = completedRef.current + 1
      completedRef.current = newCount
      setCompleted(newCount)
      next = newCount % 4 === 0 ? 'long' : 'short'
    } else {
      next = 'focus'
    }

    setMode(next)
    modeRef.current = next
    setRemaining(durationFor(next))
  }, [clearTimer, durationFor, setCompleted])

  // Drive the countdown from an absolute end-timestamp so it never drifts.
  useEffect(() => {
    if (!running) return
    const tick = () => {
      if (endRef.current === null) return
      const secondsLeft = Math.round((endRef.current - Date.now()) / 1000)
      if (secondsLeft <= 0) {
        setRemaining(0)
        handlePhaseEnd()
      } else {
        setRemaining(secondsLeft)
      }
    }
    tick()
    intervalRef.current = setInterval(tick, 250)
    return () => clearTimer()
  }, [running, handlePhaseEnd, clearTimer])

  // Reflect state in the tab title while running; restore on cleanup.
  useEffect(() => {
    const previous = document.title
    if (running) {
      document.title = `${formatTime(remaining)} · ${MODE_LABEL[mode]}`
    }
    return () => {
      document.title = previous
    }
  }, [running, remaining, mode])

  // Reflect settings edits on the clock only while the phase is fresh
  // (not started/paused) — so pausing never snaps back to full time.
  useEffect(() => {
    if (!started) {
      setRemaining(durationFor(modeRef.current))
    }
  }, [started, durationFor])

  const toggleRun = () => {
    if (running) {
      setRunning(false)
      endRef.current = null
      clearTimer()
    } else {
      const seconds = remaining > 0 ? remaining : durationFor(mode)
      endRef.current = Date.now() + seconds * 1000
      setRemaining(seconds)
      setStarted(true)
      setRunning(true)
    }
  }

  const reset = () => {
    setRunning(false)
    setStarted(false)
    endRef.current = null
    clearTimer()
    setRemaining(durationFor(mode))
  }

  const switchMode = (next: Mode) => {
    setRunning(false)
    setStarted(false)
    endRef.current = null
    clearTimer()
    setMode(next)
    modeRef.current = next
    setRemaining(durationFor(next))
  }

  const total = durationFor(mode)
  const progress = total > 0 ? Math.min(1, Math.max(0, remaining / total)) : 0
  const dashOffset = CIRCUMFERENCE * (1 - progress)
  const todayDots = Math.min(completed, 8)

  return (
    <Card className="mx-auto w-full max-w-md">
      <div className="mb-5 flex items-center justify-between gap-2">
        <div
          className="inline-flex rounded-full bg-slate-100 p-1 dark:bg-slate-800"
          role="group"
          aria-label="Timer mode"
        >
          {(['focus', 'short', 'long'] as const).map((m) => (
            <button
              key={m}
              type="button"
              onClick={() => switchMode(m)}
              aria-pressed={mode === m}
              className={cn(
                'rounded-full px-3 py-1.5 text-xs font-semibold transition-colors',
                mode === m
                  ? 'bg-white text-brand-700 shadow-soft dark:bg-slate-700 dark:text-brand-200'
                  : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200',
              )}
            >
              {m === 'focus' ? 'Focus' : m === 'short' ? 'Short' : 'Long'}
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={() => setShowSettings((s) => !s)}
          aria-label="Timer settings"
          aria-expanded={showSettings}
          className="rounded-full p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-700 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200"
        >
          <Settings className="h-5 w-5" />
        </button>
      </div>

      {showSettings && (
        <div className="mb-6 grid grid-cols-3 gap-3 rounded-xl border border-slate-200/80 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-800/50">
          {(['focus', 'short', 'long'] as const).map((m) => (
            <label key={m} className="flex flex-col gap-1 text-xs font-medium text-slate-600 dark:text-slate-300">
              <span>{m === 'focus' ? 'Focus' : m === 'short' ? 'Short' : 'Long'}</span>
              <input
                type="number"
                min={1}
                max={90}
                value={settings[m]}
                onChange={(e) =>
                  setSettings((prev) => ({
                    ...prev,
                    [m]: clampMinutes(Number(e.target.value)),
                  }))
                }
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
                aria-label={`${MODE_LABEL[m]} minutes`}
              />
            </label>
          ))}
          <p className="col-span-3 text-xs text-slate-400 dark:text-slate-500">
            Minutes per phase (1–90).
          </p>
        </div>
      )}

      <div className="flex justify-center">
        <div className="relative aspect-square w-full max-w-[288px]">
          <svg
            viewBox="0 0 300 300"
            className="h-full w-full -rotate-90"
            aria-hidden="true"
          >
            <circle
              cx="150"
              cy="150"
              r={RADIUS}
              fill="none"
              strokeWidth="14"
              className="stroke-slate-200 dark:stroke-slate-800"
            />
            <circle
              cx="150"
              cy="150"
              r={RADIUS}
              fill="none"
              strokeWidth="14"
              strokeLinecap="round"
              className={cn('transition-[stroke-dashoffset] duration-300', RING_STROKE[mode])}
              strokeDasharray={CIRCUMFERENCE}
              strokeDashoffset={dashOffset}
            />
          </svg>
          <div
            className="absolute inset-0 flex flex-col items-center justify-center"
            aria-live="polite"
          >
            <span className="font-display text-5xl font-bold tabular-nums text-slate-900 dark:text-white sm:text-6xl">
              {formatTime(remaining)}
            </span>
            <span className={cn('mt-1 text-sm font-semibold', MODE_ACCENT[mode])}>
              {MODE_LABEL[mode]}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-3">
        <Button
          onClick={toggleRun}
          size="lg"
          className="min-w-[140px]"
          aria-label={running ? 'Pause timer' : 'Start timer'}
        >
          {running ? (
            <>
              <Pause className="h-5 w-5" /> Pause
            </>
          ) : (
            <>
              <Play className="h-5 w-5" /> Start
            </>
          )}
        </Button>
        <Button
          onClick={reset}
          variant="secondary"
          size="lg"
          aria-label="Reset timer"
        >
          <RotateCcw className="h-5 w-5" />
        </Button>
      </div>

      <div className="mt-6 flex flex-col items-center gap-2 border-t border-slate-200/80 pt-5 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
            Today: {completed}
          </span>
          <div className="flex gap-1" aria-hidden="true">
            {Array.from({ length: 8 }, (_, i) => (
              <span
                key={i}
                className={cn(
                  'h-2.5 w-2.5 rounded-full',
                  i < todayDots
                    ? 'bg-brand-500'
                    : 'bg-slate-200 dark:bg-slate-700',
                )}
              />
            ))}
          </div>
        </div>
        {completed > 0 && (
          <button
            type="button"
            onClick={() => {
              setCompleted(0)
              completedRef.current = 0
            }}
            className="text-xs font-medium text-slate-400 underline-offset-2 hover:text-slate-600 hover:underline dark:text-slate-500 dark:hover:text-slate-300"
          >
            Reset count
          </button>
        )}
      </div>
    </Card>
  )
}

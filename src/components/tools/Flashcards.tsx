import { useState } from 'react'
import type { KeyboardEvent } from 'react'
import {
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  Sparkles,
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { cn } from '@/lib/utils'

interface Flashcard {
  id: string
  question: string
  answer: string
}

const DECK: readonly Flashcard[] = [
  {
    id: 'active-recall',
    question: 'What is active recall (retrieval practice)?',
    answer:
      'Testing yourself from memory instead of re-reading. The effort of retrieving strengthens the memory far more than passive review.',
  },
  {
    id: 'spacing',
    question: 'What is the spacing effect?',
    answer:
      'You remember more when study sessions are spread over time rather than crammed. Short, spaced reviews beat one long session.',
  },
  {
    id: 'interleaving',
    question: 'What is interleaving?',
    answer:
      'Mixing different topics or problem types in one session. It feels harder, but it sharpens your ability to pick the right approach.',
  },
  {
    id: 'feynman',
    question: 'What is the Feynman technique?',
    answer:
      'Explain an idea in plain language as if teaching a child. The gaps where you get stuck reveal exactly what you still need to learn.',
  },
  {
    id: 'forgetting-curve',
    question: 'What does the forgetting curve show?',
    answer:
      'Memory decays quickly after learning. Each well-timed review flattens the curve, so you forget more slowly each time.',
  },
  {
    id: 'two-minute',
    question: 'What is the 2-minute rule?',
    answer:
      'Shrink a task until starting takes under two minutes. Getting started is the hard part; momentum usually carries you onward.',
  },
  {
    id: 'illusion',
    question: 'What is the illusion of competence?',
    answer:
      'Mistaking familiarity for understanding. Re-reading feels productive, but only self-testing proves you can actually recall it.',
  },
  {
    id: 'desirable-difficulty',
    question: 'What is a desirable difficulty?',
    answer:
      'A challenge that slows learning down in the moment but boosts long-term retention, like recalling before you check the answer.',
  },
]

const moveToEnd = (deck: readonly Flashcard[], index: number): Flashcard[] => {
  const next = deck.slice()
  const [card] = next.splice(index, 1)
  if (card) next.push(card)
  return next
}

export function Flashcards() {
  const [deck, setDeck] = useState<Flashcard[]>(() => DECK.slice())
  const [index, setIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [knownIds, setKnownIds] = useState<string[]>([])
  const [done, setDone] = useState(false)

  const total = deck.length
  const current = deck[index]

  const restart = () => {
    setDeck(DECK.slice())
    setIndex(0)
    setFlipped(false)
    setKnownIds([])
    setDone(false)
  }

  const goNext = () => {
    if (index < total - 1) {
      setIndex((i) => i + 1)
      setFlipped(false)
    } else {
      setDone(true)
    }
  }

  const goPrev = () => {
    if (index > 0) {
      setIndex((i) => i - 1)
      setFlipped(false)
    }
  }

  const gotIt = () => {
    if (!current) return
    setKnownIds((ids) =>
      ids.includes(current.id) ? ids : [...ids, current.id],
    )
    goNext()
  }

  const reviewAgain = () => {
    if (!current) return
    setKnownIds((ids) => ids.filter((id) => id !== current.id))
    // Move the current card later in the deck so it comes back around.
    if (index < total - 1) {
      setDeck((d) => moveToEnd(d, index))
      setFlipped(false)
    } else {
      // Already last: just re-study it now.
      setFlipped(false)
    }
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault()
      goNext()
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault()
      goPrev()
    } else if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault()
      setFlipped((f) => !f)
    }
  }

  if (done || !current) {
    const score = knownIds.length
    return (
      <Card className="mx-auto flex w-full max-w-md flex-col items-center text-center">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-linear-to-br from-brand-500 to-accent-500 text-white">
          <Sparkles className="h-7 w-7" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
          Deck complete!
        </h3>
        <p className="mt-2 text-slate-600 dark:text-slate-300">
          You marked{' '}
          <span className="font-bold text-brand-600 dark:text-brand-300">
            {score}
          </span>{' '}
          of {DECK.length} cards as known.
        </p>
        <p className="mt-1 text-sm text-slate-400 dark:text-slate-500">
          {score === DECK.length
            ? 'Perfect recall — spaced review will lock it in.'
            : 'Retrieval beats re-reading. Run it again to close the gaps.'}
        </p>
        <Button onClick={restart} className="mt-6">
          <RotateCcw className="h-5 w-5" /> Restart deck
        </Button>
      </Card>
    )
  }

  const progress = ((index + 1) / total) * 100

  return (
    <Card className="mx-auto w-full max-w-md">
      <div className="mb-3 flex items-center justify-between text-sm">
        <span className="font-medium text-slate-500 dark:text-slate-400">
          Card {index + 1} / {total}
        </span>
        <span className="font-semibold text-brand-600 dark:text-brand-300">
          Known: {knownIds.length}
        </span>
      </div>

      <div
        className="mb-5 h-1.5 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800"
        role="progressbar"
        aria-valuenow={index + 1}
        aria-valuemin={0}
        aria-valuemax={total}
        aria-label="Deck progress"
      >
        <div
          className="h-full rounded-full bg-linear-to-r from-brand-500 to-accent-500 transition-[width] duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      <button
        type="button"
        onClick={() => setFlipped((f) => !f)}
        onKeyDown={handleKeyDown}
        aria-label={flipped ? 'Show question' : 'Show answer'}
        className="group block w-full rounded-2xl [perspective:1200px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
      >
        <div
          className={cn(
            'relative min-h-[220px] w-full transition-transform duration-500 [transform-style:preserve-3d]',
            flipped && '[transform:rotateY(180deg)]',
          )}
        >
          {/* Front — question */}
          <div
            aria-hidden={flipped}
            className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl border border-slate-200/80 bg-linear-to-br from-brand-50 to-white p-6 text-center [backface-visibility:hidden] dark:border-slate-800 dark:from-slate-800 dark:to-slate-900"
          >
            <span className="mb-3 rounded-full bg-brand-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-700 dark:bg-brand-900/50 dark:text-brand-200">
              Question
            </span>
            <p className="text-lg font-semibold text-slate-900 dark:text-white">
              {current.question}
            </p>
            <span className="mt-4 text-xs text-slate-400 dark:text-slate-500">
              Tap or press Space to flip
            </span>
          </div>

          {/* Back — answer */}
          <div
            aria-hidden={!flipped}
            className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl border border-accent-200/80 bg-linear-to-br from-accent-50 to-white p-6 text-center [backface-visibility:hidden] [transform:rotateY(180deg)] dark:border-accent-900/60 dark:from-slate-800 dark:to-slate-900"
          >
            <span className="mb-3 rounded-full bg-accent-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-accent-700 dark:bg-accent-900/50 dark:text-accent-200">
              Answer
            </span>
            <p className="text-base text-slate-700 dark:text-slate-200">
              {current.answer}
            </p>
          </div>
        </div>
      </button>

      {/* Screen-reader announcement of the currently visible face */}
      <p className="sr-only" aria-live="polite">
        {flipped
          ? `Answer: ${current.answer}`
          : `Question: ${current.question}`}
      </p>

      {flipped && (
        <div className="mt-5 grid grid-cols-2 gap-3">
          <Button onClick={reviewAgain} variant="secondary">
            Review again
          </Button>
          <Button onClick={gotIt}>Got it</Button>
        </div>
      )}

      <div className="mt-5 flex items-center justify-between border-t border-slate-200/80 pt-4 dark:border-slate-800">
        <Button
          onClick={goPrev}
          variant="ghost"
          size="sm"
          disabled={index === 0}
          aria-label="Previous card"
        >
          <ChevronLeft className="h-5 w-5" /> Prev
        </Button>
        <Button
          onClick={goNext}
          variant="ghost"
          size="sm"
          aria-label="Next card"
        >
          Next <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </Card>
  )
}

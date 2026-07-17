import { ArrowRight, Brain, CalendarClock, Shuffle, Sparkles } from 'lucide-react'
import { motion } from 'motion/react'
import { ButtonLink } from '@/components/ui/Button'

const TEASERS = [
  { icon: Brain, label: 'Active recall' },
  { icon: CalendarClock, label: 'Spaced practice' },
  { icon: Shuffle, label: 'Interleaving' },
]

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute top-[-12%] left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-brand-400/20 blur-3xl dark:bg-brand-600/20" />
        <div className="absolute top-[18%] right-[4%] h-72 w-72 animate-float rounded-full bg-accent-300/25 blur-3xl dark:bg-accent-500/10" />
        <div className="absolute bottom-[2%] left-[6%] h-64 w-64 rounded-full bg-sky-300/20 blur-3xl dark:bg-sky-500/10" />
      </div>

      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <motion.a
            href="#start"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/70 px-4 py-1.5 text-sm font-medium text-slate-700 shadow-soft backdrop-blur transition-colors hover:text-brand-700 dark:border-slate-700/70 dark:bg-slate-900/70 dark:text-slate-200 dark:hover:text-brand-300"
          >
            <Sparkles className="h-4 w-4 text-brand-500" />
            A free, science-backed guide
          </motion.a>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-6 text-4xl font-extrabold tracking-tight sm:text-6xl"
          >
            Learn how to <span className="text-gradient">learn</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl dark:text-slate-300"
          >
            Most of us were never taught how to study. This guide shares the
            proven methods that help you learn faster, remember longer, and reach
            your goals — all in plain, simple English.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.19 }}
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <ButtonLink href="#start" size="lg">
              Start the guide
              <ArrowRight className="h-4 w-4" />
            </ButtonLink>
            <ButtonLink href="#toolkit" size="lg" variant="secondary">
              Open the toolkit
            </ButtonLink>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.26 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-2.5"
          >
            {TEASERS.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="inline-flex items-center gap-1.5 rounded-full bg-white/70 px-3.5 py-1.5 text-sm font-medium text-slate-600 ring-1 ring-slate-200/70 backdrop-blur dark:bg-slate-900/60 dark:text-slate-300 dark:ring-slate-700/60"
              >
                <Icon className="h-4 w-4 text-brand-500" />
                {label}
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  )
}

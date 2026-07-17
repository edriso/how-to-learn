# How to Learn

A free, friendly, science-backed guide to **learning how to learn** — for students,
online learners, and anyone who wants to learn more effectively.

It turns decades of cognitive-science research into plain-English advice and
hands-on tools: active recall, spaced repetition, interleaving, beating
procrastination, brain care, and a practical study plan. Every claim is grounded
in cited research.

## Tech stack

- **React 19** + **TypeScript** (strict)
- **Vite** for dev/build
- **Tailwind CSS v4** (CSS-first theming, class-based dark mode)
- **Motion** (Framer Motion) for animation, with `prefers-reduced-motion` respected
- **lucide-react** icons, self-hosted **Inter** + **Lexend** variable fonts

## Features

- Fully responsive, mobile-first layout that works from 320px up
- Light/dark theme with no flash on load, saved to the device
- Sticky navigation with scroll-spy, reading-progress bar, and smooth scrolling
- Accessible: semantic HTML, keyboard support, focus-visible styles, reduced-motion
- Four interactive tools that save progress locally:
  - **Focus Timer** (Pomodoro) — accurate, drift-free countdown with auto break cycles
  - **Active-Recall Flashcards** — flip-to-reveal demo deck
  - **Spaced-Review Planner** — generates a review schedule + a forgetting-curve illustration
  - **Daily Habit Tracker** — per-day checklist with a streak counter

## Getting started

```bash
npm install
npm run dev      # start the dev server
npm run build    # type-check + production build
npm run preview  # preview the production build
```

## Project structure

```
src/
  components/
    layout/     # navbar, footer, reading progress, back-to-top, theme toggle
    sections/   # hero + each guide section
    tools/      # the four interactive tools
    ui/         # reusable primitives (Card, Button, Section, ExpandableCard, ...)
  data/         # all guide content + sources + color accents (single source of truth)
  hooks/        # useTheme, useScrollSpy, useLocalStorage
  lib/          # small utilities (cn)
```

Content lives in `src/data/` so the copy stays separate from presentation.

## A note on accuracy

Where the science is debated or often misunderstood — growth mindset, the
"10,000-hour rule", learning styles, the "21-day habit" — the guide states the
honest, evidence-based position rather than the popular myth. See the **Sources**
section in the app for references.

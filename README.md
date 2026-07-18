# How to Learn · كيف تتعلّم

> **Live → [edriso.github.io/how-to-learn](https://edriso.github.io/how-to-learn/)**

A free, friendly, science-backed guide to **learning how to learn** — for students,
online learners, and anyone who wants to learn more effectively. Fully **bilingual**:
plain-English and lovely **Modern Standard Arabic (فُصحى)**, with proper right-to-left
support.

It turns decades of cognitive-science research into clear advice and hands-on tools:
active recall, spaced repetition, interleaving, beating procrastination, brain care,
and a practical study plan. Every claim is grounded in cited research.

## Tech stack

- **React 19** + **TypeScript** (strict)
- **Vite** for dev/build
- **Tailwind CSS v4** (CSS-first theming, class-based dark mode, logical properties for RTL)
- **Motion** (Framer Motion) for animation, with `prefers-reduced-motion` respected
- **lucide-react** icons, self-hosted variable fonts: **Inter** + **Lexend** (Latin),
  **Cairo** (Arabic)

## Features

- **Bilingual (English + Arabic)** with a one-tap language switch, no flash on load
  - Automatic **RTL/LTR** direction, Arabic (Cairo) typography, and a mirrored layout
  - Language detected from the browser on first visit, then saved to the device
  - Every string — content, tool chrome, and aria labels — is translated; nothing is left in English
- Fully responsive, mobile-first layout that works from 320px up
- Light/dark theme with no flash on load, saved to the device
- Sticky navigation with scroll-spy, reading-progress bar, and smooth scrolling
- Accessible: semantic HTML, `lang`/`dir` kept in sync, keyboard support, focus-visible styles, reduced-motion
- Four interactive tools that save progress locally:
  - **Focus Timer** (Pomodoro) — accurate, drift-free countdown with auto break cycles
  - **Active-Recall Flashcards** — flip-to-reveal demo deck
  - **Spaced-Review Planner** — generates a review schedule + a forgetting-curve illustration (mirrored in RTL)
  - **Daily Habit Tracker** — per-day checklist with a streak counter

## Getting started

```bash
npm install
npm run dev      # start the dev server
npm run build    # type-check + production build
npm run preview  # preview the production build
```

## Deployment

Pushing to `main` triggers the GitHub Actions workflow in
`.github/workflows/deploy.yml`, which builds the app and publishes it to GitHub
Pages at **https://edriso.github.io/how-to-learn/**. The Vite `base` is set to
`/how-to-learn/`, and a `404.html` fallback is generated so deep links and
refreshes work correctly.

## Project structure

```
src/
  components/
    layout/     # navbar, footer, reading progress, back-to-top, theme + language toggles
    sections/   # hero + each guide section
    tools/      # the four interactive tools
    ui/         # reusable primitives (Card, Button, Section, ExpandableCard, ...)
  data/         # all guide content + sources + color accents (single source of truth)
  hooks/        # useTheme, useScrollSpy, useLocalStorage
  i18n/         # language context/provider, UI strings, and the Localized<T> helper
  lib/          # small utilities (cn)
```

Content lives in `src/data/` so the copy stays separate from presentation. Both
languages are colocated: every reader-facing value is a `Localized<T>` (`{ en, ar }`)
resolved at render time by the `l()` helper from the i18n context, while interface
microcopy (buttons, labels, aria text) lives in `src/i18n/strings.ts`. Adding a
language means filling in one more key per string.

## A note on accuracy

Where the science is debated or often misunderstood — growth mindset, the
"10,000-hour rule", learning styles, the "21-day habit" — the guide states the
honest, evidence-based position rather than the popular myth. See the **Sources**
section in the app for references.

import { MotionConfig } from 'motion/react'
import { BackToTop } from '@/components/layout/BackToTop'
import { Footer } from '@/components/layout/Footer'
import { Navbar } from '@/components/layout/Navbar'
import { ReadingProgress } from '@/components/layout/ReadingProgress'
import { CheatSheet } from '@/components/sections/CheatSheet'
import { Hero } from '@/components/sections/Hero'
import { Science } from '@/components/sections/Science'
import { Sources } from '@/components/sections/Sources'
import { StartHere } from '@/components/sections/StartHere'
import { Techniques } from '@/components/sections/Techniques'
import { TipSection } from '@/components/sections/TipSection'
import { Toolkit } from '@/components/sections/Toolkit'
import { Traps } from '@/components/sections/Traps'
import { BRAIN_CARE, FOCUS, MINDSET, STUDY_PLAN } from '@/data/learning'
import { useI18n } from '@/i18n'

function App() {
  const { s } = useI18n()
  return (
    <MotionConfig reducedMotion="user">
      <ReadingProgress />
      <Navbar />
      <main>
        <Hero />
        <StartHere />
        <Science />
        <Techniques />
        <Traps />
        <TipSection
          id="focus"
          eyebrow={s.sections.focus.eyebrow}
          title={s.sections.focus.title}
          intro={s.sections.focus.intro}
          tips={FOCUS}
          className="bg-white dark:bg-slate-900/40"
        />
        <TipSection
          id="mindset"
          eyebrow={s.sections.mindset.eyebrow}
          title={s.sections.mindset.title}
          intro={s.sections.mindset.intro}
          tips={MINDSET}
        />
        <TipSection
          id="brain"
          eyebrow={s.sections.brain.eyebrow}
          title={s.sections.brain.title}
          intro={s.sections.brain.intro}
          tips={BRAIN_CARE}
          className="bg-white dark:bg-slate-900/40"
        />
        <TipSection
          id="plan"
          eyebrow={s.sections.plan.eyebrow}
          title={s.sections.plan.title}
          intro={s.sections.plan.intro}
          tips={STUDY_PLAN}
        />
        <Toolkit />
        <CheatSheet />
        <Sources />
      </main>
      <Footer />
      <BackToTop />
    </MotionConfig>
  )
}

export default App

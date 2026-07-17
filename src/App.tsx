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

function App() {
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
          eyebrow="Focus"
          title="Focus and beat procrastination"
          intro="The best method is useless if you never start, or cannot concentrate. This part is about actually doing the work."
          tips={FOCUS}
          className="bg-white dark:bg-slate-900/40"
        />
        <TipSection
          id="mindset"
          eyebrow="Mindset"
          title="Mindset and motivation"
          intro="What you believe about learning — and how you fuel and organize your effort — shapes how far you go."
          tips={MINDSET}
        />
        <TipSection
          id="brain"
          eyebrow="Brain Care"
          title="Fuel and rest for your brain"
          intro="Your brain is a physical organ. How you sleep, move, eat, and rest directly changes how well you learn."
          tips={BRAIN_CARE}
          className="bg-white dark:bg-slate-900/40"
        />
        <TipSection
          id="plan"
          eyebrow="Study Plan"
          title="Put it all together"
          intro="Turn the proven methods into a simple routine you can actually follow."
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

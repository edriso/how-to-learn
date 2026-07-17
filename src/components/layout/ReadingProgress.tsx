import { motion, useScroll, useSpring } from 'motion/react'

/** Thin gradient bar at the very top that tracks page scroll progress. */
export function ReadingProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.3,
  })

  return (
    <motion.div
      style={{ scaleX }}
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-linear-to-r from-brand-500 via-brand-400 to-accent-500"
    />
  )
}

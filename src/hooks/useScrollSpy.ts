import { useEffect, useState } from 'react'

/**
 * Returns the id of the section currently near the top-center of the viewport.
 * Uses a thin IntersectionObserver band so exactly one section is "active".
 */
export function useScrollSpy(ids: string[], rootMargin = '-35% 0px -55% 0px') {
  const [activeId, setActiveId] = useState<string>(ids[0] ?? '')
  const key = ids.join(',')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        }
      },
      { rootMargin, threshold: 0 },
    )

    const elements = key
      .split(',')
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [key, rootMargin])

  return activeId
}

import { GraduationCap, Sparkles } from 'lucide-react'
import { NAV_SECTIONS } from '@/data/nav'
import { useI18n } from '@/i18n'

export function Footer() {
  const { l, s } = useI18n()
  return (
    <footer className="border-t border-slate-200/80 bg-white dark:border-slate-800 dark:bg-slate-950">
      <div className="container-page py-14">
        <div className="grid gap-10 md:grid-cols-[1.6fr_1fr_1fr]">
          <div className="max-w-sm">
            <a href="#top" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-brand-500 to-brand-700 text-white shadow-soft">
                <GraduationCap className="h-5 w-5" />
              </span>
              <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
                {s.brand}
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              {s.footer.description}
            </p>
            <p className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-brand-600 dark:text-brand-400">
              <Sparkles className="h-3.5 w-3.5" />
              {s.footer.grounded}
            </p>
          </div>

          <nav aria-label={s.footer.ariaGuide}>
            <h2 className="text-sm font-semibold text-slate-900 dark:text-white">
              {s.footer.guideHeading}
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {NAV_SECTIONS.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="text-slate-600 transition-colors hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-300"
                  >
                    {l(section.label)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label={s.footer.ariaMore}>
            <h2 className="text-sm font-semibold text-slate-900 dark:text-white">
              {s.footer.moreHeading}
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {s.footer.moreLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="text-slate-600 transition-colors hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-slate-200/80 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between dark:border-slate-800 dark:text-slate-500">
          <p>{s.footer.disclaimer}</p>
          <p>{s.footer.tagline}</p>
        </div>
      </div>
    </footer>
  )
}

import { useEffect, useState } from 'react'
import { profile } from '../data/portfolio'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
]

const mobileLinks = [...links, { href: '#contact', label: 'Contact' }]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  const [scrolled, setScrolled] = useState(false)

  // Shrink the pill once the page is scrolled.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Highlight the link for the section crossing the middle of the viewport.
  useEffect(() => {
    const sections = mobileLinks
      .map((link) => document.querySelector(link.href))
      .filter((el): el is Element => el !== null)
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`)
        }
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4">
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full border border-neutral-900/10 bg-white/75 pr-2 pl-5 text-neutral-900 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.25)] backdrop-blur-xl transition-all duration-300 sm:pl-6 ${
          scrolled ? 'h-14' : 'h-14 sm:h-16'
        }`}
      >
        <a href="#top" onClick={() => setOpen(false)} className="-ml-1 flex items-center gap-2">
          <img src="/logo-mark.webp" alt="" width={226} height={207} className="h-9 w-auto sm:h-10" />
          <span className="font-display text-2xl tracking-tight sm:text-3xl">
            {profile.name.split(' ')[0]}
            <span className="text-accent">.</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 rounded-full bg-neutral-900/5 p-1 text-sm md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                aria-current={active === link.href ? 'true' : undefined}
                className={`block rounded-full px-4 py-2 transition-colors ${
                  active === link.href ? 'bg-neutral-900 text-white' : 'text-neutral-600 hover:text-neutral-950'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="group hidden items-center gap-2 rounded-full bg-neutral-900 py-2.5 pr-5 pl-4 text-sm font-medium text-white transition hover:bg-neutral-700 sm:inline-flex"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
            </span>
            Let&apos;s talk
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </a>

          <button
            type="button"
            className="flex size-10 items-center justify-center rounded-full bg-neutral-900 text-white md:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span className="relative block h-3 w-4">
              <span
                className={`absolute left-0 h-0.5 w-4 rounded bg-current transition-all duration-300 ${
                  open ? 'top-[5px] rotate-45' : 'top-0'
                }`}
              />
              <span
                className={`absolute left-0 h-0.5 w-4 rounded bg-current transition-all duration-300 ${
                  open ? 'top-[5px] -rotate-45' : 'top-[10px]'
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      <div
        className={`mx-auto mt-2 max-w-6xl origin-top overflow-hidden rounded-3xl border border-neutral-900/10 bg-white/95 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-all duration-300 md:hidden ${
          open ? 'visible scale-100 opacity-100' : 'invisible scale-95 opacity-0'
        }`}
      >
        <ul className="divide-y divide-neutral-200 px-5 py-2">
          {mobileLinks.map((link, i) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className={`flex items-baseline gap-4 py-3 ${active === link.href ? 'text-neutral-950' : 'text-neutral-500'}`}
              >
                <span className="w-6 text-xs tabular-nums">{String(i + 1).padStart(2, '0')}</span>
                <span className="font-display text-3xl tracking-tight uppercase">{link.label}</span>
                {active === link.href && <span className="ml-auto size-2 self-center rounded-full bg-accent" />}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={`mailto:${profile.email}`}
          className="flex items-center justify-between gap-3 bg-neutral-900 px-5 py-4 text-sm text-white"
        >
          <span className="truncate">{profile.email}</span>
          <span>→</span>
        </a>
      </div>
    </header>
  )
}

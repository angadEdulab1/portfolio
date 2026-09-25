import { useState } from 'react'
import { profile } from '../data/portfolio'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-neutral-200/70 bg-white/85 text-neutral-900 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 sm:h-20">
        <a href="#top" className="font-display text-3xl tracking-tight">
          {profile.name.split(' ')[0]}
          <span className="text-accent">.</span>
        </a>

        <div className="hidden items-center gap-10 md:flex">
          <ul className="flex gap-8 text-[15px] text-neutral-700">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition hover:text-neutral-950">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={`mailto:${profile.email}`}
            className="hidden rounded-md bg-neutral-900 px-5 py-3 text-sm text-white shadow-md lg:inline-block transition hover:bg-neutral-700"
          >
            {profile.email}
          </a>
        </div>

        <button
          type="button"
          className="p-2 md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      {open && (
        <ul className="border-t border-neutral-200 bg-white px-6 py-4 md:hidden">
          {[...links, { href: '#contact', label: 'Contact' }].map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setOpen(false)} className="block py-2 text-neutral-700">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}

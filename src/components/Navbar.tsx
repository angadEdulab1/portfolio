import { useState } from 'react'
import { profile } from '../data/portfolio'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-800/60 bg-slate-950/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a href="#top" className="text-lg font-bold text-white">
          {profile.name}
          <span className="text-accent">.</span>
        </a>

        <ul className="hidden gap-8 text-sm md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition hover:text-accent">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="p-2 text-slate-300 md:hidden"
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
        <ul className="border-t border-slate-800 px-6 py-4 md:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-2 transition hover:text-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}

import type { ReactNode } from 'react'
import { profile } from '../data/portfolio'
import { gridBackground } from '../styles'

const tones = {
  light: 'bg-white text-neutral-900',
  grid: 'bg-neutral-100 text-neutral-900',
  dark: 'bg-neutral-950 text-white',
}

interface SectionProps {
  id: string
  index: string
  label: string
  // Big poster headline: first line solid, second line outlined.
  solid: string
  outline: string
  tone?: keyof typeof tones
  children: ReactNode
}

export default function Section({ id, index, label, solid, outline, tone = 'light', children }: SectionProps) {
  const dark = tone === 'dark'

  return (
    <section id={id} style={tone === 'grid' ? gridBackground : undefined} className={`relative overflow-hidden ${tones[tone]}`}>
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <div
          className={`flex justify-between border-b pb-4 text-xs font-medium tracking-widest uppercase ${dark ? 'border-white/20 text-neutral-400' : 'border-neutral-900/20 text-neutral-500'}`}
        >
          <span>
            {index} / {label}
          </span>
          <span>{profile.handle}</span>
        </div>

        <h2 className="mt-8 mb-12 font-display text-[clamp(3rem,11vw,7.5rem)] leading-[0.95] tracking-tight sm:mb-16">
          <span className="block">{solid}</span>
          <span
            className={`block text-transparent ${dark ? '[-webkit-text-stroke:1.5px_#fff]' : '[-webkit-text-stroke:1.5px_#171717]'}`}
          >
            {outline}
          </span>
        </h2>

        {children}
      </div>
    </section>
  )
}

import type { CSSProperties } from 'react'
import { profile } from '../data/portfolio'

const firstName = profile.name.split(' ')[0]

// --hs is the headline font size and --ov how much of it the photo overlaps; layout below is sized from both.
const heroStyle = { '--hs': 'clamp(3.25rem, 16vw, 10.5rem)' } as CSSProperties

export default function Hero() {
  return (
    <section id="top" style={heroStyle} className="relative overflow-hidden bg-white [--ov:0.35] lg:[--ov:0.8] pt-28 text-neutral-900 sm:pt-36">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="text-lg text-neutral-600 sm:text-2xl">
          👋, my name is {firstName} and I am a
        </p>

        <h1 className="relative mt-4 font-display text-[length:var(--hs)] leading-[0.95] tracking-tight">
          <span className="block">{profile.heroSolid}</span>
          <span className="block text-transparent [-webkit-text-stroke:1.5px_#171717]">{profile.heroOutline}</span>

          <a
            href="#projects"
            aria-label="See my projects"
            className="absolute top-[calc(var(--hs)*0.95)] left-[44%] z-20 flex size-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-neutral-900 bg-white shadow-lg transition hover:rotate-45 sm:size-16"
          >
            <svg className="size-5 sm:size-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path d="M7 17 17 7M8 7h9v9" />
            </svg>
          </a>
        </h1>
      </div>

      <div className="relative mx-auto -mt-[calc(var(--hs)*var(--ov))] grid max-w-6xl px-6 lg:grid-cols-[1fr_auto_1fr]">
        <p className="hidden pt-[calc(var(--hs)*var(--ov)+1.5rem)] text-xl text-neutral-700 lg:block xl:text-2xl">
          based in {profile.location}.
        </p>

        <div className="relative z-10 mx-auto">
          <img
            src={profile.photo}
            alt={profile.name}
            className="h-[clamp(340px,58vh,600px)] w-auto [mask-image:linear-gradient(to_bottom,black_65%,transparent)]"
          />
          <div className="absolute inset-x-0 bottom-8 flex flex-col items-center gap-3 sm:bottom-12">
            <p className="rounded bg-white/75 px-2 py-0.5 text-sm font-medium text-neutral-800 lg:hidden">based in {profile.location}.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="rounded-md border-2 border-neutral-900 bg-neutral-900 px-5 py-2.5 text-sm font-medium whitespace-nowrap text-white transition hover:bg-neutral-700 sm:text-base"
              >
                Hire me
              </a>
              <a
                href="#projects"
                className="rounded-md border-2 border-neutral-900 bg-white/80 px-5 py-2.5 text-sm font-medium whitespace-nowrap backdrop-blur transition hover:bg-neutral-100 sm:text-base"
              >
                View my projects
              </a>
            </div>
          </div>
        </div>

        <div className="hidden pt-[calc(var(--hs)*var(--ov)+1.5rem)] text-right lg:block">
          <p className="mb-2 text-xs tracking-widest text-neutral-400 uppercase">Worked with</p>
          <ul className="space-y-1 text-sm font-semibold text-neutral-500">
            {profile.workedWith.map((company) => (
              <li key={company}>{company}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

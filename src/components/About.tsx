import { profile } from '../data/portfolio'
import Section from './Section'

const initials = profile.name
  .split(' ')
  .map((part) => part[0])
  .join('')
  .slice(0, 2)
  .toUpperCase()

export default function About() {
  return (
    <Section id="about" title="About Me">
      <div className="grid items-center gap-12 md:grid-cols-[1fr_auto]">
        <div className="space-y-4 text-lg leading-relaxed">
          {profile.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p className="text-base text-slate-400">📍 {profile.location}</p>
        </div>

        <div className="mx-auto size-56 overflow-hidden rounded-2xl border-2 border-accent/40 bg-slate-900">
          {profile.photo ? (
            <img src={profile.photo} alt={profile.name} className="size-full object-cover" />
          ) : (
            <div className="flex size-full items-center justify-center text-6xl font-bold text-accent">{initials}</div>
          )}
        </div>
      </div>
    </Section>
  )
}

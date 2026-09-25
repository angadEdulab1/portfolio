import { profile } from '../data/portfolio'
import { GitHubIcon, LinkedInIcon, MailIcon } from './Icons'

export default function Hero() {
  return (
    <section id="top" className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 pt-16">
      <p className="mb-4 font-medium text-accent">Hi, my name is</p>
      <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl">{profile.name}</h1>
      <h2 className="mt-3 text-3xl font-bold text-slate-400 sm:text-5xl">{profile.title}</h2>
      <p className="mt-6 max-w-xl text-lg leading-relaxed">{profile.tagline}</p>

      <div className="mt-10 flex flex-wrap items-center gap-4">
        <a
          href="#projects"
          className="rounded-lg bg-accent px-6 py-3 font-semibold text-slate-950 transition hover:bg-sky-300"
        >
          View my work
        </a>
        {profile.resume && (
          <a
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-accent px-6 py-3 font-semibold text-accent transition hover:bg-accent/10"
          >
            Resume
          </a>
        )}
        <div className="ml-2 flex gap-4">
          <a href={profile.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="transition hover:text-accent">
            <GitHubIcon className="size-6" />
          </a>
          <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition hover:text-accent">
            <LinkedInIcon className="size-6" />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="transition hover:text-accent">
            <MailIcon className="size-6" />
          </a>
        </div>
      </div>
    </section>
  )
}

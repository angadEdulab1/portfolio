import { profile } from '../data/portfolio'
import { GitHubIcon, LinkedInIcon } from './Icons'

export default function Contact() {
  return (
    <section id="contact" className="bg-neutral-950 text-white">
      <div className="mx-auto max-w-6xl px-6 pt-20 sm:pt-24">
        <div className="flex justify-between border-b border-white/20 pb-4 text-xs font-medium tracking-widest text-neutral-400 uppercase">
          <span>05 / Contact</span>
          <span>{profile.location}</span>
        </div>

        <h2 className="mt-8 font-display text-[clamp(3.5rem,14vw,10rem)] leading-[0.92] tracking-tight">
          <span className="block">Let's build</span>
          <span className="block text-transparent [-webkit-text-stroke:1.5px_#fff]">together.</span>
        </h2>

        <div className="mt-12 grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="max-w-md text-lg leading-relaxed text-neutral-400">
              Have a product idea, an AI feature to ship, or a role to fill? My inbox is always open.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-6 inline-block border-b-2 border-accent font-serif text-[clamp(1.5rem,6vw,3.25rem)] leading-tight break-all italic transition hover:text-accent"
            >
              {profile.email}
            </a>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-5 py-3 text-sm transition hover:bg-white hover:text-neutral-950"
            >
              <GitHubIcon /> GitHub
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-5 py-3 text-sm transition hover:bg-white hover:text-neutral-950"
            >
              <LinkedInIcon /> LinkedIn
            </a>
          </div>
        </div>

        <footer className="mt-20 flex flex-col gap-3 border-t border-white/20 py-8 text-xs tracking-widest text-neutral-500 uppercase sm:flex-row sm:justify-between">
          <span>
            © {new Date().getFullYear()} {profile.name}
          </span>
          <span>Built with React & Tailwind CSS</span>
          <a href="#top" className="transition hover:text-white">
            Back to top ↑
          </a>
        </footer>
      </div>
    </section>
  )
}

import { projects } from '../data/portfolio'
import { ExternalIcon, GitHubIcon } from './Icons'
import Section from './Section'

export default function Projects() {
  return (
    <Section id="projects" index="03" label="Projects" solid="Selected" outline="projects." tone="dark">
      <ol>
        {projects.map((project, i) => (
          <li
            key={project.title}
            className="group grid gap-4 border-t border-white/20 py-10 last:border-b sm:grid-cols-[auto_1fr] sm:gap-10"
          >
            <span className="font-display text-6xl leading-none text-transparent transition [-webkit-text-stroke:1.5px_#fff] group-hover:text-accent group-hover:[-webkit-text-stroke-color:var(--color-accent)] sm:text-7xl">
              {String(i + 1).padStart(2, '0')}
            </span>

            <div>
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-display text-3xl leading-tight tracking-tight sm:text-5xl">{project.title}</h3>
                <div className="flex shrink-0 gap-2 pt-1">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.title} on GitHub`}
                      className="flex size-11 items-center justify-center rounded-full border border-white/40 transition hover:bg-white hover:text-neutral-950"
                    >
                      <GitHubIcon />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.title} live demo`}
                      className="flex size-11 items-center justify-center rounded-full border border-white/40 transition hover:bg-white hover:text-neutral-950"
                    >
                      <ExternalIcon />
                    </a>
                  )}
                </div>
              </div>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-400 sm:text-lg">{project.description}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <li key={t} className="rounded-full border border-white/25 px-3 py-1 text-xs tracking-wide text-neutral-300">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}

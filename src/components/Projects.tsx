import { projects } from '../data/portfolio'
import { ExternalIcon, GitHubIcon } from './Icons'
import Section from './Section'

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="flex flex-col rounded-xl border border-slate-800 bg-slate-900/50 p-6 transition hover:-translate-y-1 hover:border-accent/50"
          >
            <div className="mb-4 flex items-start justify-between gap-4">
              <h3 className="text-lg font-semibold text-white">{project.title}</h3>
              <div className="flex gap-3">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer" aria-label={`${project.title} on GitHub`} className="transition hover:text-accent">
                    <GitHubIcon />
                  </a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noreferrer" aria-label={`${project.title} live demo`} className="transition hover:text-accent">
                    <ExternalIcon />
                  </a>
                )}
              </div>
            </div>
            <p className="flex-1 text-sm leading-relaxed">{project.description}</p>
            <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-slate-400">
              {project.tech.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  )
}

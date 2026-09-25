import { experience } from '../data/portfolio'
import Section from './Section'

export default function Experience() {
  return (
    <Section id="experience" title="Experience & Education">
      <ol className="relative space-y-10 border-l border-slate-800 pl-8">
        {experience.map((item) => (
          <li key={`${item.role}-${item.organization}`} className="relative">
            <span className="absolute top-1.5 -left-[37px] size-3 rounded-full border-2 border-accent bg-slate-950" />
            <p className="font-mono text-xs text-slate-400">{item.period}</p>
            <h3 className="mt-1 text-lg font-semibold text-white">
              {item.role} <span className="text-accent">@ {item.organization}</span>
            </h3>
            <p className="mt-2 leading-relaxed">{item.description}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}

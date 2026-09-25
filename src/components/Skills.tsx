import { skills } from '../data/portfolio'
import Section from './Section'

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group) => (
          <div key={group.category} className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
            <h3 className="mb-4 font-semibold text-white">{group.category}</h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <li key={skill} className="rounded-full bg-accent/10 px-3 py-1 text-sm text-accent">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}

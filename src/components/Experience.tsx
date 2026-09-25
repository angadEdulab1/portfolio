import { experience } from '../data/portfolio'
import Section from './Section'

export default function Experience() {
  return (
    <Section id="experience" index="04" label="Experience" solid="Where I've" outline="worked." tone="grid">
      <ol>
        {experience.map((item) => (
          <li
            key={`${item.role}-${item.organization}`}
            className="grid gap-3 border-t-2 border-neutral-900 py-10 md:grid-cols-[220px_1fr] md:gap-10"
          >
            <p className="text-xs font-medium tracking-widest text-neutral-500 uppercase md:pt-3">{item.period}</p>
            <div>
              <h3 className="font-display text-3xl leading-tight tracking-tight sm:text-4xl">{item.role}</h3>
              <p className="mt-1 font-serif text-2xl text-neutral-600 italic sm:text-3xl">{item.organization}</p>
              {item.points.length > 0 && (
                <ul className="mt-6 space-y-3">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-4 leading-relaxed text-neutral-700">
                      <span className="mt-3 h-0.5 w-4 shrink-0 bg-accent" />
                      {point}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}

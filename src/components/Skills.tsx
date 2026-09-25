import { skills } from '../data/portfolio'
import Section from './Section'

export default function Skills() {
  return (
    <Section id="skills" index="02" label="Skills" solid="What I" outline="work with.">
      <div className="space-y-14">
        {skills.map((group, i) => (
          <div key={group.category} className="grid gap-6 border-t-2 border-neutral-900 pt-5 md:grid-cols-[240px_1fr] md:gap-10">
            <div>
              <span className="text-xs font-medium tracking-widest text-neutral-400">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-1 font-display text-3xl leading-tight tracking-tight uppercase sm:text-4xl">{group.category}</h3>
              <p className="mt-2 text-xs tracking-widest text-neutral-500 uppercase">{group.items.length} skills</p>
            </div>

            <ul className="grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-5 lg:gap-4">
              {group.items.map(({ name, icon: Icon, color }) => (
                <li
                  key={name}
                  className="flex aspect-square flex-col items-center justify-center gap-3 rounded-2xl border border-neutral-200 bg-neutral-50 p-2 text-center transition duration-200 hover:-translate-y-1 hover:border-neutral-900 hover:bg-white hover:shadow-[5px_5px_0_#171717]"
                >
                  <Icon className="size-9 sm:size-11" style={{ color }} aria-hidden="true" />
                  <span className="text-xs leading-tight font-medium sm:text-sm">{name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
)
}

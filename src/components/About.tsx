import { profile } from '../data/portfolio'
import { gridBackground } from '../styles'

export default function About() {
  const lines = profile.aboutLines.slice(0, -1)
  const lastLine = profile.aboutLines.at(-1)

  return (
    <section id="about" style={gridBackground} className="relative overflow-hidden bg-neutral-100 text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 pt-20 pb-16 sm:pt-24">
        <ul className="flex justify-between text-xs font-medium tracking-widest uppercase sm:text-sm">
          {profile.aboutKeywords.map((word) => (
            <li key={word}>{word}</li>
          ))}
        </ul>

        <div className="relative mt-12 grid items-center gap-8 lg:mt-8 lg:grid-cols-[1fr_auto_1fr]">
          <div className="relative z-20">
            <span className="inline-flex items-center gap-2 rounded-full border border-neutral-900 bg-white px-3 py-1 text-xs">
              <span className="flex size-5 items-center justify-center rounded-full bg-neutral-900 text-[10px] font-bold text-white">
                {profile.name[0]}
              </span>
              {profile.handle}
            </span>
            <h2 className="mt-4 max-w-[12ch] text-4xl leading-[1.05] font-extrabold tracking-tight xl:text-5xl">
              {profile.aboutStatement}
            </h2>
          </div>

          <div className="relative mx-auto">
            {/* Giant word behind the photo */}
            <p
              aria-hidden="true"
              className="pointer-events-none absolute top-[6%] left-1/2 -translate-x-1/2 font-display text-[clamp(7.5rem,30vw,19rem)] leading-none text-accent select-none"
            >
              ABOUT
            </p>
            <img
              src={profile.aboutPhoto}
              alt={`${profile.name} sitting on a stool`}
              className="relative z-10 h-[clamp(440px,78vh,760px)] w-auto [mask-image:linear-gradient(to_bottom,black_80%,transparent)] max-sm:h-auto max-sm:w-[min(calc(100vw-3rem),420px)]"
            />
          </div>

          <div className="relative z-20 lg:self-stretch lg:py-10">
            <div className="flex h-full flex-col justify-between gap-10">
              <p className="font-serif text-6xl leading-[0.95] xl:text-7xl">{profile.aboutSerif}</p>
              <p className="flex flex-col items-start text-2xl leading-snug whitespace-nowrap text-neutral-600 lg:text-xl xl:text-2xl">
                {lines.map((line) => (
                  <span key={line} className="border-b border-neutral-900">
                    {line}
                  </span>
                ))}
                <span className="border-b border-neutral-900 font-semibold text-neutral-900">{lastLine}</span>
              </p>
            </div>
          </div>
        </div>

        <div className="relative z-20 mt-12 grid gap-10 border-t border-neutral-300 pt-12 md:grid-cols-[3fr_2fr]">
          <div className="space-y-4 text-lg leading-relaxed text-neutral-700">
            {profile.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <dl className="grid grid-cols-3 gap-4 self-start md:grid-cols-1 md:gap-6">
            {profile.stats.map((stat) => (
              <div key={stat.label} className="md:flex md:items-baseline md:gap-4">
                <dt className="font-display text-5xl lg:text-6xl">{stat.value}</dt>
                <dd className="mt-1 text-xs tracking-widest text-neutral-500 uppercase md:text-sm">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-14 flex justify-between text-xs font-medium tracking-widest text-neutral-500 uppercase">
          <span>About me</span>
          <span>{profile.handle}</span>
          <span className="max-sm:hidden">{profile.location}</span>
        </div>
      </div>
    </section>
  )
}

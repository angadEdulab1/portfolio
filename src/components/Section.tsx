import type { ReactNode } from 'react'

interface SectionProps {
  id: string
  title: string
  children: ReactNode
}

export default function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="mb-10 flex items-center gap-4 text-2xl font-bold text-white sm:text-3xl">
        {title}
        <span className="h-px flex-1 bg-slate-800" />
      </h2>
      {children}
    </section>
  )
}

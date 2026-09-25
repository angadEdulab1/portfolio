import { profile } from '../data/portfolio'
import { GitHubIcon, LinkedInIcon, MailIcon } from './Icons'

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-2xl px-6 py-24 text-center">
      <p className="font-medium text-accent">What's next?</p>
      <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">Get In Touch</h2>
      <p className="mt-6 text-lg leading-relaxed">
        I'm currently open to new opportunities. Whether you have a question, a project idea, or just want to say hi,
        my inbox is always open.
      </p>
      <a
        href={`mailto:${profile.email}`}
        className="mt-10 inline-flex items-center gap-2 rounded-lg border border-accent px-8 py-4 font-semibold text-accent transition hover:bg-accent/10"
      >
        <MailIcon /> Say Hello
      </a>
      <div className="mt-10 flex justify-center gap-6">
        <a href={profile.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="transition hover:text-accent">
          <GitHubIcon className="size-6" />
        </a>
        <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition hover:text-accent">
          <LinkedInIcon className="size-6" />
        </a>
      </div>
    </section>
  )
}

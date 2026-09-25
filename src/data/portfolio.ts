// All of your portfolio content lives here. Edit this file to update the site.

export interface Project {
  title: string
  description: string
  tech: string[]
  github?: string
  live?: string
}

export interface Experience {
  role: string
  organization: string
  period: string
  description: string
}

export interface SkillGroup {
  category: string
  items: string[]
}

export const profile = {
  name: 'Your Name',
  title: 'Frontend Developer',
  tagline: 'I build clean, fast and accessible web experiences.',
  about: [
    "Hi! I'm a developer who enjoys turning ideas into polished, user-friendly products.",
    'Replace this text with a short story about who you are, what you work on, and what you are looking for next.',
  ],
  location: 'Your City, Country',
  email: 'you@example.com',
  // Put a photo in /public (e.g. public/profile.jpg) and set this to '/profile.jpg'. Leave empty to show initials.
  photo: '',
  resume: '', // e.g. '/resume.pdf' placed in /public
  socials: {
    github: 'https://github.com/your-username',
    linkedin: 'https://linkedin.com/in/your-username',
  },
}

export const skills: SkillGroup[] = [
  { category: 'Languages', items: ['JavaScript', 'TypeScript', 'HTML', 'CSS'] },
  { category: 'Frameworks', items: ['React', 'Tailwind CSS', 'Node.js'] },
  { category: 'Tools', items: ['Git', 'GitHub', 'VS Code', 'Figma'] },
]

export const projects: Project[] = [
  {
    title: 'Project One',
    description: 'A short description of what this project does and the problem it solves.',
    tech: ['React', 'TypeScript', 'Tailwind'],
    github: 'https://github.com/your-username/project-one',
    live: 'https://example.com',
  },
  {
    title: 'Project Two',
    description: 'Another project. Mention your role and one interesting technical challenge.',
    tech: ['Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/your-username/project-two',
  },
  {
    title: 'Project Three',
    description: 'A third project to round out the showcase.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    live: 'https://example.com',
  },
]

export const experience: Experience[] = [
  {
    role: 'Frontend Developer Intern',
    organization: 'Company Name',
    period: '2025 — Present',
    description: 'What you worked on and the impact you had.',
  },
  {
    role: 'B.Sc. Computer Science',
    organization: 'University Name',
    period: '2021 — 2025',
    description: 'Relevant coursework, achievements or activities.',
  },
]

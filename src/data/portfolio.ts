// All of your portfolio content lives here. Edit this file to update the site.
import type { IconType } from 'react-icons'
import {
  SiAngular,
  SiBrevo,
  SiDocker,
  SiExpress,
  SiFastapi,
  SiGin,
  SiGit,
  SiGo,
  SiGooglegemini,
  SiJavascript,
  SiLaravel,
  SiMongodb,
  SiNodedotjs,
  SiOllama,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSocketdotio,
  SiTypescript,
} from 'react-icons/si'
import { TbApi, TbArrowsSplit, TbBell, TbBuildingSkyscraper, TbLayersSubtract, TbSparkles, TbTopologyStar3 } from 'react-icons/tb'

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
  points: string[]
}

export interface Skill {
  name: string
  icon: IconType
  color?: string // brand color; icons without one render in the text color
}

export interface SkillGroup {
  category: string
  items: Skill[]
}

export const profile = {
  name: 'Angad Chauhan',
  title: 'Full-Stack Software Engineer',
  // Big hero headline: first line is solid, second line is outlined.
  heroSolid: 'Full-Stack',
  heroOutline: '& AI Engineer',
  workedWith: ['Edulab', 'Website Developer India', 'Primary Key Technologies'],
  about: [
    'Full-Stack Software Engineer with 3+ years of experience building and shipping scalable web and mobile applications end-to-end. I work across React.js, React Native, Node.js, Express.js, TypeScript and Go, with solid database design across MongoDB and PostgreSQL.',
    'I have hands-on experience integrating AI/LLM features into production products using the Gemini API and open-source Ollama models, alongside RESTful API design, MVC architecture, Docker and real-time systems with Socket.IO.',
  ],
  location: 'Mumbai, India',
  email: 'angadchauhan52636@gmail.com',
  // Transparent cut-out photos in /public.
  photo: '/profile.webp',
  aboutPhoto: '/about.webp',
  handle: '@angadEdulab1',
  // About section poster text
  aboutKeywords: ['Full-Stack', 'AI / LLM', 'Scalable Systems'],
  aboutStatement: "I don't just write code,",
  aboutSerif: 'I ship products.',
  aboutLines: ['Every feature I build', 'is designed to scale', 'and to solve', 'a real problem.'],
  stats: [
    { value: '3+', label: 'Years of experience' },
    { value: '3', label: 'Companies' },
    { value: '4', label: 'Key products shipped' },
  ],
  socials: {
    github: 'https://github.com/angadEdulab1',
    linkedin: 'https://linkedin.com/in/angad-chauhan04',
  },
}

export const skills: SkillGroup[] = [
  {
    category: 'Languages',
    items: [
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'Go', icon: SiGo, color: '#00ADD8' },
      { name: 'Python', icon: SiPython, color: '#3776AB' },
    ],
  },
  {
    category: 'Frameworks',
    items: [
      { name: 'React.js', icon: SiReact, color: '#149ECA' },
      { name: 'React Native', icon: SiReact, color: '#149ECA' },
      { name: 'Angular.js', icon: SiAngular, color: '#DD0031' },
      { name: 'Node.js', icon: SiNodedotjs, color: '#5FA04E' },
      { name: 'Express.js', icon: SiExpress },
      { name: 'Gin', icon: SiGin, color: '#008ECF' },
      { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
    ],
  },
  {
    category: 'Databases, Tools & Services',
    items: [
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
      { name: 'Docker', icon: SiDocker, color: '#2496ED' },
      { name: 'Socket.IO', icon: SiSocketdotio },
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'Goroutines', icon: TbArrowsSplit, color: '#00ADD8' },
      { name: 'OneSignal', icon: TbBell, color: '#E54B4D' },
      { name: 'Brevo', icon: SiBrevo, color: '#0B996E' },
      { name: 'Eloquent ORM', icon: SiLaravel, color: '#FF2D20' },
    ],
  },
  {
    category: 'AI & Architecture',
    items: [
      { name: 'Gemini API', icon: SiGooglegemini, color: '#8E75B2' },
      { name: 'Ollama', icon: SiOllama },
      { name: 'Generative AI', icon: TbSparkles, color: '#8E75B2' },
      { name: 'RESTful APIs', icon: TbApi },
      { name: 'Microservices', icon: TbTopologyStar3 },
      { name: 'MVC', icon: TbLayersSubtract },
      { name: 'Multi-Tenant', icon: TbBuildingSkyscraper },
    ],
  },
]

export const projects: Project[] = [
  {
    title: 'AI Learning Management System',
    description:
      'Multi-tenant, full-stack adaptive learning platform for web and mobile. Quiz and content generation via Ollama LLMs with Gemini API fallback, delivering personalized learning at scale.',
    tech: ['Node.js', 'TypeScript', 'MongoDB', 'React', 'Ollama', 'Gemini API'],
  },
  {
    title: 'AI Question Paper Generator — CET',
    description:
      'Automated exam paper generation system using Ollama vision models for diagram-based questions, with the Gemini API as a reliability fallback.',
    tech: ['Node.js', 'TypeScript', 'MongoDB', 'React', 'Ollama Vision'],
  },
  {
    title: 'SageFlow AI Tutor Platform',
    description:
      'AI-powered tutoring platform for web and mobile with multiple Ollama-based tools, delivering interactive learning experiences.',
    tech: ['React.js', 'React Native', 'Node.js', 'Ollama'],
  },
  {
    title: 'RanOutOff — Grocery Management',
    description:
      'Full-stack grocery management app with push notifications via OneSignal and transactional emails via Brevo for seamless user communication.',
    tech: ['React.js', 'Node.js', 'OneSignal', 'Brevo'],
  },
]

export const experience: Experience[] = [
  {
    role: 'Software Engineer',
    organization: 'Edulab Pvt Ltd.',
    period: 'Nov 2025 — Present',
    points: [
      'Built and shipped end-to-end AI-powered features across educational products, integrating the Gemini API for automated text generation, content summarization and intelligent data extraction.',
      'Deployed and managed Ollama on production servers; integrated open-source and vision LLMs into live workflows, enabling AI-powered diagram processing.',
      'Built high-throughput backend services in Go, using goroutines and channels for concurrent processing to reduce response times on compute-heavy AI workflows.',
      'Partnered with product and frontend teams to deliver user-facing features, improving engagement and reducing manual content-creation time.',
    ],
  },
  {
    role: 'Software Developer (Node.js)',
    organization: 'Website Developer India Pvt Ltd.',
    period: 'Jul 2024 — Nov 2025',
    points: [
      'Delivered 3+ client projects as a backend developer; designed and maintained scalable systems using Node.js and Express.js with modular MVC architecture.',
      'Owned end-to-end database design and optimization across MongoDB and PostgreSQL, improving query efficiency through indexing, schema design and performance tuning.',
      'Developed internal microservices and automation utilities in Go, improving throughput and reducing resource usage compared to equivalent Node.js services.',
      'Collaborated with cross-functional teams to deliver customized API-driven solutions on schedule across multiple domains.',
    ],
  },
  {
    role: 'Full Stack Developer',
    organization: 'Primary Key Technologies',
    period: 'Jan 2024 — Jul 2024',
    points: [
      'Designed and implemented RESTful APIs using Node.js with MVC architecture, improving modularity and reducing integration time for client applications.',
      'Integrated MongoDB and PostgreSQL databases, optimizing queries and indexing and leveraging Eloquent ORM for efficient, maintainable data retrieval.',
    ],
  },
  {
    role: 'BSc. in Information Technology',
    organization: 'Pravin Patil College of Diploma Engineering & Technology',
    period: 'Jul 2020 — May 2023',
    points: [],
  },
]

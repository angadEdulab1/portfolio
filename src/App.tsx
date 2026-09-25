import About from './components/About'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'
import { profile } from './data/portfolio'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <footer className="border-t border-slate-800 py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} {profile.name}. Built with React & Tailwind CSS.
      </footer>
    </>
  )
}

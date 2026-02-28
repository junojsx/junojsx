import Navbar from '@/components/layout/Navbar'
import AboutMe from '@/components/sections/AboutMe'
import TechStack from '@/components/sections/TechStack'
import Projects from '@/components/sections/Projects'
import Contact from '@/components/sections/Contact'

export default function App() {
  return (
    <>
      {/* Skip navigation — first focusable element, appears on keyboard focus */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <Navbar />

      {/*
        tabIndex={-1} makes <main> programmatically focusable when the skip link
        is activated, without placing it in the natural tab order.
      */}
      <main id="main-content" tabIndex={-1} className="outline-none">
        <AboutMe />
        <TechStack />
        <Projects />
        <Contact />
      </main>

      <footer
        role="contentinfo"
        className="bg-deep-purple text-white text-center py-6 text-sm"
      >
        <p className="text-soft-lavender">
          © {new Date().getFullYear()}{' '}
          <span className="text-white font-medium">junojsx</span>
          {' '}— Built with React, Vite & TailwindCSS
        </p>
        <p className="mt-1 text-soft-lavender/70 text-xs">
          Designed and built with accessibility in mind · WCAG AA compliant
        </p>
      </footer>
    </>
  )
}

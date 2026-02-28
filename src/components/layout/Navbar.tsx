import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Download, Menu, X } from 'lucide-react'
import type { NavLink } from '@/types'

const navLinks: NavLink[] = [
  { label: 'About',    href: '#about' },
  { label: 'Tech',     href: '#tech' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact',  href: '#contact' },
]

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>('#about')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`)
          }
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    document.querySelectorAll('section[id]').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <header role="banner" className="sticky top-0 z-50 bg-deep-purple shadow-lg">
      <nav
        aria-label="Main navigation"
        className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between"
      >
        {/* Brand */}
        <a
          href="#main-content"
          className="text-white font-bold text-xl tracking-tight rounded px-1
                     hover:text-warm-gold transition-colors"
        >
          junojsx
        </a>

        {/* Mobile toggle */}
        <button
          aria-controls="nav-menu"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden text-white p-2 rounded hover:bg-hover-active transition-colors"
        >
          {menuOpen
            ? <X className="h-5 w-5" aria-hidden="true" />
            : <Menu className="h-5 w-5" aria-hidden="true" />
          }
        </button>

        {/* Nav links */}
        <ul
          id="nav-menu"
          role="list"
          className={[
            'absolute md:static top-full left-0 right-0',
            'bg-deep-purple md:bg-transparent',
            'flex-col md:flex-row md:flex gap-1 items-center',
            'px-4 md:px-0 pb-4 md:pb-0',
            menuOpen ? 'flex' : 'hidden md:flex',
          ].join(' ')}
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                aria-current={activeSection === link.href ? 'location' : undefined}
                onClick={() => setMenuOpen(false)}
                className={[
                  'block px-3 py-2 rounded text-sm font-medium transition-colors',
                  'text-soft-lavender hover:text-warm-gold',
                  activeSection === link.href
                    ? 'text-warm-gold underline underline-offset-4'
                    : '',
                ].join(' ')}
              >
                {link.label}
              </a>
            </li>
          ))}

          {/* Resume download */}
          <li className="md:ml-2 mt-2 md:mt-0">
            <Button
              asChild
              variant="outline"
              size="sm"
              className="border-warm-gold text-warm-gold bg-transparent
                         hover:bg-hover-active hover:text-warm-gold hover:border-warm-gold"
            >
              <a href="/resume.pdf" download aria-label="Download resume as PDF">
                <Download className="mr-1 h-4 w-4" aria-hidden="true" />
                Resume
              </a>
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

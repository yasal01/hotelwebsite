import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const links = [
  { to: '/#projects', label: 'Projects', hash: 'projects' },
  { to: '/#studio', label: 'Studio', hash: 'studio' },
  { to: '/#services', label: 'Services', hash: 'services' },
  { to: '/#contact', label: 'Contact', hash: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const onHome = location.pathname === '/'
  const overHero = onHome && !scrolled && !open

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [location.pathname])

  useEffect(() => {
    setOpen(false)
    document.body.style.overflow = ''
  }, [location.pathname, location.hash])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const goHash = (hash) => (e) => {
    if (location.pathname !== '/') return
    e.preventDefault()
    const el = document.getElementById(hash)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <header
      className={`navbar${scrolled || open ? ' scrolled' : ''}${open ? ' menu-open' : ''}${overHero ? ' over-hero' : ''}`}
    >
      <div className="navbar-inner">
        <Link to="/" className="logo" aria-label="Atelier Nouve home">
          Atelier Nouve
        </Link>

        <nav className={`nav-links${open ? ' open' : ''}`} aria-label="Primary">
          {links.map((link) => (
            <a key={link.label} href={link.to} onClick={goHash(link.hash)}>
              {link.label}
            </a>
          ))}
          <Link
            to="/#contact"
            className="nav-cta mobile-only"
            onClick={goHash('contact')}
          >
            Start a Project
          </Link>
        </nav>

        <div className="nav-actions">
          <Link
            to="/#contact"
            className="nav-cta desktop-only"
            onClick={goHash('contact')}
          >
            Start a Project
          </Link>
          <button
            type="button"
            className={`nav-toggle${open ? ' open' : ''}`}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}

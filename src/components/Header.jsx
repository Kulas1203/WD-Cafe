import { useEffect, useState } from 'react'
import Logo from './Logo.jsx'

const LINKS = [
  { href: '#about', label: 'Our Story' },
  { href: '#menu', label: 'Menu' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#reviews', label: 'Loved By' },
  { href: '#visit', label: 'Visit' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#home" className="brand" aria-label="WD Cafe home">
          <span className="brand-mark"><Logo id="header" /></span>
          <span className="brand-text">WD<span className="brand-accent">Cafe</span></span>
        </a>

        <nav
          className={`nav-links${open ? ' open' : ''}`}
          aria-label="Primary"
          onClick={(e) => {
            if (e.target.closest('a')) setOpen(false)
          }}
        >
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
          <a href="#visit" className="btn btn-primary nav-cta">Reserve a Table</a>
        </nav>

        <button
          className="nav-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  )
}

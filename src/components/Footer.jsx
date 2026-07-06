import Logo from './Logo.jsx'
import { FACEBOOK_URL } from '../data/site.js'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <a href="#home" className="brand brand-light">
            <span className="brand-mark"><Logo id="footer" /></span>
            <span className="brand-text">WD<span className="brand-accent">Cafe</span></span>
          </a>
          <p>A cafe that makes your heart happy. Brewed fresh, served warm — every single day.</p>
          <div className="socials">
            <a href={FACEBOOK_URL} target="_blank" rel="noopener" aria-label="WD Cafe on Facebook">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M14 8h2V5h-2a4 4 0 0 0-4 4v2H8v3h2v6h3v-6h2.2l.8-3H13V9a1 1 0 0 1 1-1Z" /></svg>
            </a>
          </div>
        </div>

        <nav className="footer-col" aria-label="Explore">
          <h4>Explore</h4>
          <a href="#about">Our Story</a>
          <a href="#menu">Menu</a>
          <a href="#gallery">Gallery</a>
          <a href="#reviews">Reviews</a>
        </nav>

        <nav className="footer-col" aria-label="Visit">
          <h4>Visit</h4>
          <a href="#visit">Montilla Blvd, Butuan City</a>
        </nav>

        <div className="footer-col">
          <h4>Brewing Hours</h4>
          <p>Sat–Thu · 6PM – 12MN</p>
          <p>Closed Friday</p>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>&copy; {year} WD Cafe. Made with warmth.</p>
        <p><a href="#">Privacy</a> · <a href="#">Terms</a></p>
      </div>
    </footer>
  )
}

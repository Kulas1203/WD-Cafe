import Reveal from './Reveal.jsx'
import { FACEBOOK_URL } from '../data/site.js'

export default function CtaBanner() {
  return (
    <section className="cta-banner">
      <Reveal className="container cta-inner">
        <h2>Your next favorite cup is waiting.</h2>
        <p>Orders, questions, or just to say hi — we're one message away.</p>
        <a href={FACEBOOK_URL} target="_blank" rel="noopener" className="btn btn-cream">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M14 8h2V5h-2a4 4 0 0 0-4 4v2H8v3h2v6h3v-6h2.2l.8-3H13V9a1 1 0 0 1 1-1Z" /></svg>
          Message Us on Facebook
        </a>
      </Reveal>
    </section>
  )
}

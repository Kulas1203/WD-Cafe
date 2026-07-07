import Reveal from './Reveal.jsx'
import ReservationForm from './ReservationForm.jsx'
import { FACEBOOK_URL } from '../data/site.js'

// The "Visit Us" section: contact/hours info on the left, the reservation
// form (its own component) on the right.
export default function Visit() {
  return (
    <section className="section visit" id="visit">
      <div className="container visit-grid">
        <Reveal className="visit-info">
          <p className="eyebrow">Visit Us</p>
          <h2 className="section-title">We'd love to see you</h2>
          <p className="section-lead">
            Find us on Montilla Blvd, Butuan City. Drop by for a slow evening, or order in through
            your favorite delivery app.
          </p>

          <ul className="info-list">
            <li>
              <span className="info-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
              </span>
              <div><strong>Find us</strong><p>Montilla Blvd, Butuan City<br />Dine-in &amp; delivery via your favorite food apps</p></div>
            </li>
            <li>
              <span className="info-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
              </span>
              <div><strong>Brewing schedule</strong><p>Sat–Thu · 6:00 PM – 12:00 MN<br />Closed every Friday</p></div>
            </li>
            <li>
              <span className="info-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.4 8.4 0 0 1-8.4 8.4 8.6 8.6 0 0 1-3.9-.9L3 21l2-5.4a8.4 8.4 0 1 1 16-4.1Z" /></svg>
              </span>
              <div><strong>Say hello</strong><p><a href={FACEBOOK_URL} target="_blank" rel="noopener">Message us on Facebook</a> — we reply fast.</p></div>
            </li>
          </ul>
        </Reveal>

        <Reveal className="visit-form-wrap">
          <ReservationForm />
        </Reveal>
      </div>
    </section>
  )
}

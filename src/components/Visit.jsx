import { useState } from 'react'
import Reveal from './Reveal.jsx'
import { FACEBOOK_URL, RESERVATION_EMAIL } from '../data/site.js'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function buildMailto(name, email, date, guests) {
  const subject = `Table Reservation Request — ${name}`
  const body =
    `Hi WD Cafe,\n\nI would like to reserve a table.\n\n` +
    `Name: ${name}\nEmail: ${email}\nDate: ${date}\nGuests: ${guests}\n\nThank you!`
  return `mailto:${RESERVATION_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

export default function Visit() {
  const [values, setValues] = useState({ name: '', email: '', date: '', guests: '3' })
  const [errors, setErrors] = useState({ name: '', email: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const setField = (k) => (e) => {
    const v = e.target.value
    setValues((s) => ({ ...s, [k]: v }))
    // re-validate a field that's already showing an error, as the user types
    setErrors((prev) => (prev[k] ? { ...prev, [k]: validate(k, v) } : prev))
  }

  function validate(field, value) {
    const v = value.trim()
    if (!v) return 'This field is required.'
    if (field === 'email' && !EMAIL_RE.test(v)) return 'Please enter a valid email address.'
    return ''
  }

  const onBlur = (k) => () => setErrors((prev) => ({ ...prev, [k]: validate(k, values[k]) }))

  async function onSubmit(e) {
    e.preventDefault()
    const nameErr = validate('name', values.name)
    const emailErr = validate('email', values.email)
    setErrors({ name: nameErr, email: emailErr })
    if (nameErr || emailErr) return

    const name = values.name.trim()
    const email = values.email.trim()
    const date = values.date || 'To be arranged'
    const guests = values.guests

    // No fetch (very old browsers): fall back to a pre-filled email
    if (!window.fetch) {
      window.location.href = buildMailto(name, email, date, guests)
      setStatus('success')
      return
    }

    setStatus('sending')
    const timer = setTimeout(() => setStatus('error'), 15000)
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${RESERVATION_EMAIL}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `Table Reservation Request — ${name}`,
          _template: 'table',
          _captcha: 'false',
          Name: name,
          Email: email,
          Date: date,
          Guests: guests,
        }),
      })
      clearTimeout(timer)
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      await res.json()
      setValues({ name: '', email: '', date: '', guests: '3' })
      setStatus('success')
    } catch {
      clearTimeout(timer)
      setStatus('error')
    }
  }

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
          <form className="visit-form" onSubmit={onSubmit} noValidate>
            <h3>Reserve a table</h3>
            <p className="form-note">Send us your details and we'll confirm your table by email.</p>

            <div className="field">
              <label htmlFor="name">Name <span aria-hidden="true">*</span></label>
              <input type="text" id="name" name="name" autoComplete="name" required
                value={values.name} onChange={setField('name')} onBlur={onBlur('name')}
                aria-invalid={errors.name ? 'true' : 'false'} />
              <small className="error">{errors.name}</small>
            </div>

            <div className="field">
              <label htmlFor="email">Email <span aria-hidden="true">*</span></label>
              <input type="email" id="email" name="email" autoComplete="email" required
                value={values.email} onChange={setField('email')} onBlur={onBlur('email')}
                aria-invalid={errors.email ? 'true' : 'false'} />
              <small className="error">{errors.email}</small>
            </div>

            <div className="field-row">
              <div className="field">
                <label htmlFor="date">Date</label>
                <input type="date" id="date" name="date" value={values.date} onChange={setField('date')} />
              </div>
              <div className="field">
                <label htmlFor="guests">Guests</label>
                <select id="guests" name="guests" value={values.guests} onChange={setField('guests')}>
                  <option>1</option><option>2</option><option>3</option>
                  <option>4</option><option>5</option><option>6+</option>
                </select>
              </div>
            </div>

            <button type="submit" className="btn btn-primary btn-block" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Request Reservation'}
            </button>

            {status === 'success' && (
              <p className="form-success" role="status">
                Thanks! Your reservation request has been sent — we'll get back to you shortly.
              </p>
            )}
            {status === 'error' && (
              <p className="form-error" role="alert">
                Hmm, that didn't go through. Please email us at{' '}
                <a href={`mailto:${RESERVATION_EMAIL}`}>{RESERVATION_EMAIL}</a> or message us on Facebook below.
              </p>
            )}
            <p className="form-alt">Prefer to chat? <a href={FACEBOOK_URL} target="_blank" rel="noopener">Message us on Facebook</a>.</p>
          </form>
        </Reveal>
      </div>
    </section>
  )
}

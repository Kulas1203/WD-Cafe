import { useState } from 'react'
import { FACEBOOK_URL, RESERVATION_EMAIL } from '../data/site.js'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function buildMailto(name, email, date, guests) {
  const subject = `Table Reservation Request — ${name}`
  const body =
    `Hi WD Cafe,\n\nI would like to reserve a table.\n\n` +
    `Name: ${name}\nEmail: ${email}\nDate: ${date}\nGuests: ${guests}\n\nThank you!`
  return `mailto:${RESERVATION_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

// The reservation form: controlled inputs (useState), on-blur validation,
// and submission to FormSubmit which emails the request to the cafe.
export default function ReservationForm() {
  const [values, setValues] = useState({ name: '', email: '', date: '', guests: '3' })
  const [errors, setErrors] = useState({ name: '', email: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  function validate(field, value) {
    const v = value.trim()
    if (!v) return 'This field is required.'
    if (field === 'email' && !EMAIL_RE.test(v)) return 'Please enter a valid email address.'
    return ''
  }

  const setField = (k) => (e) => {
    const v = e.target.value
    setValues((s) => ({ ...s, [k]: v }))
    // re-validate a field that's already showing an error, as the user types
    setErrors((prev) => (prev[k] ? { ...prev, [k]: validate(k, v) } : prev))
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
  )
}

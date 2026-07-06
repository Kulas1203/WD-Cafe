import Reveal from './Reveal.jsx'
import { reviews } from '../data/reviews.js'

export default function Reviews() {
  return (
    <section className="section reviews" id="reviews">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">Loved By Locals</p>
          <h2 className="section-title">Kind words, warm hearts</h2>
          <p className="section-lead">What friends of the cafe keep telling us.</p>
        </Reveal>

        <div className="reviews-grid">
          {reviews.map((r) => (
            <Reveal as="figure" key={r.name} className="review-card">
              <span className="stars" aria-hidden="true">★★★★★</span>
              <blockquote>“{r.quote}”</blockquote>
              <figcaption>
                <span className="avatar" aria-hidden="true">{r.initials}</span>
                <span><strong>{r.name}</strong><small>{r.role}</small></span>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

import Reveal from './Reveal.jsx'

const FEATURES = [
  {
    title: 'Crafted to order',
    text: 'Every drink made fresh — from a clean Americano to a silky Spanish latte.',
    icon: <path d="M12 2a7 7 0 0 0-7 7c0 3 2 5 2 8h10c0-3 2-5 2-8a7 7 0 0 0-7-7Z M9 21h6" />,
  },
  {
    title: 'Coffee & beyond',
    text: 'Matcha, dark chocolate, strawberry, blueberry, and ube lattes too.',
    icon: <path d="M4 11h16M4 11a8 8 0 0 0 16 0M7 11V7a5 5 0 0 1 10 0v4M6 20h12" />,
  },
  {
    title: 'Made with heart',
    text: "A welcoming space where everyone's a regular.",
    icon: <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1 7.8 7.8 7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.8Z" />,
  },
]

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container about-grid">
        <Reveal className="about-media">
          <div className="about-photo about-photo-1" role="img" aria-label="Barista carefully pouring milk into a cup"></div>
          <div className="about-photo about-photo-2" role="img" aria-label="Warm interior of WD Cafe with hanging plants"></div>
          <div className="about-quote">
            <span aria-hidden="true">“</span>
            Every cup tells a story.
          </div>
        </Reveal>

        <Reveal className="about-copy">
          <p className="eyebrow">Our Story</p>
          <h2 className="section-title">More than coffee —<br />it's a feeling.</h2>
          <p>
            WD Cafe — short for <em>Wapidos</em> — opened in 2024 with a simple idea: build a space
            where good coffee and good people meet. From our little corner on Montilla Blvd, Butuan
            City, we craft every cup to order and serve it with the kind of care that turns
            first-timers into regulars.
          </p>
          <ul className="feature-list">
            {FEATURES.map((f) => (
              <li key={f.title}>
                <span className="feature-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{f.icon}</svg>
                </span>
                <div><strong>{f.title}</strong><p>{f.text}</p></div>
              </li>
            ))}
          </ul>
          <a href="#menu" className="btn btn-primary">See What's Brewing</a>
        </Reveal>
      </div>
    </section>
  )
}

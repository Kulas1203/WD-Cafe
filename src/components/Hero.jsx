export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg" aria-hidden="true"></div>
      <div className="container hero-inner">
        <div className="hero-copy reveal in">
          <p className="eyebrow">Est. 2024 · Montilla Blvd · Butuan City</p>
          <h1 className="hero-title">
            <span className="line"><span className="line-inner">A cafe that makes</span></span>
            <span className="line"><span className="line-inner script">your heart happy.</span></span>
          </h1>
          <p className="hero-sub">
            Hand-crafted lattes — from Spanish and salted caramel to matcha and ube — served in a
            warm little corner that feels just like home.
          </p>
          <div className="hero-actions">
            <a href="#menu" className="btn btn-primary">Explore the Menu</a>
            <a href="#visit" className="btn btn-ghost">
              Find Us
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </a>
          </div>
          <dl className="hero-stats">
            <div><dt>6PM</dt><dd>Brews 'til midnight</dd></div>
            <div><dt>10+</dt><dd>Signature drinks</dd></div>
            <div><dt>₱69</dt><dd>Drinks start at</dd></div>
          </dl>
        </div>

        <div className="hero-card reveal in">
          <div className="hero-photo" role="img" aria-label="A latte with delicate rosetta art on a wooden cafe table"></div>
          <div className="hero-badge">
            <span className="hero-badge-emoji" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" /></svg>
            </span>
            <div>
              <strong>Open 'til midnight</strong>
              <span>Brewing Sat–Thu, 6PM–12MN · Closed Friday</span>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-wave" aria-hidden="true"></div>
    </section>
  )
}

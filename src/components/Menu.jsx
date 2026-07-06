import { useState } from 'react'
import Reveal from './Reveal.jsx'
import { categories, menu } from '../data/menu.js'

// Replays the click "jiggle" animation, restarting cleanly on rapid clicks.
function jiggle(e) {
  const el = e.currentTarget
  el.classList.remove('jiggle')
  void el.offsetWidth
  el.classList.add('jiggle')
}

export default function Menu() {
  const [cat, setCat] = useState('coffee')
  const items = menu.filter((m) => m.cat === cat)

  return (
    <section className="section menu" id="menu">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">The Menu</p>
          <h2 className="section-title">Crafted to comfort</h2>
          <p className="section-lead">Our hand-crafted drinks — order in-store or through your favorite delivery app.</p>
        </Reveal>

        <div className="menu-tabs" role="tablist" aria-label="Menu categories">
          {categories.map((c) => (
            <button
              key={c.id}
              className={`menu-tab${cat === c.id ? ' is-active' : ''}`}
              role="tab"
              aria-selected={cat === c.id}
              onClick={() => setCat(c.id)}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="menu-grid">
          {items.map((m) => (
            <Reveal as="article" className="menu-card" key={`${m.cat}-${m.name}`}>
              <div className="menu-photo" onClick={jiggle} onAnimationEnd={(e) => e.currentTarget.classList.remove('jiggle')}>
                <img src={m.img} alt={m.name} loading="lazy" width="92" height="92" />
              </div>
              <div className="menu-info">
                <div className="menu-card-top"><h3>{m.name}</h3><span className="price">{m.price}</span></div>
                <p>{m.desc}</p>
                <span className="tag">{m.tag}</span>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="menu-footnote">Prices from our delivery menu — may vary slightly in-store. Group orders welcome!</p>
      </div>
    </section>
  )
}

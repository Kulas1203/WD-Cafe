import Reveal from './Reveal.jsx'

const ITEMS = [
  { cls: 'g-1', label: 'Latte art in a ceramic cup' },
  { cls: 'g-2', label: 'Cafe seating with warm lamplight and plants' },
  { cls: 'g-3', label: 'Iced matcha latte on a wooden table' },
  { cls: 'g-4', label: 'Barista at the espresso machine' },
  { cls: 'g-5', label: 'Coffee beans being poured' },
]

export default function Gallery() {
  return (
    <section className="section gallery" id="gallery">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">A Look Inside</p>
          <h2 className="section-title">Come for the coffee,<br />stay for the cozy</h2>
        </Reveal>
        <div className="gallery-grid">
          {ITEMS.map((it) => (
            <Reveal as="figure" key={it.cls} className={`g-item ${it.cls}`} role="img" aria-label={it.label} />
          ))}
        </div>
      </div>
    </section>
  )
}

import { useEffect, useRef, useState } from 'react'
import { signatureItems } from '../data/site.js'

export default function Spotlight() {
  const sectionRef = useRef(null)
  const [active, setActive] = useState(0)

  useEffect(() => {
    let ticking = false
    const update = () => {
      ticking = false
      const el = sectionRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const total = rect.height - window.innerHeight
      if (total <= 0) return
      const progress = Math.min(Math.max(-rect.top / total, 0), 0.999)
      const idx = Math.floor(progress * signatureItems.length)
      setActive((prev) => (prev === idx ? prev : idx))
    }
    const onScroll = () => {
      if (!ticking) {
        ticking = true
        window.requestAnimationFrame(update)
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    update()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section className="spotlight" id="signature" aria-label="Signature drinks showcase" ref={sectionRef}>
      <div className="spotlight-sticky">
        <p className="eyebrow spotlight-eyebrow">The Signature Collection</p>
        <div className="spotlight-glow" aria-hidden="true"></div>
        <div className="spotlight-stage">
          {signatureItems.map((item, i) => (
            <div key={item.name} className={`spotlight-item${i === active ? ' is-active' : ''}`}>
              <img src={item.img} alt={item.name} width="240" height="300" />
              <h3>{item.name}</h3>
              <p>{item.note}</p>
            </div>
          ))}
        </div>
        <div className="spotlight-dots" aria-hidden="true">
          {signatureItems.map((item, i) => (
            <span key={item.name} className={i === active ? 'on' : ''}></span>
          ))}
        </div>
        <p className="spotlight-hint">Keep scrolling</p>
      </div>
    </section>
  )
}

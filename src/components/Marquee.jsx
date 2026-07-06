import { Fragment } from 'react'
import { marqueeItems } from '../data/site.js'

export default function Marquee() {
  // duplicate the list so the CSS translateX(-50%) loop is seamless
  const loop = [...marqueeItems, ...marqueeItems]
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {loop.map((item, i) => (
          <Fragment key={i}>
            <span>{item}</span>
            <span>•</span>
          </Fragment>
        ))}
      </div>
    </div>
  )
}

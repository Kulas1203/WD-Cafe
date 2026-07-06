import { useReveal } from '../hooks/useReveal.js'

// Wrapper that reveals its content on scroll. `as` picks the tag (div/figure/…).
export default function Reveal({ as: Tag = 'div', className = '', children, ...rest }) {
  const ref = useReveal()
  return (
    <Tag ref={ref} className={`reveal ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  )
}

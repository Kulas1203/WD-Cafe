// The Wapidos (WD, Est. 2024) circular badge, recreated as an inline SVG.
// `id` must be unique per instance because the arced text references paths by id.
export default function Logo({ id = 'wd' }) {
  return (
    <svg viewBox="0 0 100 100" width="46" height="46" fill="currentColor" role="img" aria-hidden="true">
      <defs>
        <path id={`wd-arc-top-${id}`} d="M 18 50 A 32 32 0 0 1 82 50" fill="none" />
        <path id={`wd-arc-bot-${id}`} d="M 11 50 A 39 39 0 0 0 89 50" fill="none" />
      </defs>
      <circle cx="50" cy="50" r="47" fill="none" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="10" cy="50" r="2.2" />
      <circle cx="90" cy="50" r="2.2" />
      <text fontFamily="Karla, sans-serif" fontSize="12" fontWeight="700" letterSpacing="4">
        <textPath href={`#wd-arc-top-${id}`} startOffset="50%" textAnchor="middle">WAPIDOS</textPath>
      </text>
      <text fontFamily="Karla, sans-serif" fontSize="9.5" fontWeight="600" letterSpacing="2.5">
        <textPath href={`#wd-arc-bot-${id}`} startOffset="50%" textAnchor="middle">EST. 2024</textPath>
      </text>
      <text x="39" y="64" textAnchor="middle" fontFamily="'Playfair Display', Georgia, serif" fontSize="40" fontWeight="500">W</text>
      <text x="61" y="64" textAnchor="middle" fontFamily="'Playfair Display', Georgia, serif" fontSize="40" fontWeight="500">D</text>
    </svg>
  )
}

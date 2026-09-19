export default function HeroVisual() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 600 600"
      className="pointer-events-none absolute -right-24 top-1/2 hidden h-[600px] w-[600px] -translate-y-1/2 sm:block md:-right-10 lg:right-0"
    >
      {/* grille de fond */}
      <g stroke="#2A2A2A" strokeOpacity="0.15" strokeWidth="1">
        {Array.from({ length: 7 }).map((_, i) => (
          <line key={`v${i}`} x1={i * 100} y1="0" x2={i * 100} y2="600" />
        ))}
        {Array.from({ length: 7 }).map((_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 100} x2="600" y2={i * 100} />
        ))}
      </g>

      {/* formes d'architecture */}
      <rect x="120" y="140" width="140" height="140" rx="6" fill="none" stroke="#C17F3F" strokeOpacity="0.35" strokeWidth="1.5" />
      <rect x="340" y="260" width="180" height="120" rx="6" fill="none" stroke="#8B5E3C" strokeOpacity="0.3" strokeWidth="1.5" />
      <circle cx="430" cy="160" r="60" fill="none" stroke="#C17F3F" strokeOpacity="0.3" strokeWidth="1.5" />
      <rect x="160" y="360" width="100" height="100" rx="6" fill="none" stroke="#C17F3F" strokeOpacity="0.25" strokeWidth="1.5" />

      {/* lignes de connexion */}
      <g stroke="#C17F3F" strokeOpacity="0.4" strokeWidth="1.5">
        <line x1="260" y1="210" x2="340" y2="300" />
        <line x1="430" y1="220" x2="430" y2="260" />
        <line x1="210" y1="280" x2="210" y2="360" />
        <line x1="260" y1="410" x2="340" y2="340" />
      </g>

      {/* noeuds */}
      <g fill="#C17F3F">
        <circle cx="120" cy="140" r="4" />
        <circle cx="260" cy="280" r="4" />
        <circle cx="430" cy="260" r="4" />
        <circle cx="340" cy="340" r="4" />
        <circle cx="210" cy="360" r="4" />
        <circle cx="260" cy="410" r="4" />
      </g>
    </svg>
  )
}

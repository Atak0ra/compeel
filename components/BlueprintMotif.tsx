export default function BlueprintMotif({ variant }: { variant: 'hero' }) {
  if (variant === 'hero') {
    return (
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 hidden h-[55%] w-[38%] max-w-[420px] opacity-30 md:block"
        viewBox="0 0 600 400"
        preserveAspectRatio="xMaxYMin meet"
      >
        <g stroke="var(--color-ink)" strokeWidth="1" fill="none">
          <line x1="420" y1="40" x2="580" y2="40" />
          <line x1="420" y1="40" x2="420" y2="220" />
          <circle cx="460" cy="110" r="5" />
          <circle cx="530" cy="70" r="5" />
          <circle cx="560" cy="160" r="5" />
          <line x1="460" y1="110" x2="530" y2="70" />
          <line x1="530" y1="70" x2="560" y2="160" />
          <rect x="445" y="200" width="24" height="8" fill="var(--color-accent-deep)" stroke="none" />
        </g>
      </svg>
    )
  }
  return null
}

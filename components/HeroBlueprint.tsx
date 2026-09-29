const BLUE = '#60A5FA'
const CYAN = '#22D3EE'
const GREEN = '#34D399'
const SLATE = '#64748B'

export default function HeroBlueprint() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      <svg
        viewBox="0 0 1400 800"
        preserveAspectRatio="xMidYMid slice"
        className="h-full w-full opacity-[0.16]"
        fill="none"
      >
        <defs>
          <pattern id="hb-grid" width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M32 0 H0 V32" stroke={SLATE} strokeWidth="0.5" fill="none" />
          </pattern>
          {[['blue', BLUE], ['cyan', CYAN], ['green', GREEN]].map(([id, color]) => (
            <marker key={id} id={`hb2-arrow-${id}`} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M0 0 L10 5 L0 10 Z" fill={color} />
            </marker>
          ))}
        </defs>

        <rect width="1400" height="800" fill="url(#hb-grid)" />

        {/* clients -> edge */}
        <rect x="1080" y="80" width="130" height="60" rx="4" stroke={SLATE} strokeWidth="1.3" />
        <path d="M1080 110 H960" stroke={BLUE} strokeWidth="1.2" markerEnd="url(#hb2-arrow-blue)" />

        {/* edge / load balancer */}
        <rect x="860" y="150" width="110" height="60" rx="4" stroke={BLUE} strokeWidth="1.4" fill={BLUE} fillOpacity="0.08" />
        <path d="M910 210 V 250" stroke={BLUE} strokeWidth="1.2" />
        <path d="M780 280 H 1050" stroke={BLUE} strokeWidth="1" />

        {/* service mesh row */}
        {[780, 900, 1020].map((x, i) => (
          <g key={x}>
            <rect x={x} y="280" width="90" height="70" rx="4" stroke={i === 1 ? CYAN : SLATE} strokeWidth="1.3" fill={i === 1 ? CYAN : 'none'} fillOpacity={i === 1 ? 0.06 : 0} />
            <path d={`M${x + 45} 350 V 400`} stroke={GREEN} strokeWidth="1" strokeDasharray="3 5" />
          </g>
        ))}

        {/* queue */}
        <g stroke={CYAN} strokeWidth="1.2">
          {[0, 1, 2].map(i => (
            <rect key={i} x="1150" y={290 + i * 16} width="70" height="10" rx="2" fill={CYAN} fillOpacity="0.06" />
          ))}
        </g>
        <path d="M870 315 H 1150" stroke={CYAN} strokeWidth="1" strokeDasharray="2 5" />

        {/* data layer */}
        {[780, 900, 1020].map(x => (
          <g key={x} stroke={GREEN} strokeWidth="1.2">
            <ellipse cx={x + 45} cy="420" rx="45" ry="13" fill={GREEN} fillOpacity="0.06" />
            <path d={`M${x} 420 V 460`} />
            <path d={`M${x + 90} 420 V 460`} />
            <ellipse cx={x + 45} cy="460" rx="45" ry="13" fill={GREEN} fillOpacity="0.06" />
          </g>
        ))}

        {/* observability panel */}
        <rect x="200" y="120" width="180" height="130" rx="4" stroke={SLATE} strokeWidth="1.2" />
        <path d="M220 220 l25 -40 l20 20 l30 -55" stroke={GREEN} strokeWidth="1.3" fill="none" />
        <circle cx="220" cy="150" r="4" fill={GREEN} />
        <circle cx="245" cy="150" r="4" fill={CYAN} />
        <circle cx="270" cy="150" r="4" fill={BLUE} />

        {/* scattered mesh links, background texture */}
        <path d="M150 500 C 300 460, 400 560, 550 520" stroke={SLATE} strokeWidth="0.8" />
        <path d="M200 600 C 350 620, 450 560, 600 600" stroke={SLATE} strokeWidth="0.8" />
        <circle cx="150" cy="500" r="5" fill="none" stroke={SLATE} strokeWidth="1" />
        <circle cx="550" cy="520" r="5" fill="none" stroke={SLATE} strokeWidth="1" />
        <circle cx="600" cy="600" r="5" fill="none" stroke={SLATE} strokeWidth="1" />
      </svg>
    </div>
  )
}

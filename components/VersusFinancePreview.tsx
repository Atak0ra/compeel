import { MessageSquare } from 'lucide-react'

const bars = [
  { label: 'SN', value: 84 },
  { label: 'CI', value: 62 },
  { label: 'TG', value: 51 },
  { label: 'ML', value: 38 },
  { label: 'BN', value: 46 },
  { label: 'GH', value: 70 },
]
const yTicks = [0, 25, 50, 75, 100]

export default function VersusFinancePreview() {
  return (
    <figure className="border border-metal bg-surface">
      <div className="flex items-center gap-3 border-b border-border px-5 py-4 font-mono text-xs uppercase tracking-widest text-metal">
        <MessageSquare size={16} aria-hidden="true" />
        Requête en langage naturel
      </div>
      <div className="border-b border-dashed border-metal/40 px-5 py-4">
        <p className="text-base text-foreground">« Quel est le chiffre d&apos;affaires par région ce trimestre, en hausse ou en baisse ? »</p>
      </div>
      <div className="grid gap-px bg-border sm:grid-cols-[1fr_1.4fr]">
        <div className="grid grid-rows-2 gap-px bg-border">
          <div className="bg-surface p-5">
            <p className="font-mono text-xs uppercase tracking-widest text-metal">CA trimestre</p>
            <p className="mt-2 text-3xl font-medium">4,82 M€</p>
            <p className="mt-1 text-sm text-accent-deep">+12,4 % vs T-1</p>
          </div>
          <div className="bg-surface p-5">
            <p className="font-mono text-xs uppercase tracking-widest text-metal">Région en tête</p>
            <p className="mt-2 text-3xl font-medium">Sénégal</p>
            <p className="mt-1 text-sm text-muted">31 % du volume</p>
          </div>
        </div>
        <div className="bg-surface p-5">
          <p className="font-mono text-xs uppercase tracking-widest text-metal">Répartition par région (M€)</p>
          <svg viewBox="0 0 280 150" className="mt-4 h-36 w-full" aria-hidden="true">
            {yTicks.map(tick => {
              const y = 110 - tick
              return (
                <g key={tick}>
                  <line x1="30" y1={y} x2="270" y2={y} stroke="var(--color-rule)" strokeWidth="1" />
                  <text x="24" y={y + 3} textAnchor="end" className="fill-metal" fontSize="8">{tick}</text>
                </g>
              )
            })}
            {bars.map((bar, index) => {
              const x = 40 + index * 38
              return (
                <g key={bar.label}>
                  <rect
                    x={x}
                    y={110 - bar.value}
                    width="24"
                    height={bar.value}
                    className="fill-accent-deep"
                    opacity={0.55 + index * 0.07}
                  />
                  <text x={x + 12} y="124" textAnchor="middle" className="fill-metal" fontSize="8">{bar.label}</text>
                </g>
              )
            })}
            <line x1="30" y1="10" x2="30" y2="110" stroke="var(--color-metal)" strokeWidth="1.2" />
            <line x1="30" y1="110" x2="270" y2="110" stroke="var(--color-metal)" strokeWidth="1.2" />
          </svg>
        </div>
      </div>
      <figcaption className="border-t border-border px-5 py-3 text-xs leading-relaxed text-muted">Aperçu d&apos;interface, à titre illustratif. Données de démonstration.</figcaption>
    </figure>
  )
}

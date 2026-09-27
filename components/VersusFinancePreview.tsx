import { ArrowUp, Bell, LayoutGrid, MapPin, Sparkles, TrendingUp, Wallet } from 'lucide-react'

const quarters = [
  { label: 'T1', value: 18 },
  { label: 'T2', value: 24 },
  { label: 'T3', value: 15 },
  { label: 'T4', value: 30 },
]
const yTicks = [0, 10, 20, 30]
const chartMax = 38
const peakIndex = 3

const navItems = [
  { label: 'Dashboard', active: true },
  { label: 'Rapports', active: false },
  { label: 'Alertes', active: false },
]

const kpis = [
  { icon: Wallet, label: 'CA trimestre', value: '4,82 M€', detail: '+12,4 % vs T-1', tone: 'text-accent-deep' },
  { icon: TrendingUp, label: 'Croissance', value: '+12,4 %', detail: 'sur 4 trimestres', tone: 'text-accent-deep' },
  { icon: MapPin, label: 'Région en tête', value: 'Sénégal', detail: '31 % du volume', tone: 'text-foreground' },
]

export default function VersusFinancePreview() {
  return (
    <figure className="flex h-full flex-col overflow-hidden rounded-lg border border-metal bg-surface shadow-xl">
      <div className="flex items-center gap-1.5 border-b border-border bg-surface-2 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
      </div>

      <div className="flex items-center justify-between gap-3 border-b border-border px-5 py-3">
        <div className="flex items-center gap-4">
          <span className="flex h-6 w-6 items-center justify-center rounded bg-accent-deep text-xs font-semibold text-white">V</span>
          <nav className="flex items-center gap-1 text-xs">
            {navItems.map(item => (
              <span key={item.label} className={`inline-flex items-center gap-1.5 rounded px-2.5 py-1.5 ${item.active ? 'bg-accent-deep/10 font-medium text-accent-deep' : 'text-muted'}`}>
                {item.active && <LayoutGrid size={12} aria-hidden="true" />}
                {item.label}
              </span>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-3 text-metal">
          <Bell size={15} aria-hidden="true" />
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-surface-2 text-[10px] font-medium">CP</span>
        </div>
      </div>

      <div className="border-b border-border bg-surface-2/40 px-5 py-4">
        <div className="flex items-center gap-3 rounded-full border border-metal bg-surface px-4 py-2.5 shadow-sm">
          <Sparkles size={16} className="shrink-0 text-accent-deep" aria-hidden="true" />
          <p className="flex-1 truncate text-sm text-foreground">Quel est le chiffre d&apos;affaires par région ce trimestre, en hausse ou en baisse&nbsp;?</p>
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent-deep text-white">
            <ArrowUp size={14} aria-hidden="true" />
          </span>
        </div>
      </div>

      <div className="flex-1 p-5">
        <div className="grid grid-cols-3 gap-3">
          {kpis.map(kpi => (
            <div key={kpi.label} className="rounded border border-border bg-surface p-3">
              <kpi.icon size={14} className="text-metal" aria-hidden="true" />
              <p className="mt-2 font-mono text-[10px] uppercase tracking-wider text-metal">{kpi.label}</p>
              <p className={`mt-1 text-lg font-medium ${kpi.tone}`}>{kpi.value}</p>
              <p className="text-[11px] text-muted">{kpi.detail}</p>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded border border-border bg-surface p-4">
          <div className="mb-2 flex items-center justify-between">
            <p className="text-sm font-medium text-foreground">Volume par trimestre</p>
            <p className="flex items-center gap-1.5 text-xs text-muted"><span className="h-2 w-2 rounded-sm bg-accent-deep" aria-hidden="true" />M€</p>
          </div>
          <svg viewBox="0 0 260 165" className="h-40 w-full" aria-hidden="true">
            {yTicks.map(tick => {
              const y = 110 - (tick / chartMax) * 100
              return (
                <g key={tick}>
                  <line x1="30" y1={y} x2="250" y2={y} stroke="var(--color-rule)" strokeWidth="1" strokeDasharray={tick === 0 ? undefined : '2 3'} />
                  <text x="24" y={y + 3} textAnchor="end" className="fill-metal" fontSize="8">{tick}</text>
                </g>
              )
            })}
            {quarters.map((q, index) => {
              const x = 45 + index * 50
              const barHeight = (q.value / chartMax) * 100
              const isPeak = index === peakIndex
              return (
                <g key={q.label}>
                  {isPeak && (
                    <g>
                      <rect x={x - 8} y={110 - barHeight - 26} width="46" height="18" rx="3" fill="var(--color-ink)" />
                      <polygon points={`${x + 7},${110 - barHeight - 8} ${x + 15},${110 - barHeight - 8} ${x + 11},${110 - barHeight - 2}`} fill="var(--color-ink)" />
                      <text x={x + 15} y={110 - barHeight - 14} textAnchor="middle" fill="#fff" fontSize="9" fontWeight="600">{q.value} M€</text>
                    </g>
                  )}
                  <rect x={x} y={110 - barHeight} width="30" height={barHeight} rx="2" className="fill-accent-deep" opacity={isPeak ? 1 : 0.55 + index * 0.08} />
                  <text x={x + 15} y="124" textAnchor="middle" className="fill-metal" fontSize="8">{q.label}</text>
                </g>
              )
            })}
            <line x1="30" y1="10" x2="30" y2="110" stroke="var(--color-metal)" strokeWidth="1.2" />
            <line x1="30" y1="110" x2="250" y2="110" stroke="var(--color-metal)" strokeWidth="1.2" />
          </svg>
        </div>
      </div>

      <figcaption className="border-t border-border px-5 py-3 text-xs leading-relaxed text-muted">Aperçu d&apos;interface, à titre illustratif. Données de démonstration.</figcaption>
    </figure>
  )
}

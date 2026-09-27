import { Bell, CircleCheck, CircleDashed, CircleX, Lock, Receipt, TrendingUp, Wallet } from 'lucide-react'

const navItems = [
  { label: 'Transactions', active: true },
  { label: 'Marchands', active: false },
  { label: 'Logs', active: false },
]

const kpis = [
  { icon: Receipt, label: 'Transactions (jour)', value: '1 284', detail: '+6,1 % vs hier' },
  { icon: TrendingUp, label: 'Taux de succès', value: '97,2 %', detail: 'sur 30 jours' },
  { icon: Wallet, label: 'Volume traité', value: '18,4 M FCFA', detail: 'jour courant' },
]

const statusStyle = {
  SUCCESS: { icon: CircleCheck, className: 'bg-emerald-50 text-emerald-700' },
  PENDING: { icon: CircleDashed, className: 'bg-amber-50 text-amber-700' },
  FAILED: { icon: CircleX, className: 'bg-red-50 text-red-700' },
} as const

const transactions: { ref: string; merchant: string; operator: string; amount: string; status: keyof typeof statusStyle }[] = [
  { ref: 'CR-88421', merchant: 'Marchand A', operator: 'MTN', amount: '125 000 FCFA', status: 'SUCCESS' },
  { ref: 'CR-88420', merchant: 'Marchand B', operator: 'Orange', amount: '42 500 FCFA', status: 'SUCCESS' },
  { ref: 'CR-88419', merchant: 'Marchand A', operator: 'MTN', amount: '18 000 FCFA', status: 'PENDING' },
  { ref: 'CR-88418', merchant: 'Marchand C', operator: 'Orange', amount: '300 000 FCFA', status: 'SUCCESS' },
  { ref: 'CR-88417', merchant: 'Marchand B', operator: 'MTN', amount: '9 750 FCFA', status: 'FAILED' },
]

export default function CrpayPreview() {
  return (
    <figure className="flex h-full flex-col overflow-hidden rounded-lg border border-metal bg-surface shadow-xl">
      <div className="flex items-center gap-1.5 border-b border-border bg-surface-2 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
      </div>

      <div className="flex items-center justify-between gap-3 border-b border-border px-5 py-3">
        <div className="flex items-center gap-4">
          <span className="flex h-6 w-6 items-center justify-center rounded bg-accent-deep text-xs font-semibold text-white">C</span>
          <nav className="flex items-center gap-1 text-xs">
            {navItems.map(item => (
              <span key={item.label} className={`inline-flex items-center rounded px-2.5 py-1.5 ${item.active ? 'bg-accent-deep/10 font-medium text-accent-deep' : 'text-muted'}`}>
                {item.label}
              </span>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-metal"><Lock size={11} aria-hidden="true" />Marchand · lecture</span>
          <Bell size={15} className="text-metal" aria-hidden="true" />
        </div>
      </div>

      <div className="flex-1 p-5">
        <div className="grid grid-cols-3 gap-3">
          {kpis.map(kpi => (
            <div key={kpi.label} className="rounded border border-border bg-surface p-3">
              <kpi.icon size={14} className="text-metal" aria-hidden="true" />
              <p className="mt-2 font-mono text-[10px] uppercase tracking-wider text-metal">{kpi.label}</p>
              <p className="mt-1 text-lg font-medium text-accent-deep">{kpi.value}</p>
              <p className="text-[11px] text-muted">{kpi.detail}</p>
            </div>
          ))}
        </div>

        <div className="mt-4 overflow-hidden rounded border border-border">
          <div className="grid grid-cols-[1.1fr_1fr_0.8fr_1fr_1fr] gap-2 border-b border-border bg-surface-2 px-4 py-2 font-mono text-[10px] uppercase tracking-wider text-metal">
            <span>Référence</span>
            <span>Marchand</span>
            <span>Opérateur</span>
            <span>Montant</span>
            <span>Statut</span>
          </div>
          {transactions.map(tx => {
            const s = statusStyle[tx.status]
            return (
              <div key={tx.ref} className="grid grid-cols-[1.1fr_1fr_0.8fr_1fr_1fr] items-center gap-2 border-b border-border px-4 py-2.5 text-xs last:border-b-0">
                <span className="font-mono text-foreground">{tx.ref}</span>
                <span className="text-muted">{tx.merchant}</span>
                <span className="text-muted">{tx.operator}</span>
                <span className="text-foreground">{tx.amount}</span>
                <span className={`inline-flex w-fit items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-medium ${s.className}`}>
                  <s.icon size={11} aria-hidden="true" />
                  {tx.status}
                </span>
              </div>
            )
          })}
        </div>
      </div>

      <figcaption className="border-t border-border px-5 py-3 text-xs leading-relaxed text-muted">Aperçu d&apos;interface, à titre illustratif. Données de démonstration.</figcaption>
    </figure>
  )
}

import type { LucideIcon } from 'lucide-react'

export type WatermarkIcon = {
  icon: LucideIcon
  className: string
  size: number
}

export default function Watermark({ icons }: { icons: WatermarkIcon[] }) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {icons.map(({ icon: Icon, className, size }, index) => (
        <Icon key={index} className={`absolute text-accent ${className}`} size={size} strokeWidth={1} />
      ))}
    </div>
  )
}

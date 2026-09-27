const BLUE = '#2563EB'
const CYAN = '#06B6D4'
const GREEN = '#10B981'
const PURPLE = '#8B5CF6'
const AMBER = '#F59E0B'
const RED = '#EF4444'

function DbCluster({ x, y, color }: { x: number; y: number; color: string }) {
  const shards = [0, 1, 2]
  return (
    <g stroke={color} strokeWidth="1.3">
      {shards.map(i => {
        const cx = x + i * 22
        const cy = y - i * 18
        return (
          <g key={i}>
            <ellipse cx={cx} cy={cy} rx="34" ry="11" fill={color} fillOpacity="0.1" />
            <path d={`M${cx - 34} ${cy} V ${cy + 46}`} />
            <path d={`M${cx + 34} ${cy} V ${cy + 46}`} />
            <ellipse cx={cx} cy={cy + 46} rx="34" ry="11" fill={color} fillOpacity="0.1" />
            <path d={`M${cx - 34} ${cy + 23} a34 11 0 0 0 68 0`} />
          </g>
        )
      })}
    </g>
  )
}

function Hex({ cx, cy, r, color }: { cx: number; cy: number; r: number; color: string }) {
  const pts = [0, 60, 120, 180, 240, 300]
    .map(deg => {
      const rad = (Math.PI / 180) * deg
      return `${(cx + r * Math.cos(rad)).toFixed(1)},${(cy + r * Math.sin(rad)).toFixed(1)}`
    })
    .join(' ')
  return <polygon points={pts} stroke={color} strokeWidth="1.3" fill={color} fillOpacity="0.08" />
}

const meshNodes = [
  { x: 470, y: 170, c: BLUE }, { x: 560, y: 150, c: PURPLE }, { x: 650, y: 175, c: GREEN },
  { x: 430, y: 280, c: PURPLE }, { x: 520, y: 260, c: GREEN }, { x: 610, y: 285, c: BLUE },
  { x: 470, y: 385, c: GREEN }, { x: 560, y: 365, c: BLUE }, { x: 650, y: 390, c: PURPLE },
  { x: 430, y: 490, c: BLUE }, { x: 520, y: 470, c: PURPLE }, { x: 610, y: 495, c: GREEN },
]

const meshLinks: [number, number][] = [
  [0, 1], [1, 2], [3, 4], [4, 5], [6, 7], [7, 8], [9, 10], [10, 11],
  [0, 4], [1, 4], [1, 5], [3, 7], [4, 7], [4, 8], [6, 10], [7, 10], [7, 11],
  [2, 5], [5, 8], [8, 11], [3, 0], [6, 3], [9, 6],
]

function ChartPanel({ x, y, w, h, color, points }: { x: number; y: number; w: number; h: number; color: string; points: string }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="3" stroke="#94A3B8" strokeWidth="1" fill="#94A3B8" fillOpacity="0.04" />
      <polyline points={points} fill="none" stroke={color} strokeWidth="1.4" transform={`translate(${x + 8} ${y + h - 10})`} />
      <line x1={x + 8} y1={y + h - 10} x2={x + w - 8} y2={y + h - 10} stroke="#94A3B8" strokeWidth="0.8" />
    </g>
  )
}

const statusCells = Array.from({ length: 18 }, (_, i) => i)
const redCells = new Set([4, 11])

function LogPanel({ x, y, w }: { x: number; y: number; w: number }) {
  const rows = [0.9, 0.6, 0.75, 0.4, 0.85]
  return (
    <g>
      <rect x={x} y={y} width={w} height="140" rx="3" stroke="#94A3B8" strokeWidth="1" fill="#94A3B8" fillOpacity="0.04" />
      {rows.map((f, i) => (
        <g key={i}>
          <circle cx={x + 14} cy={y + 22 + i * 24} r="2.5" fill={CYAN} />
          <line x1={x + 26} y1={y + 22 + i * 24} x2={x + 26 + (w - 46) * f} y2={y + 22 + i * 24} stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />
        </g>
      ))}
    </g>
  )
}

function AlertPanel({ x, y, w }: { x: number; y: number; w: number }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height="90" rx="3" stroke="#94A3B8" strokeWidth="1" fill="#94A3B8" fillOpacity="0.04" />
      <path d={`M${x + 22} ${y + 60} l12 -22 l12 22 Z`} stroke={AMBER} strokeWidth="1.4" fill={AMBER} fillOpacity="0.18" />
      <line x1={x + 60} y1={y + 30} x2={x + w - 16} y2={y + 30} stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />
      <line x1={x + 60} y1={y + 45} x2={x + w - 40} y2={y + 45} stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />
      <line x1={x + 60} y1={y + 60} x2={x + w - 60} y2={y + 60} stroke={RED} strokeWidth="2" strokeLinecap="round" />
    </g>
  )
}

const flowLines: { d: string; color: string }[] = [
  { d: 'M660 175 C 760 160, 820 140, 870 130', color: BLUE },
  { d: 'M660 285 C 760 250, 820 200, 870 175', color: GREEN },
  { d: 'M660 390 C 760 330, 800 240, 870 220', color: PURPLE },
  { d: 'M660 175 C 780 250, 850 300, 920 305', color: BLUE },
  { d: 'M660 390 C 760 400, 850 320, 920 320', color: CYAN },
  { d: 'M650 495 C 760 460, 900 380, 1080 345', color: GREEN },
  { d: 'M660 285 C 800 330, 900 420, 990 460', color: PURPLE },
  { d: 'M650 495 C 800 510, 900 490, 990 480', color: AMBER },
  { d: 'M660 390 C 800 460, 900 500, 990 500', color: CYAN },
]

export default function HeroBlueprint() {
  return (
    <div className="blueprint-grid pointer-events-none absolute inset-0" aria-hidden="true">
      <svg
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        className="h-full w-full opacity-[0.22]"
        fill="none"
      >
        <defs>
          {[['blue', BLUE], ['cyan', CYAN], ['green', GREEN], ['purple', PURPLE], ['amber', AMBER]].map(([id, color]) => (
            <marker key={id} id={`hb-arrow-${id}`} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M0 0 L10 5 L0 10 Z" fill={color} />
            </marker>
          ))}
        </defs>

        {/* database clusters (sharded / replicated) */}
        <DbCluster x={90} y={150} color={BLUE} />
        <DbCluster x={90} y={430} color={PURPLE} />

        {/* API gateway */}
        <path d="M270 300 l26 -26 l26 26 l-26 26 Z" stroke={CYAN} strokeWidth="1.4" fill={CYAN} fillOpacity="0.1" />
        {/* load balancer */}
        <g stroke={GREEN} strokeWidth="1.3">
          <rect x="255" y="440" width="60" height="34" rx="4" fill={GREEN} fillOpacity="0.08" />
          <circle cx="270" cy="457" r="3" fill={GREEN} />
          <circle cx="285" cy="457" r="3" fill={GREEN} />
          <circle cx="300" cy="457" r="3" fill={GREEN} />
        </g>
        {/* message queue */}
        <g stroke={CYAN} strokeWidth="1.3">
          {[0, 1, 2, 3].map(i => (
            <rect key={i} x="255" y={560 + i * 14} width="60" height="9" rx="2" fill={CYAN} fillOpacity="0.08" />
          ))}
        </g>

        {/* fan-in from clusters and edge components toward the mesh */}
        <path d="M180 190 C 230 220, 260 270, 300 300" stroke={BLUE} strokeWidth="1.2" />
        <path d="M180 470 C 230 460, 260 460, 296 457" stroke={PURPLE} strokeWidth="1.2" />
        <path d="M296 457 C 340 440, 400 400, 430 385" stroke={GREEN} strokeWidth="1.2" markerEnd="url(#hb-arrow-green)" />
        <path d="M315 490 C 360 480, 400 400, 470 385" stroke={CYAN} strokeWidth="1.2" markerEnd="url(#hb-arrow-cyan)" />
        <path d="M322 300 C 380 280, 420 250, 470 235" stroke={CYAN} strokeWidth="1.2" markerEnd="url(#hb-arrow-cyan)" />
        <path d="M322 320 C 380 340, 400 380, 430 385" stroke={CYAN} strokeWidth="1.2" markerEnd="url(#hb-arrow-cyan)" />

        {/* dense hexagonal service mesh */}
        {meshLinks.map(([a, b], i) => {
          const from = meshNodes[a]
          const to = meshNodes[b]
          return <line key={i} x1={from.x} y1={from.y} x2={to.x} y2={to.y} stroke="#94A3B8" strokeWidth="0.8" />
        })}
        {meshNodes.map((n, i) => (
          <Hex key={i} cx={n.x} cy={n.y} r={26} color={n.c} />
        ))}

        {/* observability dashboard */}
        <ChartPanel x={870} y={100} w={140} h={70} color={BLUE} points="0,20 15,24 30,10 45,18 60,4 75,14 90,8 105,20 120,12" />
        <ChartPanel x={1030} y={100} w={140} h={70} color={GREEN} points="0,14 15,18 30,20 45,10 60,16 75,6 90,12 105,4 120,10" />
        <ChartPanel x={870} y={185} w={300} h={70} color={RED} points="0,10 20,12 40,30 60,14 80,10 100,26 120,14 140,10 160,16 180,10 200,14 220,10 240,20 260,12 280,10" />

        <g>
          {statusCells.map(i => {
            const col = i % 6
            const row = Math.floor(i / 6)
            const x = 870 + col * 22
            const y = 275 + row * 22
            const bad = redCells.has(i)
            return <rect key={i} x={x} y={y} width="16" height="16" rx="2" stroke={bad ? RED : GREEN} strokeWidth="1" fill={bad ? RED : GREEN} fillOpacity="0.18" />
          })}
        </g>

        <LogPanel x={1032} y={275} w={138} />
        <AlertPanel x={870} y={435} w={300} />

        {/* crisscrossing flux lines between architecture and dashboard */}
        {flowLines.map((f, i) => (
          <path key={i} d={f.d} stroke={f.color} strokeWidth="1" strokeDasharray="3 5" markerEnd={`url(#hb-arrow-${
            f.color === BLUE ? 'blue' : f.color === CYAN ? 'cyan' : f.color === GREEN ? 'green' : f.color === PURPLE ? 'purple' : 'amber'
          })`} />
        ))}
      </svg>
    </div>
  )
}

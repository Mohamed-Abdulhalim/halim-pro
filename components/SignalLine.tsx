import styles from './SignalLine.module.css'

const W = 800
const H = 520
const LINE_Y = 360
const END_X = 772

function mulberry32(seed: number) {
  let a = seed
  return () => {
    a |= 0
    a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

const smooth = (a: number) => {
  const c = Math.max(0, Math.min(1, a))
  return c * c * (3 - 2 * c)
}

function buildTrace() {
  const rand = mulberry32(11)
  const jitter = Array.from({ length: 31 }, () => rand() * 2 - 1)
  const pts: [number, number][] = []
  const n = 1400
  const x0 = 40
  const x1 = 600
  for (let i = 0; i <= n; i++) {
    const t = i / n
    const xb = x0 + (x1 - x0) * t
    const decay = Math.pow(1 - smooth(t / 0.8), 1.6)
    const k = Math.min(29, Math.floor(t * 30))
    const f = t * 30 - k
    const wob = jitter[k] * (1 - f) + jitter[k + 1] * f
    const amp = 120 * decay * (1 + 0.45 * wob)
    const theta = t * 2 * Math.PI * 16 + 3 * wob
    const yb = 210 + (LINE_Y - 210) * smooth((t - 0.2) / 0.8)
    const x = xb + amp * 0.8 * Math.cos(theta)
    const y = yb + amp * Math.sin(theta * 1.07) + 8 * decay * Math.sin(t * 57)
    pts.push([x, y])
  }
  const [lx, ly] = pts[pts.length - 1]
  for (let i = 1; i <= 60; i++) {
    const f = i / 60
    pts.push([lx + (END_X - lx) * f, ly + (LINE_Y - ly) * f])
  }
  return pts
}

const PTS = buildTrace()
const D = 'M' + PTS.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(' L')

function nearest(xq: number) {
  let best = PTS[PTS.length - 1]
  for (let i = Math.floor(PTS.length * 0.55); i < PTS.length; i++) {
    if (Math.abs(PTS[i][0] - xq) < Math.abs(best[0] - xq)) best = PTS[i]
  }
  return best
}

const STEPS = [
  { name: 'perceive()', x: 400 },
  { name: 'reason()', x: 490 },
  { name: 'act()', x: 580 },
  { name: 'verify()', x: 670 },
].map((s) => ({ ...s, p: nearest(s.x) }))

export default function SignalLine() {
  return (
    <svg
      className={styles.svg}
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label="A tangled line straightening into a clean line, representing messy operations turned into an autonomous system"
    >
      <defs>
        <linearGradient id="sigInk" gradientUnits="userSpaceOnUse" x1="300" y1="0" x2="700" y2="0">
          <stop offset="0" style={{ stopColor: "var(--text)" }} />
          <stop offset="1" style={{ stopColor: "var(--accent)" }} />
        </linearGradient>
      </defs>

      <text x="40" y="44" className={styles.fig}>FIG. 01</text>
      <text x="112" y="44" className={styles.note}>entropy → agency</text>

      <line x1="250" y1="74" x2="200" y2="102" className={styles.leader} />
      <text x="256" y="72" className={styles.note}>input: emails, PDFs, sheets, forms</text>

      <path d={D} pathLength={1} className={styles.trace} stroke="url(#sigInk)" />

      {STEPS.map((s, i) => (
        <g key={s.name} className={styles.step} style={{ animationDelay: `${1.9 + i * 0.15}s` }}>
          <line x1={s.p[0]} y1={s.p[1] + 6} x2={s.p[0]} y2={LINE_Y + 46} className={styles.tick} />
          <circle cx={s.p[0]} cy={s.p[1]} r={3.6} className={styles.node} />
          <text x={s.p[0]} y={LINE_Y + 64} textAnchor="middle" className={styles.note}>{s.name}</text>
        </g>
      ))}

      <g className={styles.step} style={{ animationDelay: '2.7s' }}>
        <circle cx={END_X} cy={LINE_Y} r={13} className={styles.halo} />
        <circle cx={END_X} cy={LINE_Y} r={6} className={styles.end} />
        <text x={END_X} y={LINE_Y - 22} textAnchor="end" className={styles.out}>output: decisions</text>
      </g>
    </svg>
  )
}

interface RingProps {
  value: number
  max: number
  label: string
  color: string
}

function Ring({ value, max, label, color }: RingProps) {
  const r = 26
  const c = 2 * Math.PI * r
  const pct = Math.min(1, value / max)
  const offset = c * (1 - pct)

  return (
    <div className="ring">
      <svg viewBox="0 0 64 64" aria-hidden>
        <circle
          cx="32"
          cy="32"
          r={r}
          fill="none"
          stroke="rgba(255,255,255,0.12)"
          strokeWidth="5"
        />
        <circle
          cx="32"
          cy="32"
          r={r}
          fill="none"
          stroke={color}
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={offset}
          transform="rotate(-90 32 32)"
        />
        <text
          x="32"
          y="36"
          textAnchor="middle"
          fill="white"
          fontSize="12"
          fontWeight="650"
          fontFamily="Inter, sans-serif"
        >
          {value}
        </text>
      </svg>
      <div className="ring-label">{label}</div>
    </div>
  )
}

export function ProgressRings() {
  return (
    <div className="rings" aria-label="Indicateurs du parcours">
      <Ring value={9} max={9} label="Chapitres" color="#7BA89A" />
      <Ring value={4} max={9} label="Explorés" color="#E8DFD0" />
      <Ring value={1} max={1} label="Pays" color="#9BC4B6" />
    </div>
  )
}

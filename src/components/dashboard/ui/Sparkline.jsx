/**
 * 12-point trend line for a stat tile.
 * Drawn in the de-emphasis hue with only the current point in the accent —
 * a sparkline supports the number, it never competes with it.
 */
export default function Sparkline({ data, width = 104, height = 34, accent = '#159b4c' }) {
  if (!data?.length) return null

  const min = Math.min(...data)
  const max = Math.max(...data)
  const span = max - min || 1
  const pad = 4

  const x = (i) => pad + (i * (width - pad * 2)) / (data.length - 1)
  const y = (v) => height - pad - ((v - min) / span) * (height - pad * 2)

  const line = data.map((v, i) => `${i === 0 ? 'M' : 'L'}${x(i).toFixed(1)} ${y(v).toFixed(1)}`).join(' ')
  const lastX = x(data.length - 1)
  const lastY = y(data[data.length - 1])

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} aria-hidden="true" focusable="false">
      <path d={line} fill="none" stroke="#b2bfe4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {/* 2px surface ring keeps the end dot legible wherever the line ends */}
      <circle cx={lastX} cy={lastY} r="4" fill={accent} stroke="#fff" strokeWidth="2" />
    </svg>
  )
}

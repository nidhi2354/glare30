import { useMemo, useState } from 'react'
import { useElementWidth } from '@/hooks/useElementWidth'
import { formatNumber } from '@/utils/format'
import { cn } from '@/utils/cn'

const PAD = { top: 16, right: 56, bottom: 28, left: 40 }
const PLOT_HEIGHT = 200
const HEIGHT = PLOT_HEIGHT + PAD.top + PAD.bottom

/** Rounds the top of the scale up to a clean tick (10 / 20 / 50 / 100 …). */
function niceScale(max, ticks = 4) {
  const raw = max / ticks
  const mag = 10 ** Math.floor(Math.log10(raw))
  const step = [1, 2, 2.5, 5, 10].find((m) => m * mag >= raw) * mag
  const top = step * ticks
  return { top, values: Array.from({ length: ticks + 1 }, (_, i) => i * step) }
}

/**
 * Two-series area + line on ONE y-axis.
 *
 * Both measures are counts of people, so they share a scale — a second y-axis
 * would let the two lines cross wherever the scales happened to be aligned and
 * invent a relationship the data does not contain.
 *
 * Every value is also reachable without hovering: the endpoints are directly
 * labelled and the "Table" view lists the lot.
 */
export default function TrendChart({ series, points, xKey = 'month', title }) {
  const [wrapRef, width] = useElementWidth(680)
  const [active, setActive] = useState(null)
  const [view, setView] = useState('chart')

  const innerW = Math.max(width - PAD.left - PAD.right, 120)

  const scale = useMemo(() => {
    const max = Math.max(...points.flatMap((p) => series.map((s) => p[s.id])))
    return niceScale(max)
  }, [points, series])

  const x = (i) => PAD.left + (points.length === 1 ? innerW / 2 : (i * innerW) / (points.length - 1))
  const y = (v) => PAD.top + PLOT_HEIGHT - (v / scale.top) * PLOT_HEIGHT

  const paths = useMemo(
    () =>
      series.map((s, seriesIndex) => {
        const line = points.map((p, i) => `${i === 0 ? 'M' : 'L'}${x(i).toFixed(1)} ${y(p[s.id]).toFixed(1)}`).join(' ')
        const base = PAD.top + PLOT_HEIGHT
        const area = `${line} L${x(points.length - 1).toFixed(1)} ${base} L${x(0).toFixed(1)} ${base} Z`
        return { ...s, line, area: seriesIndex === 0 ? area : null }
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [series, points, innerW, scale.top],
  )

  const pointFromEvent = (e) => {
    const box = e.currentTarget.getBoundingClientRect()
    const rel = e.clientX - box.left - PAD.left
    const i = Math.round((rel / innerW) * (points.length - 1))
    setActive(Math.min(Math.max(i, 0), points.length - 1))
  }

  const onKeyDown = (e) => {
    if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return
    e.preventDefault()
    setActive((prev) => {
      const next = (prev ?? 0) + (e.key === 'ArrowRight' ? 1 : -1)
      return Math.min(Math.max(next, 0), points.length - 1)
    })
  }

  return (
    <div>
      {/* One control row above the plot — legend left, view switch right */}
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <ul className="flex flex-wrap items-center gap-x-4 gap-y-2">
          {series.map((s) => (
            <li key={s.id} className="flex items-center gap-2 text-sm font-medium text-navy-600">
              <span className="h-[3px] w-4 rounded-full" style={{ backgroundColor: s.color }} />
              {s.label}
            </li>
          ))}
        </ul>

        <div className="flex rounded-full bg-navy-50 p-0.5" role="group" aria-label="Chart or table view">
          {['chart', 'table'].map((v) => (
            <button
              key={v}
              type="button"
              onClick={() => setView(v)}
              aria-pressed={view === v}
              className={cn(
                'rounded-full px-3 py-1.5 text-xs font-semibold capitalize transition-colors',
                view === v ? 'bg-white text-navy-800 shadow-sm' : 'text-navy-500 hover:text-navy-700',
              )}
            >
              {v}
            </button>
          ))}
        </div>
      </div>

      {view === 'table' ? (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <caption className="sr-only">{title}</caption>
            <thead>
              <tr className="border-b border-navy-100 text-left text-xs font-semibold tracking-wide text-navy-400 uppercase">
                <th scope="col" className="py-2.5 pr-4">
                  Month
                </th>
                {series.map((s) => (
                  <th key={s.id} scope="col" className="py-2.5 pr-4 text-right">
                    {s.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {points.map((p) => (
                <tr key={p[xKey]} className="border-b border-navy-50 last:border-0">
                  <th scope="row" className="py-2.5 pr-4 text-left font-semibold text-navy-700">
                    {p[xKey]}
                  </th>
                  {series.map((s) => (
                    <td key={s.id} className="py-2.5 pr-4 text-right text-navy-600 tabular-nums">
                      {formatNumber(p[s.id])}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div ref={wrapRef} className="relative w-full min-w-0">
          <svg
            width={width}
            height={HEIGHT}
            viewBox={`0 0 ${width} ${HEIGHT}`}
            role="img"
            aria-label={`${title}. Use the table view or arrow keys to read individual values.`}
            tabIndex={0}
            onMouseMove={pointFromEvent}
            onMouseLeave={() => setActive(null)}
            onKeyDown={onKeyDown}
            onBlur={() => setActive(null)}
            className="block max-w-full touch-pan-y focus-visible:outline-none"
          >
            {/* Gridlines: solid hairlines, one step off the surface */}
            {scale.values.map((v) => (
              <g key={v}>
                <line x1={PAD.left} x2={width - PAD.right} y1={y(v)} y2={y(v)} stroke="#eef1fa" strokeWidth="1" />
                <text x={PAD.left - 10} y={y(v) + 4} textAnchor="end" className="fill-navy-400 text-[11px] tabular-nums">
                  {formatNumber(v)}
                </text>
              </g>
            ))}

            {paths
              .filter((s) => s.area)
              .map((s) => (
                <path key={`${s.id}-area`} d={s.area} fill={s.color} fillOpacity="0.1" />
              ))}

            {active !== null && (
              <line
                x1={x(active)}
                x2={x(active)}
                y1={PAD.top}
                y2={PAD.top + PLOT_HEIGHT}
                stroke="#b2bfe4"
                strokeWidth="1"
              />
            )}

            {paths.map((s) => (
              <path
                key={`${s.id}-line`}
                d={s.line}
                fill="none"
                stroke={s.color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            ))}

            {/* End dot + direct label. The label wears ink, the dot carries identity. */}
            {series.map((s) => {
              const last = points[points.length - 1]
              return (
                <g key={`${s.id}-end`}>
                  <circle cx={x(points.length - 1)} cy={y(last[s.id])} r="4" fill={s.color} stroke="#fff" strokeWidth="2" />
                  <text
                    x={x(points.length - 1) + 10}
                    y={y(last[s.id]) + 4}
                    className="fill-navy-700 text-[12px] font-semibold tabular-nums"
                  >
                    {formatNumber(last[s.id])}
                  </text>
                </g>
              )
            })}

            {active !== null &&
              series.map((s) => (
                <circle
                  key={`${s.id}-active`}
                  cx={x(active)}
                  cy={y(points[active][s.id])}
                  r="5"
                  fill={s.color}
                  stroke="#fff"
                  strokeWidth="2"
                />
              ))}

            {points.map((p, i) => (
              <text
                key={p[xKey]}
                x={x(i)}
                y={HEIGHT - 8}
                textAnchor="middle"
                className={cn('text-[11px]', active === i ? 'fill-navy-700 font-semibold' : 'fill-navy-400')}
              >
                {p[xKey]}
              </text>
            ))}
          </svg>

          {active !== null && (
            <div
              className="pointer-events-none absolute top-0 z-10 w-max max-w-[200px] -translate-x-1/2 rounded-xl border border-navy-100 bg-white p-3 shadow-soft"
              style={{ left: Math.min(Math.max(x(active), 80), width - 80) }}
            >
              <p className="text-xs font-semibold text-navy-800">{points[active][xKey]}</p>
              <ul className="mt-1.5 flex flex-col gap-1">
                {series.map((s) => (
                  <li key={s.id} className="flex items-center justify-between gap-4 text-xs">
                    <span className="flex items-center gap-1.5 text-navy-500">
                      <span className="size-2 rounded-full" style={{ backgroundColor: s.color }} />
                      {s.label}
                    </span>
                    <span className="font-semibold text-navy-800 tabular-nums">{formatNumber(points[active][s.id])}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

import Icon from '@/components/ui/Icon'
import Sparkline from '@/components/dashboard/ui/Sparkline'
import { formatCompact, formatDelta, formatNumber } from '@/utils/format'
import { cn } from '@/utils/cn'

/**
 * label · value · delta · trend.
 *
 * The delta colour is direction × whether up is good — fees pending falling is
 * green, not red — and it always carries an arrow icon, so it never depends on
 * colour alone. Values use proportional figures: `tabular-nums` would make a
 * large number look loose.
 */
export default function StatCard({ stat }) {
  const { label, value, prefix, suffix, compact, delta, deltaLabel, goodWhenUp = true, icon, trend } = stat

  const up = delta > 0
  const positive = delta === 0 ? null : up === goodWhenUp

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-navy-100 bg-white p-5 shadow-card transition-shadow duration-200 hover:shadow-soft">
      <div className="flex items-start justify-between gap-3">
        <p className="text-sm font-medium text-navy-500">{label}</p>
        <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-xl bg-navy-50 text-navy-600">
          <Icon name={icon} className="size-[18px]" />
        </span>
      </div>

      <div className="mt-3 flex items-end justify-between gap-3">
        <p className="text-3xl leading-none font-bold text-navy-800 sm:text-[2rem]">
          {prefix}
          {compact ? formatCompact(value) : formatNumber(value)}
          {suffix && <span className="text-2xl font-semibold text-navy-500">{suffix}</span>}
        </p>
        {trend && <Sparkline data={trend} />}
      </div>

      {delta !== undefined && (
        <p className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs">
          <span
            className={cn(
              'inline-flex items-center gap-1 rounded-full px-2 py-1 font-semibold',
              positive === null && 'bg-navy-50 text-navy-500',
              positive === true && 'bg-leaf-50 text-leaf-700',
              positive === false && 'bg-red-50 text-red-700',
            )}
          >
            <Icon name={up ? 'trendUp' : 'trendDown'} className="size-3.5" />
            {formatDelta(delta)}
          </span>
          <span className="text-navy-400">{deltaLabel}</span>
        </p>
      )}
    </article>
  )
}

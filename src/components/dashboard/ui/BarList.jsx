import { formatNumber } from '@/utils/format'
import { cn } from '@/utils/cn'

/**
 * Single-series horizontal bars — one measure across nominal categories, so
 * every bar wears the same hue. (Shading bars darker-where-bigger would encode
 * the length twice and say nothing new.)
 *
 * The value sits in its own column at the tip, which means it can never be
 * clipped by a short bar.
 */
export default function BarList({ items, color = '#5269ab', valueSuffix, className }) {
  const max = Math.max(...items.map((i) => i.value), 1)

  return (
    <ul className={cn('flex flex-col gap-3.5', className)}>
      {items.map((item) => (
        <li key={item.label} className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-3 gap-y-1.5">
          <p className="truncate text-sm font-medium text-navy-700" title={item.label}>
            {item.label}
          </p>
          <p className="text-sm font-semibold text-navy-800 tabular-nums">
            {formatNumber(item.value)}
            {valueSuffix}
          </p>

          <div className="col-span-2 h-2 w-full overflow-hidden rounded-full bg-navy-50">
            <div
              className="h-full rounded-r-[4px] transition-[width] duration-500 ease-out"
              style={{ width: `${Math.max((item.value / max) * 100, 2)}%`, backgroundColor: color }}
            />
          </div>
        </li>
      ))}
    </ul>
  )
}

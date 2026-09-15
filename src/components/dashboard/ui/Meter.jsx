import { cn } from '@/utils/cn'

/**
 * Progress meter. The unfilled track is a lighter step of the fill's own ramp
 * (green-on-green), so the state reads across the whole bar rather than only
 * where it is filled.
 */
const RAMPS = {
  leaf: { fill: 'bg-leaf-500', track: 'bg-leaf-100' },
  navy: { fill: 'bg-navy-500', track: 'bg-navy-100' },
  gold: { fill: 'bg-gold-500', track: 'bg-gold-100' },
  red: { fill: 'bg-red-500', track: 'bg-red-100' },
}

export default function Meter({ value, max = 100, ramp = 'leaf', size = 'md', className }) {
  const pct = Math.min(Math.max((value / max) * 100, 0), 100)
  const { fill, track } = RAMPS[ramp] ?? RAMPS.leaf

  return (
    <div
      role="progressbar"
      aria-valuenow={Math.round(pct)}
      aria-valuemin={0}
      aria-valuemax={100}
      className={cn('w-full overflow-hidden rounded-full', track, size === 'sm' ? 'h-1.5' : 'h-2.5', className)}
    >
      <div
        className={cn('h-full rounded-r-[4px] transition-[width] duration-500 ease-out', fill)}
        style={{ width: `${pct}%` }}
      />
    </div>
  )
}

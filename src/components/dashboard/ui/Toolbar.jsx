import Icon from '@/components/ui/Icon'
import { cn } from '@/utils/cn'

/**
 * One filter row above the content it scopes — never a filter tucked inside an
 * individual card, which leaves two cards showing different slices of the data.
 */
export function SearchInput({ value, onChange, placeholder = 'Search…', className }) {
  return (
    <div className={cn('relative min-w-0 flex-1 sm:max-w-xs', className)}>
      <Icon name="search" className="pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-navy-300" />
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-label={placeholder}
        className="h-11 w-full rounded-xl border border-navy-100 bg-white pr-3 pl-10 text-sm text-navy-800 placeholder:text-navy-300 focus:border-navy-300 focus:outline-none"
      />
    </div>
  )
}

export function FilterChips({ options, value, onChange, label = 'Filter' }) {
  return (
    <div className="flex flex-wrap items-center gap-2" role="group" aria-label={label}>
      {options.map((opt) => {
        const selected = value === opt
        return (
          <button
            key={opt}
            type="button"
            onClick={() => onChange(opt)}
            aria-pressed={selected}
            className={cn(
              'h-9 rounded-full border px-3.5 text-xs font-semibold transition-colors',
              selected
                ? 'border-navy-700 bg-navy-700 text-white'
                : 'border-navy-100 bg-white text-navy-600 hover:border-navy-300 hover:bg-navy-50',
            )}
          >
            {opt}
          </button>
        )
      })}
    </div>
  )
}

export default function Toolbar({ children, className }) {
  return <div className={cn('flex flex-wrap items-center gap-3', className)}>{children}</div>
}

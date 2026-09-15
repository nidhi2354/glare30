import { cn } from '@/utils/cn'

/**
 * The one card surface every dashboard block sits on.
 * `action` renders on the right of the header (a link, a toggle, a menu).
 */
export default function Panel({ title, subtitle, action, padded = true, className, bodyClassName, children }) {
  return (
    <section
      className={cn(
        'flex min-w-0 flex-col rounded-2xl border border-navy-100 bg-white shadow-card',
        className,
      )}
    >
      {(title || action) && (
        <header className="flex flex-wrap items-center justify-between gap-3 border-b border-navy-50 px-5 py-4 sm:px-6">
          <div className="min-w-0">
            {title && <h2 className="truncate text-base font-bold text-navy-800">{title}</h2>}
            {subtitle && <p className="mt-0.5 truncate text-sm text-navy-400">{subtitle}</p>}
          </div>
          {action && <div className="shrink-0">{action}</div>}
        </header>
      )}

      <div className={cn('flex-1', padded && 'p-5 sm:p-6', bodyClassName)}>{children}</div>
    </section>
  )
}

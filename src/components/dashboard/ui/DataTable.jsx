import Icon from '@/components/ui/Icon'
import { cn } from '@/utils/cn'

/**
 * One table for every list page.
 *
 * columns: [{ key, header, align, width, render(row), cellClassName, headerOnly }]
 * The wrapper scrolls horizontally on small screens rather than squeezing
 * columns until the text wraps to three lines.
 */
export default function DataTable({ columns, rows, getRowKey = (r) => r.id, empty, caption }) {
  if (!rows.length) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 px-6 py-16 text-center">
        <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-navy-50 text-navy-400">
          <Icon name="search" className="size-6" />
        </span>
        <p className="text-sm font-semibold text-navy-700">{empty?.title ?? 'Nothing to show'}</p>
        {empty?.description && <p className="max-w-xs text-sm text-navy-400">{empty.description}</p>}
      </div>
    )
  }

  return (
    // `relative` matters: absolutely positioned cell content (the sr-only
    // labels on the status selects) is only clipped by a scroll container that
    // is also its containing block. Without it they escape and drag the page
    // into a horizontal scroll on mobile.
    <div className="relative overflow-x-auto">
      <table className="w-full min-w-[46rem] border-collapse text-left text-sm">
        {caption && <caption className="sr-only">{caption}</caption>}

        <thead>
          <tr className="border-b border-navy-100">
            {columns.map((col) => (
              <th
                key={col.key}
                scope="col"
                style={col.width ? { width: col.width } : undefined}
                className={cn(
                  'px-5 py-3 text-xs font-semibold tracking-wider text-navy-400 uppercase whitespace-nowrap',
                  col.align === 'right' && 'text-right',
                  col.align === 'center' && 'text-center',
                )}
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {rows.map((row) => (
            <tr key={getRowKey(row)} className="border-b border-navy-50 transition-colors last:border-0 hover:bg-navy-50/60">
              {columns.map((col) => (
                <td
                  key={col.key}
                  className={cn(
                    'px-5 py-3.5 align-middle text-navy-600',
                    col.align === 'right' && 'text-right',
                    col.align === 'center' && 'text-center',
                    col.cellClassName,
                  )}
                >
                  {col.render ? col.render(row) : row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

import { useMemo, useState } from 'react'
import { STATUS_TONE, TONE_CLASSES } from '@/components/dashboard/ui/statusTone'
import DataTable from '@/components/dashboard/ui/DataTable'
import PageHeader from '@/components/dashboard/ui/PageHeader'
import Panel from '@/components/dashboard/ui/Panel'
import Toolbar, { FilterChips, SearchInput } from '@/components/dashboard/ui/Toolbar'
import { useSeo } from '@/hooks/useSeo'
import { enquiries as seed, enquiryStatuses } from '@/data/dashboard'
import { cn } from '@/utils/cn'

const FILTERS = ['All', ...enquiryStatuses]

export default function Enquiries() {
  useSeo({ title: 'Enquiries · Admin' })

  // Held in state so the status dropdown actually works. It is local only —
  // nothing persists until there is an API to PATCH.
  const [rows, setRows] = useState(seed)
  const [query, setQuery] = useState('')
  const [status, setStatus] = useState('All')

  const setStatusOf = (id, next) => setRows((prev) => prev.map((r) => (r.id === id ? { ...r, status: next } : r)))

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return rows.filter(
      (r) =>
        (status === 'All' || r.status === status) &&
        (!q || `${r.name} ${r.id} ${r.className} ${r.phone} ${r.source}`.toLowerCase().includes(q)),
    )
  }, [rows, query, status])

  const counts = useMemo(
    () => enquiryStatuses.map((s) => ({ status: s, count: rows.filter((r) => r.status === s).length })),
    [rows],
  )

  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title="Enquiries"
        description="Every enquiry from the website form, WhatsApp, referrals and walk-ins."
      />

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {counts.map(({ status: s, count }) => (
          <button
            key={s}
            type="button"
            onClick={() => setStatus(status === s ? 'All' : s)}
            aria-pressed={status === s}
            className={cn(
              'rounded-2xl border bg-white p-4 text-left transition-colors',
              status === s ? 'border-navy-700 ring-1 ring-navy-700' : 'border-navy-100 hover:border-navy-300',
            )}
          >
            <span className="block text-2xl font-bold text-navy-800 tabular-nums">{count}</span>
            <span className="mt-1 flex items-center gap-1.5 text-xs font-semibold text-navy-500">
              <span className={cn('size-1.5 rounded-full', STATUS_TONE[s] === 'good' ? 'bg-leaf-500' : 'bg-navy-300')} />
              {s}
            </span>
          </button>
        ))}
      </div>

      <Panel
        padded={false}
        title={`${filtered.length} ${filtered.length === 1 ? 'enquiry' : 'enquiries'}`}
        subtitle="Changing a status here updates this screen only — it will save once the admin API is connected."
      >
        <Toolbar className="border-b border-navy-50 px-5 py-4 sm:px-6">
          <SearchInput value={query} onChange={setQuery} placeholder="Search name, phone or ID…" />
          <FilterChips options={FILTERS} value={status} onChange={setStatus} label="Filter by status" />
        </Toolbar>

        <DataTable
          caption="Enquiry list"
          rows={filtered}
          empty={{ title: 'No enquiries match', description: 'Try a different search term or clear the status filter.' }}
          columns={[
            {
              key: 'name',
              header: 'Student',
              render: (row) => (
                <span className="block">
                  <span className="block font-semibold text-navy-800">{row.name}</span>
                  <span className="block text-xs text-navy-400">{row.id}</span>
                </span>
              ),
            },
            { key: 'className', header: 'Class' },
            { key: 'phone', header: 'Phone', cellClassName: 'tabular-nums' },
            { key: 'source', header: 'Source' },
            { key: 'date', header: 'Received', cellClassName: 'whitespace-nowrap' },
            {
              key: 'status',
              header: 'Status',
              align: 'right',
              // One control rather than a badge plus a dropdown saying the same
              // thing: the select is tinted with the status tone, so it reads at
              // a glance and is still the thing you change.
              render: (row) => (
                <>
                  <label className="sr-only" htmlFor={`status-${row.id}`}>
                    Status for {row.name}
                  </label>
                  <select
                    id={`status-${row.id}`}
                    value={row.status}
                    onChange={(e) => setStatusOf(row.id, e.target.value)}
                    className={cn(
                      'h-9 rounded-full px-3 text-xs font-semibold ring-1 ring-inset transition-shadow focus:outline-none',
                      'focus-visible:ring-2 focus-visible:ring-navy-400',
                      TONE_CLASSES[STATUS_TONE[row.status]] ?? TONE_CLASSES.neutral,
                    )}
                  >
                    {enquiryStatuses.map((s) => (
                      <option key={s} value={s} className="bg-white text-navy-700">
                        {s}
                      </option>
                    ))}
                  </select>
                </>
              ),
            },
          ]}
        />
      </Panel>
    </div>
  )
}

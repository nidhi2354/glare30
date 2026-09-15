import { useMemo, useState } from 'react'
import Badge from '@/components/dashboard/ui/Badge'
import { STATUS_TONE } from '@/components/dashboard/ui/statusTone'
import DataTable from '@/components/dashboard/ui/DataTable'
import Meter from '@/components/dashboard/ui/Meter'
import PageHeader from '@/components/dashboard/ui/PageHeader'
import Panel from '@/components/dashboard/ui/Panel'
import Toolbar, { FilterChips, SearchInput } from '@/components/dashboard/ui/Toolbar'
import { useSeo } from '@/hooks/useSeo'
import { feeRecords, feeSummary } from '@/data/dashboard'
import { formatCurrency } from '@/utils/format'

const STATUSES = ['All', 'Paid', 'Pending', 'Overdue']

const SUMMARY = [
  { key: 'collected', label: 'Collected this month', tone: 'good', ramp: 'leaf' },
  { key: 'pending', label: 'Pending', tone: 'warning', ramp: 'gold' },
  { key: 'overdue', label: 'Overdue', tone: 'critical', ramp: 'red' },
]

export default function Fees() {
  useSeo({ title: 'Fees · Admin' })

  const [query, setQuery] = useState('')
  const [status, setStatus] = useState('All')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return feeRecords.filter(
      (r) =>
        (status === 'All' || r.status === status) &&
        (!q || `${r.student} ${r.id} ${r.batch}`.toLowerCase().includes(q)),
    )
  }, [query, status])

  const filteredTotal = filtered.reduce((sum, r) => sum + (r.amount - r.paid), 0)

  return (
    <div className="flex flex-col gap-6">
      <PageHeader title="Fees" description="Invoices for the current month, with what is still outstanding." />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {SUMMARY.map((item) => (
          <Panel key={item.key}>
            <p className="text-sm font-medium text-navy-500">{item.label}</p>
            <p className="mt-2 text-3xl leading-none font-bold text-navy-800">
              {formatCurrency(feeSummary[item.key], { compact: true })}
            </p>
            <Meter
              value={feeSummary[item.key]}
              max={feeSummary.target}
              ramp={item.ramp}
              size="sm"
              className="mt-4"
            />
            <p className="mt-2 text-xs text-navy-400">
              {Math.round((feeSummary[item.key] / feeSummary.target) * 100)}% of{' '}
              {formatCurrency(feeSummary.target, { compact: true })} expected
            </p>
          </Panel>
        ))}
      </div>

      <Panel
        padded={false}
        title={`${filtered.length} ${filtered.length === 1 ? 'invoice' : 'invoices'}`}
        subtitle={`${formatCurrency(filteredTotal)} outstanding in this view`}
      >
        <Toolbar className="border-b border-navy-50 px-5 py-4 sm:px-6">
          <SearchInput value={query} onChange={setQuery} placeholder="Search student or invoice…" />
          <FilterChips options={STATUSES} value={status} onChange={setStatus} label="Filter by payment status" />
        </Toolbar>

        <DataTable
          caption="Fee invoices"
          rows={filtered}
          empty={{ title: 'No invoices match', description: 'Try another student name or clear the status filter.' }}
          columns={[
            {
              key: 'student',
              header: 'Student',
              render: (row) => (
                <span className="block">
                  <span className="block font-semibold text-navy-800">{row.student}</span>
                  <span className="block text-xs text-navy-400">
                    {row.id} · {row.batch}
                  </span>
                </span>
              ),
            },
            {
              key: 'amount',
              header: 'Invoice',
              align: 'right',
              cellClassName: 'tabular-nums whitespace-nowrap',
              render: (row) => formatCurrency(row.amount),
            },
            {
              key: 'paid',
              header: 'Paid',
              align: 'right',
              cellClassName: 'tabular-nums whitespace-nowrap',
              render: (row) => formatCurrency(row.paid),
            },
            {
              key: 'balance',
              header: 'Balance',
              align: 'right',
              cellClassName: 'tabular-nums whitespace-nowrap',
              render: (row) => (
                <span className={row.amount - row.paid > 0 ? 'font-semibold text-navy-800' : 'text-navy-400'}>
                  {formatCurrency(row.amount - row.paid)}
                </span>
              ),
            },
            { key: 'due', header: 'Due date', cellClassName: 'whitespace-nowrap' },
            { key: 'mode', header: 'Mode' },
            {
              key: 'status',
              header: 'Status',
              align: 'right',
              render: (row) => <Badge tone={STATUS_TONE[row.status]}>{row.status}</Badge>,
            },
          ]}
        />
      </Panel>
    </div>
  )
}

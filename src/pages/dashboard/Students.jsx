import { useMemo, useState } from 'react'
import Badge from '@/components/dashboard/ui/Badge'
import { STATUS_TONE } from '@/components/dashboard/ui/statusTone'
import DataTable from '@/components/dashboard/ui/DataTable'
import Meter from '@/components/dashboard/ui/Meter'
import PageHeader from '@/components/dashboard/ui/PageHeader'
import Panel from '@/components/dashboard/ui/Panel'
import Toolbar, { FilterChips, SearchInput } from '@/components/dashboard/ui/Toolbar'
import { useSeo } from '@/hooks/useSeo'
import { students } from '@/data/dashboard'
import { initialsOf } from '@/utils/format'

const GROUPS = ['All', 'Class 6 – 8', 'Class 9 – 10', 'Class 11 – 12']

/** Attendance below 80% is the number a coordinator is actually looking for. */
const attendanceRamp = (pct) => (pct >= 90 ? 'leaf' : pct >= 80 ? 'gold' : 'red')

const groupOf = (className) => {
  const n = Number(className.match(/\d+/)?.[0])
  if (n <= 8) return 'Class 6 – 8'
  if (n <= 10) return 'Class 9 – 10'
  return 'Class 11 – 12'
}

export default function Students() {
  useSeo({ title: 'Students · Admin' })

  const [query, setQuery] = useState('')
  const [group, setGroup] = useState('All')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return students.filter(
      (s) =>
        (group === 'All' || groupOf(s.className) === group) &&
        (!q || `${s.name} ${s.id} ${s.className} ${s.batch} ${s.phone}`.toLowerCase().includes(q)),
    )
  }, [query, group])

  return (
    <div className="flex flex-col gap-6">
      <PageHeader title="Students" description="Enrolled students, their batch, attendance and fee status." />

      <Panel padded={false} title={`${filtered.length} of ${students.length} students`}>
        <Toolbar className="border-b border-navy-50 px-5 py-4 sm:px-6">
          <SearchInput value={query} onChange={setQuery} placeholder="Search name, ID or batch…" />
          <FilterChips options={GROUPS} value={group} onChange={setGroup} label="Filter by class group" />
        </Toolbar>

        <DataTable
          caption="Student list"
          rows={filtered}
          empty={{ title: 'No students match', description: 'Try another name, ID or class group.' }}
          columns={[
            {
              key: 'name',
              header: 'Student',
              render: (row) => (
                <span className="flex items-center gap-3">
                  <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-navy-50 text-xs font-bold text-navy-600">
                    {initialsOf(row.name)}
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate font-semibold text-navy-800">{row.name}</span>
                    <span className="block text-xs text-navy-400">
                      {row.id} · joined {row.joined}
                    </span>
                  </span>
                </span>
              ),
            },
            { key: 'className', header: 'Class' },
            { key: 'batch', header: 'Batch' },
            { key: 'phone', header: 'Phone', cellClassName: 'tabular-nums' },
            {
              key: 'attendance',
              header: 'Attendance',
              width: '9.5rem',
              render: (row) => (
                <span className="block">
                  <span className="mb-1.5 block text-xs font-semibold text-navy-700 tabular-nums">{row.attendance}%</span>
                  <Meter value={row.attendance} size="sm" ramp={attendanceRamp(row.attendance)} />
                </span>
              ),
            },
            {
              key: 'feeStatus',
              header: 'Fees',
              align: 'right',
              render: (row) => <Badge tone={STATUS_TONE[row.feeStatus]}>{row.feeStatus}</Badge>,
            },
          ]}
        />
      </Panel>
    </div>
  )
}

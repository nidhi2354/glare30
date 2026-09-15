import { Link } from 'react-router-dom'
import Icon from '@/components/ui/Icon'
import Badge from '@/components/dashboard/ui/Badge'
import { STATUS_TONE } from '@/components/dashboard/ui/statusTone'
import BarList from '@/components/dashboard/ui/BarList'
import DataTable from '@/components/dashboard/ui/DataTable'
import Meter from '@/components/dashboard/ui/Meter'
import PageHeader from '@/components/dashboard/ui/PageHeader'
import Panel from '@/components/dashboard/ui/Panel'
import StatCard from '@/components/dashboard/ui/StatCard'
import TrendChart from '@/components/dashboard/ui/TrendChart'
import { useSeo } from '@/hooks/useSeo'
import { batchStrength, dashboardMeta, enquiries, enquiryTrend, feeSummary, kpis, todaySchedule } from '@/data/dashboard'
import { formatCurrency, isTodo } from '@/utils/format'

const SCHEDULE_LABEL = { done: 'Done', live: 'In class', upcoming: 'Upcoming' }

function ViewAll({ to, children }) {
  return (
    <Link to={to} className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy-600 hover:text-navy-800">
      {children}
      <Icon name="arrowRight" className="size-4" />
    </Link>
  )
}

export default function Overview() {
  useSeo({ title: 'Admin Dashboard' })

  const collectedPct = Math.round((feeSummary.collected / feeSummary.target) * 100)

  return (
    <div className="flex flex-col gap-6">
      <PageHeader title="Overview" description={`Academic session ${dashboardMeta.session} · updated ${dashboardMeta.updatedAt}`}>
        <ViewAll to="/admin/enquiries">Go to enquiries</ViewAll>
      </PageHeader>

      {dashboardMeta.isDemo && (
        <div className="flex items-start gap-3 rounded-2xl border border-gold-200 bg-gold-50 p-4">
          <Icon name="alert" className="mt-0.5 size-5 shrink-0 text-gold-700" />
          <p className="text-sm leading-relaxed text-navy-700">
            <span className="font-bold">Demo data.</span> No admin API is connected yet, so every figure on these pages is
            sample data for layout purposes — not the institute&apos;s real students, fees or attendance. Replace the exports in{' '}
            <code className="rounded bg-white/70 px-1.5 py-0.5 font-mono text-[0.8125rem] text-navy-800">src/data/dashboard.js</code>{' '}
            and set <code className="rounded bg-white/70 px-1.5 py-0.5 font-mono text-[0.8125rem] text-navy-800">isDemo: false</code>{' '}
            to remove this notice.
          </p>
        </div>
      )}

      {/* KPI row */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {kpis.map((stat) => (
          <StatCard key={stat.id} stat={stat} />
        ))}
      </div>

      {/* Trend + fees */}
      <div className="grid grid-cols-1 gap-4 xl:grid-cols-3">
        <Panel
          className="xl:col-span-2"
          title="Enquiries and admissions"
          subtitle="Last 8 months"
        >
          <TrendChart
            series={enquiryTrend.series}
            points={enquiryTrend.points}
            title="Enquiries and admissions over the last 8 months"
          />
        </Panel>

        <Panel title="Fee collection" subtitle="This month">
          <p className="text-3xl leading-none font-bold text-navy-800">{formatCurrency(feeSummary.collected, { compact: true })}</p>
          <p className="mt-1.5 text-sm text-navy-400">
            collected of {formatCurrency(feeSummary.target, { compact: true })} expected
          </p>

          <Meter value={feeSummary.collected} max={feeSummary.target} className="mt-4" />
          <p className="mt-2 text-xs font-semibold text-leaf-700">{collectedPct}% of the month&apos;s target</p>

          <dl className="mt-6 flex flex-col gap-4 border-t border-navy-50 pt-5">
            {[
              { label: 'Collected', value: feeSummary.collected, tone: 'good' },
              { label: 'Pending', value: feeSummary.pending, tone: 'warning' },
              { label: 'Overdue', value: feeSummary.overdue, tone: 'critical' },
            ].map((row) => (
              <div key={row.label} className="flex items-center justify-between gap-3">
                <dt className="flex items-center gap-2 text-sm text-navy-600">
                  <Badge tone={row.tone}>{row.label}</Badge>
                </dt>
                <dd className="text-sm font-semibold text-navy-800 tabular-nums">{formatCurrency(row.value)}</dd>
              </div>
            ))}
          </dl>

          <Link
            to="/admin/fees"
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-600 hover:text-navy-800"
          >
            Open fee records
            <Icon name="arrowRight" className="size-4" />
          </Link>
        </Panel>
      </div>

      {/* Schedule + batch strength */}
      <div className="grid grid-cols-1 gap-4 xl:grid-cols-3">
        <Panel
          className="xl:col-span-2"
          title="Today's classes"
          subtitle="Mon – Sat timetable"
          padded={false}
          action={<ViewAll to="/admin/batches">All batches</ViewAll>}
        >
          <ul className="divide-y divide-navy-50">
            {todaySchedule.map((slot) => (
              <li key={`${slot.time}-${slot.batch}`} className="flex flex-wrap items-center gap-x-4 gap-y-2 px-5 py-3.5 sm:px-6">
                <span className="w-20 shrink-0 text-sm font-semibold text-navy-800 tabular-nums">{slot.time}</span>

                <span className="min-w-0 flex-1">
                  <span className="block truncate text-sm font-semibold text-navy-700">{slot.subject}</span>
                  <span className="block truncate text-xs text-navy-400">
                    {slot.batch}
                    {!isTodo(slot.faculty) && ` · ${slot.faculty}`}
                  </span>
                </span>

                <span className="hidden text-xs font-medium text-navy-400 sm:block">{slot.room}</span>
                <Badge tone={STATUS_TONE[slot.status]}>{SCHEDULE_LABEL[slot.status]}</Badge>
              </li>
            ))}
          </ul>
        </Panel>

        <Panel title="Students per batch" subtitle="Current strength">
          <BarList items={batchStrength} />
        </Panel>
      </div>

      {/* Recent enquiries */}
      <Panel
        title="Recent enquiries"
        subtitle="From the website form, WhatsApp and walk-ins"
        padded={false}
        action={<ViewAll to="/admin/enquiries">View all</ViewAll>}
      >
        <DataTable
          caption="The six most recent enquiries"
          rows={enquiries.slice(0, 6)}
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
              render: (row) => <Badge tone={STATUS_TONE[row.status]}>{row.status}</Badge>,
            },
          ]}
        />
      </Panel>
    </div>
  )
}

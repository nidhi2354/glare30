import { useMemo, useState } from 'react'
import Icon from '@/components/ui/Icon'
import Badge from '@/components/dashboard/ui/Badge'
import Meter from '@/components/dashboard/ui/Meter'
import PageHeader from '@/components/dashboard/ui/PageHeader'
import Panel from '@/components/dashboard/ui/Panel'
import Toolbar, { FilterChips } from '@/components/dashboard/ui/Toolbar'
import { useSeo } from '@/hooks/useSeo'
import { batches } from '@/data/dashboard'
import { isTodo } from '@/utils/format'

const PROGRAMS = ['All', 'Foundation', 'Board', 'Senior']

/** A batch at 90%+ of capacity is the one that needs a second section opened. */
const fillRamp = (pct) => (pct >= 90 ? 'red' : pct >= 75 ? 'gold' : 'leaf')

export default function Batches() {
  useSeo({ title: 'Batches · Admin' })

  const [program, setProgram] = useState('All')

  const filtered = useMemo(
    () => batches.filter((b) => program === 'All' || b.program === program),
    [program],
  )

  const totals = useMemo(
    () => ({
      students: batches.reduce((sum, b) => sum + b.students, 0),
      seats: batches.reduce((sum, b) => sum + b.capacity, 0),
    }),
    [],
  )

  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title="Batches"
        description={`${batches.length} running batches · ${totals.students} of ${totals.seats} seats filled`}
      />

      <Toolbar>
        <FilterChips options={PROGRAMS} value={program} onChange={setProgram} label="Filter by program" />
      </Toolbar>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((batch) => {
          const pct = Math.round((batch.students / batch.capacity) * 100)
          const seatsLeft = batch.capacity - batch.students

          return (
            <Panel key={batch.id} className="h-full">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <h2 className="truncate text-base font-bold text-navy-800">{batch.name}</h2>
                  <p className="mt-0.5 text-xs text-navy-400">
                    {batch.id} · {batch.program}
                  </p>
                </div>
                <Badge tone={seatsLeft <= 2 ? 'critical' : seatsLeft <= 6 ? 'warning' : 'good'}>
                  {seatsLeft === 0 ? 'Full' : `${seatsLeft} seat${seatsLeft === 1 ? '' : 's'} left`}
                </Badge>
              </div>

              <div className="mt-5">
                <div className="flex items-end justify-between gap-3">
                  <p className="text-2xl leading-none font-bold text-navy-800">
                    {batch.students}
                    <span className="text-base font-semibold text-navy-400"> / {batch.capacity}</span>
                  </p>
                  <p className="text-xs font-semibold text-navy-500 tabular-nums">{pct}% full</p>
                </div>
                <Meter value={batch.students} max={batch.capacity} ramp={fillRamp(pct)} className="mt-2.5" />
              </div>

              <dl className="mt-5 flex flex-col gap-3 border-t border-navy-50 pt-4 text-sm">
                <div className="flex items-center gap-2.5">
                  <Icon name="calendar" className="size-4 shrink-0 text-navy-300" />
                  <dt className="sr-only">Days</dt>
                  <dd className="text-navy-600">{batch.days}</dd>
                </div>
                <div className="flex items-center gap-2.5">
                  <Icon name="clock" className="size-4 shrink-0 text-navy-300" />
                  <dt className="sr-only">Timing</dt>
                  <dd className="text-navy-600">{batch.time}</dd>
                </div>
                <div className="flex items-center gap-2.5">
                  <Icon name="home" className="size-4 shrink-0 text-navy-300" />
                  <dt className="sr-only">Room</dt>
                  <dd className="text-navy-600">{batch.room}</dd>
                </div>
                {/* Faculty names are still a TODO from the client, so the row is
                    skipped rather than printing a placeholder. */}
                {!isTodo(batch.faculty) && (
                  <div className="flex items-center gap-2.5">
                    <Icon name="users" className="size-4 shrink-0 text-navy-300" />
                    <dt className="sr-only">Faculty</dt>
                    <dd className="text-navy-600">{batch.faculty}</dd>
                  </div>
                )}
              </dl>
            </Panel>
          )
        })}
      </div>
    </div>
  )
}

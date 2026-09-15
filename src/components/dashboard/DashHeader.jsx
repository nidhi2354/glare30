import Icon from '@/components/ui/Icon'
import { adminUser, dashboardMeta } from '@/data/dashboard'

export default function DashHeader({ onOpenNav }) {
  return (
    <header className="sticky top-0 z-30 border-b border-navy-100 bg-white/90 backdrop-blur-xl">
      <div className="flex h-16 items-center gap-3 px-4 sm:px-6 lg:h-18 lg:px-8">
        <button
          type="button"
          onClick={onOpenNav}
          aria-label="Open navigation"
          className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl border border-navy-100 text-navy-700 transition-colors hover:bg-navy-50 lg:hidden"
        >
          <Icon name="menu" className="size-5" />
        </button>

        <div className="relative hidden min-w-0 flex-1 md:block md:max-w-sm">
          <Icon name="search" className="pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-navy-300" />
          <input
            type="search"
            placeholder="Search students, batches, invoices…"
            aria-label="Search the dashboard"
            className="h-11 w-full rounded-xl border border-navy-100 bg-navy-50/60 pr-3 pl-10 text-sm text-navy-800 placeholder:text-navy-300 focus:border-navy-300 focus:bg-white focus:outline-none"
          />
        </div>

        <div className="ml-auto flex items-center gap-2 sm:gap-3">
          {dashboardMeta.isDemo && (
            <span
              className="hidden items-center gap-1.5 rounded-full bg-gold-50 px-3 py-1.5 text-xs font-bold text-gold-700 ring-1 ring-gold-200 ring-inset sm:inline-flex"
              title="Sample figures — the institute's real data is not connected yet"
            >
              <Icon name="alert" className="size-3.5" />
              Demo data
            </span>
          )}

          <span className="hidden rounded-full bg-navy-50 px-3 py-1.5 text-xs font-semibold text-navy-600 lg:inline-flex">
            Session {dashboardMeta.session}
          </span>

          <button
            type="button"
            aria-label="Notifications"
            className="relative inline-flex size-10 items-center justify-center rounded-xl border border-navy-100 text-navy-600 transition-colors hover:bg-navy-50"
          >
            <Icon name="bell" className="size-5" />
            <span className="absolute top-2 right-2.5 size-2 rounded-full bg-leaf-500 ring-2 ring-white" />
          </button>

          <div className="flex items-center gap-2.5 rounded-xl border border-navy-100 py-1.5 pr-3 pl-1.5">
            <span className="inline-flex size-8 items-center justify-center rounded-lg bg-navy-700 text-xs font-bold text-white">
              {adminUser.initials}
            </span>
            <span className="hidden leading-tight sm:block">
              <span className="block text-sm font-semibold text-navy-800">{adminUser.name}</span>
              <span className="block text-[11px] text-navy-400">{adminUser.role}</span>
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}

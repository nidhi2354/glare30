import { Link, NavLink } from 'react-router-dom'
import Icon from '@/components/ui/Icon'
import Logo from '@/components/ui/Logo'
import { dashNav } from '@/data/dashboard'
import { contact } from '@/data/site'
import { cn } from '@/utils/cn'

function NavItem({ item, onNavigate }) {
  return (
    <li>
      <NavLink
        to={item.to}
        end={item.end}
        onClick={onNavigate}
        className={({ isActive }) =>
          cn(
            'group relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold transition-colors',
            isActive ? 'bg-white/10 text-white' : 'text-navy-200 hover:bg-white/5 hover:text-white',
          )
        }
      >
        {({ isActive }) => (
          <>
            {/* The active marker is a shape, not just a colour change */}
            <span
              className={cn(
                'absolute top-1/2 left-0 h-6 w-1 -translate-y-1/2 rounded-r-full bg-gold-300 transition-transform duration-200',
                isActive ? 'scale-y-100' : 'scale-y-0',
              )}
            />
            <Icon name={item.icon} className={cn('size-5 shrink-0', isActive ? 'text-gold-300' : 'text-navy-300')} />
            <span className="flex-1 truncate">{item.label}</span>
            {item.badge ? (
              <span className="inline-flex min-w-6 items-center justify-center rounded-full bg-gold-300 px-1.5 py-0.5 text-[11px] font-bold text-navy-800 tabular-nums">
                {item.badge}
              </span>
            ) : null}
          </>
        )}
      </NavLink>
    </li>
  )
}

/** Sidebar body — rendered twice: fixed on desktop, inside the drawer on mobile. */
export default function DashSidebar({ onNavigate }) {
  return (
    <div className="flex h-full flex-col bg-navy-800">
      <div className="flex h-16 shrink-0 items-center border-b border-white/10 px-5 lg:h-18">
        <Logo size="sm" light />
      </div>

      <nav aria-label="Dashboard" className="flex-1 overflow-y-auto px-3 py-5">
        <p className="px-3 pb-2 text-[11px] font-bold tracking-[0.18em] text-navy-300 uppercase">Manage</p>
        <ul className="flex flex-col gap-1">
          {dashNav.map((item) => (
            <NavItem key={item.to} item={item} onNavigate={onNavigate} />
          ))}
        </ul>
      </nav>

      <div className="shrink-0 border-t border-white/10 p-3">
        <div className="rounded-xl bg-white/5 p-4">
          <p className="text-sm font-semibold text-white">Need the public site?</p>
          <p className="mt-1 text-xs leading-relaxed text-navy-200">
            Enquiries submitted on the website land in the Enquiries tab.
          </p>
          <Link
            to="/"
            onClick={onNavigate}
            className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-gold-300 hover:text-gold-200"
          >
            Open website
            <Icon name="arrowRight" className="size-3.5" />
          </Link>
        </div>

        <a
          href={contact.phoneHref}
          className="mt-2 flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-navy-200 transition-colors hover:bg-white/5 hover:text-white"
        >
          <Icon name="phone" className="size-5 shrink-0 text-navy-300" />
          <span className="truncate">{contact.phone}</span>
        </a>
      </div>
    </div>
  )
}

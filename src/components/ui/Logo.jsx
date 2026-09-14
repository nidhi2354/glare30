import { Link } from 'react-router-dom'
import { brand } from '@/data/site'
import { cn } from '@/utils/cn'

const SIZES = {
  sm: 'size-9',
  md: 'size-11',
  lg: 'size-14',
}

export default function Logo({ size = 'md', light = false, showText = true, className }) {
  return (
    <Link to="/" className={cn('group flex items-center gap-2.5 sm:gap-3', className)} aria-label={`${brand.fullName} — home`}>
      <img
        src={brand.logo}
        alt=""
        width="56"
        height="56"
        className={cn(SIZES[size], 'shrink-0 rounded-full transition-transform duration-300 group-hover:scale-105')}
      />

      {showText && (
        <span className="flex flex-col leading-none">
          <span
            className={cn(
              'font-display text-lg font-extrabold tracking-tight sm:text-xl',
              light ? 'text-white' : 'text-navy-800',
            )}
          >
            {brand.name}
            <span className="text-leaf-500">.</span>
          </span>
          <span
            className={cn(
              'mt-1 text-[0.625rem] font-semibold tracking-[0.22em] uppercase sm:text-[0.6875rem]',
              light ? 'text-navy-200' : 'text-navy-400',
            )}
          >
            {brand.suffix}
          </span>
        </span>
      )}
    </Link>
  )
}

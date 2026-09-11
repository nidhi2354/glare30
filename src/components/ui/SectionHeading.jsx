import { cn } from '@/utils/cn'

export default function SectionHeading({ eyebrow, title, accent, description, align = 'center', light = false, className }) {
  const centered = align === 'center'

  return (
    <div className={cn('max-w-2xl', centered && 'mx-auto text-center', className)}>
      {eyebrow && (
        <span
          className={cn(
            'inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold tracking-widest uppercase',
            light ? 'bg-white/10 text-gold-300 ring-1 ring-white/15' : 'bg-navy-50 text-navy-600 ring-1 ring-navy-100',
          )}
        >
          <span className={cn('size-1.5 rounded-full', light ? 'bg-gold-300' : 'bg-leaf-500')} />
          {eyebrow}
        </span>
      )}

      <h2
        className={cn(
          'mt-4 text-3xl leading-[1.15] font-bold sm:text-4xl lg:text-[2.75rem]',
          light ? 'text-white' : 'text-navy-800',
        )}
      >
        {title} {accent && <span className={light ? 'text-gradient-gold' : 'text-leaf-500'}>{accent}</span>}
      </h2>

      {description && (
        <p className={cn('mt-4 text-base leading-relaxed sm:text-lg', light ? 'text-navy-100' : 'text-navy-500')}>
          {description}
        </p>
      )}
    </div>
  )
}

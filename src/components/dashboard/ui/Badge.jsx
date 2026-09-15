import Icon from '@/components/ui/Icon'
import { TONE_CLASSES } from '@/components/dashboard/ui/statusTone'
import { cn } from '@/utils/cn'

/**
 * Status pill. Status colours are reserved for state — they are never reused as
 * chart series colours — and each one ships with a dot or icon, so the meaning
 * never rests on colour alone.
 */
const DOTS = {
  neutral: 'bg-navy-300',
  info: 'bg-navy-400',
  good: 'bg-leaf-500',
  warning: 'bg-gold-500',
  critical: 'bg-red-500',
}

export default function Badge({ tone = 'neutral', icon, dot = true, className, children }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold whitespace-nowrap ring-1 ring-inset',
        TONE_CLASSES[tone] ?? TONE_CLASSES.neutral,
        className,
      )}
    >
      {icon ? (
        <Icon name={icon} className="size-3.5" />
      ) : (
        dot && <span className={cn('size-1.5 shrink-0 rounded-full', DOTS[tone] ?? DOTS.neutral)} />
      )}
      {children}
    </span>
  )
}

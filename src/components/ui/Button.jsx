import { Link } from 'react-router-dom'
import Icon from '@/components/ui/Icon'
import { cn } from '@/utils/cn'

const VARIANTS = {
  primary:
    'bg-gold-300 text-navy-800 hover:bg-gold-200 shadow-soft hover:shadow-glow border border-gold-300 hover:-translate-y-0.5',
  navy: 'bg-navy-700 text-white hover:bg-navy-600 shadow-soft border border-navy-700 hover:-translate-y-0.5',
  green: 'bg-leaf-500 text-white hover:bg-leaf-600 shadow-soft border border-leaf-500 hover:-translate-y-0.5',
  outline: 'border border-navy-200 bg-white text-navy-700 hover:border-navy-400 hover:bg-navy-50',
  ghostLight: 'border border-white/25 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20',
}

const SIZES = {
  sm: 'h-10 px-4 text-sm gap-1.5',
  md: 'h-12 px-5 text-sm sm:text-base gap-2',
  lg: 'h-13 px-6 text-base gap-2 sm:h-14 sm:px-8',
}

export default function Button({
  as,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  className,
  children,
  ...props
}) {
  // `to` → router link, `href` → plain anchor (tel:, mailto:, external), otherwise a button.
  const Tag = as ?? (props.to ? Link : props.href ? 'a' : 'button')

  return (
    <Tag
      className={cn(
        'inline-flex shrink-0 items-center justify-center rounded-full font-semibold whitespace-nowrap',
        'transition-all duration-200 ease-out active:translate-y-0 active:scale-[0.98]',
        'disabled:pointer-events-none disabled:opacity-60',
        VARIANTS[variant],
        SIZES[size],
        className,
      )}
      {...props}
    >
      {icon && iconPosition === 'left' && <Icon name={icon} className="size-5" />}
      {children}
      {icon && iconPosition === 'right' && <Icon name={icon} className="size-5" />}
    </Tag>
  )
}

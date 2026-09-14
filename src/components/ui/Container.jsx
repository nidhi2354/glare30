import { cn } from '@/utils/cn'

/** One shared horizontal gutter for every section — starts at 20px on mobile. */
export default function Container({ as: Tag = 'div', className, children, ...props }) {
  return (
    <Tag className={cn('mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8', className)} {...props}>
      {children}
    </Tag>
  )
}

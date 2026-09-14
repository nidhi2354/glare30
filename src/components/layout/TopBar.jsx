import Icon from '@/components/ui/Icon'
import Container from '@/components/ui/Container'
import { contact } from '@/data/site'

export default function TopBar() {
  return (
    <div className="hidden bg-navy-800 text-navy-100 lg:block">
      <Container className="flex h-10 items-center justify-between text-xs">
        <div className="flex items-center gap-6">
          <a href={contact.phoneHref} className="flex items-center gap-2 transition-colors hover:text-gold-300">
            <Icon name="phone" className="size-3.5" />
            {contact.phone}
          </a>
          <a href={`mailto:${contact.email}`} className="flex items-center gap-2 transition-colors hover:text-gold-300">
            <Icon name="mail" className="size-3.5" />
            {contact.email}
          </a>
        </div>

        <div className="flex items-center gap-2">
          <Icon name="clock" className="size-3.5 text-gold-300" />
          <span>{contact.timings}</span>
        </div>
      </Container>
    </div>
  )
}

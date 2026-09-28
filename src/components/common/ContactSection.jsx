import { useState } from 'react'
import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'
import Icon from '@/components/ui/Icon'
import Reveal from '@/components/ui/Reveal'
import SectionHeading from '@/components/ui/SectionHeading'
import { classOptions, contact } from '@/data/site'
import { createInquiry } from '@/services/inquiryService'
const EMPTY_FORM = {
  name: '',
  mobile: '',
  classStream: '',
  message: ''
}

const DETAILS = [
  { icon: 'phone', label: 'Phone', value: contact.phone, href: contact.phoneHref },
  { icon: 'mail', label: 'Email', value: contact.email, href: `mailto:${contact.email}` },
  { icon: 'mapPin', label: 'Address', value: contact.address, href: contact.mapUrl },
  { icon: 'clock', label: 'Timings', value: contact.timings },
]

const inputClass =
  'w-full rounded-2xl border border-navy-100 bg-navy-50/50 px-4 py-3.5 text-sm text-navy-800 placeholder:text-navy-300 transition-colors outline-none focus:border-leaf-400 focus:bg-white sm:text-base'

export default function ContactSection() {
  const [form, setForm] = useState(EMPTY_FORM)
  const [isSubmitting, setIsSubmitting] = useState(false);


  const update = (field) => (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }))


  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      setIsSubmitting(true)

      const response = await createInquiry(form);

      console.log('Inquiry submitted:', response)

      alert('Thank you! Your enquiry has been submitted successfully.')

      setForm(EMPTY_FORM)
    } catch (error) {
      console.error('Enquiry submission error:', error)

      const message =
        error.response?.data?.message ||
        'Something went wrong. Please try again.'

      alert(message)
    } finally {
      setIsSubmitting(false)
    }
  }
  return (
    <section id="contact" className="scroll-mt-24 bg-navy-50/40 py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow="Admissions Open"
          title="Book your"
          accent="free demo class"
          description="Fill in the form and submit your enquiry — our team will get back to you shortly."
        />

        <div className="mt-12 grid gap-6 sm:mt-14 lg:grid-cols-5 lg:gap-8">
          {/* Info panel */}
          <Reveal className="relative overflow-hidden rounded-3xl bg-navy-800 p-6 sm:p-8 lg:col-span-2">
            <div className="pointer-events-none absolute inset-0 grid-pattern opacity-40" />
            <div className="pointer-events-none absolute -right-16 -bottom-16 size-56 rounded-full bg-leaf-500/20 blur-3xl" />

            <h3 className="relative font-display text-xl font-bold text-white sm:text-2xl">Contact Details</h3>
            <p className="relative mt-2 text-sm leading-relaxed text-navy-200">
              Admissions, fees or batch timings — reach out to us with any question you have.
            </p>

            <ul className="relative mt-8 space-y-5">
              {DETAILS.map((item) => {
                const Tag = item.href ? 'a' : 'div'
                return (
                  <li key={item.label}>
                    <Tag
                      {...(item.href ? { href: item.href, target: item.href.startsWith('http') ? '_blank' : undefined, rel: 'noreferrer' } : {})}
                      className="group flex items-start gap-4"
                    >
                      <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-2xl bg-white/5 text-gold-300 ring-1 ring-white/10 transition-colors group-hover:bg-gold-300 group-hover:text-navy-800">
                        <Icon name={item.icon} className="size-5" />
                      </span>
                      <span className="min-w-0 leading-snug">
                        <span className="block text-xs font-semibold tracking-widest text-navy-300 uppercase">
                          {item.label}
                        </span>
                        <span className="mt-1 block text-sm font-medium break-words text-white sm:text-base">
                          {item.value}
                        </span>
                      </span>
                    </Tag>
                  </li>
                )
              })}
            </ul>

            <Button
              href={`https://wa.me/${contact.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              variant="green"
              size="md"
              icon="whatsapp"
              iconPosition="left"
              className="relative mt-8 w-full"
            >
              Chat on WhatsApp
            </Button>
          </Reveal>

          {/* Form */}
          <Reveal
            delay={120}
            className="rounded-3xl border border-navy-100 bg-white p-6 shadow-card sm:p-8 lg:col-span-3"
          >
            <h3 className="font-display text-xl font-bold text-navy-800 sm:text-2xl">Enquiry Form</h3>
            <p className="mt-2 text-sm text-navy-500">It takes just 30 seconds — we&apos;ll get back to you shortly.</p>

            <form onSubmit={handleSubmit} className="mt-7 grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label htmlFor="name" className="mb-2 block text-sm font-semibold text-navy-700">
                  Student / Parent Name <span className="text-leaf-500">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={update('name')}
                  placeholder="Full name"
                  className={inputClass}
                />
              </div>

              <div className="sm:col-span-1">
                <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-navy-700">
                  Mobile Number <span className="text-leaf-500">*</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  required
                  inputMode="numeric"
                  pattern="[0-9+\s-]{10,15}"
                  value={form.mobile}
                  onChange={update('mobile')}
                  placeholder="10-digit mobile number"
                  className={inputClass}
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="class" className="mb-2 block text-sm font-semibold text-navy-700">
                  Class / Stream
                </label>
                <select id="class" value={form.classStream} onChange={update('classStream')} className={inputClass}>
                  <option value="">Select a class</option>
                  {classOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="message" className="mb-2 block text-sm font-semibold text-navy-700">
                  Message <span className="font-normal text-navy-400">(optional)</span>
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={form.message}
                  onChange={update('message')}
                  placeholder="What would you like to know?"
                  className={`${inputClass} resize-none`}
                />
              </div>

              <div className="sm:col-span-2">
                <Button
                  type="submit"
                  size="lg"
                  icon="arrowRight"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Send Enquiry'}
                </Button>

                <p className="mt-3 text-center text-xs text-navy-400">
                  Your enquiry will be securely submitted to Glare30.
                </p>

              </div>
            </form>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

/**
 * One status → tone mapping, so a status looks the same on every page.
 * Kept out of Badge.jsx because a component file that also exports constants
 * breaks Fast Refresh.
 */
export const STATUS_TONE = {
  // Enquiry pipeline
  New: 'info',
  Contacted: 'neutral',
  'Demo booked': 'warning',
  Admitted: 'good',
  Closed: 'neutral',
  // Fees
  Paid: 'good',
  Pending: 'warning',
  Overdue: 'critical',
  // Timetable
  live: 'good',
  done: 'neutral',
  upcoming: 'info',
}

/** Pill styling per tone — shared by Badge and the editable status select. */
export const TONE_CLASSES = {
  neutral: 'bg-navy-50 text-navy-600 ring-navy-100',
  info: 'bg-navy-50 text-navy-700 ring-navy-200',
  good: 'bg-leaf-50 text-leaf-700 ring-leaf-200',
  warning: 'bg-gold-50 text-gold-700 ring-gold-200',
  critical: 'bg-red-50 text-red-700 ring-red-200',
}

export default STATUS_TONE

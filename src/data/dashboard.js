

export const dashboardMeta = {
  isDemo: true,
  session: '2025 – 26', // TODO: confirm the academic session label with the client
  updatedAt: 'Today, 9:40 AM',
}

/** TODO: comes from auth once a login exists. */
export const adminUser = {
  name: 'Admin',
  role: 'Administrator',
  initials: 'AD',
}

/** Sidebar navigation — the order here is the order on screen. */
export const dashNav = [
  { label: 'Overview', to: '/admin', icon: 'grid', end: true },
  { label: 'Enquiries', to: '/admin/enquiries', icon: 'inbox', badge: 12 },
  { label: 'Batches', to: '/admin/batches', icon: 'layers' },
  { label: 'Add Admin', to: '/admin/add-admin', icon: 'idCard' },
]

/* ==================================================================
   TABLES
   Sample rows only — a real list would be paginated from the API.
================================================================== */

export const enquiryStatuses = ['New', 'Contacted', 'Demo booked', 'Admitted', 'Closed']

export const enquiries = [
  { id: 'ENQ-1042', name: 'Aarav Sharma', className: 'Class 10', phone: '+91 98xxx xx210', source: 'Website form', status: 'New', date: '15 Sep 2026' },
  { id: 'ENQ-1041', name: 'Ishita Verma', className: 'Class 12 — PCB', phone: '+91 98xxx xx884', source: 'WhatsApp', status: 'Demo booked', date: '15 Sep 2026' },
  { id: 'ENQ-1040', name: 'Rohan Gupta', className: 'Class 8', phone: '+91 98xxx xx145', source: 'Walk-in', status: 'Contacted', date: '14 Sep 2026' },
  { id: 'ENQ-1039', name: 'Sneha Yadav', className: 'Class 11 — PCB', phone: '+91 98xxx xx097', source: 'Website form', status: 'Admitted', date: '14 Sep 2026' },
  { id: 'ENQ-1038', name: 'Kabir Singh', className: 'Class 9', phone: '+91 98xxx xx523', source: 'Referral', status: 'New', date: '13 Sep 2026' },
  { id: 'ENQ-1037', name: 'Diya Malhotra', className: 'Class 6', phone: '+91 98xxx xx318', source: 'Website form', status: 'Contacted', date: '13 Sep 2026' },
  { id: 'ENQ-1036', name: 'Arjun Rathore', className: 'Class 12 — PCM', phone: '+91 98xxx xx760', source: 'WhatsApp', status: 'Demo booked', date: '12 Sep 2026' },
  { id: 'ENQ-1035', name: 'Nisha Kumari', className: 'Class 10', phone: '+91 98xxx xx402', source: 'Walk-in', status: 'Admitted', date: '12 Sep 2026' },
  { id: 'ENQ-1034', name: 'Veer Chauhan', className: 'Class 7', phone: '+91 98xxx xx659', source: 'Referral', status: 'Closed', date: '11 Sep 2026' },
  { id: 'ENQ-1033', name: 'Ananya Joshi', className: 'Class 11 — PCB', phone: '+91 98xxx xx271', source: 'Website form', status: 'Contacted', date: '11 Sep 2026' },
  { id: 'ENQ-1032', name: 'Mohit Saini', className: 'Class 9', phone: '+91 98xxx xx933', source: 'WhatsApp', status: 'New', date: '10 Sep 2026' },
  { id: 'ENQ-1031', name: 'Priya Nair', className: 'Class 8', phone: '+91 98xxx xx586', source: 'Website form', status: 'Admitted', date: '10 Sep 2026' },
]

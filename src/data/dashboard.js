/**
 * ⚠️ DEMO DATA — NOT the client's real numbers.
 *
 * Glare30 Institute has no backend yet, so every figure below is sample data
 * used only to show how the admin dashboard looks and behaves. The UI renders a
 * visible "Demo data" badge as long as `dashboardMeta.isDemo` is true, so nobody
 * mistakes these for real admissions, fees or attendance.
 *
 * TODO (when the client provides real data / an API):
 *   1. Replace each export below with a `fetch()` from the admin API.
 *   2. Set `dashboardMeta.isDemo = false` — the badge disappears on its own.
 *   3. Confirm with the client: batch names, faculty names, fee amounts,
 *      class strengths and the academic session label.
 *
 * Shapes are kept flat and API-friendly, so swapping the source should not
 * require touching any component.
 */

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
  { label: 'Students', to: '/admin/students', icon: 'idCard' },
  { label: 'Batches', to: '/admin/batches', icon: 'layers' },
  { label: 'Fees', to: '/admin/fees', icon: 'rupee' },
]

/* ==================================================================
   OVERVIEW
================================================================== */

/**
 * Stat tiles. `trend` is a 12-point sparkline (oldest → newest),
 * `delta` is the change against the previous period, in percent.
 */
export const kpis = [
  {
    id: 'students',
    label: 'Active students',
    value: 248,
    delta: 6.4,
    deltaLabel: 'vs last month',
    goodWhenUp: true,
    icon: 'users',
    trend: [198, 204, 209, 207, 214, 219, 223, 228, 231, 236, 241, 248],
  },
  {
    id: 'enquiries',
    label: 'Enquiries this month',
    value: 64,
    delta: 12.3,
    deltaLabel: 'vs last month',
    goodWhenUp: true,
    icon: 'inbox',
    trend: [31, 38, 34, 42, 39, 47, 44, 51, 48, 55, 57, 64],
  },
  {
    id: 'attendance',
    label: 'Attendance today',
    value: 91,
    suffix: '%',
    delta: -1.8,
    deltaLabel: 'vs yesterday',
    goodWhenUp: true,
    icon: 'check',
    trend: [88, 90, 93, 91, 94, 92, 89, 93, 95, 92, 93, 91],
  },
  {
    id: 'pending',
    label: 'Fees pending',
    value: 184000,
    prefix: '₹',
    compact: true,
    delta: -8.1,
    deltaLabel: 'vs last month',
    goodWhenUp: false,
    icon: 'rupee',
    trend: [262, 254, 248, 239, 231, 226, 219, 210, 204, 198, 191, 184],
  },
]

/** Two-series monthly trend. Both colours are validated brand steps. */
export const enquiryTrend = {
  series: [
    { id: 'enquiries', label: 'Enquiries', color: '#159b4c' }, // leaf-500
    { id: 'admissions', label: 'Admissions', color: '#5269ab' }, // navy-400
  ],
  points: [
    { month: 'Feb', enquiries: 31, admissions: 14 },
    { month: 'Mar', enquiries: 38, admissions: 19 },
    { month: 'Apr', enquiries: 52, admissions: 31 },
    { month: 'May', enquiries: 61, admissions: 38 },
    { month: 'Jun', enquiries: 47, admissions: 26 },
    { month: 'Jul', enquiries: 44, admissions: 22 },
    { month: 'Aug', enquiries: 57, admissions: 29 },
    { month: 'Sep', enquiries: 64, admissions: 33 },
  ],
}

/** Students per batch — single-series horizontal bars on the overview. */
export const batchStrength = [
  { label: 'Class 10 — Science', value: 34 },
  { label: 'Class 12 — PCM', value: 31 },
  { label: 'Class 9 — All subjects', value: 29 },
  { label: 'Class 11 — PCB', value: 26 },
  { label: 'Class 8 — Foundation', value: 24 },
  { label: 'Class 7 — Foundation', value: 21 },
  { label: 'Class 6 — Foundation', value: 18 },
]

/** Fee collection for the current month. */
export const feeSummary = {
  collected: 926000,
  pending: 184000,
  overdue: 47000,
  target: 1150000,
}

/** Today's timetable. `status` drives the row styling. */
export const todaySchedule = [
  { time: '07:00 AM', batch: 'Class 12 — PCM', subject: 'Physics', faculty: 'TODO: faculty name', room: 'Room 1', status: 'done' },
  { time: '09:00 AM', batch: 'Class 10 — Science', subject: 'Mathematics', faculty: 'TODO: faculty name', room: 'Room 2', status: 'done' },
  { time: '11:30 AM', batch: 'Class 9 — All subjects', subject: 'Science', faculty: 'TODO: faculty name', room: 'Room 1', status: 'live' },
  { time: '02:00 PM', batch: 'Class 8 — Foundation', subject: 'Maths + Science', faculty: 'TODO: faculty name', room: 'Room 3', status: 'upcoming' },
  { time: '04:00 PM', batch: 'Class 11 — PCB', subject: 'Chemistry', faculty: 'TODO: faculty name', room: 'Room 2', status: 'upcoming' },
  { time: '06:00 PM', batch: 'Class 6 — Foundation', subject: 'Mathematics', faculty: 'TODO: faculty name', room: 'Room 3', status: 'upcoming' },
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

export const students = [
  { id: 'GL-2401', name: 'Aditya Rana', className: 'Class 10', batch: 'Class 10 — Science', phone: '+91 98xxx xx112', attendance: 96, feeStatus: 'Paid', joined: 'Apr 2026' },
  { id: 'GL-2402', name: 'Meera Bansal', className: 'Class 11 — PCB', batch: 'Class 11 — PCB', phone: '+91 98xxx xx340', attendance: 92, feeStatus: 'Paid', joined: 'Apr 2026' },
  { id: 'GL-2403', name: 'Harsh Tiwari', className: 'Class 9', batch: 'Class 9 — All subjects', phone: '+91 98xxx xx778', attendance: 84, feeStatus: 'Pending', joined: 'May 2026' },
  { id: 'GL-2404', name: 'Riya Chauhan', className: 'Class 8', batch: 'Class 8 — Foundation', phone: '+91 98xxx xx205', attendance: 98, feeStatus: 'Paid', joined: 'Apr 2026' },
  { id: 'GL-2405', name: 'Devansh Mehra', className: 'Class 12 — PCM', batch: 'Class 12 — PCM', phone: '+91 98xxx xx419', attendance: 78, feeStatus: 'Overdue', joined: 'Apr 2026' },
  { id: 'GL-2406', name: 'Tanvi Arora', className: 'Class 7', batch: 'Class 7 — Foundation', phone: '+91 98xxx xx663', attendance: 94, feeStatus: 'Paid', joined: 'Jun 2026' },
  { id: 'GL-2407', name: 'Yash Solanki', className: 'Class 11 — PCB', batch: 'Class 11 — PCB', phone: '+91 98xxx xx087', attendance: 88, feeStatus: 'Pending', joined: 'May 2026' },
  { id: 'GL-2408', name: 'Kavya Reddy', className: 'Class 10', batch: 'Class 10 — Science', phone: '+91 98xxx xx551', attendance: 91, feeStatus: 'Paid', joined: 'Apr 2026' },
  { id: 'GL-2409', name: 'Naman Bhardwaj', className: 'Class 6', batch: 'Class 6 — Foundation', phone: '+91 98xxx xx294', attendance: 97, feeStatus: 'Paid', joined: 'Jul 2026' },
  { id: 'GL-2410', name: 'Sanya Kapoor', className: 'Class 9', batch: 'Class 9 — All subjects', phone: '+91 98xxx xx736', attendance: 73, feeStatus: 'Overdue', joined: 'Apr 2026' },
  { id: 'GL-2411', name: 'Ritvik Pandey', className: 'Class 8', batch: 'Class 8 — Foundation', phone: '+91 98xxx xx168', attendance: 90, feeStatus: 'Paid', joined: 'May 2026' },
  { id: 'GL-2412', name: 'Anjali Dubey', className: 'Class 11 — PCB', batch: 'Class 11 — PCB', phone: '+91 98xxx xx825', attendance: 95, feeStatus: 'Pending', joined: 'Apr 2026' },
]

export const batches = [
  { id: 'B-01', name: 'Class 6 — Foundation', program: 'Foundation', students: 18, capacity: 25, days: 'Mon · Wed · Fri', time: '06:00 – 07:30 PM', faculty: 'TODO: faculty name', room: 'Room 3' },
  { id: 'B-02', name: 'Class 7 — Foundation', program: 'Foundation', students: 21, capacity: 25, days: 'Tue · Thu · Sat', time: '04:00 – 05:30 PM', faculty: 'TODO: faculty name', room: 'Room 3' },
  { id: 'B-03', name: 'Class 8 — Foundation', program: 'Foundation', students: 24, capacity: 25, days: 'Mon · Wed · Fri', time: '02:00 – 03:30 PM', faculty: 'TODO: faculty name', room: 'Room 3' },
  { id: 'B-04', name: 'Class 9 — All subjects', program: 'Board', students: 29, capacity: 30, days: 'Mon – Sat', time: '11:30 AM – 01:30 PM', faculty: 'TODO: faculty name', room: 'Room 1' },
  { id: 'B-05', name: 'Class 10 — Science', program: 'Board', students: 34, capacity: 35, days: 'Mon – Sat', time: '09:00 – 11:00 AM', faculty: 'TODO: faculty name', room: 'Room 2' },
  { id: 'B-06', name: 'Class 11 — PCB', program: 'Senior', students: 26, capacity: 30, days: 'Mon – Sat', time: '04:00 – 06:00 PM', faculty: 'TODO: faculty name', room: 'Room 2' },
  { id: 'B-07', name: 'Class 12 — PCM', program: 'Senior', students: 31, capacity: 35, days: 'Mon – Sat', time: '07:00 – 09:00 AM', faculty: 'TODO: faculty name', room: 'Room 1' },
]

export const feeRecords = [
  { id: 'INV-3120', student: 'Aditya Rana', batch: 'Class 10 — Science', amount: 18000, paid: 18000, due: '05 Sep 2026', status: 'Paid', mode: 'UPI' },
  { id: 'INV-3121', student: 'Meera Bansal', batch: 'Class 11 — PCB', amount: 24000, paid: 24000, due: '05 Sep 2026', status: 'Paid', mode: 'Bank transfer' },
  { id: 'INV-3122', student: 'Harsh Tiwari', batch: 'Class 9 — All subjects', amount: 16000, paid: 8000, due: '05 Sep 2026', status: 'Pending', mode: 'Cash' },
  { id: 'INV-3123', student: 'Riya Chauhan', batch: 'Class 8 — Foundation', amount: 14000, paid: 14000, due: '05 Sep 2026', status: 'Paid', mode: 'UPI' },
  { id: 'INV-3124', student: 'Devansh Mehra', batch: 'Class 12 — PCM', amount: 26000, paid: 0, due: '20 Aug 2026', status: 'Overdue', mode: '—' },
  { id: 'INV-3125', student: 'Tanvi Arora', batch: 'Class 7 — Foundation', amount: 13000, paid: 13000, due: '05 Sep 2026', status: 'Paid', mode: 'UPI' },
  { id: 'INV-3126', student: 'Yash Solanki', batch: 'Class 11 — PCB', amount: 24000, paid: 12000, due: '05 Sep 2026', status: 'Pending', mode: 'Cash' },
  { id: 'INV-3127', student: 'Kavya Reddy', batch: 'Class 10 — Science', amount: 18000, paid: 18000, due: '05 Sep 2026', status: 'Paid', mode: 'Bank transfer' },
  { id: 'INV-3128', student: 'Sanya Kapoor', batch: 'Class 9 — All subjects', amount: 16000, paid: 0, due: '20 Aug 2026', status: 'Overdue', mode: '—' },
  { id: 'INV-3129', student: 'Naman Bhardwaj', batch: 'Class 6 — Foundation', amount: 12000, paid: 12000, due: '05 Sep 2026', status: 'Paid', mode: 'UPI' },
  { id: 'INV-3130', student: 'Anjali Dubey', batch: 'Class 11 — PCB', amount: 24000, paid: 10000, due: '05 Sep 2026', status: 'Pending', mode: 'UPI' },
  { id: 'INV-3131', student: 'Ritvik Pandey', batch: 'Class 8 — Foundation', amount: 14000, paid: 14000, due: '05 Sep 2026', status: 'Paid', mode: 'Cash' },
]

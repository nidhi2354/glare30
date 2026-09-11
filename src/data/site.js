/**
 * Single source of truth for all website content.
 * When the client sends new details, edit only this file — the components don't need to change.
 *
 * TODO (to be confirmed with the client): address, email, exact timings,
 * year established, result figures. Every placeholder below is marked with `TODO`.
 */

export const brand = {
  name: 'Glare30',
  suffix: 'Institute',
  fullName: 'Glare30 Institute',
  tagline: 'Coaching for Class 6th to 12th',
  description:
    'The C.B.S.E. curriculum combined with preparation for NTSE, JSTSE, Olympiads, IIT-JEE and NEET — all under one roof.',
  logo: '/logo.svg', // Client's original artwork: drop it into public/ and point this at e.g. '/logo.png'
}

export const contact = {
  phone: '+91 92176 59368',
  phoneHref: 'tel:+919217659368',
  whatsapp: '919217659368', // with country code, without the +
  email: 'info@glare30institute.com', // TODO: confirm
  address: 'TODO: Add the full address of the institute here',
  mapUrl: 'https://maps.google.com/?q=Glare30+Institute', // TODO: actual Google Maps link
  timings: 'Mon – Sat · 8:00 AM – 8:00 PM', // TODO: confirm
}

export const socials = [
  { name: 'Facebook', href: '#', icon: 'facebook' },
  { name: 'Instagram', href: '#', icon: 'instagram' },
  { name: 'YouTube', href: '#', icon: 'youtube' },
]

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Programs', href: '#programs' },
  { label: 'Exams', href: '#exams' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'FAQs', href: '#faqs' },
  { label: 'Contact', href: '#contact' },
]

export const hero = {
  eyebrow: 'CBSE · NTSE · JSTSE · Olympiads · IIT-JEE · NEET',
  title: 'Strong Concepts.',
  titleAccent: 'Better Results.',
  subtitle:
    'Glare30 Institute prepares students from Class 6th to 12th through the C.B.S.E. curriculum alongside competitive exam training — with small batches, concept-first teaching and regular testing.',
  primaryCta: { label: 'Book a Free Demo Class', href: '#contact' },
  secondaryCta: { label: 'Explore Programs', href: '#programs' },
  chips: ['Class 6 – 12', 'CBSE Curriculum', 'PCM & PCB', 'Olympiad Ready'],
}

export const stats = [
  { value: '6 – 12', label: 'Classes Covered', icon: 'users' },
  { value: 'CBSE', label: 'Curriculum Followed', icon: 'book' },
  { value: '4+', label: 'Competitive Exams', icon: 'target' },
  { value: 'PCM / PCB', label: 'Streams in 11th & 12th', icon: 'atom' },
]

export const programs = [
  {
    id: 'foundation',
    classes: 'Class 6th – 8th',
    title: 'Foundation Program',
    summary:
      'A foundation course built to strengthen the basics, covering the complete school syllabus along with Olympiad and NTSE level practice.',
    subjects: ['Mathematics', 'Science', 'Social Science', 'English'],
    highlights: [
      'Complete coverage of the CBSE syllabus',
      'Olympiad and NTSE pattern practice',
      'Weekly tests that build lasting concepts',
    ],
    accent: 'leaf',
    icon: 'sparkles',
  },
  {
    id: 'board',
    classes: 'Class 9th – 10th',
    title: 'Board + Competitive Program',
    summary:
      'Complete board exam preparation with focused training for JSTSE and NTSE. Every branch of Science is taught to its own depth.',
    subjects: ['Mathematics', 'Science', 'Social Science', 'English'],
    note: 'In Science, all three branches — Physics, Chemistry and Biology — are covered in detail.',
    highlights: [
      'Physics, Chemistry and Biology, each in depth',
      'Targeted NTSE and JSTSE preparation',
      'Board pattern sample papers and revision',
    ],
    accent: 'navy',
    featured: true,
    icon: 'book',
  },
  {
    id: 'senior',
    classes: 'Class 11th – 12th',
    title: 'JEE & NEET Program',
    summary:
      'Two dedicated streams for senior secondary students — PCM for engineering and PCB for medical — taught alongside the board syllabus.',
    subjects: ['Physics', 'Chemistry', 'Mathematics', 'Biology'],
    streams: [
      { code: 'PCM', for: 'IIT-JEE Preparation', icon: 'calculator' },
      { code: 'PCB', for: 'NEET Preparation', icon: 'atom' },
    ],
    highlights: [
      'PCM — IIT-JEE focused problem solving',
      'PCB — NEET oriented NCERT mastery',
      'Boards and entrance exams prepared side by side',
    ],
    accent: 'gold',
    icon: 'target',
  },
]

export const exams = [
  {
    name: 'NTSE',
    full: 'National Talent Search Examination',
    level: 'Class 10',
    description: 'Structured practice for both the MAT and SAT sections of this national scholarship exam.',
    icon: 'award',
  },
  {
    name: 'JSTSE',
    full: 'Junior Science Talent Search Exam',
    level: 'Class 9',
    description: 'Focused batches built around advanced Science and Mathematics questions.',
    icon: 'flask',
  },
  {
    name: 'Olympiads',
    full: 'Maths, Science & English Olympiads',
    level: 'Class 6 – 12',
    description: 'Regular olympiad practice, from the school level right through to the national rounds.',
    icon: 'globe',
  },
  {
    name: 'IIT-JEE',
    full: 'Joint Entrance Examination',
    level: 'Class 11 – 12 (PCM)',
    description: 'Problem solving and a mock test series modelled on the Mains and Advanced pattern.',
    icon: 'calculator',
  },
  {
    name: 'NEET',
    full: 'National Eligibility cum Entrance Test',
    level: 'Class 11 – 12 (PCB)',
    description: 'Line-by-line NCERT coverage with intensive drilling in Biology, Physics and Chemistry.',
    icon: 'heart',
  },
]

export const whyUs = [
  {
    title: 'Concept-First Teaching',
    description:
      'No rote learning. Every topic is built up from the basics, so application-based questions start to feel easy.',
    icon: 'sparkles',
  },
  {
    title: 'Board + Competitive Together',
    description: 'The CBSE syllabus and competitive exam patterns run in parallel within the same class.',
    icon: 'book',
  },
  {
    title: 'Small Batches',
    description: 'Individual attention for every student, so no doubt is ever left behind.',
    icon: 'users',
  },
  {
    title: 'Regular Tests & Analysis',
    description: 'A detailed performance analysis after every weekly test, followed by a clear improvement plan.',
    icon: 'chart',
  },
  {
    title: 'Doubt Clearing Sessions',
    description: 'Separate doubt sessions where students can ask their questions without hesitation.',
    icon: 'chat',
  },
  {
    title: 'Parent Updates',
    description: 'Parents receive regular updates on attendance and test performance.',
    icon: 'shield',
  },
]

export const approach = [
  {
    step: '01',
    title: 'Concept Class',
    description: 'A detailed explanation of the theory, derivations and real-world examples behind every topic.',
  },
  {
    step: '02',
    title: 'Guided Practice',
    description: 'Questions from board level right up to competitive level, solved together in class.',
  },
  {
    step: '03',
    title: 'Test & Analysis',
    description: 'Regular tests, followed by an analysis of mistakes and targeted revision.',
  },
  {
    step: '04',
    title: 'Doubt & Revision',
    description: 'Dedicated doubt sessions and a full-syllabus revision cycle before the exams.',
  },
]

export const faqs = [
  {
    q: 'Which classes do you provide coaching for?',
    a: 'We provide coaching for students from Class 6th to 12th. For Classes 11th and 12th, both PCM and PCB streams are available.',
  },
  {
    q: 'Which curriculum do you follow?',
    a: 'We follow the C.B.S.E. curriculum, along with preparation for competitive exams such as NTSE, JSTSE and various Olympiads.',
  },
  {
    q: 'How is Science taught in Classes 9th and 10th?',
    a: 'In Science, all three branches — Physics, Chemistry and Biology — are covered in detail, so the foundation for Classes 11th and 12th stays strong.',
  },
  {
    q: 'What are the options in Classes 11th and 12th?',
    a: 'There are two streams — PCM for IIT-JEE preparation and PCB for NEET preparation. In both, the board syllabus is covered alongside.',
  },
  {
    q: 'Can I get a demo class?',
    a: 'Yes. You can book a free demo class using the form below, or simply call or WhatsApp us directly.',
  },
]

export const classOptions = [
  'Class 6',
  'Class 7',
  'Class 8',
  'Class 9',
  'Class 10',
  'Class 11 — PCM',
  'Class 11 — PCB',
  'Class 12 — PCM',
  'Class 12 — PCB',
]

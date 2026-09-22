/**
 * Single source of truth for all website content.
 * When the client sends new details, edit only this file — the components don't need to change.
 *
 * TODO (to be confirmed with the client): email, exact timings,
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
  phone: '+91 91051 37031 / +91 78301 93739',
  phoneHref: 'tel:+919105137031',
  whatsapp: '919105137031', // with country code, without the +
  email: 'info@glare30institute.com', // TODO: confirm
  address: 'Plot No. 11, Near Bala Ji Mandir, Khairamod, Najafgarh, Delhi – 110043',
  // Searches Google Maps for the address above. Replace with the institute's own
  // Google Business / Maps share link once the client creates one.
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=Plot%20No.%2011%2C%20Near%20Bala%20Ji%20Mandir%2C%20Khairamod%2C%20Najafgarh%2C%20Delhi%20110043',
  timings: 'Mon – Sun · 8:00 AM – 8:00 PM',
}

export const socials = [
  { name: 'Facebook', href: '#', icon: 'facebook' },
  { name: 'Instagram', href: '#', icon: 'instagram' },
  { name: 'YouTube', href: '#', icon: 'youtube' },
]

/**
 * Site navigation.
 * `to` is a router path. A path with a hash (e.g. '/#programs') navigates to that
 * page first and then scrolls to the section — handled by <ScrollManager />.
 */
export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Courses', to: '/courses' },
  { label: 'Exams', to: '/exams' },
  { label: 'Contact', to: '/contact' },
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
    detail: {
      overview:
        'Classes 6th, 7th and 8th decide how comfortable a student will be later. The whole year is spent making the basics unshakeable — and then stretching them a little further than the school syllabus asks.',
      covers: [
        {
          title: 'Complete school syllabus',
          description: 'Mathematics, Science, Social Science and English — every chapter taught in class, not left for self-study.',
        },
        {
          title: 'One level above the textbook',
          description: 'Olympiad and NTSE pattern questions are introduced early, so tougher papers never come as a shock.',
        },
        {
          title: 'Habit building',
          description: 'Regular homework, weekly tests and notes-making — the study habits that carry a student through Class 10th and 12th.',
        },
      ],
      outcome: 'By the end of Class 8th, a student is ready for the board-level jump in Class 9th without any catching up.',
    },
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
    detail: {
      overview:
        'These two years carry the first board exam and the first serious competitive exams together. Nothing is rushed — the syllabus is completed with enough time left for revision and test practice.',
      covers: [
        {
          title: 'Science, branch by branch',
          description: 'Physics, Chemistry and Biology are each taught in detail rather than as one combined subject — this is what makes Class 11th feel easy.',
        },
        {
          title: 'Board-perfect answers',
          description: 'Sample papers, previous-year questions and answer-writing practice built around the CBSE marking scheme.',
        },
        {
          title: 'NTSE & JSTSE preparation',
          description: 'Focused sessions on MAT and SAT style reasoning, plus the advanced Science and Maths these exams demand.',
        },
      ],
      outcome: 'A strong board result, and a student already used to the question style of competitive exams.',
    },
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
    detail: {
      overview:
        'Class 11th and 12th run on two tracks — the board syllabus and the entrance exam — taught together instead of one after the other. Students choose PCM for engineering or PCB for medical.',
      covers: [
        {
          title: 'PCM — for IIT-JEE',
          description: 'Physics, Chemistry and Mathematics taken to JEE Mains and Advanced depth, with heavy problem-solving practice.',
        },
        {
          title: 'PCB — for NEET',
          description: 'Physics, Chemistry and Biology with line-by-line NCERT coverage, since that is where most NEET questions come from.',
        },
        {
          title: 'Boards never sidelined',
          description: 'Board pattern questions are practised alongside, so the CBSE result does not suffer while preparing for entrances.',
        },
      ],
      outcome: 'A student who can sit the board exam and the entrance exam in the same season without preparing twice.',
    },
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
    prepare: [
      'Separate drilling for the MAT (reasoning) and SAT (Science, Maths, Social Science) sections',
      'Practice sets modelled on the state-level and national-level papers',
      'Time management practice, since the paper is long for Class 10 students',
    ],
    full: 'National Talent Search Examination',
    level: 'Class 10',
    description: 'Structured practice for both the MAT and SAT sections of this national scholarship exam.',
    icon: 'award',
  },
  {
    name: 'JSTSE',
    prepare: [
      'Advanced Science and Mathematics beyond the Class 9 textbook',
      'Question sets built from previous-year JSTSE papers',
      'Regular objective-pattern tests to build speed and accuracy',
    ],
    full: 'Junior Science Talent Search Exam',
    level: 'Class 9',
    description: 'Focused batches built around advanced Science and Mathematics questions.',
    icon: 'flask',
  },
  {
    name: 'Olympiads',
    prepare: [
      'Olympiad-level questions woven into regular classes, not kept as a separate course',
      'Practice for Maths, Science and English olympiads across Class 6 to 12',
      'Preparation that scales from the school round up to the national round',
    ],
    full: 'Maths, Science & English Olympiads',
    level: 'Class 6 – 12',
    description: 'Regular olympiad practice, from the school level right through to the national rounds.',
    icon: 'globe',
  },
  {
    name: 'IIT-JEE',
    prepare: [
      'Concept classes followed by graded problem sets — easy, board level, then JEE level',
      'Mock tests on the Mains and Advanced pattern with a detailed error analysis',
      'Physics, Chemistry and Mathematics taught with equal weight',
    ],
    full: 'Joint Entrance Examination',
    level: 'Class 11 – 12 (PCM)',
    description: 'Problem solving and a mock test series modelled on the Mains and Advanced pattern.',
    icon: 'calculator',
  },
  {
    name: 'NEET',
    prepare: [
      'Line-by-line NCERT coverage, especially in Biology',
      'High-volume MCQ practice for all three subjects',
      'Full-syllabus mock tests in exam-like conditions',
    ],
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

/** Default copy for the shared <CtaBanner /> (home page). */
export const ctaBanner = {
  eyebrow: 'Admissions Open',
  title: 'Seats for the new session are',
  accent: 'filling up fast',
  description: 'Book a free demo class for your child and see for yourself how learning happens at Glare30.',
}

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

/* ==================================================================
   ABOUT PAGE
   ------------------------------------------------------------------
   Everything on /about is driven from here.
   Anything the client still has to confirm is marked with TODO.
================================================================== */

export const aboutPage = {
  hero: {
    eyebrow: 'About Us',
    title: 'Get to know',
    accent: 'Glare30 Institute',
    description:
      'A neighbourhood coaching institute in Najafgarh where students from Class 6th to 12th are taught the C.B.S.E. syllabus and competitive exam preparation side by side.',
  },

  story: {
    eyebrow: 'Our Story',
    title: 'Built around one simple',
    accent: 'belief',
    paragraphs: [
      'Glare30 Institute was started with a straightforward idea — a student who truly understands a concept never has to memorise it. Marks then follow on their own.',
      'That is why the school syllabus and competitive exam preparation are never treated as two separate things here. The same chapter is first completed to board level, and then taken up to the depth an NTSE, JSTSE, JEE or NEET question demands.',
      'Batches are deliberately kept small, so every student gets the teacher\u2019s attention and no doubt is carried home.',
    ],
    // Short, checkable claims — these mirror what is already promised on the home page.
    points: [
      'Class 6th to 12th, all under one roof',
      'C.B.S.E. curriculum taught to full depth',
      'PCM and PCB streams in Class 11th & 12th',
      'Small batches with individual attention',
    ],
  },

  // "At a glance" tiles beside the story.
  glance: [
    { value: '6 – 12', label: 'Classes', icon: 'users' },
    { value: 'CBSE', label: 'Curriculum', icon: 'book' },
    { value: 'PCM / PCB', label: 'Streams', icon: 'atom' },
    { value: '5', label: 'Exams Prepared For', icon: 'target' },
  ],

  missionVision: [
    {
      key: 'mission',
      icon: 'rocket',
      label: 'Our Mission',
      title: 'Make strong concepts affordable and local',
      description:
        'To give every student in and around Najafgarh the kind of concept-first teaching that is usually only found in big coaching hubs — without them having to travel across the city for it.',
      points: [
        'Teach the why before the how',
        'Board and competitive preparation together',
        'Keep parents in the loop, always',
      ],
    },
    {
      key: 'vision',
      icon: 'compass',
      label: 'Our Vision',
      title: 'Students who can solve what they have never seen',
      description:
        'To build students who are not thrown off by an unfamiliar question — because their basics are clear enough to work it out for themselves, in an exam hall and long after it.',
      points: [
        'Understanding over rote learning',
        'Confidence in boards and entrances alike',
        'A habit of self-study that outlasts school',
      ],
    },
  ],

  values: {
    eyebrow: 'What We Stand For',
    title: 'The principles behind',
    accent: 'every class',
    description: 'These are not slogans on a wall — they decide how a batch is run, day after day.',
    items: [
      {
        title: 'Clarity First',
        description: 'A topic is not finished until the class can explain it back. Speed never comes before understanding.',
        icon: 'bulb',
      },
      {
        title: 'Honest Feedback',
        description: 'Test results are shared as they are, along with a clear plan for what to fix next.',
        icon: 'chart',
      },
      {
        title: 'Every Doubt Matters',
        description: 'No question is too small. Separate doubt sessions exist precisely so nobody stays quiet.',
        icon: 'chat',
      },
      {
        title: 'Discipline, Not Pressure',
        description: 'A steady routine of classes, practice and revision — without turning learning into a race.',
        icon: 'shield',
      },
      {
        title: 'Parents as Partners',
        description: 'Attendance and performance updates go to parents regularly, not just before the exams.',
        icon: 'users',
      },
      {
        title: 'Small Batches, Always',
        description: 'Batch size is capped on purpose. Individual attention is not possible in a crowded room.',
        icon: 'sparkles',
      },
    ],
  },

  director: {
    eyebrow: 'From the Director\u2019s Desk',
    // TODO: confirm the director's name, qualification and photo with the client.
    name: 'TODO: Director\u2019s name',
    role: 'Director, Glare30 Institute',
    quote:
      'I have seen bright students lose confidence simply because a chapter was rushed through. At Glare30 we go the other way — we slow down where it matters, and make sure the base is solid. Once that happens, boards and entrance exams stop feeling like two different battles.',
    note: 'Come and sit through a free demo class with your child. That is the fairest way to judge any institute.',
  },

  facilities: {
    eyebrow: 'Learning Environment',
    title: 'Everything a student needs,',
    accent: 'in one place',
    description: 'The setup is simple and functional — built for focused study rather than for show.',
    // TODO: confirm this list with the client and add real photos.
    items: [
      {
        title: 'Focused Classrooms',
        description: 'Small, well-lit rooms where the last bench is still the front row.',
        icon: 'book',
      },
      {
        title: 'Doubt-Clearing Desk',
        description: 'Dedicated sessions outside class hours for one-on-one doubt solving.',
        icon: 'chat',
      },
      {
        title: 'Weekly Test Zone',
        description: 'Regular tests in exam-like conditions, followed by a detailed analysis.',
        icon: 'award',
      },
      {
        title: 'Study Material',
        description: 'Printed notes, practice sheets and previous-year papers for every subject.',
        icon: 'flask',
      },
    ],
  },

  cta: {
    eyebrow: 'Come and See',
    title: 'The best way to know us is to',
    accent: 'sit in a class',
    description:
      'Book a free demo class for your child, or simply call us — we are happy to answer every question before you decide.',
  },
}

/* ==================================================================
   COURSES PAGE  (/courses)
================================================================== */

export const coursesPage = {
  hero: {
    eyebrow: 'Our Courses',
    title: 'One institute for every class from',
    accent: '6th to 12th',
    description:
      'The C.B.S.E. syllabus taught in full, with NTSE, JSTSE, Olympiad, IIT-JEE and NEET preparation built into the same classes — not sold as a separate course.',
  },

  intro: {
    eyebrow: 'How It Works',
    title: 'Three stages, one continuous',
    accent: 'plan',
    description:
      'A student who joins in Class 6th and stays till Class 12th never has to re-learn a basic. Each stage is designed to hand the next one a prepared student.',
  },

  includes: {
    eyebrow: 'In Every Batch',
    title: 'What every student gets,',
    accent: 'whatever the class',
    description: 'These are not add-ons or premium extras — they are part of every batch we run.',
    items: [
      {
        title: 'Small Batch Size',
        description: 'Batch strength is capped so the teacher can actually reach every student in a class.',
        icon: 'users',
      },
      {
        title: 'Weekly Tests',
        description: 'A test every week on what was taught, followed by a written analysis of the mistakes.',
        icon: 'chart',
      },
      {
        title: 'Doubt Sessions',
        description: 'Separate time outside class hours reserved purely for clearing doubts.',
        icon: 'chat',
      },
      {
        title: 'Study Material',
        description: 'Printed notes, practice sheets and previous-year papers for every subject taught.',
        icon: 'book',
      },
      {
        title: 'Revision Cycle',
        description: 'A full-syllabus revision round before every major exam, not a last-minute rush.',
        icon: 'target',
      },
      {
        title: 'Parent Updates',
        description: 'Attendance and test performance shared with parents regularly through the year.',
        icon: 'shield',
      },
    ],
  },

  cta: {
    eyebrow: 'Still Deciding?',
    title: 'Sit through one class before you',
    accent: 'choose a batch',
    description:
      'A free demo class costs nothing and tells you more than any brochure. Book one for your child, or call us to discuss the right batch.',
  },
}

/* ==================================================================
   EXAMS PAGE  (/exams)
================================================================== */

export const examsPage = {
  hero: {
    eyebrow: 'Competitive Exams',
    title: 'Board exams and entrance exams,',
    accent: 'prepared together',
    description:
      'NTSE, JSTSE, Olympiads, IIT-JEE and NEET — each one prepared for inside the regular batch, at the class where it actually matters.',
  },

  roadmap: {
    eyebrow: 'Exam Roadmap',
    title: 'Which exam matters at',
    accent: 'which class',
    description: 'Competitive preparation is not started in a panic in Class 11th. It is layered in, class by class.',
    stages: [
      {
        classes: 'Class 6th – 8th',
        exams: ['Olympiads'],
        description: 'Olympiad-level questions are mixed into regular Maths, Science and English classes.',
        icon: 'sparkles',
        accent: 'leaf',
      },
      {
        classes: 'Class 9th',
        exams: ['JSTSE', 'Olympiads'],
        description: 'Advanced Science and Maths sessions aimed at the JSTSE paper, alongside the board syllabus.',
        icon: 'flask',
        accent: 'navy',
      },
      {
        classes: 'Class 10th',
        exams: ['NTSE', 'Olympiads'],
        description: 'MAT and SAT practice for NTSE, run in parallel with full board exam preparation.',
        icon: 'award',
        accent: 'gold',
      },
      {
        classes: 'Class 11th – 12th',
        exams: ['IIT-JEE (PCM)', 'NEET (PCB)'],
        description: 'The chosen stream is taken to entrance-exam depth while the board syllabus is completed.',
        icon: 'target',
        accent: 'navy',
      },
    ],
  },

  cta: {
    eyebrow: 'Not Sure Where to Start?',
    title: 'Tell us your class — we will tell you the',
    accent: 'right exam to aim at',
    description:
      'Every student does not need every exam. Talk to us and we will suggest what is realistic and worth preparing for.',
  },
}

/* ==================================================================
   CONTACT PAGE  (/contact)
================================================================== */

export const contactPage = {
  hero: {
    eyebrow: 'Get in Touch',
    title: 'Come and visit, or just',
    accent: 'give us a call',
    description:
      'Admissions, batch timings, fees or a free demo class — ask us anything. We reply on WhatsApp quickly during working hours.',
  },

  cta: {
    eyebrow: 'Admissions Open',
    title: 'Book a free demo class for',
    accent: 'your child',
    description: 'No fees, no commitment — sit through a class and decide for yourself.',
  },
}

# Glare30 Institute — Website

Coaching institute website (Class 6th – 12th · CBSE · NTSE / JSTSE / Olympiads · IIT-JEE · NEET).
Abhi **Home page** bana hua hai, fully responsive (320px se 4K tak).

## Tech Stack

| Layer    | Choice                             |
| -------- | ---------------------------------- |
| Framework| React 19 + Vite 8                  |
| Styling  | Tailwind CSS v4 (`@tailwindcss/vite`) |
| Icons    | Inline SVG set (`src/components/ui/Icon.jsx`) — koi extra package nahi |
| Fonts    | Outfit (headings) + Inter (body) — Google Fonts |
| Lint     | oxlint                             |

## Commands

```bash
npm install      # dependencies
npm run dev      # dev server → http://localhost:5173
npm run build    # production build → dist/
npm run preview  # build ko locally serve karein
npm run lint     # oxlint
```

## Folder Structure

```
glare30-Institute/
├── public/
│   └── logo.svg                  # brand logo (client ka PNG yahan replace karein)
├── src/
│   ├── assets/                   # images
│   ├── components/
│   │   ├── home/                 # home page ke sections
│   │   │   ├── Hero.jsx
│   │   │   ├── Stats.jsx
│   │   │   ├── Programs.jsx      # Class 6-8 / 9-10 / 11-12 cards
│   │   │   ├── Exams.jsx         # NTSE, JSTSE, Olympiads, JEE, NEET
│   │   │   ├── WhyUs.jsx
│   │   │   ├── Approach.jsx      # 4-step teaching cycle
│   │   │   ├── CtaBanner.jsx
│   │   │   ├── Faqs.jsx          # accordion
│   │   │   └── Contact.jsx       # enquiry form → WhatsApp
│   │   ├── layout/
│   │   │   ├── TopBar.jsx        # desktop contact strip
│   │   │   ├── Navbar.jsx        # sticky nav + mobile drawer
│   │   │   ├── Footer.jsx
│   │   │   └── FloatingActions.jsx
│   │   └── ui/                   # reusable primitives
│   │       ├── Button.jsx
│   │       ├── Container.jsx
│   │       ├── Icon.jsx
│   │       ├── Logo.jsx
│   │       ├── Reveal.jsx        # scroll-reveal animation
│   │       └── SectionHeading.jsx
│   ├── data/
│   │   └── site.js               # ⭐ SAARA CONTENT YAHAN HAI
│   ├── hooks/
│   │   └── useScrolled.js
│   ├── pages/
│   │   └── Home.jsx              # sections ka order
│   ├── utils/
│   │   └── cn.js
│   ├── App.jsx                   # layout shell
│   ├── index.css                 # Tailwind theme + design tokens
│   └── main.jsx
├── index.html                    # SEO meta + fonts
├── jsconfig.json                 # `@/` alias → src/
└── vite.config.js
```

## Content kaise badlein

Text, phone number, subjects, FAQs — sab kuch **`src/data/site.js`** me hai.
Components ko chhedne ki zarurat nahi, sirf wahi file edit karein.

### Abhi pending (client se confirm karna hai)

`src/data/site.js` me ye values placeholder hain, `TODO` comment ke saath:

- `contact.address` — institute ka poora address
- `contact.email` — official email id
- `contact.timings` — actual batch timings
- `contact.mapUrl` — Google Maps link
- `socials[]` — Facebook / Instagram / YouTube ke real links

### Logo replace karna

1. Client ka original logo `public/` me daalein (e.g. `public/logo.png`).
2. `src/data/site.js` → `brand.logo` ko `'/logo.png'` kar dein.

> Abhi `public/logo.svg` logo ka SVG recreation hai — original file milte hi replace kar dein.

## Design Tokens

Brand colours logo se liye gaye hain, `src/index.css` ke `@theme` block me:

| Token   | Hex       | Use                        |
| ------- | --------- | -------------------------- |
| `navy`  | `#14235C` | backgrounds, headings      |
| `gold`  | `#FFE500` | primary CTA, accents       |
| `leaf`  | `#159B4C` | success, secondary accents |

Har colour ki 50–950 scale available hai (`bg-navy-800`, `text-gold-300`, `bg-leaf-500` …).

## Enquiry Form

Backend abhi nahi hai. Form submit karne par details **WhatsApp** par pre-filled message ke roop me
khul jaati hain (`src/components/home/Contact.jsx` → `handleSubmit`).
Baad me API lagani ho to wahin `fetch('/api/enquiry', …)` add kar dein.

## Aage kya add ho sakta hai

- Baaki pages (About, Courses, Faculty, Results, Contact) — `react-router-dom` add karke `src/pages/` me
- Real testimonials & result numbers (client se milne par)
- Backend/Email integration for enquiry form

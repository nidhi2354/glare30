# Glare30 Institute — Website

Coaching institute website (Class 6th – 12th · CBSE · NTSE / JSTSE / Olympiads · IIT-JEE · NEET).
Multi-page React site, fully responsive (320px se 4K tak).

## Tech Stack

| Layer    | Choice                             |
| -------- | ---------------------------------- |
| Framework| React 19 + Vite 8                  |
| Routing  | react-router-dom (BrowserRouter)   |
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

## Pages

| Route      | Page     | Kya hai                                                        |
| ---------- | -------- | -------------------------------------------------------------- |
| `/`        | Home     | Hero, stats, programs, exams, why-us, approach, FAQs, enquiry   |
| `/about`   | About Us | Story, mission & vision, values, director's message, facilities |
| `/courses` | Courses  | Teen class-group cards + har batch me kya milta hai             |
| `/courses/:id` | Course detail | Ek class group ka poora page — `/courses/foundation`, `/courses/board`, `/courses/senior` |
| `/exams`   | Exams    | Exam roadmap (kaunsi class me kaunsa exam) + NTSE/JSTSE/Olympiad/JEE/NEET detail |
| `/contact` | Contact  | Enquiry form, Google Map, contact details, FAQs                 |
| `*`        | 404      | Not-found page                                                  |

## Folder Structure

```
glare30-Institute/
├── public/
│   ├── logo.svg                  # brand logo (client ka PNG yahan replace karein)
│   └── _redirects                # SPA fallback (Netlify) — neeche "Deploy" dekhein
├── src/
│   ├── assets/                   # images
│   ├── components/
│   │   ├── home/                 # sirf home page ke sections
│   │   │   ├── Hero.jsx
│   │   │   ├── Stats.jsx
│   │   │   ├── Programs.jsx
│   │   │   ├── Exams.jsx
│   │   │   └── WhyUs.jsx
│   │   ├── about/                # /about ke sections
│   │   │   ├── Story.jsx
│   │   │   ├── MissionVision.jsx
│   │   │   ├── Values.jsx
│   │   │   ├── DirectorMessage.jsx
│   │   │   └── Facilities.jsx
│   │   ├── courses/              # /courses ke sections
│   │   │   ├── CourseNav.jsx       # teen class-group cards (detail page par le jaate hain)
│   │   │   ├── CourseOverview.jsx  # detail page ka body — covers + subjects/streams panel
│   │   │   ├── OtherCourses.jsx    # detail page ke neeche baaki courses ke links
│   │   │   └── Includes.jsx        # har batch me kya milta hai
│   │   ├── exams/                # /exams ke sections
│   │   │   ├── Roadmap.jsx       # class-wise exam roadmap
│   │   │   └── ExamList.jsx      # har exam ka detail
│   │   ├── contact/
│   │   │   └── MapPanel.jsx      # Google Map + directions
│   │   ├── common/               # ek se zyada page par use hote hain
│   │   │   ├── ContactSection.jsx  # enquiry form → WhatsApp
│   │   │   ├── Approach.jsx        # 4-step teaching cycle
│   │   │   ├── Faqs.jsx            # accordion
│   │   │   └── CtaBanner.jsx       # closing CTA (copy props se badalti hai)
│   │   ├── layout/
│   │   │   ├── TopBar.jsx        # desktop contact strip
│   │   │   ├── Navbar.jsx        # sticky nav + mobile drawer + active link
│   │   │   ├── Footer.jsx
│   │   │   ├── FloatingActions.jsx
│   │   │   └── ScrollManager.jsx # route change par scroll handling
│   │   └── ui/                   # reusable primitives
│   │       ├── Button.jsx        # `to` → router Link, `href` → plain <a>
│   │       ├── Container.jsx
│   │       ├── Icon.jsx
│   │       ├── Logo.jsx
│   │       ├── PageHero.jsx      # inner pages ka hero + breadcrumb
│   │       ├── Reveal.jsx        # scroll-reveal animation
│   │       └── SectionHeading.jsx
│   ├── data/
│   │   └── site.js               # ⭐ SAARA CONTENT YAHAN HAI
│   ├── hooks/
│   │   ├── useScrolled.js
│   │   └── useSeo.js             # per-page <title> + meta description
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Courses.jsx
│   │   ├── CourseDetail.jsx      # /courses/:programId
│   │   ├── Exams.jsx
│   │   ├── Contact.jsx
│   │   └── NotFound.jsx
│   ├── utils/cn.js
│   ├── App.jsx                   # layout shell + routes
│   ├── index.css                 # Tailwind theme + design tokens
│   └── main.jsx                  # BrowserRouter
├── index.html
├── jsconfig.json                 # `@/` alias → src/
└── vite.config.js
```

## Content kaise badlein

Text, phone number, subjects, FAQs, har page ka content — sab kuch **`src/data/site.js`** me hai.
Components ko chhedne ki zarurat nahi, sirf wahi file edit karein.

| Export         | Kya control karta hai        |
| -------------- | ---------------------------- |
| `brand`        | naam, tagline, logo          |
| `contact`      | phone, email, address, timings, map link |
| `navLinks`     | navigation menu              |
| `hero` / `stats` / `programs` / `exams` / `whyUs` / `approach` / `faqs` | home page |
| `aboutPage`    | poora /about page            |
| `coursesPage`  | /courses ke heading + "in every batch" |
| `examsPage`    | /exams ka roadmap            |
| `contactPage`  | /contact ke heading          |
| `ctaBanner`    | default closing CTA          |

### Abhi pending (client se confirm karna hai)

`src/data/site.js` me ye values placeholder hain, `TODO` comment ke saath:

- `contact.email` — official email id
- `contact.timings` — din `Mon – Sun` confirm hain, **time 8:00 AM – 8:00 PM** confirm karna hai
- `aboutPage.director.name` — director ka naam aur photo
  (naam jab tak `TODO:` se shuru hai, page par print nahi hota — sirf role dikhta hai)
- `aboutPage.facilities.items` — facilities list confirm karein, real photos add karein
- `socials[]` — Facebook / Instagram / YouTube ke real links
- `contact.mapUrl` — abhi address se Google Maps search khulta hai; client ka
  Google Business link milte hi replace kar dein

Jo cheezein client ne abhi tak nahi di (faculty profiles, result/topper numbers, year
established, fees) — unke liye jaan-boojhkar koi page nahi banaya gaya, taaki website par
koi galat ya banaya hua data na jaaye.

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

> ⚠️ `cn()` sirf classnames jodta hai — `tailwind-merge` nahi hai. Isliye kisi component ko
> aisi class mat bhejein jo uski apni class se takraati ho (jaise `max-w-xl` vs `max-w-2xl`);
> CSS order jeetega, class order nahi.

## Courses ka structure

`/courses` par teen cards hain. "See what is covered" par click karne se us class group ka
**apna alag page** khulta hai:

```
/courses/foundation     # Class 6th – 8th
/courses/board          # Class 9th – 10th
/courses/senior         # Class 11th – 12th
```

Slug wahi hai jo `programs[]` me `id` hai — naya class group add karne par card, page
aur links teeno apne aap ban jaayenge, koi route likhne ki zarurat nahi.
Galat slug (`/courses/abcd`) chupchaap `/courses` par bhej diya jaata hai.

Home page ke program cards aur footer ke program links bhi seedha inhi pages par jaate hain.

## Enquiry Form

Backend abhi nahi hai. Form submit karne par details **WhatsApp** par pre-filled message ke roop me
khul jaati hain (`src/components/common/ContactSection.jsx` → `handleSubmit`).
Baad me API lagani ho to wahin `fetch('/api/enquiry', …)` add kar dein.

## Deploy

Ye SPA hai — `/about` jaisi URL par server ko `index.html` hi bhejna hoga, warna refresh
karne par 404 aayega.

- **Netlify** — `public/_redirects` already set hai, kuch karne ki zarurat nahi.
- **Vercel** — automatically handle ho jaata hai.
- **Apache** — `.htaccess` me:
  ```apache
  RewriteEngine On
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteRule . /index.html [L]
  ```
- **Nginx** — `try_files $uri $uri/ /index.html;`

## Aage kya add ho sakta hai

- Faculty / Results / Gallery pages — client se real data milne par
- Backend/Email integration for enquiry form
- Google Analytics / Search Console

## Week 3: Interactive Features

### Feature 1: Theme Toggle
- **What it does:** A button in the header lets the user switch between light and dark mode.
- **Why it matters:** It improves reading comfort in low-light environments.
- **Events involved:** click
- **State to track:** current theme ("light" or "dark"), stored in localStorage

### Feature 2: Contact Form Validation
- **What it does:** A contact form that validates name, email, and message before submission.
- **Why it matters:** It prevents empty or invalid submissions and gives users clear feedback.
- **Events involved:** submit, input
- **State to track:** field values, error messages, success state

## Week 4: Component Architecture

### Component Tree

App
├── Header (Client Component)
│   ├── Nav (Client Component)
│   └── ThemeToggle (Client Component) ← holds dark/light state + localStorage
├── Main
│   ├── Hero (Server Component)
│   ├── Card (Server Component) — "About Me"
│   ├── Card (Server Component) — "My Projects"
│   └── Card (Server Component) — "Contact Me"
├── Footer (Server Component)
└── ContactForm (Client Component) ← holds form field state

### Component Details
- **Header** — Client Component, renders Nav and ThemeToggle
- **Nav** — Client Component, uses Next.js Link for navigation
- **ThemeToggle** — Client Component, uses useState + useEffect + localStorage
- **Hero** — Server Component, displays welcome message, no state
- **Card** — Server Component, receives title/description/href as props, no state
- **Footer** — Server Component, displays copyright, no state
- **ContactForm** — Client Component, uses useState for name/email/message/submitted

### State Ownership Notes
- **ThemeToggle:** owns dark/light mode state, persists to localStorage with useEffect
- **ContactForm:** owns form field values and submission state
- **Card:** no state, receives props only
- **Footer:** no state, receives props only
- **Hero:** no state, pure display component
---

## Week 5: New Pages & Design Updates

### New Pages Added
- **/projects page:** displays all 7 Medium articles as clickable cards
  - Each card shows title, date, and "Read on Medium" link
  - Responsive grid layout — stacks on mobile
  - Connected to "My Projects" card on home page
- **/about page:** updated with real personal information
  - Bio: Brazilian student, San Diego, SSU, Master's in IT
  - LinkedIn button linking to real profile
  - Medium button linking to real blog

### Hero Section Updated
- Replaced generic "Welcome" text with real personal introduction
- Includes name, location, university, and areas of interest

### Navigation Updated
- Added "Projects" link to Nav component
- Nav change automatically reflected on all pages via Header reuse
- Fixed "My Projects" card href from /contact to /projects

### Design Updates
- Added .posts-grid CSS for responsive Medium article cards
- Added .post-card hover styles
- Added .about-links with LinkedIn and Medium buttons
- Added .cards-grid for home page 3-column layout
- Added .hero class for full-width welcome section
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
---

## Week 7: Async & Loading States

### Data Source
- Chose: Open-Meteo public API (no API key required)
- Why: free, reliable, no authentication needed, returns real-time weather data
- Endpoint: https://api.open-meteo.com/v1/forecast
- Location: San Diego, CA (latitude=32.7157, longitude=-117.1611)

### Three-State Component
- **Loading state:** skeleton screen with three pulsing gray bars
- **Error state:** red error message with "Try Again" button
- **Success state:** displays temperature (°F), weather condition, and wind speed

### Fetch Lifecycle
- useEffect runs after component mounts → calls fetchWeather()
- try/catch/finally guarantees loading state always exits
- setData() triggers re-render with real weather data
- setError() triggers re-render with error message

### Skeleton Screen
- Mimics the shape of the loaded content (title bar + two lines)
- CSS animation: pulse keyframe fades opacity 1 → 0.4 → 1
- Signals "almost there" instead of just "wait"

### Refresh Control
- Button re-fetches data on click
- Disabled during refresh to prevent double-clicks
- aria-busy attribute tells screen readers refresh is in progress

### Accessibility
- error-box uses role="alert" for screen readers
- Refresh button uses aria-busy during loading
- prefers-reduced-motion media query disables all animations for users who need it

### New Page Added
- /weather page added to site and navigation
- WeatherPanel is a Client Component (uses useState + useEffect)
- weather page uses Header and Footer server components

---

## Week 8: Database & Backend

### Provider Chosen
- **Neon** — free tier, serverless Postgres, integrates cleanly with Vercel
- Why: no API key complexity, generous free tier, pooled connections work out of the box

### Schema Definition
```prisma
model Message {
  id        Int      @id @default(autoincrement())
  name      String
  email     String
  body      String
  createdAt DateTime @default(now())
}
```
- Chose `Message` model because the contact form is the primary data entry point
- `createdAt` auto-timestamps every submission for ordering

### Server Action (Write Path)
- `app/actions.ts` marked with "use server"
- Reads FormData, validates all fields, uses Prisma to insert into database
- Database credentials never reach the browser

### Server Component (Read Path)
- `app/messages/page.tsx` is a Server Component
- Fetches all messages with `prisma.message.findMany()` ordered by newest first
- `export const revalidate = 0` added to prevent Vercel caching stale data

### Environment Variables
- `DATABASE_URL` added to Vercel → Settings → Environment Variables
- Also stored in `.env` and `.env.local` locally (both gitignored)
- `postinstall: prisma generate` added to `package.json` to fix Vercel build

### New Pages Added
- `/messages` — displays all submitted contact messages from the database

---

## Week 9: Authentication & Security

### Authentication
- Installed Auth.js (NextAuth v5) with GitHub OAuth provider
- Created `auth.ts` in project root with GitHub provider
- Added `app/api/auth/[...nextauth]/route.ts` handler
- Added `AuthButton` component to Header — shows Sign In or Hi, [name] + Sign Out
- AUTH_SECRET, AUTH_GITHUB_ID, AUTH_GITHUB_SECRET stored in .env.local and Vercel

### Protected Route
- `/messages` page is protected server-side using `auth()` from Auth.js
- Unauthenticated users are redirected to `/api/auth/signin` before any data is fetched
- Server-side protection cannot be bypassed with browser DevTools

### OWASP Mitigations
- **A05 Security Misconfiguration:** Added HTTP security headers in `next.config.ts`
  - X-Frame-Options: DENY
  - X-Content-Type-Options: nosniff
  - Referrer-Policy: strict-origin-when-cross-origin
  - Permissions-Policy: disables camera, microphone, geolocation
- **A07 Authentication Failures:** AUTH_SECRET environment variable, server-side sessions, protected route redirect

### Performance
- Lighthouse audit on live Vercel URL: 100/100/100/100
- Vercel Analytics and Speed Insights enabled
- No performance improvements needed — scores were already perfect
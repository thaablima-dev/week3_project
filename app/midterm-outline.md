# Midterm Recording Outline
IT516 | Thais Lima

---

## Section 1 — Overview & Target User (~90 sec)

- Personal portfolio site — one place for everything about me
- Audience: professors, future employers, anyone curious about my work
- Problem: needed a real online presence, not just a class exercise
- Built week by week: HTML → CSS → JavaScript → React/Next.js
- Four pages: Home, About, Projects, Contact

---

## Section 2 — Live Walkthrough (~3 min)

1. Open live Vercel URL in browser
2. **Home page**
   - Show header + nav (Home, About, Projects, Contact)
   - Point out personal intro bio (updated today — real info about me)
   - Show 3 cards below (About, Projects, Contact)
   - Click Toggle Theme → whole site goes dark
   - Navigate to another page → theme stays dark (localStorage)
3. **About page**
   - Real personal bio added today (Brazilian, San Diego, SSU, Master's in IT)
   - LinkedIn button → opens my real LinkedIn profile
   - Medium button → opens my real Medium blog
4. **Projects page** ← new page added today
   - All 7 Medium articles displayed as cards
   - Each card: title, date, "Read on Medium" link
   - Resize browser → cards stack on mobile (responsive grid)
   - "My Projects" card on home now links here correctly
5. **Contact page**
   - Form: name, email, message
   - Click Send empty → red error messages (validation)
   - Fill correctly → green success message
   - Page does NOT reload (event.preventDefault)

---

## Section 3 — Architectural Decisions (~3 min)

### Decision 1 — Semantic HTML
- Chose: `<article>` for cards instead of `<div>`
- Alternative rejected: generic `<div>` tags everywhere
- Why: semantic tags tell browsers + screen readers what content means → better accessibility + SEO

### Decision 2 — Design System
- Chose: simple dark gray / light gray / white palette
- Alternative rejected: colorful or complex design
- Why: content stays the focus; CSS custom properties make dark mode consistent across all elements without repeating code

### Decision 3 — React over Vanilla JS
- Chose: React components in Week 4
- Alternative rejected: keeping vanilla JS from Week 3 (document.getElementById)
- Why: ThemeToggle needed on every page → vanilla JS meant copy-pasting same code everywhere → React lets me write it once and reuse it

### Decision 4 — Component Architecture
- Chose: small reusable components (Header, Footer, Nav, Hero, Card, ThemeToggle, ContactForm)
- Alternative rejected: one big page file with everything in it
- Why: Server Components (Header, Footer, Nav) ship zero JS → faster load; Client Components (ThemeToggle, ContactForm) only ship JS where interactivity is needed

---

## Section 4 — Reflection (~90 sec)

- **Would reverse:** global CSS stylesheet → too long, hard to manage → would use CSS Modules instead
- **Most proud of:** Theme Toggle — first real interactive feature, works across pages, persists with localStorage
- **What's next:** connect contact form to a real backend + keep improving portfolio design
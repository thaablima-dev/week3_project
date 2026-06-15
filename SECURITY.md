# Security

## OWASP Top 10 Mitigations Applied

### A05 — Security Misconfiguration
Added HTTP security headers in `next.config.ts` for all routes:
- `X-Frame-Options: DENY` — prevents the site from being embedded in iframes, protecting against clickjacking attacks.
- `X-Content-Type-Options: nosniff` — stops browsers from guessing file types, preventing MIME-type confusion attacks.
- `Referrer-Policy: strict-origin-when-cross-origin` — limits what referrer information is shared with external sites.
- `Permissions-Policy` — disables access to camera, microphone, and geolocation APIs that this site does not need.

### A07 — Identification and Authentication Failures
Implemented Auth.js (NextAuth v5) with GitHub OAuth for authentication:
- `AUTH_SECRET` is stored as an environment variable and never committed to the repository.
- Sessions are managed server-side using Auth.js secure defaults.
- The `/messages` route is protected server-side — unauthenticated users are redirected to sign in before any data is returned.
- Sign-out clears the session completely.
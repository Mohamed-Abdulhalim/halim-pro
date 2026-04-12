# halim.pro

Portfolio site for Mohamed Abdulhalim — Data Operations & Automation Engineer.

Built with Next.js 14 (App Router), TypeScript, CSS Modules. No external UI libraries.

## Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: CSS Modules + CSS custom properties
- **Fonts**: Syne (display) + DM Mono (body) via Google Fonts
- **Hosting**: Vercel
- **Domain**: halim.pro

## Local dev (GitHub Codespaces or local)

```bash
npm install
npm run dev
```

Opens at http://localhost:3000

## Deploy to Vercel

### First time

1. Push this repo to GitHub
2. Go to vercel.com, import the repo
3. Framework preset: Next.js (auto-detected)
4. Deploy — you'll get a `*.vercel.app` URL immediately

### Connect halim.pro domain

1. In Vercel project settings, go to Domains
2. Add `halim.pro` and `www.halim.pro`
3. Vercel gives you DNS records (either A record or CNAME)
4. Add those in your domain registrar's DNS panel
5. Propagation takes 5-30 minutes

### Subsequent deploys

Push to `main` branch — Vercel auto-deploys on every push.

## Project structure

```
halim-pro/
  app/
    globals.css       # design tokens, fonts, reset
    layout.tsx        # root layout + metadata
    page.tsx          # home page (assembles sections)
  components/
    Nav.tsx / .css    # sticky nav with scroll state
    Hero.tsx / .css   # full-height hero with grid animation
    Projects.tsx/.css # three live projects (LeadSignal, CashRunway, EdgePulse)
    Work.tsx / .css   # client work (عتاد, Highspire, Peaky Scouts)
    About.tsx / .css  # bio + three pillars
    Contact.tsx / .css# CTA section
    Footer.tsx / .css # links + copyright
```

## Updating content

All content is in the component files as plain data arrays/strings — no CMS.

- Add a new project: edit `components/Projects.tsx`, add an entry to the `projects` array
- Add client work: edit `components/Work.tsx`, add to the `work` array
- Update links: `components/About.tsx` (platform links) and `components/Footer.tsx`
- Update email: `components/Contact.tsx`

## GitHub Codespaces

This repo works out of the box in a Codespace. Node.js 18+ is pre-installed.
Port 3000 is auto-forwarded when you run `npm run dev`.

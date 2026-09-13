# 360devz — company website

Company site for **360 DEVZ LTD**, with EduCloud as the flagship product.
Next.js 15 (App Router) · React 19 · TypeScript (strict) · no UI dependencies.

Design follows the BeCode reference: white ground, near-black type, oversized
Nexa Heavy headlines, hairline rules doing the work boxes and shadows usually
do, and one accent colour used sparingly.

---

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

| Command | What it does |
|---|---|
| `npm run dev` | Local dev server with hot reload |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run typecheck` | TypeScript, no emit |
| `npm run build:fonts` | Regenerate the woff2 faces from the Nexa OTFs |

> **Do not run `npm run build` while `npm run dev` is running.** They share
> `.next` and the build will corrupt the dev server's chunks — you get 500s on
> every route. If that happens: stop both, `rm -rf .next`, start again.

---

## Pages

| Route | What it is |
|---|---|
| `/` | Hero · stats · how we work · services · case study · founder · graduate programme · recognition · pull quote · EduCloud · CTA |
| `/services` | Four services, hosting plans, assessment scope, graduate programme, case study, FAQ |
| `/educloud` | The EduCloud product page |
| `/about` | Stats, principles, founder, graduate programme, recognition, partnership, company |
| `/contact` | Hire us — how to reach us, what to include, FAQ |
| `/privacy` | Privacy & data protection |

---

## Before you deploy — four things to change

1. **Email.** `src/content/site.ts` → `company.email` is `hello@360devz.com`, which does not exist yet. Set up a mailbox on your own domain and use it. Do not ship a Gmail address in the footer of a software company's website.
2. **Hosting prices.** `src/content/site.ts` → `plans` all say **"On request"**. This is the one thing on the site nobody else can fill in for you. Price each tier off your real server cost plus the hours it takes, then put a number there — a published price removes a round of email from every enquiry.
3. **Testimonials.** `src/content/site.ts` → `testimonials` are three clearly-marked placeholders (they render muted so you can spot them). Replace them with real quotes, and publish one only with written permission from the person quoted.
4. **Founder photo.** Save the portrait anywhere inside **** — any filename, any format (jpg, png, webp, avif).  scans that folder and uses the first image it finds, preferring one whose name contains "moses", "founder" or "portrait". No code change needed. With the folder empty the frame shows "MS" initials instead of a broken image. Square, 800x800 or larger reads best; the frame crops with .

Plus: `src/app/layout.tsx` → `metadataBase` still points at `https://360devz.com`. Point it at whatever domain you register.

---

## Deploy

**Vercel** (easiest for Next.js)

```bash
npx vercel
```

Follow the prompts, then `npx vercel --prod`. Point your domain at it in the Vercel dashboard.

**Any static host** (GitHub Pages, Netlify drop, Cloudflare Pages, cPanel, S3)

Uncomment `output: "export"` in `next.config.ts`, then `npm run build`. Next writes a fully static site to `./out`. Upload those files — every page here is statically prerendered, so nothing is lost.

---

## Where the content lives

**All copy is in one file: `src/content/site.ts`.** It is fully typed, so if you break a shape the build tells you. You should not need to open a component to change wording.

```
src/
  content/site.ts        <- every string on the site
  app/
    layout.tsx           <- metadata, SEO, favicon, font preloads
    page.tsx             <- company homepage (the full section set)
    services/page.tsx    <- services, plans, assessment scope, case study, FAQ
    educloud/page.tsx    <- the EduCloud product page
    about/page.tsx       <- principles, team, recognition, partnership
    contact/page.tsx     <- hire us
    privacy/page.tsx     <- privacy & data protection
    globals.css          <- the whole design system
  components/
    SiteNav.tsx          <- thin sticky bar + mobile menu (client component)
    Hero.tsx             <- oversized headline between rules; `compact` variant
    Section.tsx          <- eyebrow + heavy rule + big headline + lead
    Stats.tsx            <- the counter row
    ProcessSteps.tsx     <- numbered rows, hairline separated
    ServiceCards.tsx     <- three numbered service columns
    FounderCard.tsx      <- portrait + facts (initials until the photo exists)
    GraduateProgramme.tsx<- for-graduates / for-clients columns
    Recognition.tsx      <- standing (left) + testimonials (right)
    CaseStudy.tsx        <- two-panel selected work
    PlanTable.tsx        <- hosting tiers
    FaqList.tsx          <- native <details> accordion, works without JS
    Cta.tsx              <- centred dark closing band
    DigestMock.tsx       <- example parent message (EduCloud)
    SpokenExample.tsx    <- the Kinyarwanda utterance (EduCloud)
    ApproachTabs.tsx     <- dark tabbed "how it works" (EduCloud, client)
    SiteFooter.tsx       <- four-column footer
  scripts/
    build-fonts.js       <- OTF -> woff2 conversion
brand-source/            <- alternates and unused marks, NOT served
```

### Design system

Every colour, size and spacing value is a CSS custom property at the top of `globals.css`. Change one there and it changes everywhere.

| Token | Value | Role |
|---|---|---|
| `--ink` | `#0d0d0d` | Headlines and primary text |
| `--ink-soft` | `#3d3d3d` | Body copy |
| `--muted` / `--faint` | `#767676` / `#a3a3a3` | Labels, captions, placeholders |
| `--paper` / `--paper-alt` | `#ffffff` / `#f7f6f4` | Section grounds, alternating |
| `--line` / `--line-strong` | `#e6e4e0` / `#111111` | Hairlines and heading rules |
| `--dark` | `#101312` | Inverted sections, CTA, footer |
| `--accent` | `#c9962b` | The one accent — the company gold |

The section rhythm is: `eyebrow` (small tracked uppercase label) → 2px black rule → `head__title` (oversized) → optional `head__lead` → content. `<Section>` renders all of it; pass `tone="alt"` for the off-white ground or `tone="dark"` for the inverted one.

### Brand

The mark is a lens over a system — black disc, white linework, gold focal point, matching `--ink` and `--accent` exactly.

| File | Role |
|---|---|
| `public/brand/logo.png` | The logo. 512x512, used in the nav (36px) and footer (44px) |
| `src/app/icon.png` | Browser tab icon, 256x256. Next picks this up by filename — no `<link>` tag needed |
| `src/app/apple-icon.png` | iOS home screen, 180x180 on a white ground (Apple composites transparency onto black) |

On the dark footer the black disc merges with the background and the white linework carries the shape. That is intentional and it reads well — do not add a light version.

**To change the logo:** replace `public/brand/logo.png`, then regenerate the two icons from it at 256x256 and 180x180. Anything unused lives in `brand-source/` (outside `public/`, so not served) — three alternate colourways, and an earlier three-arc SVG mark with its generator.

### Typography — Nexa

Self-hosted from `public/fonts` as four woff2 faces:

| File | Weight | Used for |
|---|---|---|
| `nexa-book.woff2` | 400 | Body copy, UI |
| `nexa-book-italic.woff2` | 400 italic | Emphasis, notes, captions |
| `nexa-bold.woff2` | 700 | Sub-headings, card titles, nav |
| `nexa-heavy.woff2` | 900 | Hero and section headlines |

168 KB total, down from 493 KB of OTF. Heavy and Book are preloaded in `layout.tsx` because they are above the fold on every page; Bold and italic load normally.

**To regenerate** (only needed if a face changes — the woff2 files are committed):

```bash
npm run build:fonts                      # reads from the default Downloads path
npm run build:fonts -- /path/to/otf-dir  # or point it somewhere else
```

**Licensing — resolve this before the site goes public.** The OTF originals are Fontfabric's commercial Nexa (v001.001, 2012), and their embedding permission bit is set to `fsType 4` — *preview and print only*. That flag is the foundry saying the desktop licence does not cover embedding, and self-hosting a webfont is embedding. Two clean ways out:

- Buy the Nexa **webfont** licence from Fontfabric and drop their woff2 files into `public/fonts` under the same four names. Nothing else changes.
- Or switch to a licence-free geometric sans with a similar feel — Poppins, Jost or Outfit are all on Google Fonts and open-licensed. Change `--sans` in `globals.css` and delete `public/fonts`.

Note also that `Nexa Bold.otf` / `Nexa Light.otf` in that download (the ~30 KB files) are the older 2010 free two-weight release with 232 glyphs — a different, smaller font from the 497-glyph family used here. Don't mix them.

---

## Five rules for editing this site

**1. Do not claim what is not built.** The EduCloud hero carries a status line — *"in development — choosing our first partner schools for pilot"* — and the "Built here" section splits explicitly into *Built and in place* vs *In development*. Both are deliberate. When something ships, move it across; do not quietly drop the distinction.

**2. No framework or language lists, anywhere.** Buyers hire outcomes, not stacks. No tech-stack section, no platform logo wall, no framework names in the stats row. The only exception is the graduate-programme copy, where the audience genuinely is engineers deciding whether to apply.

The BeCode "clients & partners" logo slot is deliberately absent: with one commercial partner it cannot fill a grid. Bring it back when there are real client logos to put in it — and only with written permission to use them.

**3. Do not add PropertyOps, FleetOps or CloudShield as products.** They do not exist yet. The *hosting and managed care* service on `/services` is CloudShield's service list delivered manually, by hand, today — which is true. Selling it as a named product is not.

**4. No TIN, no certificate image, no client names without permission.** The recognition block and footer carry registration, DPO status, the payment partnership and the city — the facts that do the trust work. The tax number and the registration document are for due diligence, on request, not for a public page. The case study names a sector, not a company. On payments, **name only Centrika** — e-mo and XentriPay sit under Centrika and must not appear as separate partners.

**5. Every commitment on this site is one you can meet.** The plans promise next-business-day or same-business-day support, not 24/7. The FAQ says so explicitly, and says why. If you later staff it, change both together.

---

## Privacy page

`src/app/privacy/page.tsx` describes real commitments the product is designed around — teacher confirmation before publication, deletion of voice recordings after confirmation, tenant isolation, no training on client data without a basis.

**Two things to resolve before real student data is in the system:**

- Have this reviewed against Rwanda's data protection law by someone qualified. It is a solid draft, not legal advice.
- The cross-border processing section is written honestly but generically. Once you know which model provider and region you are using, name the specifics and reflect them in your school agreements.

**And one for the services side:** the site offers hosting and security assessment to third parties. Those need their own written agreements — scope, data location, access, retention, and authorisation for anything active. The privacy page covers EduCloud, not client engagements.
"360devz-web"

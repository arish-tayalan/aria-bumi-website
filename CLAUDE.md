# Aria Bumi Resources — Company Website

## Goal
A fast, mobile-first company portfolio site for Aria Bumi Resources, an electrical and mechanical engineering contractor in Johor Bahru. It has two jobs:
1. **Credibility** for factory clients, consultants and tender evaluators: registrations (ST, CIDB), qualified team, and completed projects.
2. **Leads**: make it effortless to WhatsApp, call or send an enquiry.

Audience: factory managers, procurement/tender staff, shop and home owners in Johor. Most visitors arrive on a phone via a WhatsApp link or Google search.

## Stack
- Astro (latest stable) + Tailwind CSS, static output
- Astro content collections: `projects` from `src/content/projects/*.md` (schema below)
- Images through `astro:assets` (`<Image />`) for automatic resizing and WebP
- Contact form: Web3Forms (access key in `.env` as `PUBLIC_WEB3FORMS_KEY`), with honeypot spam protection
- Deploy: Cloudflare Pages or Vercel
- Analytics: Cloudflare Web Analytics (no cookies, so no consent banner needed)
- No backend, no database, no CMS. All content is maintained by editing Markdown.

## Source content in this kit
- `content/company.md`: all company facts, services, certificates, team, vision/mission. **Single source of truth.** Move it into `src/data/` as typed data (e.g. `company.ts`) and use it everywhere; never hard-code phone numbers or addresses in components.
- `content/projects/*.md`: 10 projects with frontmatter. Move into `src/content/projects/`.
- `assets/`: images extracted from the company profile PDF. Move into `src/assets/` so astro:assets can optimise them, and update paths.

## Pages
1. **Home** `/`
   - Hero: company name, one-line value proposition, primary CTA "WhatsApp Us", secondary "View Projects". Background: a strong industrial project photo with a dark overlay.
   - Trust strip: "Registered with Suruhanjaya Tenaga · CIDB G3 · TNB"
   - Services overview (6 cards with icons from lucide)
   - Featured projects (projects with `featured: true`)
   - "Why us" section: licensed electrical contractor, qualified chargeman & wireman, industrial + residential experience, Johor-based
   - CTA band: "Have a project? Get a quote" + WhatsApp/call buttons
2. **About** `/about`: story (mention the company was formerly known as Aria Electro Mech, so returning clients recognise it), vision & mission (use the cleaned-up wording), team section (roles + ST competency qualifications as text), office photos.
3. **Services** `/services`: one section per service, each with description, typical clients (home / shop / factory) and a CTA. Optionally individual service pages later for SEO.
4. **Projects** `/projects`: grid filterable by category (control-systems, power, mechanical, hvac, earthing-lightning, security). Client-side filter with a tiny script, no framework.
5. **Project detail** `/projects/[slug]`: title, category, client/location/year when present (hide empty fields), description, image gallery with lightbox, before/after layout for the lightning project, CTA at the bottom.
6. **Certifications** `/certifications`: ST and CIDB cards with registration number, class/grade, validity, and a thumbnail that opens full size. List CIDB grade/category/specialisation codes in a table.
7. **Contact** `/contact`: form (name, company, phone, email, service needed, message), WhatsApp & call buttons, address, email, embedded Google Map of Arked Johor Jaya, business hours (TODO: confirm).

Global: sticky header with logo + nav + "WhatsApp" button; footer with address, phones, email, SSM no., quick links. A floating WhatsApp button on all pages (bottom-right, respects safe-area insets). Click-to-call `tel:` links.

## Project content schema
```ts
{
  title: string,
  category: 'control-systems' | 'power' | 'mechanical' | 'hvac' | 'earthing-lightning' | 'security',
  order: number,
  client?: string, location?: string, year?: number | null,
  featured: boolean,
  cover: image(),
  images: image()[],
}
```
Image filenames containing `-collage` are multi-photo collages from the PDF slides: show them full-width, never crop them into thumbnails with `object-fit: cover`. Prefer non-collage images for cards and covers. Filenames with `-before`/`-after` should render as a before/after comparison.

## Design direction
- Brand colours come from the logo: deep ocean blue (~#0B4F8A) as primary, leaf green (~#7AC943) as accent. Do NOT copy the PDF's neon green (#66FF33) border style; it looks dated on the web.
- Clean, industrial, trustworthy. White/light grey surfaces, generous spacing, real project photos doing the heavy lifting.
- Typography: a solid sans (e.g. Inter or Plus Jakarta Sans) with system fallbacks.
- Mobile-first; test at 360px width. Large tap targets for WhatsApp/call.
- Bilingual is a later phase: keep all UI strings in one file so a Bahasa Malaysia version can be added.

## SEO
- Unique `<title>` and meta description per page, Open Graph image
- `LocalBusiness` / `Electrician` JSON-LD with name, address, phone, email, geo, areaServed: Johor Bahru / Johor
- `@astrojs/sitemap`, robots.txt, canonical URLs
- Descriptive alt text on every image (derive from project title + what's shown)
- Target phrases: "electrical contractor Johor Bahru", "kontraktor elektrik Johor Bahru", "control panel Johor", "lightning protection Johor", "air compressor installation Johor"

## Performance & quality bars
- Lighthouse ≥ 95 on Performance, Accessibility, Best Practices, SEO (mobile)
- All images via astro:assets, lazy-loaded below the fold
- No layout shift; minimal JS (lightbox + project filter + form only)

## Do NOT publish (privacy / security)
The company profile PDF contains documents that must never appear on the site:
- IC numbers, dates of birth and photos on personal competency certificates (Project Manager, Chargeman, WAH certificates)
- SSM business info page (director's IC and home address)
- MBJB business licence scan (IC and home address)
- TIN number and bank/branch details
- University certificates (student ID)
Only the ST and CIDB company certificates are included in `assets/certificates`. Qualifications are stated as text.

## Open TODOs for Arish
- Fill client / location / year for each project (or leave blank)
- ~~Confirm which number receives WhatsApp leads and business hours~~ (done: 012-712 0232; Mon-Fri 8am-5pm, Sat 8am-1pm, closed Sun/public holidays)
- Add `PUBLIC_WEB3FORMS_KEY` to the Cloudflare Pages environment variables (`.env` is not committed)
- Get a vector/high-res logo (current one is 244px from the PDF) or recreate it as SVG
- Replace low-res collage images with original photos where possible
- Confirm team names can be shown publicly
- Register the domain ariabumiresources.com (already set as `site` in astro.config.mjs) and set up a company email on it
- ST registration expires 11/12/2026: renew and update the certificates page
- Set up Google Business Profile and link it to the site

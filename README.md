# ACIT Computer Center — AI Training Workshop website

A single-page Next.js (App Router) landing site. No database, paid APIs or authentication.
Enquiries are sent by opening WhatsApp with a pre-filled, URL-encoded message.

## Requirements
- Node.js 20.9 or newer (tested on Node 22)

## Install and run
```bash
npm install
cp .env.example .env.local     # then set NEXT_PUBLIC_SITE_URL
npm run dev                    # http://localhost:3000
```

## Production build
```bash
npm run build
npm run start                  # http://localhost:3000
```
`NEXT_PUBLIC_SITE_URL` is read at build time. Set it to your real domain (no trailing slash)
**before** running `npm run build`, for example `https://your-domain.example`. It drives the canonical tag,
Open Graph URLs, `sitemap.xml`, `robots.txt` and JSON-LD. If it is unset, the site works locally, and
`robots.txt` leaves out the sitemap line and JSON-LD leaves out `url`.

## Structure
```
app/
  layout.tsx            fonts, site-wide metadata (title, canonical, Open Graph, Twitter)
  page.tsx              the one landing page + JSON-LD
  globals.css           Tailwind theme tokens, glass/glow styles, reduced-motion rules
  robots.ts  sitemap.ts
  opengraph-image.tsx  twitter-image.tsx  icon.svg
components/             Navbar, Hero, About, Learn, Projects, Who, How, Director, FaqSection, Contact, Footer ...
  EnquiryForm.tsx       client-side validation + WhatsApp hand-off
lib/
  site.ts               verified institute details, links, nav (edit details here)
  enquiry.ts            validation (Indian mobile rules) and WhatsApp message builder
```

## Things you may want to change later
- **Director photo:** replace the initials avatar in `components/Director.tsx` with a `next/image` once a portrait exists.
- **Details:** name, phone, address and links all live in `lib/site.ts`.
- **FAQ rich results:** FAQPage structured data is deliberately not included, because Google currently limits FAQ rich
  results to well-known government and health sites.
- **Local search:** structured data lists only the verified name, address, phone and director. Add `sameAs`,
  opening hours or geo coordinates only after they are verified (for example, once a Google Business Profile exists).

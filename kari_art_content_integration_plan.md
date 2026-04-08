# Kari Koleva — Content Integration Plan

Source of truth: `WebsiteText.docx` (project root)  
Codebase: Next.js 14 App Router — `app/`, `components/`, `lib/`

---

## 1. Content Sections in WebsiteText.docx

| # | Section | Location in doc |
|---|---------|-----------------|
| 1 | Homepage Hero — title + subtitle + CTA | Home page, first block |
| 2 | Homepage Reviews scroll | Home page, second block |
| 3 | Homepage Meet the Artist — photo + bio snippet + CTA | Home page, third block |
| 4 | Commissions — page title + closed notice | Commissions section, top |
| 5 | Commissions — "How to Order" (3 steps) | Commissions section |
| 6 | Commissions — Price List (Apr 2026) | Commissions section |
| 7 | Commissions — Customization Options | Commissions section |
| 8 | Commissions — Photo Tips (do's & don'ts) | Commissions section |
| 9 | Commissions — Reviews (bottom) | Commissions section, bottom |
| 10 | About — full biography (multi-paragraph) | About me page |
| 11 | About — "How it all started" subsection | About me page |
| 12 | About — "Life with animals" subsection | About me page |
| 13 | Contact — intro + form reason selector | Contact Page |
| 14 | TBD items | Scattered throughout doc |

---

## 2. Content-to-Codebase Mapping

### Homepage (`app/page.tsx` → `components/featured-gallery.tsx`, `components/about-section.tsx`)

| Doc content | Current code location | Target after integration |
|---|---|---|
| Hero title "Turn your pet into a unique painting" | `lib/copy.ts` → `homeCopy.sectionTitle` (currently "Animal portrait") | `lib/copy.ts` `homeCopy.heroTitle` — rendered in `FeaturedGallery` heading area |
| Hero subtitle (visit commission page, weeks to complete) | Not present | `lib/copy.ts` `homeCopy.heroSubtitle` — rendered below hero title in `FeaturedGallery` |
| "Commission info" CTA button | Not present | `lib/copy.ts` `homeCopy.heroCTA` + link rendered in `FeaturedGallery` header |
| Reviews scroll | Only on `/commissions` | `CommissionsReviewsSection` also imported in `app/page.tsx` |
| "Meet the Artist" title | `homeCopy.sectionTitle` = "Animal portrait" | `lib/copy.ts` `homeCopy.meetTitle` |
| Meet the artist body (Hello! I'm a Bulgarian-American…) | `lib/copy.ts` `homeCopy.sectionBody` (wrong text) | `lib/copy.ts` `homeCopy.meetBody` |
| "About me" CTA button on homepage | Not present | `lib/copy.ts` `homeCopy.meetCTA` + rendered in `AboutSection` |
| Artist photo on homepage meet section | Not present | Placeholder from `lib/about-page-copy.ts` `aboutPageImage.src`, rendered in `AboutSection` |

---

### Commissions Page (`app/commissions/page.tsx`)

| Doc content | Current code location | Target after integration |
|---|---|---|
| Page subtitle | `lib/commissions-copy.ts` `titleBandSubtitle` (generic) | Updated to reflect portrait process tagline |
| "Commissions closed currently" notice | Not present | `lib/commissions-copy.ts` `closedNotice` + new `CommissionsClosedBanner` component |
| Intro ("Please read all before commissioning") | `lib/commissions-copy.ts` `intro` (generic) | Updated in `lib/commissions-copy.ts` |
| How to Order — 3 steps | Not present | New `lib/commissions-how-to-order.ts` + new `CommissionsHowToOrder` component |
| "Order now" CTA (after steps) | Not present | Added inside `CommissionsHowToOrder` |
| Price List | `lib/commissions-resources.ts` title "Price Sheet", href "#" | New `lib/price-list.ts` + new `PriceList` component replacing resource card |
| "Order now" CTA (after price list) | Not present | Added inside `PriceList` |
| Customization Options | Not present | New `lib/customization-options.ts` + new `CustomizationOptions` component |
| Photo Tips (do's & don'ts) | `lib/commissions-resources.ts` title "Photo Guide", href "#" | New `lib/photo-tips.ts` + new `PhotoTips` component replacing resource card |
| Reviews at bottom | `CommissionsReviewsSection` already on page | Keep; update placeholder note text |
| Form intro | `lib/commissions-copy.ts` `formIntro` | Updated with real text from doc |

---

### About Page (`app/about/page.tsx` → `components/about-page-body.tsx`)

| Doc content | Current code location | Target after integration |
|---|---|---|
| Artist photo | `lib/about-page-copy.ts` `aboutPageImage` (Unsplash placeholder) | Still TBD — placeholder kept, `alt` updated |
| Main bio (Hi, I'm Kari Koleva…) | `lib/about-page-copy.ts` `aboutPageCopy.body` (short placeholder) | Updated with full opening bio paragraphs |
| "How it all started" subsection | Not present | New fields in `lib/about-page-copy.ts` + rendered in `AboutPageBody` |
| "Life with animals" subsection | Not present | New fields in `lib/about-page-copy.ts` + rendered in `AboutPageBody` |
| Original Alex painting placeholder | Not present (doc says {original alex paintings}) | Photo slot placeholder in `AboutPageBody` — **TBD** |
| Baby photo placeholder | Not present | Photo slot placeholder — **TBD** |
| "Me and Alex" photo placeholder | Not present | Photo slot placeholder — **TBD** |
| "Contact" CTA button | `lib/about-page-copy.ts` `contactButtonLabel` = "Contact" | Unchanged (correct) |

---

### Contact Page (`app/contact/page.tsx` → `components/contact-form.tsx`)

| Doc content | Current code location | Target after integration |
|---|---|---|
| Intro "I'd love to hear from you…" | `lib/contact-page-copy.ts` `formIntro` (generic) | Updated in `lib/contact-page-copy.ts` |
| "For commissions, please share details…" note with link | Not present | `lib/contact-page-copy.ts` `commissionsNote` |
| Reason of contact selector (commission request / other) | Not present | `lib/contact-page-copy.ts` `fields.reason` + select field in `ContactForm` |
| Contact form | `components/contact-form.tsx` | Updated with reason field + new intro |

---

## 3. Content Classification

### Hero copy
- Title: "Turn your pet into a unique painting"
- Subtitle: "Looking for a personal pet portrait? Visit my commission page for all the details, including pricing, sizes, the process, and tips and tricks when ordering. Each portrait takes weeks to complete so be sure to get in touch early."
- CTA: "Commission info" → `/commissions`

### Section headers
- Homepage: "Meet the Artist"
- Commissions: "How to Order Your Pet Portrait", "Price List", "Customization Options", "Photo Tips", "Your portrait comes with", "Adjustments", "Do's", "Don'ts"
- About: "How it all started", "Life with animals"

### Body text
- All biography paragraphs (homepage snippet + full about page text) — see lib/copy.ts + lib/about-page-copy.ts
- How to Order step descriptions (3 paragraphs)
- Adjustment descriptions (Appearance, Objects & Accessories, Special Requests)
- Background options description
- Photo Tips explanation paragraphs

### CTAs
- Homepage: "Commission info" → `/commissions`, "About me" → `/about`
- Commissions: "Order now" → `/contact` (appears twice — after steps and after price list)
- About: "Contact" → `/contact` (unchanged)

### Reviews
- Both homepage and commissions page show the reviews scroll section
- Current reviews are placeholder data — copy in `lib/commissions-reviews-data.ts` updated to better reflect real context
- Actual review text/attribution: **TBD** (real reviews to be supplied by client)

### Photo placeholders
All image slots are **TBD** — flagged in code with placeholder images and descriptive `alt` attributes:
- Artist portrait photo (main photo on homepage meet section + about page)
- Original Alex painting(s) — about page "How it all started"
- Baby photo — about page "Life with animals"
- "Me and Alex" photo — about page "Life with animals"
- Do's example photos — commissions photo tips
- Don'ts example photos — commissions photo tips
- Plain background example — commissions customization
- Detailed background example — commissions customization

---

## 4. TBD Content (do NOT invent — keep clearly flagged)

| Item | Where flagged |
|------|--------------|
| International shipping policy | `lib/commissions-copy.ts` comment; doc says TBD |
| Payment methods (PayPal? Bank transfer?) | `lib/commissions-copy.ts` comment; doc says TBD |
| Frame photos and prices | `lib/customization-options.ts` + component; doc says TBD |
| All real review quotes + attributions | `lib/commissions-reviews-data.ts` placeholder note kept |
| All photo assets (artist, pets, Alex paintings, baby, backgrounds) | Unsplash placeholders with clear alt text |
| Background option photos | Placeholder slots in customization section |

---

## 5. Layout Adjustments for Readability

| Adjustment | Reason |
|---|---|
| Hero area in FeaturedGallery gets title + two-line subtitle + CTA button | Gallery heading currently too minimal; hero needs hierarchy |
| AboutSection on homepage gains a photo column (responsive 1→2 col) | Doc specifies `(photo) Hello! I'm…` side-by-side layout |
| Homepage gets `CommissionsReviewsSection` between gallery and meet-artist | Doc shows reviews between hero and meet-the-artist |
| Commissions page: "Commissions closed" banner at top (amber/muted tone) | Closed status must be immediately visible |
| Commissions "How to Order" uses numbered step cards | 3-step process needs visual separation; cards match site aesthetic |
| Price list uses a responsive table/grid (not inline prose) | Pricing data is tabular; easier to scan as a grid |
| Photo Tips uses two-column do/don't layout | Doc explicitly says Do's / Don'ts — visual contrast needed |
| About page sections separated by dividers with sub-headings | Three distinct narrative blocks need clear demarcation |
| Long bio paragraphs get `max-w-copy` and comfortable `leading-relaxed` | Already in use site-wide; verify it applies to all new text |

---

## 6. Files Changed

### New `lib/` data files
| File | Purpose |
|------|---------|
| `lib/commissions-how-to-order.ts` | 3-step commission process (Request → Painting → Shipping) |
| `lib/price-list.ts` | Pricing tiers for 5×7, 8×10, 13×19 — April 2026 |
| `lib/customization-options.ts` | What's included, adjustment types, frame/background options |
| `lib/photo-tips.ts` | Intro paragraphs + do's and don'ts lists |

### Updated `lib/` data files
| File | What changed |
|------|-------------|
| `lib/copy.ts` | Replaced `sectionTitle`/`sectionBody` with hero copy (`heroTitle`, `heroSubtitle`, `heroCTA*`) and meet-the-artist copy (`meetTitle`, `meetBody`, `meetCTA*`) |
| `lib/about-page-copy.ts` | Full `bio[]` array (2 paragraphs), `howItStarted[]` (3 paragraphs), `lifeWithAnimals[]` (4 paragraphs), sub-photo placeholders |
| `lib/commissions-copy.ts` | Real subtitle, `commissionsOpen` flag, `closedNotice`, real intro text, real `formIntro` |
| `lib/contact-page-copy.ts` | Real `formIntro`, `commissionsNote`, reason-of-contact `fields.reason` + `reasonOptions` array |
| `lib/commissions-reviews-data.ts` | Updated comments from "Sample layout" to TBD; attribution text updated |

### New components
| File | Purpose |
|------|---------|
| `components/commissions-closed-banner.tsx` | Amber banner shown when `commissionsCopy.commissionsOpen === false` |
| `components/commissions-how-to-order.tsx` | 3 numbered step cards + "Order now" CTA → `/contact` |
| `components/price-list.tsx` | Pricing grid (one card per size tier) + "Order now" CTA → `/contact` |
| `components/customization-options.tsx` | What's included, adjustments, frame options (TBD), background options (with placeholder image slots) |
| `components/photo-tips.tsx` | Intro text + two-column do/don't layout (with photo placeholder note) |

### Updated components
| File | What changed |
|------|-------------|
| `components/featured-gallery.tsx` | Imports `homeCopy`; header now shows `heroTitle` (h1), `heroSubtitle`, "Commission info" CTA button |
| `components/about-section.tsx` | Full rewrite: 2-column layout (photo + text), "Meet the Artist" heading, `meetBody` paragraphs, "About me" CTA |
| `components/about-page-body.tsx` | Full rewrite: main bio, "How it all started" section, "Life with animals" section, TBD photo slots throughout |
| `components/contact-form.tsx` | Adds `showCommissionsNote` prop, commissions note with link, reason-of-contact `<select>` field |
| `components/commissions-reviews-section.tsx` | Removed hardcoded "Sample layout" paragraph; eyebrow updated to "Client Reviews" |

### Updated pages
| File | What changed |
|------|-------------|
| `app/page.tsx` | Added `CommissionsReviewsSection` between `FeaturedGallery` and `AboutSection` |
| `app/commissions/page.tsx` | Added `CommissionsClosedBanner`, `CommissionsHowToOrder`, `PriceList`, `CustomizationOptions`, `PhotoTips`; removed old `CommissionsResourceCards` section; updated page title |
| `app/contact/page.tsx` | Passes `showCommissionsNote` to `ContactForm` |

---

## 7. What Was Integrated

All confirmed content from `WebsiteText.docx` has been integrated:

- **Homepage hero**: Title, subtitle, "Commission info" CTA
- **Homepage reviews**: Section now appears on homepage (between gallery and meet-artist)
- **Homepage meet-the-artist**: Full Hello text, photo, "About me" CTA
- **Commissions closed notice**: Banner visible at top of page; toggled via `commissionsCopy.commissionsOpen`
- **How to Order**: 3-step cards with descriptions and inline notes
- **Price List**: April 2026 tiers for all three sizes, add-ons, "other sizes" note, CTA
- **Customization Options**: Included items, 3 adjustment types, frame options note, background options description
- **Photo Tips**: Intro paragraphs, do's list (7 items), don'ts list (5 items)
- **About page**: Full biography, "How it all started" subsection, "Life with animals" subsection
- **Contact page**: Real intro, commissions note with link to `/commissions`, reason-of-contact selector

---

## 8. What Remains TBD

| Item | Where to update when ready |
|------|---------------------------|
| Real artist photo (main) | `lib/about-page-copy.ts` → `aboutPageImage.src` |
| Original Alex painting photo(s) | `lib/about-page-copy.ts` → `aboutPageSubPhotos.alexPainting.src` |
| Baby/childhood photo | `lib/about-page-copy.ts` → `aboutPageSubPhotos.babyPhoto.src` |
| "Me and Alex" photo | `lib/about-page-copy.ts` → `aboutPageSubPhotos.meAndAlex.src` |
| Plain background example photo | `lib/customization-options.ts` → `backgroundPhotos.plain.src` |
| Detailed background example photo | `lib/customization-options.ts` → `backgroundPhotos.detailed.src` |
| Do's example photos (7) | `lib/photo-tips.ts` → each `photoTipsDos[n].photoSrc` |
| Don'ts example photos (5) | `lib/photo-tips.ts` → each `photoTipsDonts[n].photoSrc` |
| Real client reviews (quotes + attributions) | `lib/commissions-reviews-data.ts` → `reviewPlaceholders` array |
| Frame options photos and pricing | `lib/customization-options.ts` → `frameOptionsNote` + add frame photo data |
| International shipping policy | `lib/commissions-how-to-order.ts` → step 3 `body` or new note |
| Payment methods (PayPal / bank transfer) | `lib/commissions-how-to-order.ts` → step 2 note or step 3 |
| Contact form backend | `components/contact-form.tsx` → `handleSubmit` (currently client-side only) |

---

## 9. Manual Review Items

- **`components/featured-gallery.tsx`**: The section heading is now an `<h1>` (was `<h2>`) since it is the homepage's primary heading. Verify no other element on the page becomes a duplicate `h1` — the `PageTitleBand` on inner pages already uses `h1`, so this only affects `/`.
- **Commissions page title**: Changed from "Commissions" to "Pet & Animal Portraits by Kari Koleva" in the `PageTitleBand`. The `<title>` metadata stays "Commissions" for SEO/tab clarity — confirm this is the right split.
- **`commissionsCopy.commissionsOpen = false`**: The closed banner is live. Flip to `true` in `lib/commissions-copy.ts` when taking orders again.
- **Contact form reason field**: Currently a plain `<select>`. If a more styled dropdown is wanted, it can be replaced without touching the data in `contact-page-copy.ts`.
- **Reviews section on homepage**: `CommissionsReviewsSection` is a direct reuse — no homepage-specific heading variant. If you want different heading text on homepage vs commissions, add an optional `heading` prop to the component.
- **`CommissionsResourceCards` component**: No longer used in `app/commissions/page.tsx` — its content has been replaced by inline sections. The component file (`components/commissions-resource-cards.tsx`) and data file (`lib/commissions-resources.ts`) are now orphaned; they can be deleted once confirmed not needed.

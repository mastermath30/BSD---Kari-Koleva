# Kari Art — Premium Refinement Plan

**Objective:** Elevate the existing site to gallery-grade luxury. No redesign. Same layout, same theme, same mood — just more cinematic, more immersive, more premium.

---

## 1. Artistic Experience Audit

### Visual Rhythm
- **Section cadence is solid** but slightly monotone — every section uses the same border-t separator with identical vertical padding. Needs more breathing differentiation between "heavy" and "light" sections.
- **Eyebrow labels** are good but all identical in scale — no sense of hierarchy between a hero eyebrow and a sub-section eyebrow.
- **Hero area** text block is well-structured but the headline (`heroTitle`) sits at a fairly conservative size — it should be the visual anchor that commands the entire fold.

### Gallery Flow
- **Featured gallery** (horizontal scroll): The centered-item focus effect (scale 1.035 / opacity 0.88) is subtle — almost invisible in practice. Needs a more pronounced differential to signal "this is the active piece."
- **Scroll edge affordance** is missing entirely — there's no visual hint that more art exists left/right. Visitors who don't try scrolling will miss most of the artwork.
- **Vertical wheel → horizontal scroll** intercept is clever but the transition into the gallery section isn't cinematic — you just land in a grid header and then a scroll strip.
- **Portfolio masonry** is static (server component, no animation) — visually it works but feels inert compared to the homepage.

### Art Presentation Quality
- **Image frames** use `ring-1 ring-ink/10` — tasteful but borderline invisible. Featured artworks deserve a more intentional framing treatment.
- **Shadow depth** is uniform across all cards — no distinction between "hero feature" artwork and smaller portfolio pieces.
- **Hover states on portfolio** are present (`scale-[1.025]`, `-translate-y-0.5`) but the duration (500ms) is slightly sluggish for a luxury feel.

### Whitespace Balance
- **PageTitleBand** padding is compact (`py-9 xs:py-11`) — these title moments feel rushed. More vertical breath would signal "we take this seriously."
- **Hero section** has `mb-6 sm:mb-10` below the copy block — generous, but the relationship between heading, subtitle, and CTA button feels squeezed.
- **Reviews section** has strong padding but the blockquotes lack typographic grandeur.

### Hero Emotional Impact
- **Title font size** peaks at `text-6xl` on large screens — good, but could push to `7xl` with wider letter-spacing for dramatic impact.
- **No ambient depth layer** — the hero is flat canvas color behind the gallery. A very subtle radial gradient or texture layer would add dimensionality without changing the aesthetic.
- **CTA button** (`Commission info`) is utilitarian. The copy and placement are fine but the button could use a subtle shimmer or glow state.
- **Entry animation** currently fades in as a single unit. Staggering heading → subtitle → CTA → gallery strip would feel more cinematic.

### Image Framing
- **Ring treatment** is inconsistent: portfolio uses `ring-ink/10`, featured uses `ring-sage/30` on focus / `ring-ink/[0.06]` off — good intent but could be unified into a single gallery-frame class.
- **Portrait aspect ratios** are good (4/5 for featured, varying for portfolio) but the featured strip width formula (`min(90vw,420px)`) is slightly off at breakpoints.
- **No outer frame glow** — a premium option is a very soft `box-shadow` outward glow matching sage to create a gallery-light effect.

### Transitions Between Sections
- All sections use `border-t border-ink/[0.06]` — identical, with no breathing differences. High-information sections (Price List, Reviews) need more visual separation from navigational sections.
- **No scroll-driven reveals** on most sections — content appears abruptly. Staggered `whileInView` on price cards, review cards, process steps would improve rhythm considerably.

### CTA Softness
- `button-primary` is sage green, clean, minimal — correct for the aesthetic. But it lacks any depth or warmth cue. A very subtle inner gradient or a refined hover scale would elevate it.
- **CTA placement** is sometimes dropped at the bottom of a section without context — could benefit from a small decorative separator or spacing device above it.

### Typography Hierarchy
- Display font (Cormorant Garamond) is beautiful but underused — it only appears on headings. Consider using it for large pull-quotes in reviews.
- **Size steps** between eyebrow (0.675rem) → heading (2xl→4xl) → body (sm/base) are a bit abrupt. A display-size subheading step is missing.
- **Letter-spacing** on display headings (`tracking-[0.06em]`) is good but slightly conservative for luxury editorial feel — premium gallery sites often push to 0.08–0.12em.

### Motion Opportunities
- **Gallery items**: staggered entrance on mount
- **Section headings**: subtle slide-up `whileInView`
- **Review cards**: staggered cascade reveal
- **Process steps**: numbered card cascade
- **Price cards**: staggered reveal
- **CTA button**: refined hover scale + glow
- **Page transitions**: the current single-opacity fade is minimal — could use `y: 12` with opacity for more presence
- **Featured gallery focus change**: add cross-fade motion to the ring/shadow transition

### Modal/Detail View
- Currently **no modal exists** — artwork taps/clicks do nothing. On mobile especially, this is a lost premium experience. A lightbox modal with smooth scale-in from card origin would be the single highest-impact missing luxury feature.
- *(Noted as enhancement opportunity, not in current scope — adding modal interaction requires significant new state management.)*

### Premium Mobile Gallery UX
- Featured horizontal strip is functional but the snap behavior is "correct" not "delightful"
- Scroll indicator (dot row or progress bar) missing entirely on mobile
- Portfolio masonry collapses to single column on mobile with no visual differentiation
- Touch area on gallery items could be wider

### Scroll Storytelling
- Homepage tells a story: see art → read reviews → meet artist. The connective tissue between sections (dividers, spatial rhythm) doesn't reinforce this narrative arc.
- A larger, warmer separation between "Featured Gallery" and "Reviews" sections would signal a tonal shift from "show" to "tell."

---

## 2. Premium Visual Upgrades

### A — Hero Depth Layer
Add a very subtle radial-gradient overlay on canvas behind the hero copy block, creating ambient depth without adding colour.

### B — Gallery Edge Fades
Add CSS mask-image gradient fades on the left/right edges of the featured scroll strip, so cut-off artwork naturally invites scrolling.

### C — More Dramatic Focus Differential
Increase featured gallery focused item to `scale-[1.045]` and reduce unfocused to `scale-[0.965]` / `opacity-75` for a more cinematic "depth of field" feel.

### D — Artwork Frame Glow
Introduce `.artwork-frame` utility class with a premium multi-layer shadow: outer diffuse shadow + a very subtle inner border glow matching sage — like gallery lighting.

### E — PageTitleBand Expansion
Increase padding, increase heading size at large breakpoints, add a subtle gradient sweep below the band to blend into the page.

### F — Pull-Quote Typography
In the reviews section, increase blockquote font size and use Cormorant Garamond italic for the quote text — this alone makes reviews feel editorial and premium.

### G — Button Refinement
Add a soft scale + slight brightness lift on CTA hover. On desktop, add a refined `box-shadow` glow on hover.

### H — Section Breathing
Increase `section-rhythm` and `section-rhythm-tight` vertical padding at large breakpoints to give sections more room to breathe.

---

## 3. Motion + Gallery Flow

### Stagger Strategy
Use a shared `containerVariants` / `itemVariants` pattern across all card grids (reviews, price tiers, process steps, portfolio items).

```
containerVariants: { hidden: {}, visible: { transition: { staggerChildren: 0.07 } } }
itemVariants: { hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22,1,0.36,1] } } }
```

### Hero Stagger
Stagger the heading, subtitle, CTA, and gallery strip entrance with 0.08s offsets.

### Page Transition
Change site-shell from `opacity: 0→1` to `opacity: 0→1 + y: 16→0` for a more cinematic page-load feel.

### Section Reveals
Add `whileInView` + `once: true` to: reviews section, price list section, customization cards, process steps, about bio section.

### Featured Gallery Scroll
Add dot indicator row below the scroll strip on mobile (positioned dots that track `focusedIndex`).

---

## 4. Mobile Refinement

- **Larger touch targets** on nav links (already okay, minor bump)
- **Gallery strip**: add scroll dot indicators below on mobile
- **Portfolio single column**: add a top-border accent on each portfolio item in single-column mode for visual separation
- **PageTitleBand**: reduce heading to avoid orphaned words on 375px
- **Reviews**: collapse to single card with full bleed on narrow widths
- **Footer**: already clean on mobile, minor spacing tweak

---

## 5. Implementation Order

| Priority | Component | Change |
|---|---|---|
| 1 | `globals.css` | Add `.artwork-frame`, `.gallery-fade-edge`, improved utilities |
| 2 | `featured-gallery.tsx` | Hero stagger, edge fades, focus differential, scroll dots |
| 3 | `portfolio-gallery.tsx` | Staggered whileInView reveals (make client component) |
| 4 | `page-title-band.tsx` | More generous spacing, larger display heading |
| 5 | `site-shell.tsx` | y+opacity page transition |
| 6 | `commissions-reviews-section.tsx` | Pull-quote typography, staggered reveal |
| 7 | `about-section.tsx` | Artwork frame glow, stagger refinement |
| 8 | `commissions-how-to-order.tsx` | Staggered card entrance |
| 9 | `price-list.tsx` | Staggered card entrance |
| 10 | `site-footer.tsx` | Minor polish |

---

## 6. Risk Areas to Avoid

### Do Not
- Change colour palette — canvas/ink/sage/muted are the identity
- Alter font choices — Cormorant Garamond + DM Sans are perfectly chosen
- Add decorative icons or ornaments that aren't already in the design language
- Increase JavaScript bundle significantly — keep motion imports lazy where possible
- Add external dependencies beyond what's already installed
- Touch the `lib/` data files — content is correct
- Restructure any page layouts or navigation order
- Change the responsive breakpoints or grid structures
- Over-animate — the premium feel comes from restraint, not excess

### Watch For
- Gallery edge fade masks can conflict with `overflow-hidden` on parent containers — test carefully
- Making `PortfolioGallery` a client component adds React overhead — keep it lean
- `whileInView` on masonry columns can cause layout shift during reveal — use `opacity` only on portfolio items
- Framer Motion `AnimatePresence` in the mobile nav is already there — don't nest another
- `ring-ink/12` used in `about-page-body.tsx` — note that Tailwind's JIT needs explicit fractions; use `/[0.12]` syntax

---

*Plan authored: 2026-04-09. Implement strictly within existing component structure.*

# PROFESSIONALIZATION PLAN

## Objective
Professionalize the existing website **without redesigning** it. Keep the same theme, palette, typography family, and overall layout language while improving hierarchy, spacing discipline, consistency, and credibility.

---

## What currently feels less professional

### 1) Typography hierarchy drift
- Heading scale and spacing are not fully consistent between sections.
- Some supporting text appears too casual due to uneven letter spacing, line length, and line-height combinations.
- Section intros vary in width/rhythm, reducing executive readability.

### 2) Spacing rhythm inconsistency
- Vertical section spacing is close in some areas and loose in others.
- Card internals vary (padding, label distance, CTA offset), making system quality feel less deliberate.
- Adjacent sections occasionally use different gutter and section cadence patterns.

### 3) Alignment and structural clarity
- Header/nav/footer have different alignment logic; this weakens global compositional discipline.
- Contact and commissions blocks are visually related but not consistently framed.
- Portfolio/commissions card boundaries and hover depth are not fully unified.

### 4) Component system inconsistency
- Similar UI atoms (buttons, cards, panel boundaries, focus rings) are implemented with slight variations.
- Border/hover/shadow intensity is not always consistent with a premium enterprise style.

### 5) Content presentation
- Intro paragraphs and secondary labels could be tuned for better scanability and stronger information hierarchy.
- Some sections can benefit from subtle prelabels and cleaner width constraints to feel more strategic.

---

## Refinement strategy (no redesign)

1. **Introduce restrained design tokens/utilities in CSS** for section containers, card surfaces, and subtle premium shadows/rings.
2. **Normalize section rhythm** (top/bottom spacing and max-width behavior) across pages.
3. **Tighten type hierarchy** (heading weights, line-height, tracking, paragraph widths) while preserving current fonts.
4. **Unify component behavior**: consistent card borders, hover lift, and focus treatment.
5. **Refine nav/footer polish**: stronger information architecture, cleaner vertical rhythm, and balanced alignment.
6. **Upgrade form professionalism**: panel framing, cleaner field spacing, label rhythm, and better visual affordance.
7. **Use restrained premium patterns inspired by enterprise systems** (Vercel-like content blocks, subtle motion discipline), adapted to current palette and tone.

---

## Source-of-truth files controlling these areas

### Global styling and design system
- `app/globals.css`
- `tailwind.config.ts`

### Shared shell and navigation/footer
- `components/site-shell.tsx`
- `components/site-header.tsx`
- `components/site-footer.tsx`

### Shared page framing
- `components/page-title-band.tsx`

### Homepage structure
- `components/featured-gallery.tsx`
- `components/about-section.tsx`

### About / Portfolio / Commissions / Contact presentation
- `components/about-page-body.tsx`
- `components/portfolio-gallery.tsx`
- `components/commissions-resource-cards.tsx`
- `components/commissions-reviews-section.tsx`
- `components/contact-form.tsx`
- `components/direct-contact-panel.tsx`

### Page-level layout wrappers
- `app/about/page.tsx`
- `app/portfolio/page.tsx`
- `app/commissions/page.tsx`
- `app/contact/page.tsx`

---

## Premium patterns to adapt (restrained)

### Pattern A: Vercel-style section discipline
- Consistent max-width wrappers, predictable vertical spacing, low-noise boundaries.
- Why fit: aligns with existing minimalist, editorial style and muted palette.

### Pattern B: Enterprise card system
- Uniform card surfaces with subtle border + soft elevation + controlled hover translation.
- Why fit: keeps current card language but increases credibility and consistency.

### Pattern C: Motion restraint
- Keep existing Framer Motion but reduce expressive variance and enforce subtle, repeatable transitions.
- Why fit: current site already uses motion; this keeps continuity while increasing polish.

### Pattern D: Professional form framing
- Elevated but calm form container, consistent field rhythm, clear hierarchy.
- Why fit: contact/commission credibility improves immediately without changing brand identity.

---

## Rules to preserve theme while improving quality

1. Do not replace fonts, brand colors, or high-level page structure.
2. No flashy visuals, neon effects, heavy gradients, or template-like overdesign.
3. Keep motion subtle and purposeful.
4. Maintain existing content and navigation architecture.
5. Prioritize readability, spacing discipline, and consistent visual language.
6. Every new style must look native to the current site.

---

## Implementation plan

### Pass 1 — System polish
- Add shared utility classes in `app/globals.css` for:
  - section rhythm
  - container rhythm
  - premium card shell
  - subtle divider utilities
  - standardized button treatment

### Pass 2 — Shell hierarchy
- Refine `site-header`, `site-footer`, and `page-title-band` spacing/typography alignment.

### Pass 3 — Core sections
- Improve `featured-gallery`, `about-section`, `about-page-body`, and `portfolio-gallery` for consistent hierarchy and rhythm.

### Pass 4 — Conversion-critical blocks
- Professionalize `commissions-resource-cards`, `commissions-reviews-section`, `contact-form`, and `direct-contact-panel` with cohesive panel/card logic.

### Pass 5 — Page wrappers
- Ensure all page-level sections use consistent container/spacing rules.

### Pass 6 — QA
- Validate no lint/type errors.
- Verify no visual identity drift from current theme.
- Confirm consistent spacing and hierarchy across all routes.

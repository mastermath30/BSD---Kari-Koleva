import { photoTipsIntro, photoTipsDos, photoTipsDonts } from "@/lib/photo-tips";

export function PhotoTips() {
  return (
    <section
      aria-labelledby="photo-tips-heading"
      className="border-t border-ink/[0.06] bg-canvas"
    >
      <div className="section-shell section-rhythm-tight">
        <p className="eyebrow-label">Reference Photos</p>
        <h2
          id="photo-tips-heading"
          className="mt-2 font-display text-2xl font-semibold tracking-[0.04em] text-ink sm:text-3xl"
        >
          Photo Tips
        </h2>

        <div className="mt-6 space-y-4 max-w-2xl">
          {photoTipsIntro.map((para, i) => (
            <p key={i} className="font-sans text-sm leading-relaxed text-muted sm:text-base">
              {para}
            </p>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
          {/* Do's */}
          <div className="surface-card p-7 sm:p-8 space-y-5">
            <h3 className="font-display text-xl font-semibold tracking-[0.03em] text-ink">
              Do&rsquo;s
            </h3>
            <ul className="space-y-3">
              {photoTipsDos.map((tip) => (
                <li key={tip.label} className="flex items-start gap-3">
                  <span className="mt-1 text-sage text-base leading-none" aria-hidden>✓</span>
                  <span className="font-sans text-sm text-ink sm:text-base">{tip.label}</span>
                </li>
              ))}
            </ul>
            {/* TBD: photo examples for do's — see kari_art_content_integration_plan.md */}
            <p className="font-sans text-xs text-muted/70 italic border-t border-ink/[0.06] pt-4">
              Photo examples coming soon.
            </p>
          </div>

          {/* Don'ts */}
          <div className="surface-card p-7 sm:p-8 space-y-5">
            <h3 className="font-display text-xl font-semibold tracking-[0.03em] text-ink">
              Don&rsquo;ts
            </h3>
            <ul className="space-y-3">
              {photoTipsDonts.map((tip) => (
                <li key={tip.label} className="flex items-start gap-3">
                  <span className="mt-1 text-red-400 text-base leading-none" aria-hidden>✗</span>
                  <span className="font-sans text-sm text-ink sm:text-base">{tip.label}</span>
                </li>
              ))}
            </ul>
            {/* TBD: photo examples for don'ts — see kari_art_content_integration_plan.md */}
            <p className="font-sans text-xs text-muted/70 italic border-t border-ink/[0.06] pt-4">
              Photo examples coming soon.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

import {
  whatsIncluded,
  adjustmentOptions,
  adjustmentsNote,
  frameOptionsNote,
  backgroundOptionsDescription,
  backgroundPhotos,
} from "@/lib/customization-options";

export function CustomizationOptions() {
  return (
    <section
      aria-labelledby="customization-heading"
      className="border-t border-ink/[0.06] bg-canvas"
    >
      <div className="section-shell section-rhythm-tight">
        <p className="eyebrow-label">What You Get</p>
        <h2
          id="customization-heading"
          className="mt-2 font-display text-2xl font-semibold tracking-[0.04em] text-ink sm:text-3xl"
        >
          Customization Options
        </h2>

        {/* Included by default */}
        <div className="mt-8 surface-card p-7 sm:p-8">
          <h3 className="font-display text-lg font-semibold tracking-[0.03em] text-ink sm:text-xl">
            Your portrait comes with
          </h3>
          <ul className="mt-4 space-y-2">
            {whatsIncluded.map((item) => (
              <li key={item} className="flex items-start gap-2 font-sans text-sm text-muted sm:text-base">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sage" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Adjustments */}
        <div className="mt-6 surface-card p-7 sm:p-8 space-y-5">
          <h3 className="font-display text-lg font-semibold tracking-[0.03em] text-ink sm:text-xl">
            Adjustments
          </h3>
          <p className="font-sans text-sm leading-relaxed text-muted sm:text-base">
            {adjustmentsNote}
          </p>
          <ul className="space-y-4">
            {adjustmentOptions.map((opt) => (
              <li key={opt.title}>
                <p className="font-sans text-sm font-semibold text-ink">{opt.title}</p>
                <p className="mt-1 font-sans text-sm leading-relaxed text-muted sm:text-base">
                  {opt.description}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Frame options */}
        <div className="mt-6 surface-card p-7 sm:p-8">
          <h3 className="font-display text-lg font-semibold tracking-[0.03em] text-ink sm:text-xl">
            Frame options
          </h3>
          <p className="mt-3 font-sans text-sm leading-relaxed text-muted sm:text-base italic">
            {/* TBD: frame photos and pricing — see kari_art_content_integration_plan.md */}
            {frameOptionsNote}
          </p>
        </div>

        {/* Background options */}
        <div className="mt-6 surface-card p-7 sm:p-8 space-y-5">
          <h3 className="font-display text-lg font-semibold tracking-[0.03em] text-ink sm:text-xl">
            Background options
          </h3>
          <p className="font-sans text-sm leading-relaxed text-muted sm:text-base">
            {backgroundOptionsDescription}
          </p>
          {/* TBD: replace with real background example photos */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[backgroundPhotos.plain, backgroundPhotos.detailed].map((photo, i) => (
              <div key={i}>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm bg-ink/[0.04] ring-1 ring-ink/10 flex items-center justify-center">
                  {photo.src ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <span className="font-sans text-xs text-muted/70 px-4 text-center">
                      {photo.alt}
                    </span>
                  )}
                </div>
                <p className="mt-2 font-sans text-xs text-muted text-center">
                  {i === 0 ? "Plain background" : "Detailed background"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

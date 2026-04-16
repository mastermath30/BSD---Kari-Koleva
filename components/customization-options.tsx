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
          className="mt-2 font-display text-2xl font-medium tracking-[0.04em] text-ink sm:text-3xl"
        >
          Customization Options
        </h2>

        {/* Included by default */}
        <div className="mt-8 surface-card p-7 sm:p-8">
          <h3 className="font-display text-lg font-medium tracking-[0.03em] text-ink sm:text-xl">
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
          <h3 className="font-display text-lg font-medium tracking-[0.03em] text-ink sm:text-xl">
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
          <h3 className="font-display text-lg font-medium tracking-[0.03em] text-ink sm:text-xl">
            Frame options
          </h3>
          <p className="mt-3 font-sans text-sm leading-relaxed text-muted sm:text-base italic">
            {/* TBD: frame photos and pricing — see kari_art_content_integration_plan.md */}
            {frameOptionsNote}
          </p>
        </div>

        {/* Background options */}
        <div className="mt-6 surface-card p-7 sm:p-8 space-y-5">
          <h3 className="font-display text-lg font-medium tracking-[0.03em] text-ink sm:text-xl">
            Background options
          </h3>
          <p className="font-sans text-sm leading-relaxed text-muted sm:text-base">
            {backgroundOptionsDescription}
          </p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {(["plain", "detailed"] as const).map((type) => {
              const photos = backgroundPhotos[type];
              const totalRatio = photos.reduce((s, p) => s + p.aspectRatio, 0);
              return (
                <div key={type}>
                  <div className="flex gap-2 h-72">
                    {photos.map((photo) => {
                      const widthPct = `${((photo.aspectRatio / totalRatio) * 100).toFixed(1)}%`;
                      return (
                        <div
                          key={photo.src}
                          className="flex-shrink-0 overflow-hidden rounded-sm ring-1 ring-ink/10"
                          style={{ width: widthPct }}
                        >
                          <img
                            src={photo.src}
                            alt={photo.alt}
                            className="w-full h-full object-cover"
                            style={{ objectPosition: "top" }}
                          />
                        </div>
                      );
                    })}
                  </div>
                  <p className="mt-2 font-sans text-xs text-muted text-center capitalize">
                    {type} background
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

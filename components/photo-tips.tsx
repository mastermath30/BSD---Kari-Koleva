import Image from "next/image";
import { photoTipsIntro, photoTipsDos, photoTipsDonts } from "@/lib/photo-tips";

export function PhotoTips() {
  const dosWithPhotos = photoTipsDos.filter((t) => t.photoSrc);
  const dontsWithPhotos = photoTipsDonts.filter((t) => t.photoSrc);

  return (
    <section
      aria-labelledby="photo-tips-heading"
      className="border-t border-ink/[0.06] bg-canvas"
    >
      <div className="section-shell section-rhythm-tight">
        <p className="eyebrow-label">Reference Photos</p>
        <h2
          id="photo-tips-heading"
          className="mt-2 font-display text-2xl font-medium tracking-[0.04em] text-ink sm:text-3xl"
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
          <div className="surface-card p-7 sm:p-8 flex flex-col">
            <h3 className="font-display text-xl font-medium tracking-[0.03em] text-ink">
              Do&rsquo;s
            </h3>
            <ul className="space-y-3 mt-5">
              {photoTipsDos.map((tip) => (
                <li key={tip.label} className="flex items-start gap-3">
                  <span className="mt-1 text-sage text-base leading-none shrink-0" aria-hidden>✓</span>
                  <span className="font-sans text-sm text-ink sm:text-base">{tip.label}</span>
                </li>
              ))}
            </ul>
            {dosWithPhotos.length > 0 && (
              <div className="border-t border-ink/[0.06] pt-5 mt-auto">
                <p className="font-sans text-xs font-medium uppercase tracking-[0.14em] text-muted mb-3">
                  Good examples
                </p>
                <div className="grid grid-cols-3 gap-2">
                  {dosWithPhotos.map((tip) => (
                    <div key={tip.photoSrc} className="relative aspect-square overflow-hidden rounded-sm">
                      <Image
                        src={tip.photoSrc}
                        alt={tip.photoAlt}
                        fill
                        unoptimized
                        className="object-cover"
                        sizes="120px"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Don'ts */}
          <div className="surface-card p-7 sm:p-8 flex flex-col">
            <h3 className="font-display text-xl font-medium tracking-[0.03em] text-ink">
              Don&rsquo;ts
            </h3>
            <ul className="space-y-3 mt-5">
              {photoTipsDonts.map((tip) => (
                <li key={tip.label} className="flex items-start gap-3">
                  <span className="mt-1 text-red-400 text-base leading-none shrink-0" aria-hidden>✗</span>
                  <span className="font-sans text-sm text-ink sm:text-base">{tip.label}</span>
                </li>
              ))}
            </ul>
            {dontsWithPhotos.length > 0 && (
              <div className="border-t border-ink/[0.06] pt-5 mt-auto">
                <p className="font-sans text-xs font-medium uppercase tracking-[0.14em] text-muted mb-3">
                  Bad examples
                </p>
                <div className="grid grid-cols-3 gap-2">
                  {dontsWithPhotos.map((tip) => (
                    <div key={tip.photoSrc} className="relative aspect-square overflow-hidden rounded-sm">
                      <Image
                        src={tip.photoSrc}
                        alt={tip.photoAlt}
                        fill
                        unoptimized
                        className="object-cover"
                        sizes="120px"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useCallback, useId, useRef, useState } from "react";
import { contactPageCopy } from "@/lib/contact-page-copy";

type ContactFormProps = {
  /** Override default intro paragraph (e.g. on /commissions). */
  introText?: string;
};

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage/45 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas";

/**
 * Client-side validation only. There is no server endpoint — see `noBackendNotice` after a valid submit.
 * TODO: Connect `onSubmit` to an API route, server action, Formspree, Resend, etc.
 */
export function ContactForm({ introText }: ContactFormProps) {
  const formId = useId();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [filesSummary, setFilesSummary] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [showNoBackendNotice, setShowNoBackendNotice] = useState(false);

  const onFilesChange = useCallback(() => {
    const input = fileInputRef.current;
    if (!input?.files?.length) {
      setFilesSummary(null);
      return;
    }
    const names = Array.from(input.files)
      .map((f) => f.name)
      .join(", ");
    setFilesSummary(names);
  }, []);

  const clearNotice = useCallback(() => {
    setShowNoBackendNotice(false);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setShowNoBackendNotice(true);
  };

  const fieldClass =
    "w-full border-0 border-b border-ink/15 bg-transparent py-2.5 font-sans text-sm text-ink placeholder:text-muted/70 transition-colors duration-300 focus:outline-none focus:ring-0 focus-visible:border-sage";

  const uploadHintId = `${formId}-upload-hint`;

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <header className="space-y-4">
        <h2 className="font-display text-2xl font-semibold tracking-wide text-ink sm:text-3xl">
          {contactPageCopy.formHeading}
        </h2>
        <p className="max-w-md font-sans text-sm leading-relaxed text-muted sm:text-base">
          {introText ?? contactPageCopy.formIntro}
        </p>
      </header>

      <div className="space-y-6">
        <div>
          <label htmlFor={`${formId}-name`} className="sr-only">
            {contactPageCopy.fields.name}
          </label>
          <input
            id={`${formId}-name`}
            name="name"
            type="text"
            autoComplete="name"
            required
            placeholder={contactPageCopy.fields.name}
            className={fieldClass}
            onChange={clearNotice}
            onInput={clearNotice}
          />
        </div>
        <div>
          <label htmlFor={`${formId}-email`} className="sr-only">
            {contactPageCopy.fields.email}
          </label>
          <input
            id={`${formId}-email`}
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder={contactPageCopy.fields.email}
            className={fieldClass}
            onChange={clearNotice}
            onInput={clearNotice}
          />
        </div>

        <div>
          <p
            id={uploadHintId}
            className="mb-2 font-sans text-xs font-medium uppercase tracking-[0.16em] text-muted"
          >
            {contactPageCopy.fields.images}{" "}
            <span className="font-normal normal-case tracking-normal text-muted/80">
              (optional)
            </span>
          </p>
          <input
            ref={fileInputRef}
            id={`${formId}-images`}
            name="images"
            type="file"
            accept="image/*"
            multiple
            className="sr-only"
            aria-describedby={uploadHintId}
            onChange={(ev) => {
              clearNotice();
              onFilesChange();
            }}
          />
          <label
            htmlFor={`${formId}-images`}
            onDragEnter={(e) => {
              e.preventDefault();
              setIsDragging(true);
            }}
            onDragOver={(e) => {
              e.preventDefault();
              setIsDragging(true);
            }}
            onDragLeave={(e) => {
              e.preventDefault();
              if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                setIsDragging(false);
              }
            }}
            onDrop={(e) => {
              e.preventDefault();
              setIsDragging(false);
              const input = fileInputRef.current;
              const files = e.dataTransfer.files;
              if (input && files.length > 0) {
                try {
                  input.files = files;
                  onFilesChange();
                  clearNotice();
                } catch {
                  /* Some browsers restrict assignment; file input still works via click. */
                }
              }
            }}
            className={`flex min-h-[140px] cursor-pointer flex-col items-center justify-center rounded-sm border border-dashed bg-canvas px-4 py-8 text-center transition-colors duration-300 hover:bg-sage/[0.04] ${focusRing} ${
              isDragging
                ? "border-sage/70 bg-sage/[0.06]"
                : "border-sage/35 hover:border-sage/55"
            }`}
          >
            <span className="font-sans text-sm text-muted">
              {contactPageCopy.uploadHint}
            </span>
            <span className="mt-1 font-sans text-xs text-muted/80">
              Files stay on your device until a server upload is configured.
            </span>
            {filesSummary ? (
              <span className="mt-2 max-w-full truncate font-sans text-xs text-ink/70">
                {filesSummary}
              </span>
            ) : null}
          </label>
        </div>

        <div>
          <label htmlFor={`${formId}-message`} className="sr-only">
            {contactPageCopy.fields.message}
          </label>
          <textarea
            id={`${formId}-message`}
            name="message"
            rows={5}
            required
            placeholder={contactPageCopy.fields.message}
            className={`${fieldClass} min-h-[120px] resize-y`}
            onChange={clearNotice}
            onInput={clearNotice}
          />
        </div>
      </div>

      {showNoBackendNotice ? (
        <p
          className="rounded-sm border border-sage/25 bg-sage/[0.06] px-4 py-3 font-sans text-sm leading-relaxed text-ink/90"
          role="status"
          aria-live="polite"
        >
          {contactPageCopy.noBackendNotice}
        </p>
      ) : null}

      <button
        type="submit"
        className={`inline-flex min-h-[44px] items-center justify-center bg-sage px-8 py-3 font-sans text-sm font-medium tracking-wide text-canvas transition-colors duration-300 hover:bg-sage-deep ${focusRing}`}
      >
        {contactPageCopy.submitLabel}
      </button>
    </form>
  );
}

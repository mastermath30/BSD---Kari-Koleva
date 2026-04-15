"use client";

import Link from "next/link";
import { useCallback, useId, useRef, useState, useTransition } from "react";
import { contactPageCopy } from "@/lib/contact-page-copy";
import { sendContactEmail } from "@/app/contact/actions";

type ContactFormProps = {
  /** Override default intro paragraph (e.g. on /commissions). */
  introText?: string;
  /** Show the commissions-page note with link (used on /contact). */
  showCommissionsNote?: boolean;
};

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage/45 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas";

/**
 * Client-side validation only. There is no server endpoint — see `noBackendNotice` after a valid submit.
 * TODO: Connect `onSubmit` to an API route, server action, Formspree, Resend, etc.
 */
export function ContactForm({ introText, showCommissionsNote }: ContactFormProps) {
  const formId = useId();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [filesSummary, setFilesSummary] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isPending, startTransition] = useTransition();

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
    setStatus("idle");
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const formData = new FormData(form);
    startTransition(async () => {
      const result = await sendContactEmail(formData);
      if (result.success) {
        setStatus("success");
        formRef.current?.reset();
        setFilesSummary(null);
      } else {
        setStatus("error");
        setErrorMessage(result.error ?? "Something went wrong.");
      }
    });
  };

  const fieldClass =
    "w-full border-0 border-b border-ink/15 bg-transparent py-2.5 xs:py-3 font-sans text-sm text-ink placeholder:text-muted/70 transition-all duration-300 ease-out focus:outline-none focus:ring-0 focus-visible:border-sage focus-visible:border-opacity-60";

  const uploadHintId = `${formId}-upload-hint`;

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="surface-card space-y-8 p-6 sm:p-8 lg:p-10">
      <header className="space-y-4">
        <p className="eyebrow-label">Get in Touch</p>
        <h2 className="font-display text-2xl font-medium tracking-[0.04em] text-ink sm:text-3xl">
          {contactPageCopy.formHeading}
        </h2>
        <p className="max-w-md font-sans text-sm leading-relaxed text-muted sm:text-base">
          {introText ?? contactPageCopy.formIntro}
        </p>
        {showCommissionsNote ? (
          <p className="max-w-md font-sans text-sm leading-relaxed text-muted sm:text-base">
            {/* Split the note so the link can be inline */}
            For commissions, please share details about your pet and any specific requests.{" "}
            <Link
              href="/commissions"
              className="font-medium text-ink underline-offset-2 hover:underline transition-colors duration-200"
            >
              More info on the commissions page.
            </Link>
          </p>
        ) : null}
      </header>

      <div className="space-y-6">
        {/* Name */}
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

        {/* Email */}
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

        {/* Reason for contact */}
        <div>
          <label htmlFor={`${formId}-reason`} className="sr-only">
            {contactPageCopy.fields.reason}
          </label>
          <select
            id={`${formId}-reason`}
            name="reason"
            required
            defaultValue=""
            className={`${fieldClass} cursor-pointer appearance-none`}
            onChange={clearNotice}
          >
            {contactPageCopy.fields.reasonOptions.map((opt) => (
              <option key={opt.value} value={opt.value} disabled={opt.value === ""}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        {/* Image upload */}
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
            onChange={() => {
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
            className={`flex min-h-[120px] xs:min-h-[140px] cursor-pointer flex-col items-center justify-center rounded-sm border border-dashed bg-canvas px-3 py-6 xs:px-4 xs:py-8 text-center transition-all duration-300 ease-out hover:bg-sage/[0.04] hover:border-opacity-60 ${focusRing} ${
              isDragging
                ? "border-sage/70 bg-sage/[0.06] scale-[1.02]"
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

        {/* Message */}
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

      {status === "success" ? (
        <p
          className="rounded-sm border border-sage/25 bg-sage/[0.06] px-4 py-3 font-sans text-sm leading-relaxed text-ink/90"
          role="status"
          aria-live="polite"
        >
          Message sent! Kari will be in touch soon.
        </p>
      ) : null}

      {status === "error" ? (
        <p
          className="rounded-sm border border-red-200 bg-red-50 px-4 py-3 font-sans text-sm leading-relaxed text-red-800"
          role="alert"
          aria-live="polite"
        >
          {errorMessage}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={isPending}
        className={`button-primary ${focusRing} disabled:opacity-60 disabled:cursor-not-allowed`}
      >
        {isPending ? "Sending…" : contactPageCopy.submitLabel}
      </button>
    </form>
  );
}

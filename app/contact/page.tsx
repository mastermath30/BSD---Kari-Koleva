import type { Metadata } from "next";
import { PageTitleBand } from "@/components/page-title-band";
import { ContactForm } from "@/components/contact-form";
import { DirectContactPanel } from "@/components/direct-contact-panel";

export const metadata: Metadata = {
  title: "Contact",
  description: "Commission inquiries and direct contact for Kari Koleva.",
};

export default function ContactPage() {
  return (
    <>
      <PageTitleBand title="Contact" />
      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-20">
          <ContactForm />
          <DirectContactPanel />
        </div>
      </section>
    </>
  );
}

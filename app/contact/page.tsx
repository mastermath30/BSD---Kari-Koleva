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
      <section className="section-shell section-rhythm">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[2fr_1fr] lg:gap-14 2xl:gap-16 lg:items-start">
          <ContactForm showCommissionsNote />
          <DirectContactPanel />
        </div>
      </section>
    </>
  );
}

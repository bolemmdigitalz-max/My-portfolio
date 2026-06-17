import { CONTACTS } from "../data";
import { PhoneIcon, WhatsAppIcon } from "./Icons";
import SectionHeading from "./SectionHeading";

const waLink = (num: string) => {
  // Convert local Nigerian number (0XXXXXXXXXX) to international format (234XXXXXXXXXX)
  const intl = "234" + num.replace(/^0/, "");
  return `https://wa.me/${intl}?text=${encodeURIComponent(
    "Hello Osiberu, I'd like to discuss a project with you."
  )}`;
};

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-br from-brand-700 via-brand-800 to-indigo-900 py-20 text-white lg:py-28"
    >
      <div className="pointer-events-none absolute -left-24 top-0 h-80 w-80 rounded-full bg-white/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-indigo-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-5 lg:px-8">
        <SectionHeading
          light
          eyebrow="Contact"
          title="Let's Work Together"
          subtitle="Ready to grow your business online? Reach out on WhatsApp or give me a call — let's bring your project to life."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {/* WhatsApp cards */}
          {CONTACTS.whatsapp.map((num, i) => (
            <div
              key={num}
              className="reveal flex flex-col rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-sm transition-all hover:-translate-y-1 hover:bg-white/15"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500 text-white shadow-lg">
                <WhatsAppIcon className="h-6 w-6" />
              </span>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-brand-200">
                WhatsApp {CONTACTS.whatsapp.length > 1 ? i + 1 : ""}
              </p>
              <p className="mt-1 text-lg font-bold tracking-wide">{num}</p>
              <a
                href={waLink(num)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-green-500 px-5 py-3 text-sm font-bold text-white shadow-lg transition-all hover:bg-green-400"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Chat on WhatsApp
              </a>
            </div>
          ))}

          {/* Call card */}
          {CONTACTS.call.map((num) => (
            <div
              key={num}
              className="reveal flex flex-col rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-sm transition-all hover:-translate-y-1 hover:bg-white/15"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-brand-700 shadow-lg">
                <PhoneIcon className="h-6 w-6" />
              </span>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-brand-200">
                Call
              </p>
              <p className="mt-1 text-lg font-bold tracking-wide">{num}</p>
              <a
                href={`tel:${num}`}
                className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-brand-700 shadow-lg transition-all hover:bg-brand-50"
              >
                <PhoneIcon className="h-4 w-4" />
                Call Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

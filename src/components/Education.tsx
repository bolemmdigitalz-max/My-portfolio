import { EDUCATION } from "../data";
import { CapIcon } from "./Icons";
import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <section id="education" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Education"
          title="Education & Learning"
          subtitle="Building a strong foundation while striving for academic and professional growth."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {EDUCATION.map((edu) => (
            <div
              key={edu.title}
              className="reveal group relative overflow-hidden rounded-2xl border border-slate-100 bg-gradient-to-br from-slate-50 to-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-600/10"
            >
              <div className="absolute right-0 top-0 h-24 w-24 -translate-y-8 translate-x-8 rounded-full bg-brand-100/60 transition-transform group-hover:scale-150" />
              <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-indigo-600 text-white shadow-lg shadow-brand-600/25">
                <CapIcon className="h-7 w-7" />
              </span>
              <h3 className="relative mt-5 text-lg font-bold text-slate-900">{edu.title}</h3>
              <p className="relative mt-1 text-sm font-semibold text-brand-600">{edu.place}</p>
              <p className="relative mt-3 text-sm leading-relaxed text-slate-600">
                {edu.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

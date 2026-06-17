import { EXPERIENCES } from "../data";
import { BriefcaseIcon, CheckIcon } from "./Icons";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Experience"
          title="Professional Experience"
          subtitle="A track record of helping businesses grow through design, marketing and local visibility."
        />

        <div className="relative">
          {/* vertical line */}
          <div className="absolute left-5 top-2 bottom-2 w-0.5 bg-gradient-to-b from-brand-300 via-brand-400 to-indigo-300 sm:left-6" />

          <div className="space-y-8">
            {EXPERIENCES.map((exp) => (
              <div key={exp.role} className="reveal relative pl-16 sm:pl-20">
                <span className="absolute left-0 top-1 flex h-11 w-11 items-center justify-center rounded-full border-4 border-slate-50 bg-gradient-to-br from-brand-500 to-indigo-600 text-white shadow-md sm:h-12 sm:w-12">
                  <BriefcaseIcon className="h-5 w-5" />
                </span>

                <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-lg font-bold text-slate-900">{exp.role}</h3>
                    <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-bold text-brand-700">
                      {exp.period}
                    </span>
                  </div>
                  <p className="mt-0.5 text-sm font-semibold text-brand-600">{exp.type}</p>
                  <ul className="mt-4 space-y-2.5">
                    {exp.points.map((p) => (
                      <li key={p} className="flex items-start gap-2.5 text-sm text-slate-600">
                        <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-green-100 text-green-700">
                          <CheckIcon className="h-3 w-3" />
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

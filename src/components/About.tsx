import SectionHeading from "./SectionHeading";
import { CheckIcon, CodeIcon, MapPinIcon, MegaphoneIcon, PenIcon } from "./Icons";

const SERVICES = [
  {
    icon: CodeIcon,
    title: "Website Design",
    desc: "Modern, responsive websites and landing pages that convert visitors into customers.",
  },
  {
    icon: MapPinIcon,
    title: "Google Maps Listing",
    desc: "Google Business Profile setup and optimization for stronger local visibility.",
  },
  {
    icon: MegaphoneIcon,
    title: "Social Media Advertising",
    desc: "Targeted ad campaigns that boost awareness, engagement and business growth.",
  },
  {
    icon: PenIcon,
    title: "Graphic Design",
    desc: "Eye-catching brand assets, social graphics and marketing materials.",
  },
];

const HIGHLIGHTS = [
  "Nigerian digital professional",
  "Passionate about helping businesses grow online",
  "Dedicated to continuous learning & digital innovation",
  "Aspiring student of Olabisi Onabanjo University (OOU)",
];

export default function About() {
  return (
    <section id="about" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="About Me"
          title="Turning ideas into digital growth"
        />

        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div className="reveal space-y-5 text-base leading-relaxed text-slate-600">
            <p>
              I'm{" "}
              <strong className="font-semibold text-slate-900">Osiberu Boluwatife</strong>,
              a Nigerian digital professional specializing in{" "}
              <strong className="font-semibold text-slate-900">website design</strong>,{" "}
              <strong className="font-semibold text-slate-900">Google Maps listing</strong>,{" "}
              <strong className="font-semibold text-slate-900">social media advertising</strong>{" "}
              and{" "}
              <strong className="font-semibold text-slate-900">graphic design</strong>. I am
              passionate about helping businesses establish a strong online presence and
              reach more customers.
            </p>
            <p>
              As a secondary school graduate and an aspiring student of{" "}
              <strong className="font-semibold text-slate-900">
                Olabisi Onabanjo University (OOU)
              </strong>
              , I am committed to continuous learning and digital innovation. I combine
              creativity with strategy to deliver work that not only looks great but also
              drives real, measurable results.
            </p>

            <ul className="grid gap-3 pt-2 sm:grid-cols-2">
              {HIGHLIGHTS.map((h) => (
                <li key={h} className="flex items-start gap-2.5">
                  <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-brand-100 text-brand-700">
                    <CheckIcon className="h-3 w-3" />
                  </span>
                  <span className="text-sm font-medium text-slate-700">{h}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal grid gap-4 sm:grid-cols-2">
            {SERVICES.map((s) => (
              <div
                key={s.title}
                className="group rounded-2xl border border-slate-100 bg-slate-50/60 p-6 transition-all hover:-translate-y-1 hover:border-brand-200 hover:bg-white hover:shadow-xl hover:shadow-brand-600/10"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-indigo-600 text-white shadow-lg shadow-brand-600/25 transition-transform group-hover:scale-110">
                  <s.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-base font-bold text-slate-900">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

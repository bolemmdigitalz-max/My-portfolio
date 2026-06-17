import { ArrowRightIcon, WhatsAppIcon } from "./Icons";

const STATS = [
  { value: "50+", label: "Projects Delivered" },
  { value: "4+", label: "Service Areas" },
  { value: "100%", label: "Client Focused" },
];

export default function Hero() {
  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-brand-50/40 pt-28 pb-20 lg:pt-36 lg:pb-28"
    >
      {/* decorative blobs */}
      <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 animate-blob bg-brand-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 animate-blob bg-indigo-200/40 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-8 lg:px-8">
        <div className="reveal text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-700 shadow-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
            Available for new projects
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Osiberu{" "}
            <span className="bg-gradient-to-r from-brand-600 to-indigo-600 bg-clip-text text-transparent">
              Boluwatife
            </span>
          </h1>

          <p className="mt-4 text-lg font-semibold text-slate-700 sm:text-xl">
            Website Designer, Digital Marketing Specialist &amp; Graphic Designer
          </p>

          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-600 lg:mx-0">
            I help businesses grow online with high-converting{" "}
            <strong className="font-semibold text-slate-800">website design</strong>,
            optimized{" "}
            <strong className="font-semibold text-slate-800">Google Maps listings</strong>,
            results-driven{" "}
            <strong className="font-semibold text-slate-800">social media advertising</strong>,
            and standout{" "}
            <strong className="font-semibold text-slate-800">graphic design</strong>.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
            <button
              onClick={() => go("projects")}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-600 to-indigo-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand-600/30 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand-600/40 sm:w-auto"
            >
              View Projects
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => go("contact")}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-slate-200 bg-white px-7 py-3.5 text-sm font-bold text-slate-800 transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-700 sm:w-auto"
            >
              <WhatsAppIcon className="h-4 w-4 text-green-600" />
              Contact Me
            </button>
          </div>

          <dl className="mt-10 grid max-w-md grid-cols-3 gap-4 lg:mx-0">
            {STATS.map((s) => (
              <div key={s.label} className="text-center lg:text-left">
                <dt className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
                  {s.value}
                </dt>
                <dd className="mt-1 text-xs font-medium text-slate-500">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Portrait */}
        <div className="reveal relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="absolute inset-0 -z-10 animate-blob bg-gradient-to-br from-brand-400 to-indigo-500 opacity-90" />
          <div className="relative animate-float overflow-hidden rounded-[2rem] border-4 border-white shadow-2xl shadow-slate-900/20">
            <img
              src="/images/profile.jpg"
              alt="Osiberu Boluwatife — Website Designer and Digital Marketing Specialist"
              className="aspect-[4/5] w-full object-cover"
              loading="eager"
            />
          </div>
          <div className="absolute -bottom-5 -left-5 rounded-2xl border border-slate-100 bg-white/95 p-4 shadow-xl backdrop-blur sm:-left-8">
            <p className="text-xs font-medium text-slate-500">Based in</p>
            <p className="text-sm font-bold text-slate-900">Nigeria 🇳🇬</p>
          </div>
        </div>
      </div>
    </section>
  );
}

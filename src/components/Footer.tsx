import { NAV_LINKS } from "../data";
import { ArrowUpIcon } from "./Icons";

export default function Footer() {
  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  const toTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-slate-950 text-slate-400">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 font-extrabold text-white">
                OB
              </span>
              <span className="text-lg font-extrabold text-white">Osiberu Boluwatife</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              Website Designer &amp; Digital Marketing Specialist helping businesses grow
              online with modern design and smart marketing.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-2">
              {NAV_LINKS.map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => go(l.id)}
                    className="text-sm transition-colors hover:text-brand-400"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Get in Touch
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>WhatsApp: 09041490874</li>
              <li>WhatsApp: 09033372448</li>
              <li>Call: 09115327236</li>
            </ul>
            <button
              onClick={() => go("contact")}
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-brand-600 px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-brand-500"
            >
              Start a Project
            </button>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Osiberu Boluwatife. All rights reserved.
          </p>
          <button
            onClick={toTop}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs font-semibold text-slate-300 transition-all hover:border-brand-400 hover:text-brand-400"
          >
            Back to top
            <ArrowUpIcon className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}

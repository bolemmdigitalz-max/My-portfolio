import { useEffect, useState } from "react";
import { NAV_LINKS } from "../data";
import { CloseIcon, MenuIcon } from "./Icons";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const offset = window.scrollY + 120;
      let current = "home";
      for (const link of NAV_LINKS) {
        const el = document.getElementById(link.id);
        if (el && el.offsetTop <= offset) current = link.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 shadow-lg shadow-slate-900/5 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <button
          onClick={() => go("home")}
          className="group flex items-center gap-2.5"
          aria-label="Go to home"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 font-extrabold text-white shadow-md shadow-brand-600/30 transition-transform group-hover:scale-105">
            OB
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-base font-extrabold tracking-tight text-slate-900">
              Osiberu
            </span>
            <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-brand-600">
              Boluwatife
            </span>
          </span>
        </button>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => go(link.id)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  active === link.id
                    ? "bg-brand-50 text-brand-700"
                    : "text-slate-600 hover:text-brand-700"
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => go("contact")}
          className="hidden rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-brand-600 hover:shadow-lg hover:shadow-brand-600/30 lg:inline-flex"
        >
          Hire Me
        </button>

        <button
          onClick={() => setOpen((v) => !v)}
          className="rounded-lg p-2 text-slate-800 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden bg-white/95 backdrop-blur-md transition-[max-height] duration-300 lg:hidden ${
          open ? "max-h-[480px] border-t border-slate-100" : "max-h-0"
        }`}
      >
        <ul className="space-y-1 px-5 py-4">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => go(link.id)}
                className={`block w-full rounded-lg px-4 py-3 text-left text-sm font-semibold transition-colors ${
                  active === link.id
                    ? "bg-brand-50 text-brand-700"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => go("contact")}
              className="mt-2 block w-full rounded-lg bg-slate-900 px-4 py-3 text-center text-sm font-semibold text-white"
            >
              Hire Me
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}

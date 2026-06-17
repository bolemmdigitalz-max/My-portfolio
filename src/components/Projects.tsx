import { useMemo, useState } from "react";
import { CATEGORIES, PROJECTS, type Category, type Project } from "../data";
import { ArrowRightIcon, SearchIcon, StarIcon } from "./Icons";
import SectionHeading from "./SectionHeading";

function ProjectCard({ project, featured }: { project: Project; featured?: boolean }) {
  const go = () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all hover:-translate-y-1.5 hover:shadow-xl hover:shadow-slate-900/10">
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold text-brand-700 shadow-sm backdrop-blur">
          {project.category}
        </span>
        {featured && (
          <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-amber-400 px-2.5 py-1 text-[11px] font-bold text-amber-950 shadow-sm">
            <StarIcon className="h-3 w-3" /> Featured
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-base font-bold text-slate-900">{project.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.services.map((s) => (
            <span
              key={s}
              className="rounded-md bg-slate-100 px-2 py-1 text-[11px] font-semibold text-slate-600"
            >
              {s}
            </span>
          ))}
        </div>
        <button
          onClick={go}
          className="group/btn mt-5 inline-flex items-center justify-center gap-2 rounded-full border-2 border-slate-200 px-4 py-2.5 text-sm font-bold text-slate-800 transition-all hover:border-brand-500 hover:bg-brand-600 hover:text-white"
        >
          View Project
          <ArrowRightIcon className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
        </button>
      </div>
    </article>
  );
}

export default function Projects() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Category>("All");

  const featured = useMemo(() => PROJECTS.filter((p) => p.featured), []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PROJECTS.filter((p) => {
      const matchCat = filter === "All" || p.category === filter;
      const matchQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.services.some((s) => s.toLowerCase().includes(q));
      return matchCat && matchQuery;
    });
  }, [query, filter]);

  return (
    <section id="projects" className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Projects"
          title="Featured Work & Portfolio"
          subtitle="A selection of projects across website design, local listings, advertising and graphic design."
        />

        {/* Featured */}
        <div className="reveal mb-14">
          <div className="mb-5 flex items-center gap-2">
            <StarIcon className="h-5 w-5 text-amber-400" />
            <h3 className="text-lg font-bold text-slate-900">Featured Projects</h3>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((p) => (
              <ProjectCard key={p.id} project={p} featured />
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="reveal mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative w-full lg:max-w-xs">
            <SearchIcon className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects..."
              aria-label="Search projects"
              className="w-full rounded-full border border-slate-200 bg-white py-3 pl-10 pr-4 text-sm font-medium text-slate-800 shadow-sm outline-none transition-all focus:border-brand-400 focus:ring-2 focus:ring-brand-200"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`rounded-full px-4 py-2 text-xs font-bold transition-all sm:text-sm ${
                  filter === cat
                    ? "bg-slate-900 text-white shadow-md"
                    : "bg-white text-slate-600 hover:bg-brand-50 hover:text-brand-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white py-16 text-center">
            <p className="text-base font-semibold text-slate-700">No projects found</p>
            <p className="mt-1 text-sm text-slate-500">
              Try a different search term or category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

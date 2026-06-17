import { useEffect, useRef, useState } from "react";
import { SKILLS } from "../data";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  const [animate, setAnimate] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimate(true);
          obs.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-slate-900 py-20 text-white lg:py-28"
    >
      <div className="pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full bg-brand-600/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-indigo-600/20 blur-3xl" />

      <div ref={ref} className="relative mx-auto max-w-5xl px-5 lg:px-8">
        <SectionHeading
          light
          eyebrow="Skills"
          title="Skills & Expertise"
          subtitle="A blend of design, development and marketing skills refined through hands-on project work."
        />

        <div className="grid gap-x-12 gap-y-7 md:grid-cols-2">
          {SKILLS.map((skill, i) => (
            <div key={skill.name} className="reveal">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm font-semibold text-slate-100">{skill.name}</span>
                <span className="text-sm font-bold text-brand-300">{skill.level}%</span>
              </div>
              <div className="h-2.5 w-full overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-brand-400 to-indigo-400 transition-[width] duration-[1400ms] ease-out"
                  style={{
                    width: animate ? `${skill.level}%` : "0%",
                    transitionDelay: `${i * 90}ms`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

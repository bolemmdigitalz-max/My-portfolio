type Props = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  light?: boolean;
};

export default function SectionHeading({ eyebrow, title, subtitle, light }: Props) {
  return (
    <div className="reveal mx-auto mb-12 max-w-2xl text-center">
      <span
        className={`inline-block rounded-full px-4 py-1 text-xs font-bold uppercase tracking-[0.18em] ${
          light ? "bg-white/10 text-brand-200" : "bg-brand-50 text-brand-700"
        }`}
      >
        {eyebrow}
      </span>
      <h2
        className={`mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl ${
          light ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base leading-relaxed ${
            light ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

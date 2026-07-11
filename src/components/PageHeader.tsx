export function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="mb-4 font-display text-xs font-medium uppercase tracking-[0.25em] text-bronze md:text-sm">
        {eyebrow}
      </p>
      <h1 className="text-balance font-display text-4xl font-bold leading-tight tracking-tight text-paper sm:text-5xl md:text-6xl">
        {title}
      </h1>
      <p className="mx-auto mt-5 max-w-xl text-balance text-lg leading-relaxed text-stone">
        {subtitle}
      </p>
    </div>
  );
}

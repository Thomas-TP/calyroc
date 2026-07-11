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
      <p className="text-eyebrow mb-4">{eyebrow}</p>
      <h1 className="text-display-lg text-balance text-paper">{title}</h1>
      <p className="mx-auto mt-5 max-w-xl text-balance text-lg leading-relaxed text-stone">
        {subtitle}
      </p>
    </div>
  );
}

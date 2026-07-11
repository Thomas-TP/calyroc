export function ComingSoon({ path }: { path: string }) {
  return (
    <section className="mx-auto flex min-h-[70svh] max-w-2xl flex-col items-center justify-center px-6 text-center">
      <h1 className="font-display text-2xl font-bold text-paper">
        This page is under construction
      </h1>
      <p className="mt-3 text-stone">
        <code className="text-bronze">{path}</code> hasn&apos;t been built yet -- foundations first
        (see PLAN.md, phase 1).
      </p>
    </section>
  );
}

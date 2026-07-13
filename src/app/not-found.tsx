import "./globals.css";

export const metadata = {
  title: "404 — Page introuvable",
};

export default function RootNotFound() {
  return (
    <html lang="fr" className="dark">
      <body className="bg-onyx font-body text-paper antialiased">
        <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-bronze/10 blur-3xl"
          />
          <img
            src="/logo.png"
            alt="Calyroc"
            width={160}
            height={44}
            className="relative h-10 w-auto opacity-90"
          />
          <p className="relative mt-6 font-display text-xs font-medium uppercase tracking-[0.25em] text-bronze">
            404
          </p>
          <h1 className="relative mt-4 font-display text-4xl font-bold tracking-tight text-paper md:text-5xl">
            Cette page n'existe pas.
          </h1>
          <p className="relative mt-4 max-w-md text-stone">
            Le lien est peut-être obsolète, ou l'adresse comporte une erreur.
          </p>
          <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href="/fr/" className="btn-primary">
              Retour à l'accueil
            </a>
            <a href="/fr/contact" className="btn-secondary">
              Nous contacter
            </a>
          </div>
        </section>
      </body>
    </html>
  );
}

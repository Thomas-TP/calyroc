import "./globals.css";

export default function RootNotFound() {
  return (
    <html lang="fr" className="dark">
      <body className="bg-onyx font-body text-paper antialiased">
        <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
          <p className="font-display text-xs font-medium uppercase tracking-[0.25em] text-bronze">
            404
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-paper md:text-5xl">
            Page introuvable
          </h1>
          <p className="mt-4 max-w-md text-stone">
            Cette page n'existe pas. / This page doesn't exist.
          </p>
          <a href="/fr/" className="btn-primary mt-8">
            Retour à l'accueil / Back home
          </a>
        </section>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { TransitionLink as Link } from "@/components/TransitionLink";
import { blogPosts, getBlogPostTranslation } from "@/content/blog";
import { getDictionary } from "@/i18n/dictionary";
import { isLocale, type Locale } from "@/i18n/locales";
import { buildAlternates, buildBreadcrumbJsonLd, buildOpenGraph, buildTwitter } from "@/i18n/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dictionary = getDictionary(locale);
  const title = `${dictionary.blogPage.title} — Calyroc`;

  return {
    title,
    description: dictionary.blogPage.subtitle,
    alternates: buildAlternates(locale, "blog"),
    openGraph: buildOpenGraph(locale, "blog", title, dictionary.blogPage.subtitle),
    twitter: buildTwitter(title, dictionary.blogPage.subtitle),
  };
}

export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dictionary = getDictionary(locale as Locale);
  const { blogPage } = dictionary;

  const breadcrumbJsonLd = buildBreadcrumbJsonLd(locale as Locale, [
    { name: blogPage.eyebrow, path: "blog" },
  ]);

  return (
    <section className="mx-auto max-w-4xl px-6 pb-24 pt-32 md:px-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <PageHeader eyebrow={blogPage.eyebrow} title={blogPage.title} subtitle={blogPage.subtitle} />

      <div className="mt-14 flex flex-col gap-6">
        {blogPosts.map((post, index) => {
          const translation = getBlogPostTranslation(post, locale as Locale);
          return (
            <Reveal key={post.slug} delay={index * 0.08}>
              <Link
                href={`/${locale}/blog/${post.slug}`}
                className="group block rounded-2xl border border-paper/10 bg-onyx-soft p-8 transition-all duration-300 hover:-translate-y-1 hover:border-bronze/30"
              >
                <div className="flex flex-wrap items-center gap-3 text-xs text-stone">
                  <span>{new Date(post.publishedAt).toLocaleDateString(locale)}</span>
                  <span aria-hidden>·</span>
                  <span>
                    {translation.readingTimeMinutes} {blogPage.minutesLabel}
                  </span>
                </div>
                <h2 className="mt-3 font-display text-xl font-bold text-paper">
                  {translation.title}
                </h2>
                <p className="mt-2 leading-relaxed text-stone">{translation.excerpt}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {translation.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-paper/8 px-2.5 py-1 text-xs text-paper/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span
                  aria-hidden
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-bronze transition-transform duration-300 group-hover:translate-x-1"
                >
                  {blogPage.readMoreLabel} →
                </span>
              </Link>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

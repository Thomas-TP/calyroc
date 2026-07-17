import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { TransitionLink as Link } from "@/components/TransitionLink";
import { blogPosts } from "@/content/blog";
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

  // Articles are authored in one language at a time (see src/content/blog) --
  // show the visitor's own locale when available, otherwise fall back to
  // showing everything rather than an empty page, with a small language
  // badge per card so it's never ambiguous which language a post is in.
  const localePosts = blogPosts.filter((post) => post.locale === locale);
  const posts = localePosts.length > 0 ? localePosts : blogPosts;

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
        {posts.map((post, index) => (
          <Reveal key={post.slug} delay={index * 0.08}>
            <Link
              href={`/${locale}/blog/${post.slug}`}
              className="group block rounded-2xl border border-paper/10 bg-onyx-soft p-8 transition-all duration-300 hover:-translate-y-1 hover:border-bronze/30"
            >
              <div className="flex flex-wrap items-center gap-3 text-xs text-stone">
                <span>{new Date(post.publishedAt).toLocaleDateString(locale)}</span>
                <span aria-hidden>·</span>
                <span>
                  {post.readingTimeMinutes} {blogPage.minutesLabel}
                </span>
                {post.locale !== locale && (
                  <span className="rounded-full border border-paper/15 px-2 py-0.5 uppercase tracking-wide">
                    {post.locale}
                  </span>
                )}
              </div>
              <h2 className="mt-3 font-display text-xl font-bold text-paper">{post.title}</h2>
              <p className="mt-2 leading-relaxed text-stone">{post.excerpt}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
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
        ))}
      </div>
    </section>
  );
}

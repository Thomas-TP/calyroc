import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TransitionLink as Link } from "@/components/TransitionLink";
import { blogPosts, getBlogPost } from "@/content/blog";
import { getDictionary } from "@/i18n/dictionary";
import { isLocale, type Locale } from "@/i18n/locales";
import {
  buildAlternates,
  buildBreadcrumbJsonLd,
  buildOpenGraph,
  buildTwitter,
  SITE_URL,
} from "@/i18n/seo";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const post = getBlogPost(slug);
  if (!post) return {};
  const title = `${post.title} — Calyroc`;

  return {
    title,
    description: post.excerpt,
    alternates: buildAlternates(locale, `blog/${slug}`),
    openGraph: buildOpenGraph(locale, `blog/${slug}`, title, post.excerpt, "article"),
    twitter: buildTwitter(title, post.excerpt),
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const dictionary = getDictionary(locale as Locale);
  const { blogPage } = dictionary;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    author: { "@type": "Person", name: "Thomas Prud'homme" },
    publisher: { "@type": "Organization", name: "Calyroc", url: SITE_URL },
    mainEntityOfPage: `${SITE_URL}/${locale}/blog/${slug}`,
  };

  const breadcrumbJsonLd = buildBreadcrumbJsonLd(locale as Locale, [
    { name: blogPage.eyebrow, path: "blog" },
    { name: post.title, path: `blog/${slug}` },
  ]);

  return (
    <article className="mx-auto max-w-3xl px-6 pb-24 pt-32 md:px-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <Link
        href={`/${locale}/blog`}
        className="text-sm text-stone transition-colors hover:text-bronze"
      >
        {blogPage.backLabel}
      </Link>

      <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-stone">
        <span>{new Date(post.publishedAt).toLocaleDateString(locale)}</span>
        <span aria-hidden>·</span>
        <span>
          {post.readingTimeMinutes} {blogPage.minutesLabel}
        </span>
      </div>
      <h1 className="text-display-lg mt-4 text-balance text-paper">{post.title}</h1>
      <p className="mt-4 text-lg leading-relaxed text-stone">{post.excerpt}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span key={tag} className="rounded-full bg-paper/8 px-2.5 py-1 text-xs text-paper/70">
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-12 flex flex-col gap-8">
        {post.sections.map((section, sectionIndex) => (
          <div
            // biome-ignore lint/suspicious/noArrayIndexKey: static article content, authored once, never reordered
            key={sectionIndex}
          >
            {section.heading && (
              <h2 className="font-display text-xl font-bold text-paper">{section.heading}</h2>
            )}
            <div className={section.heading ? "mt-3 flex flex-col gap-4" : "flex flex-col gap-4"}>
              {section.paragraphs.map((paragraph, paragraphIndex) => (
                <p
                  // biome-ignore lint/suspicious/noArrayIndexKey: static article content, authored once, never reordered
                  key={paragraphIndex}
                  className="leading-relaxed text-paper/85"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}

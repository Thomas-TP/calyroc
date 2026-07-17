import type { NextConfig } from "next";
import { locales } from "./src/i18n/locales";
import { localizedSlugs, serviceSlugs } from "./src/i18n/routes";

// Static generation (SSG) is core to this site's performance, so CSP nonces
// are off the table -- Next.js only injects a nonce during per-request
// dynamic rendering, which would force every page off the static/cached
// path. This is the pattern Next.js's own docs recommend for that trade-off:
// https://nextjs.org/docs/app/guides/content-security-policy#without-nonces
// `unsafe-inline` on style-src is required regardless of nonces: Framer
// Motion (used across the whole site for animation) sets `element.style.*`
// directly, which CSP treats the same as an inline style attribute.
const cspHeader = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' https://challenges.cloudflare.com;
  style-src 'self' 'unsafe-inline';
  img-src 'self' blob: data:;
  font-src 'self';
  connect-src 'self';
  frame-src https://challenges.cloudflare.com;
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
  upgrade-insecure-requests;
`
  .replace(/\s{2,}/g, " ")
  .trim();

const nextConfig: NextConfig = {
  // Avoid leaking the framework via the default X-Powered-By response header.
  poweredByHeader: false,
  // Native View Transitions (React's <ViewTransition>, activated
  // automatically on route navigation) replaced the third-party
  // next-view-transitions shim this site used to rely on -- that package
  // predates Next 16's own support and was fighting with this version's
  // router internals, causing navigations (especially browser back/forward)
  // to intermittently hang. The existing ::view-transition-old/new(root)
  // CSS crossfade in globals.css is the plain browser API and needed no
  // changes.
  experimental: {
    viewTransition: true,
  },
  // Every non-fr locale gets its own translated URL slug (see
  // src/i18n/routes.ts) instead of showing the French folder name under
  // every locale prefix (e.g. /en/realisations) -- confirmed against
  // current international-SEO guidance (localized paths outrank a single
  // shared-language path). The physical route folders stay French
  // internally (src/app/[locale]/tarifs/ etc.); rewrites map the localized
  // incoming path to that folder, and redirects send the old French-slug
  // URL (already crawled/indexed) to the new localized one so both don't
  // stay live as duplicate content.
  async rewrites() {
    const rules: { source: string; destination: string }[] = [];
    for (const bySlug of Object.values(localizedSlugs)) {
      const canonical = bySlug.fr;
      for (const locale of locales) {
        const slug = bySlug[locale];
        if (slug !== canonical) {
          rules.push({ source: `/${locale}/${slug}`, destination: `/${locale}/${canonical}` });
        }
      }
    }
    // Same rewrite pattern, one level deeper: /services/[slug] is a brand
    // new route (no prior indexed French-slug URLs to also redirect from,
    // unlike the top-level routes above).
    for (const bySlug of Object.values(serviceSlugs)) {
      const canonical = bySlug.fr;
      for (const locale of locales) {
        const slug = bySlug[locale];
        if (slug !== canonical) {
          rules.push({
            source: `/${locale}/services/${slug}`,
            destination: `/${locale}/services/${canonical}`,
          });
        }
      }
    }
    return rules;
  },
  async redirects() {
    const rules: { source: string; destination: string; permanent: boolean }[] = [];
    for (const bySlug of Object.values(localizedSlugs)) {
      const canonical = bySlug.fr;
      for (const locale of locales) {
        const slug = bySlug[locale];
        if (slug !== canonical) {
          rules.push({
            source: `/${locale}/${canonical}`,
            destination: `/${locale}/${slug}`,
            permanent: true,
          });
        }
      }
    }
    return rules;
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "Content-Security-Policy", value: cspHeader },
          // Staged rollout per Chrome's own guidance: started at 1 day,
          // raised to 6 months (2026-07-17) after confirming HTTPS/Cloudflare
          // stayed solid with no cert or redirect issues through the site's
          // build-out. Deliberately not going further yet: includeSubDomains
          // and preload are much harder to reverse than a plain max-age bump
          // -- a visitor who has cached this policy can't reach the site over
          // HTTP at all until it expires, so a longer window means a longer
          // outage if HTTPS itself ever breaks (cert issue, host migration).
          { key: "Strict-Transport-Security", value: "max-age=15552000" },
          { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

export default nextConfig;

import type { NextConfig } from "next";
import { locales } from "./src/i18n/locales";
import { localizedSlugs } from "./src/i18n/routes";

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
          // Conservative first rollout (1 day): HSTS is close to
          // irreversible for affected visitors once a long max-age is
          // cached by their browser, so start low and raise it over time
          // once confirmed nothing breaks, per Chrome's own staged-rollout
          // guidance -- see the "Utiliser une règle HSTS efficace" audit.
          { key: "Strict-Transport-Security", value: "max-age=86400" },
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

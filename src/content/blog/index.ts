import { gestionnairesPaquets2026 } from "./gestionnaires-paquets-2026";
import type { BlogPost } from "./types";

export const blogPosts: BlogPost[] = [gestionnairesPaquets2026];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export type { BlogPost, BlogSection } from "./types";

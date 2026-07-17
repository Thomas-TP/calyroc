import { getCloudflareContext } from "@opennextjs/cloudflare";

// Deliberately unauthenticated -- reachable by anyone who knows the lead's
// tracking token, the same trust boundary as /suivi/[token] itself. Files
// are stored under leads/{token}/{key} in R2 specifically so this route
// never needs to look anything up in D1 to decide whether to serve a file.
export async function GET(
  _request: Request,
  { params }: { params: Promise<{ token: string; key: string }> },
) {
  const { token, key } = await params;
  const { env } = await getCloudflareContext({ async: true });

  const object = await env.PROJECT_FILES.get(`leads/${token}/${key}`);
  if (!object) {
    return new Response("Not found", { status: 404 });
  }

  return new Response(object.body, {
    headers: {
      "Content-Type": object.httpMetadata?.contentType ?? "application/octet-stream",
      "Cache-Control": "private, max-age=31536000, immutable",
    },
  });
}

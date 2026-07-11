import { getCloudflareContext } from "@opennextjs/cloudflare";
import { isAuthenticated } from "@/lib/adminAuth";
import type { Lead } from "@/lib/leads";

function csvEscape(value: string): string {
  return `"${value.replace(/"/g, '""')}"`;
}

export async function GET() {
  if (!(await isAuthenticated())) {
    return new Response("Unauthorized", { status: 401 });
  }

  const { env } = await getCloudflareContext({ async: true });
  const { results } = await env.DB.prepare("SELECT * FROM leads ORDER BY created_at DESC").all();
  const leads = results as unknown as Lead[];

  const header = [
    "id",
    "created_at",
    "name",
    "email",
    "budget",
    "locale",
    "status",
    "notes",
    "message",
  ];
  const rows = leads.map((lead) =>
    [
      lead.id,
      lead.created_at,
      lead.name,
      lead.email,
      lead.budget,
      lead.locale,
      lead.status,
      lead.notes,
      lead.message,
    ]
      .map((value) => csvEscape(String(value)))
      .join(","),
  );

  const csv = [header.join(","), ...rows].join("\n");

  return new Response(csv, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": 'attachment; filename="calyroc-leads.csv"',
    },
  });
}

import { getCloudflareContext } from "@opennextjs/cloudflare";
import { z } from "zod";
import { buildSystemPrompt } from "@/i18n/chatContext";
import { defaultLocale, isLocale } from "@/i18n/locales";

const MessageSchema = z.object({
  role: z.enum(["user", "assistant"]),
  content: z.string().min(1).max(2000),
});

const ChatRequestSchema = z.object({
  messages: z.array(MessageSchema).min(1).max(20),
  locale: z.string(),
});

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = ChatRequestSchema.safeParse(body);
  if (!parsed.success) {
    return Response.json({ error: "invalid-request" }, { status: 400 });
  }

  const locale = isLocale(parsed.data.locale) ? parsed.data.locale : defaultLocale;

  try {
    const { env } = await getCloudflareContext({ async: true });
    const result = await env.AI.run("@cf/meta/llama-3.1-8b-instruct-fast", {
      messages: [
        { role: "system", content: buildSystemPrompt(locale) },
        ...parsed.data.messages.slice(-10),
      ],
      max_tokens: 400,
    });

    const reply =
      "response" in result && typeof result.response === "string" ? result.response : "";

    if (!reply) {
      return Response.json({ error: "empty-response" }, { status: 502 });
    }

    return Response.json({ reply });
  } catch (error) {
    console.error("Ask Calyroc chat failed", error);
    return Response.json({ error: "ai-failed" }, { status: 502 });
  }
}

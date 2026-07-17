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
    // GLM-4.7-Flash: purpose-built for multilingual dialogue (100+
    // languages, vs. Llama 3.1 8B's weaker non-English instruction
    // following) and a 131k token context on Workers AI, against Llama's
    // 4k -- relevant since this site's system prompt + a real back-and-forth
    // could otherwise get truncated. Still a "flash"/lightweight model, so
    // it stays comfortably inside the Workers Free plan's daily neuron
    // budget. https://developers.cloudflare.com/changelog/post/2026-04-09-new-workers-ai-models/
    const result = await env.AI.run("@cf/zai-org/glm-4.7-flash", {
      messages: [
        { role: "system", content: buildSystemPrompt(locale) },
        ...parsed.data.messages.slice(-10),
      ],
      max_tokens: 700,
      // GLM-4.7-Flash is a reasoning model: by default it spends its token
      // budget on a hidden chain-of-thought (returned separately as
      // `reasoning_content`) before writing the actual answer, which can
      // exhaust max_tokens with an empty `content`. This disables that step
      // (chat_template_kwargs isn't in the generated binding types yet) so
      // the full budget goes to the visible reply.
      ...({ chat_template_kwargs: { enable_thinking: false } } as Record<string, unknown>),
    });

    const choiceContent =
      "choices" in result && Array.isArray(result.choices)
        ? result.choices[0]?.message?.content
        : undefined;
    const reply =
      typeof choiceContent === "string" && choiceContent.trim()
        ? choiceContent
        : "response" in result && typeof result.response === "string"
          ? result.response
          : "";

    if (!reply) {
      console.error("Ask Calyroc empty response, raw result:", JSON.stringify(result));
      return Response.json({ error: "empty-response" }, { status: 502 });
    }

    return Response.json({ reply });
  } catch (error) {
    console.error("Ask Calyroc chat failed", error);
    return Response.json({ error: "ai-failed" }, { status: 502 });
  }
}

"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import type { Dictionary } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/locales";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export function AskCalyroc({ locale, dictionary }: { locale: Locale; dictionary: Dictionary }) {
  const { chatbot } = dictionary;
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: "assistant", content: chatbot.intro },
  ]);
  const [input, setInput] = useState("");
  const [isPending, setIsPending] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages.length, isPending]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  async function sendMessage(event: React.FormEvent) {
    event.preventDefault();
    const text = input.trim();
    if (!text || isPending) return;

    const nextMessages: ChatMessage[] = [...messages, { role: "user", content: text }];
    setMessages(nextMessages);
    setInput("");
    setIsPending(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages, locale }),
      });

      if (!response.ok) throw new Error("chat request failed");

      const data = (await response.json()) as { reply: string };
      setMessages((prev) => [...prev, { role: "assistant", content: data.reply }]);
    } catch {
      setMessages((prev) => [...prev, { role: "assistant", content: chatbot.errorMessage }]);
    } finally {
      setIsPending(false);
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="flex h-[28rem] w-[22rem] max-w-[90vw] flex-col overflow-hidden rounded-2xl border border-paper/12 bg-onyx-soft shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-paper/8 px-4 py-3">
              <span className="font-display text-sm font-bold text-paper">{chatbot.title}</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="text-stone transition-colors hover:text-paper"
              >
                ✕
              </button>
            </div>

            <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
              {messages.map((message, index) => (
                <div
                  // biome-ignore lint/suspicious/noArrayIndexKey: message list is append-only, never reordered
                  key={index}
                  className={`max-w-[85%] rounded-xl px-3 py-2 text-sm leading-relaxed ${
                    message.role === "user"
                      ? "ml-auto bg-bronze text-onyx"
                      : "bg-paper/8 text-paper/90"
                  }`}
                >
                  {message.content}
                </div>
              ))}
              {isPending && (
                <div className="flex gap-1 rounded-xl bg-paper/8 px-3 py-2.5 w-fit">
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-stone [animation-delay:-0.3s]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-stone [animation-delay:-0.15s]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-stone" />
                </div>
              )}
            </div>

            <form onSubmit={sendMessage} className="border-t border-paper/8 p-3">
              <div className="flex items-center gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  placeholder={chatbot.placeholder}
                  disabled={isPending}
                  className="flex-1 rounded-full border border-paper/15 bg-transparent px-4 py-2 text-sm text-paper outline-none transition-colors focus:border-bronze"
                />
                <button
                  type="submit"
                  disabled={isPending || !input.trim()}
                  aria-label={chatbot.send}
                  className="btn-primary !px-4 !py-2 text-xs disabled:opacity-50"
                >
                  {chatbot.send}
                </button>
              </div>
              <p className="mt-2 text-center text-[0.65rem] text-stone">{chatbot.disclaimer}</p>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="btn-primary !rounded-full !px-6 !py-3.5 shadow-xl"
      >
        {chatbot.label}
      </button>
    </div>
  );
}

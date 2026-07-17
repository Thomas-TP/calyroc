"use client";

import { AnimatePresence, motion } from "motion/react";
import { type ReactNode, useEffect, useRef, useState } from "react";
import { MagneticButton } from "@/components/MagneticButton";
import { TransitionLink as Link } from "@/components/TransitionLink";
import type { Dictionary } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/locales";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

const MIN_SIZE = { width: 320, height: 360 };
const MAX_SIZE = { width: 960, height: 900 };

// A deliberately small Markdown subset (bold + links only, matching what the
// system prompt is told to use -- see chatContext.ts) rendered straight to
// React elements, never through dangerouslySetInnerHTML. Plain text segments
// stay plain strings, so even a malicious/malformed model reply can only
// ever show up as inert text, not execute -- safe by construction rather
// than by sanitizing.
function renderInlineMarkdown(text: string, keyPrefix: string): ReactNode[] {
  const pattern = /\*\*(.+?)\*\*|\[([^\]]+)\]\(([^)\s]+)\)/g;
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null = pattern.exec(text);
  let key = 0;

  while (match !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }
    const [, bold, linkLabel, linkHref] = match;
    if (bold !== undefined) {
      nodes.push(
        <strong key={`${keyPrefix}-${key++}`} className="font-semibold text-paper">
          {bold}
        </strong>,
      );
    } else if (linkLabel !== undefined && linkHref !== undefined) {
      const linkClass = "font-medium text-bronze underline underline-offset-2 hover:text-bronze-soft";
      nodes.push(
        linkHref.startsWith("/") ? (
          <Link key={`${keyPrefix}-${key++}`} href={linkHref} className={linkClass}>
            {linkLabel}
          </Link>
        ) : linkHref.startsWith("mailto:") ? (
          <a key={`${keyPrefix}-${key++}`} href={linkHref} className={linkClass}>
            {linkLabel}
          </a>
        ) : (
          <a
            key={`${keyPrefix}-${key++}`}
            href={linkHref}
            target="_blank"
            rel="noreferrer"
            className={linkClass}
          >
            {linkLabel}
          </a>
        ),
      );
    }
    lastIndex = pattern.lastIndex;
    match = pattern.exec(text);
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }
  return nodes;
}

function renderChatMarkdown(content: string): ReactNode {
  return content
    .split("\n")
    .filter((line) => line.trim() !== "")
    .map((line, index) => (
      // biome-ignore lint/suspicious/noArrayIndexKey: lines are re-derived from content on every render, never reordered independently
      <p key={index} className="mt-2 first:mt-0">
        {renderInlineMarkdown(line, `l${index}`)}
      </p>
    ));
}

function CopyIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function ExpandIcon({ expanded }: { expanded: boolean }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {expanded ? (
        <>
          <polyline points="4 14 10 14 10 20" />
          <polyline points="20 10 14 10 14 4" />
          <line x1="14" y1="10" x2="21" y2="3" />
          <line x1="3" y1="21" x2="10" y2="14" />
        </>
      ) : (
        <>
          <polyline points="15 3 21 3 21 9" />
          <polyline points="9 21 3 21 3 15" />
          <line x1="21" y1="3" x2="14" y2="10" />
          <line x1="3" y1="21" x2="10" y2="14" />
        </>
      )}
    </svg>
  );
}

export function AskCalyroc({ locale, dictionary }: { locale: Locale; dictionary: Dictionary }) {
  const { chatbot } = dictionary;
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [customSize, setCustomSize] = useState<{ width: number; height: number } | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: "assistant", content: chatbot.intro },
  ]);
  const [input, setInput] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const lastMessageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    const lastMessage = messages[messages.length - 1];
    // A fresh assistant reply starts scrolled to its own top, not the
    // container's bottom -- otherwise a long answer opens on its last line
    // and the visitor has to scroll up just to read the start of it. Uses
    // getBoundingClientRect rather than offsetTop: the container itself is
    // position:static, so offsetTop would resolve against the nearest
    // positioned ancestor (the fixed panel) and land short by the header's
    // height instead of the container's own top.
    if (lastMessage?.role === "assistant" && lastMessageRef.current) {
      const relativeTop =
        lastMessageRef.current.getBoundingClientRect().top - container.getBoundingClientRect().top;
      container.scrollTop += relativeTop - 8;
    } else {
      container.scrollTop = container.scrollHeight;
    }
  }, [messages, isPending]);

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

  async function handleCopy(text: string, index: number) {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex((current) => (current === index ? null : current)), 1500);
    } catch {
      // Clipboard permission denied or unavailable -- the button simply won't confirm.
    }
  }

  function toggleExpanded() {
    setCustomSize(null);
    setExpanded((value) => !value);
  }

  // Desktop-only manual resize, anchored to the panel's fixed bottom-right
  // corner (dragging the top-left handle grows the box toward the top-left,
  // exactly like resizing a real window from that corner).
  function handleResizePointerDown(event: React.PointerEvent) {
    event.preventDefault();
    const panel = panelRef.current;
    if (!panel) return;
    const startRect = panel.getBoundingClientRect();
    const startX = event.clientX;
    const startY = event.clientY;

    function handleMove(moveEvent: PointerEvent) {
      const deltaX = startX - moveEvent.clientX;
      const deltaY = startY - moveEvent.clientY;
      setCustomSize({
        width: Math.min(Math.max(startRect.width + deltaX, MIN_SIZE.width), MAX_SIZE.width),
        height: Math.min(Math.max(startRect.height + deltaY, MIN_SIZE.height), MAX_SIZE.height),
      });
    }
    function handleUp() {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerup", handleUp);
    }
    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerup", handleUp);
  }

  const panelClassName = expanded
    ? "fixed inset-0 z-40 flex flex-col overflow-hidden bg-onyx-soft shadow-2xl md:inset-auto md:bottom-6 md:right-6 md:h-[42rem] md:w-[44rem] md:max-h-[85vh] md:max-w-[92vw] md:rounded-2xl md:border md:border-paper/12"
    : "fixed bottom-6 right-6 z-40 flex h-[28rem] w-[22rem] max-h-[85vh] max-w-[90vw] flex-col overflow-hidden rounded-2xl border border-paper/12 bg-onyx-soft shadow-2xl";

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            ref={panelRef}
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            style={customSize ? { width: customSize.width, height: customSize.height } : undefined}
            className={panelClassName}
          >
            <div
              onPointerDown={handleResizePointerDown}
              aria-label={chatbot.resizeHandle}
              title={chatbot.resizeHandle}
              className="absolute left-0 top-0 z-10 hidden h-4 w-4 cursor-nwse-resize items-center justify-center text-stone/50 transition-colors hover:text-bronze md:flex"
            >
              <svg aria-hidden="true" viewBox="0 0 12 12" className="h-2.5 w-2.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <path d="M10 2 2 10" />
                <path d="M10 6 6 10" />
              </svg>
            </div>

            <div className="flex items-center justify-between border-b border-paper/8 px-4 py-3">
              <span className="flex items-center gap-2 font-display text-sm font-bold text-paper">
                {chatbot.title}
                {/* Always-visible AI disclosure (EU AI Act Art. 50): the
                    widget's identity as an AI assistant must be clear
                    before/at the start of the interaction, not just in the
                    small-print disclaimer near the input. */}
                <span className="rounded-full bg-bronze/15 px-2 py-0.5 font-display text-[0.65rem] font-semibold uppercase tracking-wide text-bronze">
                  {chatbot.aiBadge}
                </span>
              </span>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={toggleExpanded}
                  aria-label={expanded ? chatbot.collapse : chatbot.expand}
                  title={expanded ? chatbot.collapse : chatbot.expand}
                  className="flex h-7 w-7 items-center justify-center rounded-full text-stone transition-colors hover:bg-paper/8 hover:text-paper"
                >
                  <ExpandIcon expanded={expanded} />
                </button>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label={chatbot.close}
                  title={chatbot.close}
                  className="flex h-7 w-7 items-center justify-center rounded-full text-stone transition-colors hover:bg-paper/8 hover:text-paper"
                >
                  <CloseIcon />
                </button>
              </div>
            </div>

            <div ref={scrollRef} className="min-h-0 flex-1 space-y-3 overflow-y-auto px-4 py-4">
              {messages.map((message, index) => {
                const isUser = message.role === "user";
                const isLast = index === messages.length - 1;
                return (
                  <div
                    // biome-ignore lint/suspicious/noArrayIndexKey: message list is append-only, never reordered
                    key={index}
                    ref={isLast ? lastMessageRef : undefined}
                    className={`group flex flex-col gap-1 ${isUser ? "items-end" : "items-start"}`}
                  >
                    <div className={`flex max-w-[85%] items-end gap-2 ${isUser ? "flex-row-reverse" : "flex-row"}`}>
                      {!isUser && (
                        <img
                          src="/icon.png"
                          alt=""
                          aria-hidden="true"
                          className="h-6 w-6 shrink-0 rounded-full ring-1 ring-paper/10"
                        />
                      )}
                      <div
                        className={`w-fit rounded-xl px-3 py-2 text-sm leading-relaxed ${
                          isUser ? "bg-bronze text-ink" : "bg-paper/8 text-paper/90"
                        }`}
                      >
                        {isUser ? message.content : renderChatMarkdown(message.content)}
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleCopy(message.content, index)}
                      aria-label={copiedIndex === index ? chatbot.copied : chatbot.copy}
                      className={`flex items-center gap-1 px-1 text-[0.65rem] text-stone opacity-0 transition-opacity hover:text-bronze focus-visible:opacity-100 group-hover:opacity-100 ${isUser ? "" : "ml-8"}`}
                    >
                      {copiedIndex === index ? <CheckIcon /> : <CopyIcon />}
                      {copiedIndex === index ? chatbot.copied : chatbot.copy}
                    </button>
                  </div>
                );
              })}
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

      {!open && (
        <div className="fixed bottom-6 right-6 z-40">
          <MagneticButton>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="btn-primary !rounded-full !px-6 !py-3.5 shadow-xl"
            >
              {chatbot.label}
            </button>
          </MagneticButton>
        </div>
      )}
    </>
  );
}

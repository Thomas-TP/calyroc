"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useId, useRef, useState } from "react";

export interface SelectOption {
  value: string;
  label: string;
}

export function CustomSelect({
  options,
  name,
  value,
  defaultValue,
  onChange,
  ariaLabel,
  toolParamDescription,
  triggerClassName = "",
  panelClassName = "",
  panelAlign = "left",
  panelPosition = "bottom",
  variant = "bordered",
  closeSignal,
}: {
  options: SelectOption[];
  name?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  ariaLabel: string;
  /** WebMCP declarative-API hint (Chrome origin trial) describing this
   * field's purpose for AI agents, applied to the hidden input that
   * actually carries the selected value on submit. */
  toolParamDescription?: string;
  triggerClassName?: string;
  panelClassName?: string;
  panelAlign?: "left" | "right";
  /** "top" opens the panel above the trigger -- use where the trigger sits
   * near the bottom of its scroll container (e.g. the mobile menu), since a
   * downward panel would otherwise be clipped off-screen there. */
  panelPosition?: "top" | "bottom";
  /** "bare" drops the trigger's own border/rounding -- for nesting inside a
   * shared grouped container that already provides that boundary. */
  variant?: "bordered" | "bare";
  /** Forces the panel closed whenever this flips to true -- for a trigger
   * that lives inside something else that can leave the page while open
   * (e.g. the header's own scroll-driven hide), so the panel doesn't stay
   * "open" in state and pop back up already expanded when its container
   * returns. */
  closeSignal?: boolean;
}) {
  const isControlled = value !== undefined;
  const [internalValue, setInternalValue] = useState(defaultValue ?? options[0]?.value ?? "");
  const selected = isControlled ? value : internalValue;
  const [open, setOpen] = useState(false);
  const [hoveredValue, setHoveredValue] = useState<string | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  // Unique per instance so the sliding pill's layoutId can't cross-talk with
  // another CustomSelect open elsewhere on the page (a hardcoded id would
  // make Framer try to animate the pill *between* two separate dropdowns).
  const pillId = useId();

  useEffect(() => {
    if (!open) return;
    function handlePointerDown(event: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  useEffect(() => {
    if (!open) setHoveredValue(null);
  }, [open]);

  useEffect(() => {
    if (closeSignal) setOpen(false);
  }, [closeSignal]);

  function selectOption(newValue: string) {
    if (!isControlled) setInternalValue(newValue);
    onChange?.(newValue);
    setOpen(false);
  }

  const selectedLabel = options.find((option) => option.value === selected)?.label ?? "";
  const originClass =
    panelAlign === "right"
      ? panelPosition === "top"
        ? "origin-bottom-right"
        : "origin-top-right"
      : panelPosition === "top"
        ? "origin-bottom-left"
        : "origin-top-left";

  return (
    <div ref={rootRef} className="relative inline-block">
      {name && (
        <input
          type="hidden"
          name={name}
          value={selected}
          toolparamdescription={toolParamDescription}
        />
      )}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={ariaLabel}
        className={`flex items-center gap-2 bg-transparent text-left text-paper outline-none transition-colors ${
          variant === "bare"
            ? "rounded-full hover:bg-paper/8"
            : "rounded-lg border border-paper/15 hover:border-bronze/50 focus-visible:border-bronze"
        } ${triggerClassName}`}
      >
        <span className="flex-1 truncate">{selectedLabel}</span>
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className={`h-3.5 w-3.5 shrink-0 text-bronze transition-transform duration-200 ease-out ${
            open ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            role="listbox"
            aria-label={ariaLabel}
            onMouseLeave={() => setHoveredValue(null)}
            initial={{ opacity: 0, y: panelPosition === "top" ? 6 : -6, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: panelPosition === "top" ? 6 : -6, scale: 0.96 }}
            transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className={`absolute z-30 max-h-64 min-w-full overflow-auto rounded-xl border border-paper/12 bg-onyx-soft/90 p-1.5 shadow-2xl backdrop-blur-xl ${originClass} ${
              panelAlign === "right" ? "right-0" : "left-0"
            } ${panelPosition === "top" ? "bottom-full mb-2" : "mt-2"} ${panelClassName}`}
          >
            {options.map((option, index) => {
              const showPill = (hoveredValue ?? selected) === option.value;
              return (
                <motion.li
                  key={option.value}
                  role="option"
                  aria-selected={option.value === selected}
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.12, delay: index * 0.02 }}
                >
                  <button
                    type="button"
                    onClick={() => selectOption(option.value)}
                    onMouseEnter={() => setHoveredValue(option.value)}
                    className={`relative flex w-full items-center justify-between gap-3 whitespace-nowrap rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                      option.value === selected ? "text-bronze" : "text-paper/85 hover:text-paper"
                    }`}
                  >
                    {showPill && (
                      <motion.span
                        layoutId={`select-pill-${pillId}`}
                        className="absolute inset-0 rounded-lg bg-bronze/15"
                        transition={{ type: "spring", stiffness: 420, damping: 34 }}
                      />
                    )}
                    <span className="relative z-10">{option.label}</span>
                    {option.value === selected && (
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        className="relative z-10 h-3.5 w-3.5 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </button>
                </motion.li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

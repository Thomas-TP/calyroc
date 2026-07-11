"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

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
  triggerClassName = "",
  panelClassName = "",
  panelAlign = "left",
}: {
  options: SelectOption[];
  name?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  ariaLabel: string;
  triggerClassName?: string;
  panelClassName?: string;
  panelAlign?: "left" | "right";
}) {
  const isControlled = value !== undefined;
  const [internalValue, setInternalValue] = useState(defaultValue ?? options[0]?.value ?? "");
  const selected = isControlled ? value : internalValue;
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

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

  function selectOption(newValue: string) {
    if (!isControlled) setInternalValue(newValue);
    onChange?.(newValue);
    setOpen(false);
  }

  const selectedLabel = options.find((option) => option.value === selected)?.label ?? "";

  return (
    <div ref={rootRef} className="relative inline-block">
      {name && <input type="hidden" name={name} value={selected} />}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={ariaLabel}
        className={`flex cursor-pointer items-center gap-2 rounded-lg border border-paper/15 bg-transparent text-left text-paper outline-none transition-colors hover:border-bronze/50 focus-visible:border-bronze ${triggerClassName}`}
      >
        <span className="flex-1 truncate">{selectedLabel}</span>
        <span
          aria-hidden
          className={`shrink-0 text-bronze transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          ▾
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            role="listbox"
            aria-label={ariaLabel}
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className={`absolute z-30 mt-2 max-h-64 min-w-full overflow-auto rounded-xl border border-paper/12 bg-onyx-soft p-1.5 shadow-2xl ${
              panelAlign === "right" ? "right-0" : "left-0"
            } ${panelClassName}`}
          >
            {options.map((option) => (
              <li key={option.value} role="option" aria-selected={option.value === selected}>
                <button
                  type="button"
                  onClick={() => selectOption(option.value)}
                  className={`flex w-full items-center justify-between gap-3 whitespace-nowrap rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                    option.value === selected
                      ? "bg-bronze/15 text-bronze"
                      : "text-paper/85 hover:bg-paper/8 hover:text-paper"
                  }`}
                >
                  {option.label}
                  {option.value === selected && <span aria-hidden>✓</span>}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

// Persistent full-screen overlay used only for the "curtain" transition style
// (see TransitionLink.tsx) -- a real DOM element rather than a
// ::view-transition pseudo-element, because a solid color sweep needs its
// own paint, not a snapshot-diff of page content.
export function BronzeCurtain() {
  return (
    <div
      id="bronze-curtain"
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[60] origin-bottom scale-y-0 bg-bronze"
    />
  );
}

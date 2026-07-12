// Persistent overlay used only for the "curtain" transition style (see
// TransitionLink.tsx) -- a real DOM element rather than a
// ::view-transition pseudo-element, because a solid color sweep needs its
// own paint, not a snapshot-diff of page content.
//
// Wider than the viewport with a permanently diagonal clip-path, so a plain
// translateX sweep (animated in TransitionLink.tsx) reads as a diagonal
// bronze panel crossing the screen rather than a flat rectangle -- combines
// the brand-color "curtain" with the energy of a diagonal wipe.
export function BronzeCurtain() {
  return (
    <div
      id="bronze-curtain"
      aria-hidden
      className="pointer-events-none fixed inset-y-0 z-[60] bg-bronze"
      style={{
        left: "-20vw",
        width: "140vw",
        clipPath: "polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)",
        transform: "translateX(-100%)",
      }}
    />
  );
}

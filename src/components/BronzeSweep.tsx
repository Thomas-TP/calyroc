// A slim diagonal bronze accent that sweeps across the screen on every page
// navigation (triggered by TransitionLink.tsx re-adding the "sweep" class),
// alongside the normal content crossfade -- a real DOM element rather than a
// ::view-transition pseudo-element, because a solid color streak needs its
// own paint, not a snapshot-diff of page content. Deliberately narrow (not
// a full-viewport panel): a wide solid block read as harsh: this is meant
// as a quick accent, not an occlusion.
export function BronzeSweep() {
  return <div id="bronze-curtain" aria-hidden className="bronze-sweep" />;
}

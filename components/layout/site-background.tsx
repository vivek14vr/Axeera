export function SiteBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-site-aurora" />
      <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute right-[-6rem] top-40 h-80 w-80 rounded-full bg-accent-secondary/12 blur-3xl" />
      <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-accent/8 blur-3xl" />
      <div className="absolute inset-0 bg-site-grid" />
    </div>
  );
}

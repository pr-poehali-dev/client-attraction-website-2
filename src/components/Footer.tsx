export default function Footer() {
  return (
    <footer className="py-10 px-6 relative"
      style={{ borderTop: "1px solid hsl(270 80% 65% / 0.15)" }}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <a href="#" className="font-display text-lg tracking-widest flex items-center gap-2">
          <span style={{ color: "hsl(270 80% 65%)" }}>✦</span>
          <span>LordSite</span>
          <span style={{ color: "hsl(174 72% 42%)" }}>✦</span>
        </a>

        <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
          {[
            { label: "О мастере", href: "#about" },
            { label: "Услуги", href: "#services" },
            { label: "Галерея", href: "#portfolio" },
            { label: "FAQ", href: "#faq" },
            { label: "Связаться", href: "#contacts" },
          ].map((l) => (
            <a key={l.href} href={l.href}
              className="hover:text-foreground transition-colors link-underline font-body text-xs tracking-wide">
              {l.label}
            </a>
          ))}
        </div>

        <div className="text-center md:text-right">
          <p className="text-xs text-muted-foreground font-body">© 2025 LordSite</p>
          <p className="text-xs mt-1" style={{ color: "hsl(270 80% 65% / 0.5)" }}>ウェブの織り手</p>
        </div>
      </div>
    </footer>
  );
}

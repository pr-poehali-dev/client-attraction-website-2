export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <a href="#" className="font-display text-xl tracking-tight">LordSite</a>
        <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
          {[
            { label: "О нас", href: "#about" },
            { label: "Услуги", href: "#services" },
            { label: "Портфолио", href: "#portfolio" },
            { label: "Калькулятор", href: "#calculator" },
            { label: "Контакты", href: "#contacts" },
          ].map((l) => (
            <a key={l.href} href={l.href} className="hover:text-foreground transition-colors link-underline">
              {l.label}
            </a>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">© 2025 LordSite</p>
      </div>
    </footer>
  );
}

import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const links = [
  { label: "О мастере", href: "#about" },
  { label: "Свитки услуг", href: "#services" },
  { label: "Галерея", href: "#portfolio" },
  { label: "Путь создания", href: "#process" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Связаться", href: "#contacts" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300`}
      style={scrolled ? {
        background: "hsl(240 20% 7% / 0.92)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid hsl(270 80% 65% / 0.15)",
      } : {}}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-display text-lg tracking-widest flex items-center gap-2">
          <span style={{ color: "hsl(270 80% 65%)" }}>✦</span>
          <span className="text-foreground">LordSite</span>
          <span style={{ color: "hsl(174 72% 42%)" }}>✦</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors link-underline hover:text-foreground font-body"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contacts"
          className="hidden md:inline-flex items-center gap-2 text-sm px-5 py-2.5 font-manrope font-medium transition-all duration-300"
          style={{
            background: "hsl(270 80% 65% / 0.15)",
            border: "1px solid hsl(270 80% 65% / 0.4)",
            color: "hsl(270 80% 75%)",
          }}
        >
          ✦ Заказать сайт
        </a>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)} aria-label="Меню">
          <Icon name={open ? "X" : "Menu"} size={22} />
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 py-4 flex flex-col gap-4"
          style={{
            background: "hsl(240 20% 9% / 0.98)",
            borderBottom: "1px solid hsl(270 80% 65% / 0.2)",
          }}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors font-body">
              {l.label}
            </a>
          ))}
          <a href="#contacts" onClick={() => setOpen(false)}
            className="text-sm px-5 py-3 text-center font-manrope"
            style={{ background: "hsl(270 80% 65%)", color: "white" }}>
            ✦ Заказать сайт
          </a>
        </div>
      )}
    </header>
  );
}

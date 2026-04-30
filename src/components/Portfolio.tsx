import { useRef, useEffect, useState } from "react";

const categories = ["Все", "Одностраничные", "Многостраничные", "Магазины"];

const projects = [
  { id: 1, title: "Архитектурное бюро Nova", cat: "Многостраничные", tag: "Многостраничный", year: "2024", color: "#1a0d2e", accent: "hsl(270 80% 65%)" },
  { id: 2, title: "ShoeBox — магазин кроссовок", cat: "Магазины", tag: "Интернет-магазин", year: "2024", color: "#0d1a2e", accent: "hsl(210 80% 60%)" },
  { id: 3, title: "Клиника Здоровье+", cat: "Одностраничные", tag: "Одностраничный", year: "2023", color: "#0d2e1a", accent: "hsl(174 72% 42%)" },
  { id: 4, title: "Ресторан Белая ночь", cat: "Многостраничные", tag: "Многостраничный", year: "2023", color: "#2e1a0d", accent: "hsl(35 80% 55%)" },
  { id: 5, title: "Академия Mindful", cat: "Одностраничные", tag: "Одностраничный", year: "2024", color: "#1a2e0d", accent: "hsl(120 60% 45%)" },
  { id: 6, title: "Студия йоги Om", cat: "Одностраничные", tag: "Одностраничный", year: "2024", color: "#2e0d1a", accent: "hsl(330 70% 60%)" },
];

export default function Portfolio() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState("Все");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) ref.current?.classList.add("visible"); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const filtered = active === "Все" ? projects : projects.filter((p) => p.cat === active);

  return (
    <section id="portfolio" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 anime-grid opacity-30" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div ref={ref} className="section-enter">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8" style={{ background: "hsl(270 80% 65% / 0.6)" }} />
              <p className="text-xs tracking-[0.3em] uppercase" style={{ color: "hsl(270 80% 65%)" }}>
                Галерея артефактов
              </p>
            </div>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">Созданные Работы</h2>
          </div>

          <div className="flex flex-wrap gap-3 mb-10">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className="text-sm px-5 py-2 font-manrope transition-all duration-300"
                style={active === c ? {
                  background: "hsl(270 80% 65%)",
                  color: "white",
                  border: "1px solid hsl(270 80% 65%)",
                } : {
                  background: "transparent",
                  color: "hsl(220 15% 55%)",
                  border: "1px solid hsl(270 80% 65% / 0.25)",
                }}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((p) => (
              <div key={p.id} className="group relative overflow-hidden cursor-pointer"
                style={{ aspectRatio: "4/3", border: "1px solid hsl(270 80% 65% / 0.15)" }}>
                <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundColor: p.color }} />

                {/* Anime grid overlay */}
                <div className="absolute inset-0 anime-grid opacity-30" />

                {/* Glow orb */}
                <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-50 transition-opacity">
                  <div className="w-32 h-32 rounded-full blur-3xl"
                    style={{ background: p.accent }} />
                </div>

                <div className="absolute inset-0 flex flex-col justify-end p-5"
                  style={{ background: "linear-gradient(to top, hsl(240 20% 5% / 0.9), transparent)" }}>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full" style={{ background: p.accent }} />
                    <span className="text-xs font-manrope" style={{ color: p.accent }}>{p.tag}</span>
                    <span className="text-xs text-muted-foreground ml-auto">{p.year}</span>
                  </div>
                  <h3 className="font-display text-xl text-foreground leading-tight">{p.title}</h3>
                </div>

                <div className="absolute inset-0 transition-colors duration-300"
                  style={{ border: `1px solid ${p.accent}00` }}
                  onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.borderColor = `${p.accent}40`}
                  onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.borderColor = `${p.accent}00`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

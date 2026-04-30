import { useRef, useEffect, useState } from "react";

const categories = ["Все", "Корпоративные", "Интернет-магазины", "Лендинги", "Веб-приложения"];

const projects = [
  { id: 1, title: "Архитектурное бюро Nova", cat: "Корпоративные", tag: "Корпоративный сайт", year: "2024", color: "#1a1a1a" },
  { id: 2, title: "ShoeBox — магазин кроссовок", cat: "Интернет-магазины", tag: "Ecom", year: "2024", color: "#2d2d2d" },
  { id: 3, title: "Клиника Здоровье+", cat: "Лендинги", tag: "Лендинг", year: "2023", color: "#3a3a3a" },
  { id: 4, title: "CRM для стройки Brickly", cat: "Веб-приложения", tag: "SaaS", year: "2024", color: "#111" },
  { id: 5, title: "Ресторан Белая ночь", cat: "Корпоративные", tag: "Корпоративный сайт", year: "2023", color: "#222" },
  { id: 6, title: "Академия Mindful", cat: "Лендинги", tag: "Лендинг", year: "2024", color: "#333" },
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
    <section id="portfolio" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="section-enter">
          <div className="mb-12">
            <p className="text-sm text-muted-foreground tracking-widest uppercase mb-4">Портфолио</p>
            <h2 className="font-display text-5xl md:text-6xl leading-tight">Наши работы</h2>
          </div>

          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`text-sm px-5 py-2 border transition-colors ${
                  active === c
                    ? "bg-foreground text-background border-foreground"
                    : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p) => (
              <div
                key={p.id}
                className="group relative overflow-hidden cursor-pointer"
                style={{ aspectRatio: "4/3" }}
              >
                <div
                  className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundColor: p.color }}
                />
                <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                  <span className="text-xs text-white/60 mb-2">{p.tag} · {p.year}</span>
                  <h3 className="font-display text-2xl text-white leading-tight">{p.title}</h3>
                </div>
                <div className="absolute inset-0 border border-white/0 group-hover:border-white/20 transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

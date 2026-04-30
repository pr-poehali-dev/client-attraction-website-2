import { useEffect, useRef } from "react";

const particles = [
  { x: "10%", y: "20%", size: 4, dur: "5s", delay: "0s", char: "✦" },
  { x: "85%", y: "15%", size: 6, dur: "7s", delay: "1s", char: "◈" },
  { x: "70%", y: "60%", size: 3, dur: "4s", delay: "2s", char: "✧" },
  { x: "20%", y: "75%", size: 5, dur: "6s", delay: "0.5s", char: "⬡" },
  { x: "90%", y: "80%", size: 4, dur: "5s", delay: "1.5s", char: "✦" },
  { x: "50%", y: "10%", size: 3, dur: "8s", delay: "3s", char: "◇" },
];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    setTimeout(() => el.classList.add("visible"), 100);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center pt-16 px-6 relative overflow-hidden anime-grid">
      {/* Floating particles */}
      {particles.map((p, i) => (
        <span
          key={i}
          className="particle absolute text-accent pointer-events-none"
          style={{
            left: p.x,
            top: p.y,
            fontSize: p.size * 4,
            "--duration": p.dur,
            "--delay": p.delay,
            opacity: 0.3,
          } as React.CSSProperties}
        >
          {p.char}
        </span>
      ))}

      {/* Background glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[120px] pointer-events-none"
        style={{ background: "hsl(270 80% 65% / 0.08)" }} />
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full blur-[100px] pointer-events-none"
        style={{ background: "hsl(174 72% 42% / 0.08)" }} />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div ref={ref} className="section-enter">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-12" style={{ background: "hsl(270 80% 65% / 0.6)" }} />
            <p className="text-xs tracking-[0.3em] uppercase" style={{ color: "hsl(270 80% 65%)" }}>
              Гильдия Кодовых Ткачей · Основана в 2018
            </p>
            <div className="h-px w-12" style={{ background: "hsl(270 80% 65% / 0.6)" }} />
          </div>

          <h1 className="font-display leading-none tracking-wide mb-6"
            style={{ fontSize: "clamp(3rem, 10vw, 9rem)" }}>
            <span className="block text-foreground">Мастерская</span>
            <span className="block shimmer">Цифровых</span>
            <span className="block text-foreground">Артефактов</span>
          </h1>

          <div className="flex items-center gap-4 mb-10">
            <div className="h-px flex-1 max-w-xs" style={{ background: "linear-gradient(90deg, hsl(270 80% 65% / 0.6), transparent)" }} />
            <span className="text-xs tracking-widest text-muted-foreground">ウェブの織り手</span>
            <div className="h-px flex-1 max-w-xs" style={{ background: "linear-gradient(270deg, hsl(174 72% 42% / 0.6), transparent)" }} />
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mt-4">
            <p className="text-base text-muted-foreground max-w-md leading-relaxed font-body">
              Каждый сайт — уникальный артефакт, сотканный вручную.
              Никаких шаблонов, никаких посредников — только мастер и его работа.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contacts"
                className="relative px-8 py-4 text-sm font-manrope font-medium transition-all duration-300 glow-accent"
                style={{
                  background: "hsl(270 80% 65%)",
                  color: "white",
                }}
              >
                ✦ Заказать артефакт
              </a>
              <a
                href="#portfolio"
                className="border px-8 py-4 text-sm font-manrope hover:border-glow transition-all duration-300"
                style={{ borderColor: "hsl(270 80% 65% / 0.4)", color: "hsl(220 30% 92%)" }}
              >
                Галерея работ
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8 mt-20 pt-10 relative"
          style={{ borderTop: "1px solid hsl(270 80% 65% / 0.2)" }}>
          {[
            { num: "60+", label: "Артефактов создано" },
            { num: "7", label: "Лет мастерства" },
            { num: "100%", label: "Личная работа" },
          ].map((s) => (
            <div key={s.label}>
              <div className="counter-label glow-accent-text" style={{ color: "hsl(270 80% 65%)" }}>{s.num}</div>
              <p className="text-sm text-muted-foreground mt-1 font-body">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

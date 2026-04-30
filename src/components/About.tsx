import { useRef, useEffect } from "react";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) ref.current?.classList.add("visible"); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute right-0 top-0 kanji-divider select-none pointer-events-none pr-8 pt-4">
        職人
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div ref={ref} className="section-enter grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8" style={{ background: "hsl(270 80% 65% / 0.6)" }} />
              <p className="text-xs tracking-[0.3em] uppercase" style={{ color: "hsl(270 80% 65%)" }}>
                О мастере
              </p>
            </div>
            <h2 className="font-display text-4xl md:text-5xl leading-tight mb-8">
              Мастер<br />
              <span style={{ color: "hsl(270 80% 65%)" }}>Цифрового</span><br />
              Ткачества
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6 font-body">
              Я — независимый веб-мастер. Каждый сайт создаю как артефакт —
              вручную, с вниманием к каждой детали. Никаких шаблонов, никаких
              случайных людей на проекте.
            </p>
            <p className="text-muted-foreground leading-relaxed font-body">
              Вы говорите напрямую с тем, кто делает работу.
              Это значит — точное понимание задачи и результат, который превосходит ожидания.
            </p>
            <a
              href="#contacts"
              className="inline-flex items-center gap-2 mt-10 text-sm font-manrope transition-colors"
              style={{ color: "hsl(270 80% 75%)" }}
            >
              ✦ Написать мастеру →
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { title: "Стратегия", desc: "Изучаю рынок и конкурентов перед каждым проектом", kanji: "策" },
              { title: "Дизайн", desc: "Создаю уникальный визуал, который выделяет вас", kanji: "美" },
              { title: "Код", desc: "Чистый код, быстрая загрузка, надёжная основа", kanji: "術" },
              { title: "Поддержка", desc: "Сопровождаю после запуска, всегда на связи", kanji: "絆" },
            ].map((item) => (
              <div key={item.title} className="p-6 relative group transition-all duration-300"
                style={{
                  background: "hsl(240 18% 11%)",
                  border: "1px solid hsl(270 80% 65% / 0.2)",
                }}>
                <div className="absolute top-3 right-4 text-2xl font-bold opacity-10 group-hover:opacity-20 transition-opacity"
                  style={{ color: "hsl(270 80% 65%)", fontFamily: "serif" }}>
                  {item.kanji}
                </div>
                <h3 className="font-display text-xl mb-3" style={{ color: "hsl(220 30% 92%)" }}>{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-body">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

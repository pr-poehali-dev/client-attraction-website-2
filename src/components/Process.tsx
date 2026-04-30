import { useRef, useEffect } from "react";

const steps = [
  { num: "01", title: "Призыв", kanji: "召", desc: "Вы заполняете бриф или мы проводим 30-минутный ритуал знакомства. Изучаю цели и аудиторию." },
  { num: "02", title: "Свиток стратегии", kanji: "策", desc: "Анализирую конкурентов, формирую структуру и прототип. Согласуем концепцию до начала работы." },
  { num: "03", title: "Ковка облика", kanji: "美", desc: "Создаю уникальный визуал. Итерируем по вашим правкам — обычно 2 раунда." },
  { num: "04", title: "Плетение кода", kanji: "術", desc: "Разработка и вёрстка. Каждые 2 недели — демонстрация прогресса на тестовом сервере." },
  { num: "05", title: "Испытание", kanji: "試", desc: "Проверяю на всех устройствах и браузерах. Оптимизирую скорость и SEO." },
  { num: "06", title: "Пробуждение", kanji: "起", desc: "Запуск на вашем домене, настройка аналитики. Провожу обучение по управлению сайтом." },
];

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) ref.current?.classList.add("visible"); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="process" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 select-none pointer-events-none pl-4"
        style={{ fontSize: "14rem", color: "hsl(270 80% 65% / 0.04)", fontFamily: "serif", lineHeight: 1 }}>
        道
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div ref={ref} className="section-enter">
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8" style={{ background: "hsl(270 80% 65% / 0.6)" }} />
              <p className="text-xs tracking-[0.3em] uppercase" style={{ color: "hsl(270 80% 65%)" }}>
                Путь создания
              </p>
            </div>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">
              Шесть Ритуалов<br />Мастерства
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {steps.map((step) => (
              <div key={step.num} className="p-6 relative group transition-all duration-300"
                style={{
                  background: "hsl(240 18% 10%)",
                  border: "1px solid hsl(270 80% 65% / 0.15)",
                }}>
                <div className="flex items-start justify-between mb-4">
                  <div className="font-display text-5xl leading-none opacity-20"
                    style={{ color: "hsl(270 80% 65%)" }}>
                    {step.num}
                  </div>
                  <div className="text-3xl font-bold opacity-15 group-hover:opacity-30 transition-opacity"
                    style={{ color: "hsl(270 80% 65%)", fontFamily: "serif" }}>
                    {step.kanji}
                  </div>
                </div>
                <h3 className="font-display text-xl mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-body">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6"
            style={{
              background: "hsl(270 80% 65% / 0.05)",
              border: "1px solid hsl(270 80% 65% / 0.25)",
            }}>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <p className="font-display text-xl mb-1">⏳ Среднее время — 4–8 недель</p>
                <p className="text-sm text-muted-foreground font-body">
                  Одностраничный — 2–3 нед. · Многостраничный — 6–8 нед. · Магазин — 2–3 мес.
                </p>
              </div>
              <a href="#contacts"
                className="whitespace-nowrap text-sm font-manrope font-medium px-6 py-3 transition-all duration-300 shrink-0"
                style={{ border: "1px solid hsl(270 80% 65% / 0.4)", color: "hsl(270 80% 75%)" }}>
                Начать ритуал →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

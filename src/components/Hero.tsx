import { useEffect, useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    setTimeout(() => el.classList.add("visible"), 100);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center pt-16 px-6">
      <div className="max-w-6xl mx-auto w-full">
        <div ref={ref} className="section-enter">
          <p className="text-sm text-muted-foreground tracking-widest uppercase mb-8">
            Независимый разработчик — с 2018 года
          </p>
          <h1 className="font-display text-6xl md:text-8xl lg:text-[10rem] leading-none tracking-tight mb-10">
            Сайты,<br />
            которые<br />
            <span className="text-accent">продают</span>
          </h1>
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mt-12">
            <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
              Делаю сайты для бизнеса — один, без посредников и менеджеров.
              Вы общаетесь напрямую с тем, кто делает работу.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contacts"
                className="bg-foreground text-background px-8 py-4 text-sm hover:bg-foreground/80 transition-colors"
              >
                Обсудить проект
              </a>
              <a
                href="#portfolio"
                className="border border-border px-8 py-4 text-sm hover:bg-muted transition-colors"
              >
                Смотреть работы
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8 mt-24 pt-12 border-t border-border">
          {[
            { num: "60+", label: "проектов запущено" },
            { num: "7", label: "лет опыта" },
            { num: "100%", label: "личное участие" },
          ].map((s) => (
            <div key={s.label}>
              <div className="counter-label">{s.num}</div>
              <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
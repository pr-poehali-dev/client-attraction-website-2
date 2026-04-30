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
    <section id="about" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="section-enter grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm text-muted-foreground tracking-widest uppercase mb-6">О нас</p>
            <h2 className="font-display text-5xl md:text-6xl leading-tight mb-8">
              Мы строим<br />цифровой бизнес
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              LordSite — веб-студия полного цикла. Мы не просто делаем сайты —
              мы создаём инструменты, которые работают на ваш бизнес: привлекают клиентов,
              автоматизируют процессы и увеличивают продажи.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              В нашей команде дизайнеры, разработчики, маркетологи и стратеги.
              Каждый проект проходит через глубокую аналитику перед стартом.
            </p>
            <a
              href="#contacts"
              className="inline-block mt-10 border-b border-foreground pb-1 text-sm hover:text-muted-foreground transition-colors"
            >
              Познакомиться с командой →
            </a>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              { title: "Стратегия", desc: "Анализируем рынок и конкурентов перед каждым проектом" },
              { title: "Дизайн", desc: "Создаём уникальный визуал, который выделяет вас" },
              { title: "Разработка", desc: "Чистый код, быстрая загрузка, надёжная инфраструктура" },
              { title: "Поддержка", desc: "Сопровождаем проекты после запуска 24/7" },
            ].map((item) => (
              <div key={item.title} className="p-6 border border-border">
                <h3 className="font-display text-2xl mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

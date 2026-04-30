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
            <p className="text-sm text-muted-foreground tracking-widest uppercase mb-6">О себе</p>
            <h2 className="font-display text-5xl md:text-6xl leading-tight mb-8">
              Строю сайты,<br />которые работают
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Я — независимый веб-разработчик. Не студия, не агентство — один человек,
              который лично ведёт каждый проект от первого звонка до финального запуска.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Это значит прямая коммуникация, никаких менеджеров и сломанного телефона.
              Вы всегда знаете, на каком этапе проект и что будет дальше.
            </p>
            <a
              href="#contacts"
              className="inline-block mt-10 border-b border-foreground pb-1 text-sm hover:text-muted-foreground transition-colors"
            >
              Написать мне →
            </a>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              { title: "Стратегия", desc: "Анализирую рынок и конкурентов перед каждым проектом" },
              { title: "Дизайн", desc: "Создаю уникальный визуал, который выделяет вас" },
              { title: "Разработка", desc: "Чистый код, быстрая загрузка, надёжная инфраструктура" },
              { title: "Поддержка", desc: "Сопровождаю проекты после запуска, всегда на связи" },
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
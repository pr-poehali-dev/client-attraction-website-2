import { useRef, useEffect } from "react";

const steps = [
  { num: "01", title: "Брифинг", desc: "Заполняете бриф или проводим 30-минутный звонок. Изучаем бизнес, цели и целевую аудиторию." },
  { num: "02", title: "Стратегия", desc: "Анализируем конкурентов, формируем структуру и прототип. Согласуем концепцию до начала дизайна." },
  { num: "03", title: "Дизайн", desc: "Создаём уникальный визуал в Figma. Итерируем по вашим правкам. Среднее — 2 раунда правок." },
  { num: "04", title: "Разработка", desc: "Вёрстка и программирование. Каждые 2 недели — демонстрация прогресса на staging-сервере." },
  { num: "05", title: "Тестирование", desc: "Проверяем на всех устройствах и браузерах. Оптимизируем скорость загрузки и SEO." },
  { num: "06", title: "Запуск", desc: "Переносим на ваш хостинг, настраиваем домен и аналитику. Проводим обучение работе с сайтом." },
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
    <section id="process" className="py-32 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="section-enter">
          <div className="mb-16">
            <p className="text-sm text-muted-foreground tracking-widest uppercase mb-4">Процесс</p>
            <h2 className="font-display text-5xl md:text-6xl leading-tight">
              Как мы работаем
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {steps.map((step) => (
              <div key={step.num} className="bg-background p-8">
                <div className="font-display text-6xl text-border mb-6">{step.num}</div>
                <h3 className="font-display text-2xl mb-4">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 border border-accent/30 bg-accent/5">
            <p className="font-display text-2xl mb-2">Средний срок проекта — 6–10 недель</p>
            <p className="text-sm text-muted-foreground">
              Лендинги — 2–3 недели. Корпоративные сайты — 6–8 недель. Веб-приложения — 3–6 месяцев.
              Точные сроки фиксируем в договоре.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

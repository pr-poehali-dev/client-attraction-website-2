import { useRef, useEffect, useState } from "react";
import Icon from "@/components/ui/icon";

const reviews = [
  {
    name: "Алексей Морозов",
    role: "CEO, Nova Architecture",
    text: "Команда LordSite сделала именно то, что я хотел — сайт, который показывает нашу экспертизу. Уже через месяц после запуска получили 3 крупных заявки.",
    rating: 5,
  },
  {
    name: "Елена Соколова",
    role: "Основательница ShoeBox",
    text: "Интернет-магазин работает как часы. Особенно ценю интеграцию с нашим складом — сэкономили 20 часов в неделю на ручной работе. Продажи выросли на 40%.",
    rating: 5,
  },
  {
    name: "Дмитрий Васильев",
    role: "Директор по маркетингу, Клиника Здоровье+",
    text: "Работали с тремя студиями до этого. LordSite — первые, кто реально погрузился в специфику медицинского бизнеса. Конверсия лендинга — 8,2%.",
    rating: 5,
  },
  {
    name: "Ирина Козлова",
    role: "Основательница Академии Mindful",
    text: "Запустили лендинг за 2.5 недели. Чёткий процесс, никаких сюрпризов по срокам и бюджету. Сразу же запустили второй проект с ними.",
    rating: 5,
  },
];

export default function Reviews() {
  const ref = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) ref.current?.classList.add("visible"); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + reviews.length) % reviews.length);
  const next = () => setCurrent((c) => (c + 1) % reviews.length);

  return (
    <section id="reviews" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="section-enter">
          <div className="mb-16">
            <p className="text-sm text-muted-foreground tracking-widest uppercase mb-4">Отзывы</p>
            <h2 className="font-display text-5xl md:text-6xl leading-tight">Что говорят клиенты</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 hidden md:grid">
            {reviews.slice(0, 3).map((r) => (
              <div key={r.name} className="p-8 border border-border">
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Icon key={i} name="Star" size={14} className="text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed mb-8 text-foreground">"{r.text}"</p>
                <div>
                  <p className="font-medium text-sm">{r.name}</p>
                  <p className="text-xs text-muted-foreground mt-1">{r.role}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="md:hidden">
            <div className="p-8 border border-border">
              <div className="flex gap-1 mb-6">
                {Array.from({ length: reviews[current].rating }).map((_, i) => (
                  <Icon key={i} name="Star" size={14} className="text-accent fill-accent" />
                ))}
              </div>
              <p className="text-sm leading-relaxed mb-8">"{reviews[current].text}"</p>
              <div>
                <p className="font-medium text-sm">{reviews[current].name}</p>
                <p className="text-xs text-muted-foreground mt-1">{reviews[current].role}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 mt-6">
              <button onClick={prev} className="p-2 border border-border hover:bg-muted transition-colors">
                <Icon name="ArrowLeft" size={16} />
              </button>
              <span className="text-sm text-muted-foreground">{current + 1} / {reviews.length}</span>
              <button onClick={next} className="p-2 border border-border hover:bg-muted transition-colors">
                <Icon name="ArrowRight" size={16} />
              </button>
            </div>
          </div>

          <div className="mt-16 p-8 bg-foreground text-background flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <p className="font-display text-3xl mb-2">Готовы к результату?</p>
              <p className="text-background/60 text-sm">Оставьте заявку — обсудим ваш проект бесплатно</p>
            </div>
            <a
              href="#contacts"
              className="bg-background text-foreground px-8 py-4 text-sm hover:bg-background/90 transition-colors whitespace-nowrap self-start md:self-auto"
            >
              Начать проект
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

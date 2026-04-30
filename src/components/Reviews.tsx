import { useRef, useEffect, useState } from "react";
import Icon from "@/components/ui/icon";

const reviews = [
  {
    name: "Алексей Морозов",
    role: "CEO, Nova Architecture",
    text: "Настоящий мастер своего дела. Сайт — как артефакт: каждая деталь продумана. Уже через месяц после запуска получили 3 крупных заявки.",
    rating: 5,
    kanji: "優",
  },
  {
    name: "Елена Соколова",
    role: "Основательница ShoeBox",
    text: "Магазин работает как часы. Ценю, что общалась напрямую с разработчиком — никаких испорченных телефонов. Продажи выросли на 40%.",
    rating: 5,
    kanji: "誠",
  },
  {
    name: "Дмитрий Васильев",
    role: "Директор по маркетингу, Клиника Здоровье+",
    text: "Первый подрядчик, кто реально погрузился в специфику нашего бизнеса. Конверсия лендинга — 8,2%. Это не случайность.",
    rating: 5,
    kanji: "技",
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
    <section id="reviews" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 anime-grid opacity-20" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div ref={ref} className="section-enter">
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8" style={{ background: "hsl(270 80% 65% / 0.6)" }} />
              <p className="text-xs tracking-[0.3em] uppercase" style={{ color: "hsl(270 80% 65%)" }}>
                Летопись отзывов
              </p>
            </div>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">Слова Заказчиков</h2>
          </div>

          <div className="hidden md:grid grid-cols-3 gap-4">
            {reviews.map((r) => (
              <div key={r.name} className="p-6 relative group transition-all duration-300"
                style={{
                  background: "hsl(240 18% 10%)",
                  border: "1px solid hsl(270 80% 65% / 0.15)",
                }}>
                <div className="absolute top-4 right-4 text-3xl opacity-10 group-hover:opacity-20 transition-opacity"
                  style={{ color: "hsl(270 80% 65%)", fontFamily: "serif" }}>
                  {r.kanji}
                </div>
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Icon key={i} name="Star" size={12} className="fill-current" style={{ color: "hsl(270 80% 65%)" }} />
                  ))}
                </div>
                <p className="text-sm leading-relaxed mb-6 text-muted-foreground font-body">"{r.text}"</p>
                <div className="h-px mb-4" style={{ background: "hsl(270 80% 65% / 0.1)" }} />
                <p className="font-manrope font-medium text-sm">{r.name}</p>
                <p className="text-xs text-muted-foreground mt-1 font-body">{r.role}</p>
              </div>
            ))}
          </div>

          <div className="md:hidden">
            <div className="p-6 relative"
              style={{
                background: "hsl(240 18% 10%)",
                border: "1px solid hsl(270 80% 65% / 0.2)",
              }}>
              <div className="absolute top-4 right-4 text-3xl opacity-10"
                style={{ color: "hsl(270 80% 65%)", fontFamily: "serif" }}>
                {reviews[current].kanji}
              </div>
              <div className="flex gap-1 mb-4">
                {Array.from({ length: reviews[current].rating }).map((_, i) => (
                  <Icon key={i} name="Star" size={12} className="fill-current" style={{ color: "hsl(270 80% 65%)" }} />
                ))}
              </div>
              <p className="text-sm leading-relaxed mb-6 text-muted-foreground font-body">"{reviews[current].text}"</p>
              <p className="font-manrope font-medium text-sm">{reviews[current].name}</p>
              <p className="text-xs text-muted-foreground mt-1 font-body">{reviews[current].role}</p>
            </div>
            <div className="flex items-center gap-4 mt-4">
              <button onClick={prev} className="p-2 transition-colors"
                style={{ border: "1px solid hsl(270 80% 65% / 0.3)", color: "hsl(270 80% 65%)" }}>
                <Icon name="ArrowLeft" size={16} />
              </button>
              <span className="text-sm text-muted-foreground font-body">{current + 1} / {reviews.length}</span>
              <button onClick={next} className="p-2 transition-colors"
                style={{ border: "1px solid hsl(270 80% 65% / 0.3)", color: "hsl(270 80% 65%)" }}>
                <Icon name="ArrowRight" size={16} />
              </button>
            </div>
          </div>

          <div className="mt-12 p-8 relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, hsl(270 80% 65% / 0.15), hsl(174 72% 42% / 0.1))",
              border: "1px solid hsl(270 80% 65% / 0.3)",
            }}>
            <div className="absolute right-6 top-1/2 -translate-y-1/2 text-8xl opacity-5 font-bold"
              style={{ color: "hsl(270 80% 65%)", fontFamily: "serif" }}>始</div>
            <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <p className="font-display text-2xl mb-2">Готовы начать свой квест?</p>
                <p className="text-muted-foreground text-sm font-body">Первая консультация — бесплатно. Отвечаю в течение часа.</p>
              </div>
              <a href="#contacts"
                className="whitespace-nowrap text-sm font-manrope font-medium px-8 py-4 self-start md:self-auto transition-all duration-300"
                style={{ background: "hsl(270 80% 65%)", color: "white" }}>
                ✦ Начать проект
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

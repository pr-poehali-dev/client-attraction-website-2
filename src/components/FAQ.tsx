import { useRef, useEffect, useState } from "react";
import Icon from "@/components/ui/icon";

const faqs = [
  {
    q: "Сколько стоит разработка сайта?",
    a: "Стоимость зависит от типа проекта. Одностраничный — от 60 000 ₽, многостраничный — от 150 000 ₽, интернет-магазин — от 300 000 ₽. Точную цену определяем после брифинга.",
  },
  {
    q: "Сколько времени занимает создание?",
    a: "Одностраничный сайт — 2–3 недели, многостраничный — 6–8 недель, интернет-магазин — 2–3 месяца. Сроки фиксируются в договоре.",
  },
  {
    q: "Вы работаете удалённо?",
    a: "Да. Весь процесс выстроен для дистанционной работы: видеозвонки, Figma, Notion, Telegram. Большинство моих клиентов — из других городов.",
  },
  {
    q: "Что входит в поддержку после запуска?",
    a: "Первые 30 дней — бесплатная гарантийная поддержка. Далее — пакеты от 15 000 ₽/мес: обновления, резервные копии, мелкие доработки и консультации.",
  },
  {
    q: "Вы используете шаблоны?",
    a: "Нет. Каждый сайт — уникальный артефакт, созданный с нуля под конкретный бизнес. Никаких конструкторов и шаблонов.",
  },
  {
    q: "Как происходит оплата?",
    a: "50% предоплата при старте, 50% после приёма работ. Работаю официально с договором. Для крупных проектов — поэтапные платежи.",
  },
];

export default function FAQ() {
  const ref = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) ref.current?.classList.add("visible"); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="faq" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute right-0 bottom-0 select-none pointer-events-none"
        style={{ fontSize: "16rem", color: "hsl(270 80% 65% / 0.03)", fontFamily: "serif", lineHeight: 1 }}>
        問
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div ref={ref} className="section-enter">
          <div className="grid md:grid-cols-3 gap-16">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8" style={{ background: "hsl(270 80% 65% / 0.6)" }} />
                <p className="text-xs tracking-[0.3em] uppercase" style={{ color: "hsl(270 80% 65%)" }}>
                  Свиток вопросов
                </p>
              </div>
              <h2 className="font-display text-4xl leading-tight mb-6">Часто<br />Спрашивают</h2>
              <p className="text-sm text-muted-foreground leading-relaxed font-body">
                Не нашли ответ на свой вопрос? Напишите — отвечу в течение часа в рабочее время.
              </p>
              <a href="#contacts"
                className="inline-flex items-center gap-2 mt-6 text-sm font-manrope transition-colors"
                style={{ color: "hsl(270 80% 75%)" }}>
                ✦ Задать вопрос →
              </a>
            </div>

            <div className="md:col-span-2">
              {faqs.map((faq, i) => (
                <div key={i} style={{ borderBottom: "1px solid hsl(270 80% 65% / 0.15)" }}>
                  <button
                    className="w-full flex items-center justify-between py-5 text-left gap-4"
                    onClick={() => setOpen(open === i ? null : i)}
                  >
                    <span className="font-manrope font-medium text-sm pr-4">{faq.q}</span>
                    <div className="shrink-0 w-6 h-6 flex items-center justify-center"
                      style={{
                        border: "1px solid hsl(270 80% 65% / 0.4)",
                        color: "hsl(270 80% 65%)",
                      }}>
                      <Icon name={open === i ? "Minus" : "Plus"} size={12} />
                    </div>
                  </button>
                  {open === i && (
                    <div className="pb-5">
                      <p className="text-sm text-muted-foreground leading-relaxed font-body">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

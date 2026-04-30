import { useRef, useEffect, useState } from "react";
import Icon from "@/components/ui/icon";

const faqs = [
  {
    q: "Сколько стоит разработка сайта?",
    a: "Стоимость зависит от типа и сложности проекта. Лендинги — от 60 000 ₽, корпоративные сайты — от 150 000 ₽, интернет-магазины — от 300 000 ₽. Используйте наш калькулятор для точного расчёта.",
  },
  {
    q: "Сколько времени занимает разработка?",
    a: "Лендинг — 2–3 недели, корпоративный сайт — 6–8 недель, интернет-магазин — 2–3 месяца, веб-приложение — 3–6 месяцев. Сроки фиксируются в договоре.",
  },
  {
    q: "Вы работаете с клиентами из других городов?",
    a: "Да, большинство наших клиентов — из других городов и стран. Весь процесс выстроен для удалённой работы: видеозвонки, Figma, Notion, Telegram.",
  },
  {
    q: "Что входит в поддержку после запуска?",
    a: "Первые 30 дней — бесплатная гарантийная поддержка. Далее — пакеты поддержки от 15 000 ₽/мес: обновления, резервные копии, мелкие доработки и консультации.",
  },
  {
    q: "Вы используете готовые шаблоны?",
    a: "Нет. Каждый сайт проектируется с нуля под конкретный бизнес. Это занимает больше времени, но даёт уникальный результат и лучшую конверсию.",
  },
  {
    q: "Как проходит оплата?",
    a: "50% — предоплата при старте, 50% — после приёма работ. Для крупных проектов предусмотрены поэтапные платежи. Работаем официально с договором.",
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
    <section id="faq" className="py-32 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="section-enter">
          <div className="grid md:grid-cols-3 gap-16">
            <div>
              <p className="text-sm text-muted-foreground tracking-widest uppercase mb-4">FAQ</p>
              <h2 className="font-display text-5xl leading-tight">Частые<br />вопросы</h2>
              <p className="text-sm text-muted-foreground mt-6 leading-relaxed">
                Не нашли ответ? Напишите нам — ответим в течение часа в рабочее время.
              </p>
              <a
                href="#contacts"
                className="inline-block mt-6 border-b border-foreground pb-1 text-sm hover:text-muted-foreground transition-colors"
              >
                Задать вопрос →
              </a>
            </div>

            <div className="md:col-span-2 divide-y divide-border">
              {faqs.map((faq, i) => (
                <div key={i}>
                  <button
                    className="w-full flex items-center justify-between py-6 text-left gap-4"
                    onClick={() => setOpen(open === i ? null : i)}
                  >
                    <span className="font-medium text-sm pr-4">{faq.q}</span>
                    <Icon
                      name={open === i ? "Minus" : "Plus"}
                      size={16}
                      className="shrink-0 text-muted-foreground"
                    />
                  </button>
                  {open === i && (
                    <div className="pb-6">
                      <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
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

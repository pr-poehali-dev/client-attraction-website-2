import { useRef, useEffect } from "react";
import Icon from "@/components/ui/icon";

const services = [
  {
    icon: "Smartphone",
    title: "Одностраничный сайт",
    desc: "Сайт-артефакт на одной странице: о вас, услуги, портфолио, контакты. Быстро, точно, конверсионно.",
    price: "от 60 000 ₽",
    rarity: "Обычный",
    rarityColor: "hsl(174 72% 42%)",
    kanji: "一",
  },
  {
    icon: "Globe",
    title: "Многостраничный сайт",
    desc: "Полноценный сайт с несколькими страницами и разделами. Для бизнеса с широкой линейкой услуг.",
    price: "от 150 000 ₽",
    rarity: "Редкий",
    rarityColor: "hsl(210 80% 60%)",
    kanji: "多",
  },
  {
    icon: "ShoppingCart",
    title: "Интернет-магазин",
    desc: "Торговый артефакт: каталог, корзина, оплата. Всё под ключ — от дизайна до настройки.",
    price: "от 300 000 ₽",
    rarity: "Эпический",
    rarityColor: "hsl(270 80% 65%)",
    kanji: "商",
  },
  {
    icon: "TrendingUp",
    title: "SEO продвижение",
    desc: "Магия поискового продвижения: аудит, техническое SEO, контент-стратегия.",
    price: "от 40 000 ₽/мес",
    rarity: "Обычный",
    rarityColor: "hsl(174 72% 42%)",
    kanji: "昇",
  },
  {
    icon: "Palette",
    title: "Редизайн сайта",
    desc: "Перековка существующего сайта: новый облик без потери контента и позиций в поиске.",
    price: "от 80 000 ₽",
    rarity: "Редкий",
    rarityColor: "hsl(210 80% 60%)",
    kanji: "改",
  },
  {
    icon: "Wrench",
    title: "Поддержка и доработки",
    desc: "Техническое обслуживание вашего артефакта: обновления, доработки, резервные копии.",
    price: "от 15 000 ₽/мес",
    rarity: "Обычный",
    rarityColor: "hsl(174 72% 42%)",
    kanji: "守",
  },
];

export default function Services() {
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
    <section id="services" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 anime-grid opacity-50" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div ref={ref} className="section-enter">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8" style={{ background: "hsl(270 80% 65% / 0.6)" }} />
                <p className="text-xs tracking-[0.3em] uppercase" style={{ color: "hsl(270 80% 65%)" }}>
                  Свитки услуг
                </p>
              </div>
              <h2 className="font-display text-4xl md:text-5xl leading-tight">
                Доступные<br />Артефакты
              </h2>
            </div>
            <a
              href="#contacts"
              className="self-start md:self-auto px-8 py-4 text-sm font-manrope font-medium transition-all duration-300"
              style={{
                background: "hsl(270 80% 65%)",
                color: "white",
                boxShadow: "0 0 20px hsl(270 80% 65% / 0.3)",
              }}
            >
              ✦ Обсудить проект
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((s) => (
              <div key={s.title}
                className="p-6 relative group cursor-default transition-all duration-300"
                style={{
                  background: "hsl(240 18% 10%)",
                  border: "1px solid hsl(270 80% 65% / 0.15)",
                }}>

                <div className="absolute top-4 right-4 text-3xl opacity-10 group-hover:opacity-20 transition-opacity"
                  style={{ color: s.rarityColor, fontFamily: "serif" }}>
                  {s.kanji}
                </div>

                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 flex items-center justify-center shrink-0"
                    style={{ background: `${s.rarityColor}15`, border: `1px solid ${s.rarityColor}40` }}>
                    <Icon name={s.icon} size={18} style={{ color: s.rarityColor }} />
                  </div>
                  <div>
                    <span className="text-xs font-manrope font-medium px-2 py-0.5"
                      style={{
                        background: `${s.rarityColor}20`,
                        color: s.rarityColor,
                        border: `1px solid ${s.rarityColor}40`,
                      }}>
                      {s.rarity}
                    </span>
                  </div>
                </div>

                <h3 className="font-display text-xl mb-3" style={{ color: "hsl(220 30% 92%)" }}>{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5 font-body">{s.desc}</p>
                <div className="h-px mb-4" style={{ background: "hsl(270 80% 65% / 0.1)" }} />
                <p className="text-sm font-manrope font-semibold" style={{ color: s.rarityColor }}>{s.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

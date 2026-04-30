import { useRef, useEffect } from "react";
import Icon from "@/components/ui/icon";

const services = [
  {
    icon: "Smartphone",
    title: "Одностраничный сайт",
    desc: "Сайт на одной странице с продуманными секциями: о вас, услуги, портфолио, контакты. Быстро, чисто, конверсионно.",
    price: "от 60 000 ₽",
  },
  {
    icon: "Globe",
    title: "Многостраничный сайт",
    desc: "Полноценный сайт с несколькими страницами: главная, каталог, блог, контакты. Подходит для расширенного контента.",
    price: "от 150 000 ₽",
  },
  {
    icon: "ShoppingCart",
    title: "Интернет-магазин",
    desc: "Ecom-платформа с каталогом, корзиной и оплатой. Всё под ключ — от дизайна до настройки.",
    price: "от 300 000 ₽",
  },
  {
    icon: "TrendingUp",
    title: "SEO и продвижение",
    desc: "Органический трафик из поиска: аудит, техническое SEO, контент-стратегия и ссылочное.",
    price: "от 40 000 ₽/мес",
  },
  {
    icon: "Palette",
    title: "Редизайн сайта",
    desc: "Обновляю внешний вид и структуру существующего сайта без потери контента и SEO-позиций.",
    price: "от 80 000 ₽",
  },
  {
    icon: "Wrench",
    title: "Поддержка и доработки",
    desc: "Обслуживание готовых сайтов: обновления, доработки, хостинг, резервные копии.",
    price: "от 15 000 ₽/мес",
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
    <section id="services" className="py-32 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="section-enter">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <p className="text-sm text-muted-foreground tracking-widest uppercase mb-4">Услуги</p>
              <h2 className="font-display text-5xl md:text-6xl leading-tight">Что мы делаем</h2>
            </div>
            <a
              href="#contacts"
              className="bg-accent text-accent-foreground px-8 py-4 text-sm hover:bg-accent/80 transition-colors self-start md:self-auto"
            >
              Обсудить проект
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {services.map((s) => (
              <div key={s.title} className="bg-background p-8 group hover:bg-muted/50 transition-colors">
                <Icon name={s.icon} size={24} className="text-accent mb-6" />
                <h3 className="font-display text-2xl mb-3">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">{s.desc}</p>
                <p className="text-sm font-medium">{s.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
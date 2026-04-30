import { useRef, useEffect } from "react";
import Icon from "@/components/ui/icon";

const services = [
  {
    icon: "Globe",
    title: "Корпоративные сайты",
    desc: "Представительский сайт компании с акцентом на доверие и конверсию. Полный цикл: от стратегии до запуска.",
    price: "от 150 000 ₽",
  },
  {
    icon: "ShoppingCart",
    title: "Интернет-магазины",
    desc: "Ecom-платформы с удобным каталогом, корзиной, оплатой и интеграцией с 1С и складом.",
    price: "от 300 000 ₽",
  },
  {
    icon: "Smartphone",
    title: "Лендинги",
    desc: "Целевые страницы с высокой конверсией для продукта, акции или услуги. Готовы за 2 недели.",
    price: "от 60 000 ₽",
  },
  {
    icon: "LayoutDashboard",
    title: "Веб-приложения",
    desc: "Сложные сервисы, личные кабинеты, SaaS-продукты и внутренние инструменты компании.",
    price: "от 500 000 ₽",
  },
  {
    icon: "TrendingUp",
    title: "SEO и продвижение",
    desc: "Органический трафик из поиска: аудит, техническое SEO, контент-стратегия и ссылочное.",
    price: "от 40 000 ₽/мес",
  },
  {
    icon: "Wrench",
    title: "Поддержка и доработки",
    desc: "Обслуживание существующих сайтов: обновления, доработки, хостинг, резервные копии.",
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
              href="#calculator"
              className="bg-accent text-accent-foreground px-8 py-4 text-sm hover:bg-accent/80 transition-colors self-start md:self-auto"
            >
              Рассчитать стоимость
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
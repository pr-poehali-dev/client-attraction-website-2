import { useRef, useEffect, useState } from "react";
import Icon from "@/components/ui/icon";

const siteTypes = [
  { id: "landing", label: "Лендинг", base: 60000, desc: "1 страница, до 7 секций" },
  { id: "corporate", label: "Корпоративный сайт", base: 150000, desc: "5–15 страниц" },
  { id: "ecom", label: "Интернет-магазин", base: 300000, desc: "Каталог, корзина, оплата" },
  { id: "webapp", label: "Веб-приложение", base: 500000, desc: "Личный кабинет, SaaS" },
];

const options = [
  { id: "design", label: "Уникальный дизайн", cost: 40000, desc: "Разработка с нуля в Figma" },
  { id: "cms", label: "Система управления (CMS)", cost: 30000, desc: "Редактирование без программиста" },
  { id: "seo", label: "SEO-оптимизация", cost: 25000, desc: "Технический SEO при запуске" },
  { id: "analytics", label: "Яндекс.Метрика / GA4", cost: 10000, desc: "Настройка аналитики и целей" },
  { id: "crm", label: "CRM-интеграция", cost: 45000, desc: "AmoCRM, Bitrix24, Salesforce" },
  { id: "chat", label: "Онлайн-чат / чат-бот", cost: 20000, desc: "JivoSite, Telegram-бот" },
  { id: "multilang", label: "Мультиязычность", cost: 35000, desc: "Сайт на 2–3 языках" },
  { id: "animation", label: "Анимации и интерактив", cost: 30000, desc: "Hover-эффекты, параллакс" },
];

const urgency = [
  { id: "normal", label: "Стандартно", mult: 1, desc: "По плану" },
  { id: "fast", label: "Ускоренно ×1.3", mult: 1.3, desc: "Приоритетная очередь" },
  { id: "urgent", label: "Срочно ×1.6", mult: 1.6, desc: "Двойная команда" },
];

export default function Calculator() {
  const ref = useRef<HTMLDivElement>(null);
  const [selectedType, setSelectedType] = useState("landing");
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [selectedUrgency, setSelectedUrgency] = useState("normal");
  const [pages, setPages] = useState(1);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) ref.current?.classList.add("visible"); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const typeObj = siteTypes.find((t) => t.id === selectedType)!;
  const urgencyObj = urgency.find((u) => u.id === selectedUrgency)!;

  const toggleOption = (id: string) => {
    setSelectedOptions((prev) =>
      prev.includes(id) ? prev.filter((o) => o !== id) : [...prev, id]
    );
  };

  const baseWithPages = selectedType === "landing"
    ? typeObj.base
    : typeObj.base + Math.max(0, pages - 5) * 5000;

  const optionsCost = options
    .filter((o) => selectedOptions.includes(o.id))
    .reduce((sum, o) => sum + o.cost, 0);

  const total = Math.round((baseWithPages + optionsCost) * urgencyObj.mult);
  const formattedTotal = total.toLocaleString("ru-RU");

  const minWeeks = selectedType === "landing" ? 2 : selectedType === "corporate" ? 6 : selectedType === "ecom" ? 8 : 12;
  const maxWeeks = Math.round(minWeeks * urgencyObj.mult * 0.8 + minWeeks * 0.2);

  return (
    <section id="calculator" className="py-32 px-6 bg-foreground text-background">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="section-enter">
          <div className="mb-16">
            <p className="text-sm text-background/50 tracking-widest uppercase mb-4">Калькулятор</p>
            <h2 className="font-display text-5xl md:text-6xl leading-tight text-background">
              Рассчитайте<br />стоимость
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <p className="text-sm text-background/60 mb-4 uppercase tracking-widest">1. Тип сайта</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {siteTypes.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => { setSelectedType(t.id); setPages(t.id === "corporate" ? 7 : 1); }}
                      className={`p-5 border text-left transition-colors ${
                        selectedType === t.id
                          ? "border-accent bg-accent/10"
                          : "border-background/20 hover:border-background/50"
                      }`}
                    >
                      <p className="font-medium text-sm mb-1">{t.label}</p>
                      <p className="text-xs text-background/50">{t.desc}</p>
                      <p className="text-xs text-accent mt-2">от {t.base.toLocaleString("ru-RU")} ₽</p>
                    </button>
                  ))}
                </div>
              </div>

              {selectedType !== "landing" && (
                <div>
                  <p className="text-sm text-background/60 mb-4 uppercase tracking-widest">
                    2. Количество страниц: <span className="text-background font-medium">{pages}</span>
                  </p>
                  <input
                    type="range"
                    min={1}
                    max={50}
                    value={pages}
                    onChange={(e) => setPages(Number(e.target.value))}
                    className="w-full accent-accent"
                  />
                  <div className="flex justify-between text-xs text-background/40 mt-1">
                    <span>1</span>
                    <span>50</span>
                  </div>
                  {pages > 5 && (
                    <p className="text-xs text-background/50 mt-2">
                      +{((pages - 5) * 5000).toLocaleString("ru-RU")} ₽ за дополнительные страницы
                    </p>
                  )}
                </div>
              )}

              <div>
                <p className="text-sm text-background/60 mb-4 uppercase tracking-widest">
                  {selectedType === "landing" ? "2" : "3"}. Дополнительно
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {options.map((o) => {
                    const checked = selectedOptions.includes(o.id);
                    return (
                      <button
                        key={o.id}
                        onClick={() => toggleOption(o.id)}
                        className={`p-4 border text-left flex items-start gap-3 transition-colors ${
                          checked
                            ? "border-accent bg-accent/10"
                            : "border-background/20 hover:border-background/50"
                        }`}
                      >
                        <div className={`w-4 h-4 border shrink-0 mt-0.5 flex items-center justify-center transition-colors ${
                          checked ? "border-accent bg-accent" : "border-background/30"
                        }`}>
                          {checked && <Icon name="Check" size={10} className="text-white" />}
                        </div>
                        <div>
                          <p className="text-sm">{o.label}</p>
                          <p className="text-xs text-background/50 mt-0.5">{o.desc}</p>
                          <p className="text-xs text-accent mt-1">+{o.cost.toLocaleString("ru-RU")} ₽</p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <p className="text-sm text-background/60 mb-4 uppercase tracking-widest">
                  {selectedType === "landing" ? "3" : "4"}. Срочность
                </p>
                <div className="grid grid-cols-3 gap-3">
                  {urgency.map((u) => (
                    <button
                      key={u.id}
                      onClick={() => setSelectedUrgency(u.id)}
                      className={`p-4 border text-left transition-colors ${
                        selectedUrgency === u.id
                          ? "border-accent bg-accent/10"
                          : "border-background/20 hover:border-background/50"
                      }`}
                    >
                      <p className="text-sm font-medium">{u.label}</p>
                      <p className="text-xs text-background/50 mt-1">{u.desc}</p>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 border border-background/20 p-8">
                <p className="text-xs text-background/50 uppercase tracking-widest mb-6">Ваш расчёт</p>

                <div className="space-y-3 mb-8">
                  <div className="flex justify-between text-sm">
                    <span className="text-background/60">{typeObj.label}</span>
                    <span>{baseWithPages.toLocaleString("ru-RU")} ₽</span>
                  </div>
                  {selectedOptions.map((id) => {
                    const opt = options.find((o) => o.id === id)!;
                    return (
                      <div key={id} className="flex justify-between text-sm">
                        <span className="text-background/60">{opt.label}</span>
                        <span>+{opt.cost.toLocaleString("ru-RU")} ₽</span>
                      </div>
                    );
                  })}
                  {urgencyObj.mult > 1 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-background/60">Срочность ×{urgencyObj.mult}</span>
                      <span className="text-accent">
                        +{(Math.round((baseWithPages + optionsCost) * urgencyObj.mult) - (baseWithPages + optionsCost)).toLocaleString("ru-RU")} ₽
                      </span>
                    </div>
                  )}
                </div>

                <div className="border-t border-background/20 pt-6 mb-8">
                  <p className="text-xs text-background/50 mb-2">Итоговая стоимость</p>
                  <p className="font-display text-4xl">{formattedTotal} ₽</p>
                  <p className="text-xs text-background/50 mt-2">
                    Срок: {selectedUrgency === "normal" ? minWeeks : Math.max(2, Math.round(minWeeks / urgencyObj.mult))}–{maxWeeks} нед.
                  </p>
                </div>

                <a
                  href="#contacts"
                  className="block w-full bg-accent text-accent-foreground text-center py-4 text-sm hover:bg-accent/80 transition-colors"
                >
                  Обсудить проект
                </a>
                <p className="text-xs text-background/40 text-center mt-4">
                  Расчёт ориентировочный. Точную стоимость согласуем после брифинга.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

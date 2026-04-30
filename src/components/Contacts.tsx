import { useRef, useEffect, useState } from "react";
import Icon from "@/components/ui/icon";

export default function Contacts() {
  const ref = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState({ name: "", phone: "", type: "", message: "" });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) ref.current?.classList.add("visible"); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contacts" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="section-enter">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="text-sm text-muted-foreground tracking-widest uppercase mb-4">Контакты</p>
              <h2 className="font-display text-5xl md:text-6xl leading-tight mb-8">
                Начнём<br />проект?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-12">
                Оставьте заявку — свяжемся в течение часа в рабочее время. Первая консультация бесплатна.
              </p>

              <div className="space-y-6">
                {[
                  { icon: "Mail", label: "Email", value: "hello@lordsite.ru" },
                  { icon: "Phone", label: "Телефон", value: "+7 (999) 123-45-67" },
                  { icon: "MapPin", label: "Адрес", value: "Москва, работаем удалённо" },
                  { icon: "Clock", label: "Режим работы", value: "Пн–Пт, 10:00–19:00" },
                ].map((c) => (
                  <div key={c.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 border border-border flex items-center justify-center shrink-0">
                      <Icon name={c.icon} size={16} className="text-muted-foreground" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">{c.label}</p>
                      <p className="text-sm mt-0.5">{c.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              {sent ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-12 border border-border">
                  <Icon name="CheckCircle" size={48} className="text-accent mb-6" />
                  <h3 className="font-display text-3xl mb-3">Заявка отправлена!</h3>
                  <p className="text-sm text-muted-foreground">Свяжемся с вами в течение часа в рабочее время.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-xs text-muted-foreground block mb-2">Ваше имя *</label>
                    <input
                      required
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full border border-border bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-foreground transition-colors"
                      placeholder="Алексей Иванов"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-muted-foreground block mb-2">Телефон / Email *</label>
                    <input
                      required
                      type="text"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full border border-border bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-foreground transition-colors"
                      placeholder="+7 (999) 000-00-00"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-muted-foreground block mb-2">Тип проекта</label>
                    <select
                      value={form.type}
                      onChange={(e) => setForm({ ...form, type: e.target.value })}
                      className="w-full border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-foreground transition-colors appearance-none"
                    >
                      <option value="">Выберите тип</option>
                      <option>Лендинг</option>
                      <option>Корпоративный сайт</option>
                      <option>Интернет-магазин</option>
                      <option>Веб-приложение</option>
                      <option>Поддержка / доработки</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs text-muted-foreground block mb-2">Сообщение</label>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full border border-border bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-foreground transition-colors resize-none"
                      placeholder="Расскажите о вашем проекте..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-foreground text-background py-4 text-sm hover:bg-foreground/80 transition-colors"
                  >
                    Отправить заявку
                  </button>
                  <p className="text-xs text-muted-foreground text-center">
                    Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

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
    <section id="contacts" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[150px] pointer-events-none"
        style={{ background: "hsl(270 80% 65% / 0.05)" }} />

      <div className="max-w-6xl mx-auto relative z-10">
        <div ref={ref} className="section-enter">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8" style={{ background: "hsl(270 80% 65% / 0.6)" }} />
                <p className="text-xs tracking-[0.3em] uppercase" style={{ color: "hsl(270 80% 65%)" }}>
                  Призыв мастера
                </p>
              </div>
              <h2 className="font-display text-4xl md:text-5xl leading-tight mb-4">
                Начнём<br />
                <span style={{ color: "hsl(270 80% 65%)" }}>Ваш Квест?</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-12 font-body">
                Оставьте заявку — отвечу в течение часа в рабочее время. Первая консультация бесплатна.
              </p>

              <div className="space-y-5">
                {[
                  { icon: "Mail", label: "Почтовый свиток", value: "hello@lordsite.ru" },
                  { icon: "Phone", label: "Кристалл связи", value: "+7 (999) 123-45-67" },
                  { icon: "MapPin", label: "Локация", value: "Работаю удалённо" },
                  { icon: "Clock", label: "Часы мастерской", value: "Пн–Пт, 10:00–19:00" },
                ].map((c) => (
                  <div key={c.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 flex items-center justify-center shrink-0"
                      style={{
                        background: "hsl(270 80% 65% / 0.1)",
                        border: "1px solid hsl(270 80% 65% / 0.3)",
                      }}>
                      <Icon name={c.icon} size={16} style={{ color: "hsl(270 80% 65%)" }} />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-body">{c.label}</p>
                      <p className="text-sm mt-0.5 font-manrope">{c.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              {sent ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-12"
                  style={{ border: "1px solid hsl(270 80% 65% / 0.3)", background: "hsl(240 18% 10%)" }}>
                  <div className="text-5xl mb-6">✦</div>
                  <h3 className="font-display text-3xl mb-3" style={{ color: "hsl(270 80% 65%)" }}>
                    Призыв принят!
                  </h3>
                  <p className="text-sm text-muted-foreground font-body">
                    Свяжусь с вами в течение часа в рабочее время. Ваш квест начался.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {[
                    { label: "Ваше имя *", key: "name", type: "text", placeholder: "Как вас зовут?" },
                    { label: "Телефон / Email *", key: "phone", type: "text", placeholder: "+7 (999) 000-00-00" },
                  ].map((f) => (
                    <div key={f.key}>
                      <label className="text-xs text-muted-foreground block mb-2 font-manrope">{f.label}</label>
                      <input
                        required
                        type={f.type}
                        value={form[f.key as keyof typeof form]}
                        onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                        className="w-full bg-transparent px-4 py-3 text-sm focus:outline-none transition-colors font-body"
                        style={{ border: "1px solid hsl(270 80% 65% / 0.25)" }}
                        onFocus={(e) => (e.target.style.borderColor = "hsl(270 80% 65% / 0.6)")}
                        onBlur={(e) => (e.target.style.borderColor = "hsl(270 80% 65% / 0.25)")}
                        placeholder={f.placeholder}
                      />
                    </div>
                  ))}
                  <div>
                    <label className="text-xs text-muted-foreground block mb-2 font-manrope">Тип артефакта</label>
                    <select
                      value={form.type}
                      onChange={(e) => setForm({ ...form, type: e.target.value })}
                      className="w-full px-4 py-3 text-sm focus:outline-none transition-colors appearance-none font-body"
                      style={{
                        background: "hsl(240 20% 7%)",
                        border: "1px solid hsl(270 80% 65% / 0.25)",
                        color: "hsl(220 30% 92%)",
                      }}
                    >
                      <option value="">Выберите тип</option>
                      <option>Одностраничный сайт</option>
                      <option>Многостраничный сайт</option>
                      <option>Интернет-магазин</option>
                      <option>Редизайн</option>
                      <option>Поддержка</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs text-muted-foreground block mb-2 font-manrope">Опишите квест</label>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-transparent px-4 py-3 text-sm focus:outline-none transition-colors resize-none font-body"
                      style={{ border: "1px solid hsl(270 80% 65% / 0.25)" }}
                      onFocus={(e) => (e.target.style.borderColor = "hsl(270 80% 65% / 0.6)")}
                      onBlur={(e) => (e.target.style.borderColor = "hsl(270 80% 65% / 0.25)")}
                      placeholder="Расскажите о вашем проекте..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 text-sm font-manrope font-medium transition-all duration-300"
                    style={{ background: "hsl(270 80% 65%)", color: "white" }}
                  >
                    ✦ Отправить призыв
                  </button>
                  <p className="text-xs text-muted-foreground text-center font-body">
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

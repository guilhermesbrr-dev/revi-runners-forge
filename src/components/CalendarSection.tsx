import { CalendarPlus, MapPin } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const events = [
  { month: "Abril", day: "25", year: "2026", location: "Ibirapuera · Portão 10", time: "07:00" },
  { month: "Maio", day: "23", year: "2026", location: "Ibirapuera · Portão 10", time: "07:00" },
  { month: "Junho", day: "20", year: "2026", location: "Ibirapuera · Portão 10", time: "07:00" },
];

const CalendarSection = () => (
  <section id="agenda" className="py-24 px-4 gradient-bg-alt relative z-10">
    <div className="container">
      <ScrollReveal>
        <p className="text-primary font-semibold text-xs tracking-[0.3em] uppercase text-center mb-3">Agenda</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-16">
          Calendário <span className="text-primary">Estratégico</span>
        </h2>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {events.map((ev, i) => (
          <ScrollReveal key={ev.month} delay={i * 120}>
            <div className="glass-card glass-card-hover rounded-lg p-6 text-center transition-all duration-500 group">
              <p className="text-primary font-heading font-bold text-sm uppercase tracking-wider mb-1">{ev.month}</p>
              <p className="font-heading text-5xl font-black text-foreground mb-1">{ev.day}</p>
              <p className="text-muted-foreground text-xs mb-4">{ev.year} · {ev.time}h</p>
              <div className="flex items-center justify-center gap-1.5 text-muted-foreground text-xs mb-5">
                <MapPin className="w-3 h-3 text-primary" />
                {ev.location}
              </div>
              <button className="btn-ghost-neon text-xs px-4 py-2 rounded-md w-full flex items-center justify-center gap-2">
                <CalendarPlus className="w-3.5 h-3.5" />
                Adicionar à Agenda
              </button>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default CalendarSection;

import { CalendarPlus, MapPin } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const events = [
  {
    month: "Abril",
    day: "08",
    year: "2026",
    location: "Portão 6 · Ibirapuera",
    time: "19:00",
    type: "Noturno",
    calendarUrl: "https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NzBkOWJvYTNzZTV1Z3NwM2g0OW8zZDRnaDMgZ3VpbGhlcm1lQHVzZXJldmkuY29t&tmsrc=guilherme%40userevi.com",
  },
  {
    month: "Abril",
    day: "25",
    year: "2026",
    location: "Portão 6 · Ibirapuera",
    time: "07:15",
    type: "Matutino",
    calendarUrl: "https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=N3VvOXFoZjBxcjBxOWhhNmVjOXRjam9sZWsgZ3VpbGhlcm1lQHVzZXJldmkuY29t&tmsrc=guilherme%40userevi.com",
  },
  {
    month: "Maio",
    day: "—",
    year: "2026",
    location: "Portão 6 · Ibirapuera",
    time: "A definir",
    type: "Em breve",
    calendarUrl: null,
  },
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
          <ScrollReveal key={i} delay={i * 120}>
            <div className="glass-card glass-card-hover rounded-lg p-6 text-center transition-all duration-500 group">
              <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 rounded-full px-3 py-1 mb-4">
                {ev.type}
              </span>
              <p className="text-primary font-heading font-bold text-sm uppercase tracking-wider mb-1">{ev.month}</p>
              <p className="font-heading text-5xl font-black text-foreground mb-1">{ev.day}</p>
              <p className="text-muted-foreground text-xs mb-4">{ev.year} · {ev.time}h</p>
              <div className="flex items-center justify-center gap-1.5 text-muted-foreground text-xs mb-5">
                <MapPin className="w-3 h-3 text-primary" />
                {ev.location}
              </div>
              {ev.calendarUrl ? (
                <a
                  href={ev.calendarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost-neon text-xs px-4 py-2 rounded-md w-full flex items-center justify-center gap-2"
                >
                  <CalendarPlus className="w-3.5 h-3.5" />
                  Adicionar à Agenda
                </a>
              ) : (
                <span className="text-xs text-muted-foreground/50 uppercase tracking-wider">Em breve</span>
              )}
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default CalendarSection;

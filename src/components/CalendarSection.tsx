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
  <section id="agenda" className="py-32 px-4">
    <div className="container">
      <ScrollReveal>
        <p className="text-muted-foreground text-[10px] tracking-[0.4em] uppercase text-center mb-4">Agenda</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-20">
          Próximos Treinos
        </h2>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
        {events.map((ev, i) => (
          <ScrollReveal key={i} delay={i * 120}>
            <div className="text-center group">
              <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-muted-foreground mb-2">{ev.type}</p>
              <p className="text-muted-foreground text-xs uppercase tracking-wider mb-1">{ev.month}</p>
              <p className="font-heading text-5xl font-black text-foreground mb-1">{ev.day}</p>
              <p className="text-muted-foreground text-xs mb-4">{ev.year} · {ev.time}h</p>
              <div className="flex items-center justify-center gap-1.5 text-muted-foreground text-xs mb-6">
                <MapPin className="w-3 h-3" />
                {ev.location}
              </div>
              {ev.calendarUrl ? (
                <a
                  href={ev.calendarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost text-[10px] px-4 py-2 rounded-md inline-flex items-center gap-2"
                >
                  <CalendarPlus className="w-3 h-3" />
                  Adicionar à Agenda
                </a>
              ) : (
                <span className="text-[10px] text-muted-foreground/40 uppercase tracking-wider">Em breve</span>
              )}
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default CalendarSection;

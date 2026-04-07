import { CalendarPlus, MapPin } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const events = [
  {
    day: "08", month: "ABR", year: "2026", time: "19:00", type: "Noturno",
    location: "Portão 6 · Ibirapuera",
    calendarUrl: "https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NzBkOWJvYTNzZTV1Z3NwM2g0OW8zZDRnaDMgZ3VpbGhlcm1lQHVzZXJldmkuY29t&tmsrc=guilherme%40userevi.com",
  },
  {
    day: "25", month: "ABR", year: "2026", time: "07:15", type: "Matutino",
    location: "Portão 6 · Ibirapuera",
    calendarUrl: "https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=N3VvOXFoZjBxcjBxOWhhNmVjOXRjam9sZWsgZ3VpbGhlcm1lQHVzZXJldmkuY29t&tmsrc=guilherme%40userevi.com",
  },
  {
    day: "—", month: "MAI", year: "2026", time: "A definir", type: "Em breve",
    location: "Portão 6 · Ibirapuera",
    calendarUrl: null,
  },
];

const CalendarSection = () => (
  <section id="agenda" className="py-32 px-4">
    <div className="container max-w-4xl">
      <ScrollReveal>
        <p className="text-muted-foreground text-[10px] tracking-[0.4em] uppercase text-center mb-4">Agenda</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary text-glow text-center mb-20">
          Próximos Treinos
        </h2>
      </ScrollReveal>

      <div className="space-y-4">
        {events.map((ev, i) => (
          <ScrollReveal key={i} delay={i * 100}>
            <div className="glass-card rounded-lg px-6 py-5 flex flex-col md:flex-row items-center gap-4 md:gap-8">
              <div className="flex items-baseline gap-2">
                <span className="font-heading text-3xl font-black text-primary text-glow">{ev.day}</span>
                <span className="text-xs font-semibold text-muted-foreground uppercase">{ev.month} {ev.year}</span>
              </div>

              <div className="hidden md:block w-px h-8 bg-border" />

              <div className="flex-1 text-center md:text-left">
                <p className="text-foreground text-sm font-medium">{ev.type} · {ev.time}h</p>
                <p className="text-muted-foreground text-xs flex items-center justify-center md:justify-start gap-1 mt-1">
                  <MapPin className="w-3 h-3" />
                  {ev.location}
                </p>
              </div>

              {ev.calendarUrl ? (
                <a
                  href={ev.calendarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost text-[10px] px-5 py-2 rounded-md inline-flex items-center gap-2"
                >
                  <CalendarPlus className="w-3.5 h-3.5" />
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

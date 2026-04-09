import { CalendarPlus, MapPin, Clock } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const events = [
  {
    day: "25", month: "ABR", year: "2026", time: "07:15", type: "MATUTINO",
    location: "Portão 6 · Ibirapuera",
    calendarUrl: "https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=N3VvOXFoZjBxcjBxOWhhNmVjOXRjam9sZWsgZ3VpbGhlcm1lQHVzZXJldmkuY29t&tmsrc=guilherme%40userevi.com",
    highlight: true,
  },
  {
    day: "—", month: "MAI", year: "2026", time: "A definir", type: "EM BREVE",
    location: "Portão 6 · Ibirapuera",
    calendarUrl: null,
    highlight: false,
  },
  {
    day: "—", month: "JUN", year: "2026", time: "A definir", type: "EM BREVE",
    location: "Portão 6 · Ibirapuera",
    calendarUrl: null,
    highlight: false,
  },
];

const CalendarSection = () => (
  <section id="agenda" className="py-24 px-4">
    <div className="container max-w-4xl">
      <ScrollReveal>
        <div className="text-center mb-16">
          <span className="badge-sport mb-4 inline-block">AGENDA 2026</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase text-foreground mt-4">
            PRÓXIMOS <span className="text-primary text-glow-sm">TREINOS</span>
          </h2>
        </div>
      </ScrollReveal>

      <div className="space-y-4">
        {events.map((ev, i) => (
          <ScrollReveal key={i} delay={i * 100}>
            <div className={`sport-card px-6 py-5 flex flex-col md:flex-row items-center gap-4 md:gap-6 ${ev.highlight ? 'border-primary/30' : ''}`}>
              {/* Date block */}
              <div className="flex items-center gap-3 md:min-w-[140px]">
                <span className="font-display text-4xl text-primary text-glow-sm leading-none">{ev.day}</span>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-foreground uppercase">{ev.month} {ev.year}</span>
                  <span className="badge-sport text-[8px] mt-1">{ev.type}</span>
                </div>
              </div>

              <div className="hidden md:block w-px h-10 bg-border" />

              {/* Details */}
              <div className="flex-1 text-center md:text-left">
                <p className="text-foreground text-sm font-medium flex items-center justify-center md:justify-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-accent" />
                  {ev.time}h
                </p>
                <p className="text-muted-foreground text-xs flex items-center justify-center md:justify-start gap-1.5 mt-1">
                  <MapPin className="w-3 h-3" />
                  {ev.location}
                </p>
              </div>

              {/* CTA */}
              {ev.calendarUrl ? (
                <a
                  href={ev.calendarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-sport text-[11px] px-5 py-2.5 inline-flex items-center gap-2"
                >
                  <CalendarPlus className="w-3.5 h-3.5" />
                  AGENDAR
                </a>
              ) : (
                <span className="text-[10px] text-muted-foreground/40 uppercase tracking-wider font-heading">Em breve</span>
              )}
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default CalendarSection;

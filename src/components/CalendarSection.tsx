import { useEffect, useState } from "react";
import { CalendarPlus, MapPin, Clock } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { EVENT_DATES, getNextEvent } from "@/lib/eventDates";

const MONTHS = ["JAN", "FEV", "MAR", "ABR", "MAI", "JUN", "JUL", "AGO", "SET", "OUT", "NOV", "DEZ"];

const pad = (n: number) => String(n).padStart(2, "0");

const buildCalendarUrl = (date: Date) => {
  const end = new Date(date.getTime() + 2 * 60 * 60 * 1000);
  const fmt = (d: Date) =>
    `${d.getUTCFullYear()}${pad(d.getUTCMonth() + 1)}${pad(d.getUTCDate())}T${pad(d.getUTCHours())}${pad(d.getUTCMinutes())}00Z`;
  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Revi+Runners+-+Treino&dates=${fmt(date)}/${fmt(end)}&location=Port%C3%A3o+6+-+Parque+Ibirapuera&details=Treino+da+comunidade+Revi+Runners`;
};

const CalendarSection = () => {
  const [nextEvent, setNextEvent] = useState<Date | null>(() => getNextEvent());

  useEffect(() => {
    const id = setInterval(() => setNextEvent(getNextEvent()), 60_000);
    return () => clearInterval(id);
  }, []);

  return (
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
          {EVENT_DATES.map((date, i) => {
            const isPast = date.getTime() < Date.now();
            const isNext = nextEvent?.getTime() === date.getTime();
            return (
              <ScrollReveal key={i} delay={i * 80}>
                <div
                  className={`sport-card px-6 py-5 flex flex-col md:flex-row items-center gap-4 md:gap-6 ${
                    isNext ? "border-primary/40" : ""
                  } ${isPast ? "opacity-40" : ""}`}
                >
                  <div className="flex items-center gap-3 md:min-w-[160px]">
                    <span className="font-display text-4xl text-primary text-glow-sm leading-none">
                      {pad(date.getDate())}
                    </span>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold text-foreground uppercase">
                        {MONTHS[date.getMonth()]} {date.getFullYear()}
                      </span>
                      <span className="badge-sport text-[8px] mt-1">
                        {isNext ? "PRÓXIMO" : "SÁBADO"}
                      </span>
                    </div>
                  </div>

                  <div className="hidden md:block w-px h-10 bg-border" />

                  <div className="flex-1 text-center md:text-left">
                    <p className="text-foreground text-sm font-medium flex items-center justify-center md:justify-start gap-2">
                      <Clock className="w-3.5 h-3.5 text-accent" />
                      {pad(date.getHours())}:{pad(date.getMinutes())}h
                    </p>
                    <p className="text-muted-foreground text-xs flex items-center justify-center md:justify-start gap-1.5 mt-1">
                      <MapPin className="w-3 h-3" />
                      Portão 6 · Ibirapuera
                    </p>
                  </div>

                  {!isPast ? (
                    <a
                      href={buildCalendarUrl(date)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline-sport text-[11px] px-5 py-2.5 inline-flex items-center gap-2"
                    >
                      <CalendarPlus className="w-3.5 h-3.5" />
                      AGENDAR
                    </a>
                  ) : (
                    <span className="text-[10px] text-muted-foreground/40 uppercase tracking-wider font-heading">
                      Concluído
                    </span>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CalendarSection;

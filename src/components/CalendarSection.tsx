import { CalendarDays, Navigation } from "lucide-react";

const CalendarSection = () => (
  <section className="py-20 px-4 bg-secondary/50">
    <div className="container max-w-2xl text-center">
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8">
        Próximo <span className="text-primary neon-text">treino</span>
      </h2>
      <div className="bg-card border border-border rounded-xl p-8">
        <div className="flex items-center justify-center gap-3 mb-4">
          <CalendarDays className="w-8 h-8 text-primary" />
          <span className="font-heading text-2xl font-bold text-foreground">19 de Abril, 2026</span>
        </div>
        <p className="text-muted-foreground mb-2">Sábado · 7h00 da manhã</p>
        <p className="text-muted-foreground mb-6">Parque Ibirapuera · Portão 10</p>
        <a
          href="https://maps.google.com/?q=Parque+Ibirapuera+Portão+10"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 gradient-neon text-primary-foreground font-semibold px-6 py-3 rounded-lg neon-glow hover:neon-glow-strong transition-all duration-300 hover:scale-105"
        >
          <Navigation className="w-5 h-5" />
          Como Chegar (Google Maps)
        </a>
      </div>
    </div>
  </section>
);

export default CalendarSection;

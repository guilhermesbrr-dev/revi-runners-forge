import { Users, ArrowRight, Handshake } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const steps = [
  { icon: Users, label: "Corrida", desc: "Treinos técnicos com grupo seleto de executivos" },
  { icon: Handshake, label: "Conexão", desc: "Networking orgânico em ambiente descontraído" },
  { icon: ArrowRight, label: "Negócios", desc: "Oportunidades reais que nascem na pista" },
];

const NetworkingSection = () => (
  <section className="py-24 px-4 relative overflow-hidden">
    <div className="container max-w-4xl">
      <ScrollReveal>
        <p className="text-primary font-semibold text-xs tracking-[0.3em] uppercase text-center mb-3">Metodologia</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
          O Funil do <span className="text-primary">Networking</span>
        </h2>
        <p className="text-muted-foreground text-sm text-center max-w-md mx-auto mb-16">
          Uma metodologia que transforma quilômetros em oportunidades de negócio.
        </p>
      </ScrollReveal>

      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-0">
        {steps.map((step, i) => (
          <ScrollReveal key={step.label} delay={i * 150} className="flex-1 w-full">
            <div className="flex flex-col items-center text-center relative">
              <div className="w-20 h-20 rounded-2xl glass-card neon-border flex items-center justify-center mb-5 group-hover:bg-primary/10 transition-colors">
                <step.icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-2">{step.label}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed max-w-[200px]">{step.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 -right-4 w-8">
                  <ArrowRight className="w-5 h-5 text-primary/40" />
                </div>
              )}
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default NetworkingSection;

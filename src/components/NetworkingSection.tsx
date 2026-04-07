import { Users, ArrowRight, Handshake } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const steps = [
  { icon: Users, label: "Corrida", desc: "Treinos técnicos com grupo seleto de executivos" },
  { icon: Handshake, label: "Conexão", desc: "Networking orgânico em ambiente descontraído" },
  { icon: ArrowRight, label: "Negócios", desc: "Oportunidades reais que nascem na pista" },
];

const NetworkingSection = () => (
  <section className="py-32 px-4">
    <div className="container max-w-4xl">
      <ScrollReveal>
        <p className="text-muted-foreground text-[10px] tracking-[0.4em] uppercase text-center mb-4">Metodologia</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary text-glow text-center mb-6">
          O Funil do Networking
        </h2>
        <p className="text-foreground/70 text-sm text-center max-w-md mx-auto mb-20">
          Uma metodologia que transforma quilômetros em oportunidades de negócio.
        </p>
      </ScrollReveal>

      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-0">
        {steps.map((step, i) => (
          <ScrollReveal key={step.label} delay={i * 150} className="flex-1 w-full">
            <div className="flex flex-col items-center text-center relative">
              <div className="w-16 h-16 rounded-full border border-border flex items-center justify-center mb-5 hover:border-primary/40 transition-colors duration-500">
                <step.icon className="w-6 h-6 text-muted-foreground" strokeWidth={1.5} />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-2">{step.label}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed max-w-[200px]">{step.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 -right-2 w-8">
                  <ArrowRight className="w-4 h-4 text-primary/30" />
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

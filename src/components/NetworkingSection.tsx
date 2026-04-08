import { Users, Zap, TrendingUp } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const steps = [
  { icon: Users, num: "01", label: "CORRA", desc: "Treinos técnicos com grupo seleto de executivos no Ibirapuera" },
  { icon: Zap, num: "02", label: "CONECTE", desc: "Networking orgânico no pós-treino com coffee e dinâmicas" },
  { icon: TrendingUp, num: "03", label: "CONQUISTE", desc: "Oportunidades reais de negócio que nascem na pista" },
];

const NetworkingSection = () => (
  <section className="py-24 px-4 relative">
    <div className="container max-w-5xl">
      <ScrollReveal>
        <div className="text-center mb-16">
          <span className="badge-sport mb-4 inline-block">METODOLOGIA</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase text-foreground mt-4">
            O FUNIL DO <span className="text-primary text-glow-sm">NETWORKING</span>
          </h2>
          <p className="text-muted-foreground text-sm mt-4 max-w-md mx-auto">
            Cada quilômetro rodado é uma oportunidade de negócio.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-6">
        {steps.map((step, i) => (
          <ScrollReveal key={step.label} delay={i * 150}>
            <div className="sport-card p-8 text-center h-full relative overflow-hidden group">
              {/* Large step number background */}
              <span className="absolute -top-4 -right-2 font-display text-[8rem] text-foreground/[0.03] leading-none select-none group-hover:text-primary/[0.06] transition-colors duration-500">
                {step.num}
              </span>
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/10 transition-colors duration-300">
                  <step.icon className="w-6 h-6 text-primary" strokeWidth={2} />
                </div>
                <h3 className="font-heading text-2xl font-bold text-primary text-glow-sm mb-3">{step.label}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default NetworkingSection;

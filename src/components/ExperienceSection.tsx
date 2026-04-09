import { Briefcase, HeartPulse, Award, Gift } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const experiences = [
  {
    icon: HeartPulse,
    badge: "PERFORMANCE",
    title: "Treinos de Alta Performance",
    description: "Comunidade de corrida e networking com treinos técnicos mensais no Ibirapuera. Do iniciante ao maratonista.",
    color: "text-accent",
  },
  {
    icon: Briefcase,
    badge: "NETWORKING",
    title: "Conexões que Geram Negócios",
    description: "Networking orgânico com executivos, fundadores e empreendedores do ecossistema digital e de inovação.",
    color: "text-primary",
  },
  {
    icon: Gift,
    badge: "REWARDS",
    title: "Kits & Sorteios Exclusivos",
    description: "A cada edição: camiseta técnica, brindes de marcas parceiras, cupons e experiências VIP surpresa.",
    color: "text-accent",
  },
  {
    icon: Award,
    badge: "DESAFIOS",
    title: "Desafios & Conquistas",
    description: "Metas coletivas, rankings e conquistas que motivam. Cada km rodado é um passo para novas oportunidades.",
    color: "text-primary",
  },
];

const ExperienceSection = () => (
  <section id="experience" className="py-24 px-4 relative">
    <div className="container">
      <ScrollReveal>
        <div className="text-center mb-16">
          <span className="badge-sport mb-4 inline-block">POR QUE PARTICIPAR</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase text-foreground mt-4">
            A EXPERIÊNCIA <span className="text-primary text-glow-sm">REVI</span>
          </h2>
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
        {experiences.map((item, i) => (
          <ScrollReveal key={item.title} delay={i * 100}>
            <div className="sport-card p-6 h-full group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors duration-300">
                  <item.icon className={`w-5 h-5 ${item.color}`} strokeWidth={2} />
                </div>
                <div>
                  <span className="badge-blue text-[8px] mb-2 inline-block">{item.badge}</span>
                  <h3 className="font-heading text-lg font-bold text-foreground uppercase mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;

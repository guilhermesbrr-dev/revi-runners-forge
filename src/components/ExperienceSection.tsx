import { Briefcase, HeartPulse, Award } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const experiences = [
  {
    icon: Briefcase,
    title: "Business Networking",
    description: "Conexões de alto nível com executivos, fundadores e empreendedores do ecossistema digital.",
  },
  {
    icon: HeartPulse,
    title: "Performance & Health",
    description: "Treinos técnicos com assessoria esportiva para evolução constante, do iniciante ao maratonista.",
  },
  {
    icon: Award,
    title: "Premium Rewards",
    description: "Acesso a kits exclusivos, sorteios de marcas parceiras e experiências VIP a cada edição.",
  },
];

const ExperienceSection = () => (
  <section id="experience" className="py-24 px-4 relative z-10">
    <div className="container">
      <ScrollReveal>
        <p className="text-primary font-semibold text-xs tracking-[0.3em] uppercase text-center mb-3">Por que participar</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-16">
          The Revi <span className="text-primary">Experience</span>
        </h2>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-6">
        {experiences.map((item, i) => (
          <ScrollReveal key={item.title} delay={i * 120}>
            <div className="glass-card glass-card-hover rounded-lg p-8 h-full transition-all duration-500 group">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 border border-primary/20 bg-primary/5 group-hover:bg-primary/10 transition-colors">
                <item.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;

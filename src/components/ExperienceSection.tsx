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
  <section id="experience" className="py-32 px-4">
    <div className="container">
      <ScrollReveal>
        <p className="text-muted-foreground text-[10px] tracking-[0.4em] uppercase text-center mb-4">Por que participar</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-20">
          The Revi Experience
        </h2>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {experiences.map((item, i) => (
          <ScrollReveal key={item.title} delay={i * 120}>
            <div className="text-center group">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6 border border-border group-hover:border-muted-foreground/30 transition-colors duration-500">
                <item.icon className="w-5 h-5 text-muted-foreground" strokeWidth={1.5} />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;

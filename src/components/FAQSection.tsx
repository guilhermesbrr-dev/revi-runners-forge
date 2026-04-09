import { useState } from "react";
import { ChevronDown } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const faqs = [
  { q: "Sobre os treinos", a: "Comunidade de corrida e networking com encontros mensais no Ibirapuera. Um ecossistema para todos os níveis, do iniciante ao maratonista." },
  { q: "Onde guardar pertences?", a: "O time Revi Runners estará presente no ponto de encontro para garantir que seus pertences fiquem em um local seguro enquanto você corre." },
  { q: "Haverá hidratação no percurso?", a: "Disponibilizamos água para todos os participantes. Recomendamos trazer sua própria garrafa para hidratação durante o percurso." },
  { q: "O que compõe o kit mensal?", a: "O kit varia a cada edição e inclui camiseta técnica exclusiva, brindes dos patrocinadores, cupons de desconto e itens surpresa das marcas parceiras." },
  { q: "Como funciona o networking após a corrida?", a: "Após o treino, desfrutamos de um momento de networking onde os participantes se conectam em um ambiente descontraído." },
];

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-4">
      <div className="container max-w-2xl">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="badge-sport mb-4 inline-block">DÚVIDAS</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase text-foreground mt-4">
              PERGUNTAS <span className="text-primary text-glow-sm">FREQUENTES</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <div className="sport-card overflow-hidden">
                <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between px-6 py-5 text-left">
                  <span className="font-heading font-bold text-sm text-foreground uppercase pr-4">{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-primary shrink-0 transition-transform duration-300 ${open === i ? "rotate-180" : ""}`} />
                </button>
                <div className="overflow-hidden transition-all duration-300" style={{ maxHeight: open === i ? "200px" : "0" }}>
                  <p className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

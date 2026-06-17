import ScrollReveal from "./ScrollReveal";
import g1 from "@/assets/community-1.jpg";
import g2 from "@/assets/community-2.jpg";
import g3 from "@/assets/community-3.jpg";

const images = [
  { src: g1, alt: "Atletas Revi Runners correndo no Parque Ibirapuera" },
  { src: g2, alt: "Comunidade Revi Runners reunida após treino no Ibirapuera" },
  { src: g3, alt: "Corredor Revi Runners vestindo camiseta oficial em prova" },
];

const GallerySection = () => (
  <section id="galeria" className="py-24 px-4">
    <div className="container">
      <ScrollReveal>
        <div className="text-center mb-16">
          <span className="badge-sport mb-4 inline-block">SOCIAL PROOF</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase text-foreground mt-4">
            O LIFESTYLE <span className="text-primary text-glow-sm">REVI</span>
          </h2>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {images.map((img, i) => (
          <ScrollReveal key={i} delay={i * 100}>
            <div className="relative overflow-hidden rounded-xl aspect-[3/4] group border-2 border-border hover:border-primary/40 transition-colors duration-300">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;

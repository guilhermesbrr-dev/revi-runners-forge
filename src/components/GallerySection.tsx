import ScrollReveal from "./ScrollReveal";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

const images = [g1, g2, g3, g4, g5, g6];

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

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-4xl mx-auto">
        {images.map((src, i) => (
          <ScrollReveal key={i} delay={i * 80}>
            <div className="relative overflow-hidden rounded-xl aspect-square group border-2 border-border hover:border-primary/30 transition-colors duration-300">
              <img
                src={src}
                alt={`Revi Runners treino ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                width={640}
                height={640}
              />
              <div className="absolute inset-0 bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;

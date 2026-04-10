import { ExternalLink, MapPin } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const MapSection = () => (
  <section className="py-24 px-4">
    <div className="container max-w-4xl">
      <ScrollReveal>
        <div className="text-center mb-16">
          <span className="badge-sport mb-4 inline-block">📍 PONTO DE ENCONTRO</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase text-foreground mt-4">
            PORTÃO 6 · <span className="text-primary text-glow-sm">IBIRAPUERA</span>
          </h2>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <div className="sport-card rounded-2xl overflow-hidden border-2 border-border">
          <iframe
            title="Portão 6 – Parque Ibirapuera"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.8!2d-46.6603!3d-23.5852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59f1edfc5c97%3A0x2cc17bfdd0a3e8a0!2sPort%C3%A3o%206%20-%20Parque%20Ibirapuera!5e0!3m2!1spt-BR!2sbr!4v1"
            width="100%"
            height="350"
            style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(0.85) contrast(1.1)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </ScrollReveal>

      <ScrollReveal delay={200}>
        <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
          <a
            href="https://strava.app.link/Gzf82W2jc2b"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-sport px-6 py-3 text-[11px] flex items-center justify-center gap-2"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
              <path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.598h4.172L10.463 0l-7 13.828h4.169" />
            </svg>
            CLUBE NO STRAVA
          </a>
          <a
            href="https://maps.app.goo.gl/8dp7iuH17TrWfs8H8"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-sport px-6 py-3 text-[11px] flex items-center justify-center gap-2"
          >
            <MapPin className="w-3.5 h-3.5" />
            COMO CHEGAR
          </a>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default MapSection;

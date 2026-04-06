import { ExternalLink } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const MapSection = () => (
  <section className="py-24 px-4 gradient-bg-alt">
    <div className="container max-w-4xl">
      <ScrollReveal>
        <p className="text-primary font-semibold text-xs tracking-[0.3em] uppercase text-center mb-3">Localização</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
          Portão 6 · <span className="text-primary">Ibirapuera</span>
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <div className="glass-card neon-border rounded-lg overflow-hidden mb-8">
          <iframe
            title="Portão 6 – Parque Ibirapuera"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.8!2d-46.6603!3d-23.5852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59f1edfc5c97%3A0x2cc17bfdd0a3e8a0!2sPort%C3%A3o%206%20-%20Parque%20Ibirapuera!5e0!3m2!1spt-BR!2sbr!4v1"
            width="100%"
            height="350"
            style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(0.9) contrast(1.1)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </ScrollReveal>

      <ScrollReveal delay={200}>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="https://www.strava.com/clubs/revirunners"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-neon px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
              <path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.598h4.172L10.463 0l-7 13.828h4.169" />
            </svg>
            Clube no Strava
          </a>
          <a
            href="https://maps.app.goo.gl/8dp7iuH17TrWfs8H8"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost-neon px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            Como Chegar
          </a>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default MapSection;

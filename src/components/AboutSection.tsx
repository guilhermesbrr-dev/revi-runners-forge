import { MessageCircle, Activity } from "lucide-react";

const AboutSection = () => (
  <section className="py-20 px-4">
    <div className="container max-w-3xl text-center">
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
        Mais que uma corrida, uma <span className="text-primary neon-text">comunidade</span>
      </h2>
      <p className="text-muted-foreground text-lg leading-relaxed mb-10">
        O Revi Runners Networking reúne profissionais de e-commerce, tecnologia e marketing em treinos mensais no Ibirapuera. 
        Aqui você corre, conecta e cresce — tudo ao mesmo tempo. Faça parte dessa comunidade que transforma quilômetros em oportunidades.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="https://wa.me/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[hsl(142,70%,40%)] text-foreground font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
        >
          <MessageCircle className="w-5 h-5" />
          Entrar no WhatsApp
        </a>
        <a
          href="https://strava.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[hsl(16,100%,50%)] text-foreground font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
        >
          <Activity className="w-5 h-5" />
          Seguir no Strava
        </a>
      </div>
    </div>
  </section>
);

export default AboutSection;

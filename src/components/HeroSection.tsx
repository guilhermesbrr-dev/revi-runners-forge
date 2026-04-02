import heroImg from "@/assets/hero-bg.jpg";
import logoImg from "@/assets/revi-logo.png";

const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById("inscricao")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroImg}
        alt="Corrida noturna"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="hero-overlay absolute inset-0" />

      {/* Speed lines */}
      <div className="absolute top-1/4 left-0 right-0 h-px speed-line animate-fade-in-up-delay-1" />
      <div className="absolute top-1/3 left-0 right-0 h-px speed-line animate-fade-in-up-delay-2" />
      <div className="absolute top-2/3 left-0 right-0 h-px speed-line animate-fade-in-up-delay-3" />

      <div className="relative z-10 container text-center px-4 py-20">
        <img
          src={logoImg}
          alt="Revi Runners Logo"
          className="mx-auto w-24 h-24 md:w-32 md:h-32 mb-6 animate-fade-in-up drop-shadow-lg"
          width={512}
          height={512}
        />
        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 animate-fade-in-up-delay-1">
          Sua corrida, seu{" "}
          <span className="text-primary neon-text">networking</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in-up-delay-2">
          Treinos mensais no Parque Ibirapuera. Conecte-se com profissionais enquanto supera seus limites.
        </p>
        <button
          onClick={scrollToForm}
          className="gradient-neon text-primary-foreground font-heading font-bold text-lg px-8 py-4 rounded-lg neon-glow hover:neon-glow-strong transition-all duration-300 hover:scale-105 animate-fade-in-up-delay-3"
        >
          Quero me inscrever
        </button>
      </div>
    </section>
  );
};

export default HeroSection;

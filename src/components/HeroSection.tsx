import { useState, useEffect } from "react";
import heroImg from "@/assets/hero-bg.jpg";
import logoImg from "@/assets/revi-logo.png";

const TARGET_DATE = new Date("2026-04-25T07:00:00-03:00");

const useCountdown = (target: Date) => {
  const calc = () => {
    const diff = Math.max(0, target.getTime() - Date.now());
    return {
      days: Math.floor(diff / 86400000),
      hours: Math.floor((diff % 86400000) / 3600000),
      minutes: Math.floor((diff % 3600000) / 60000),
      seconds: Math.floor((diff % 60000) / 1000),
    };
  };
  const [t, setT] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setT(calc), 1000);
    return () => clearInterval(id);
  }, []);
  return t;
};

const CountdownUnit = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center">
    <div className="glass-card rounded-lg w-16 h-16 md:w-20 md:h-20 flex items-center justify-center neon-border">
      <span className="font-heading text-2xl md:text-3xl font-bold text-primary">
        {String(value).padStart(2, "0")}
      </span>
    </div>
    <span className="text-xs text-muted-foreground mt-2 uppercase tracking-widest">{label}</span>
  </div>
);

const HeroSection = () => {
  const countdown = useCountdown(TARGET_DATE);

  const scrollToForm = () => {
    document.getElementById("inscricao")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img src={heroImg} alt="" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, hsla(210,100%,4%,0.75) 0%, hsla(210,100%,3%,0.92) 100%)" }} />

      <div className="relative z-10 container text-center px-4 py-24 md:py-32">
        <img
          src={logoImg}
          alt="Revi Runners"
          className="mx-auto w-20 h-20 md:w-28 md:h-28 mb-8 opacity-0 animate-fade-up drop-shadow-2xl"
          width={512}
          height={512}
        />

        <p className="text-primary font-semibold text-sm md:text-base tracking-[0.3em] uppercase mb-4 opacity-0 animate-fade-up-d1">
          Revi Runners Networking
        </p>

        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-foreground mb-6 opacity-0 animate-fade-up-d2 leading-tight">
          Networking em{" "}
          <span className="text-primary neon-text-glow">Movimento</span>
        </h1>

        <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto mb-12 opacity-0 animate-fade-up-d3 leading-relaxed">
          O ecossistema que conecta negócios e alta performance. Treinos mensais no Parque Ibirapuera para executivos e empreendedores.
        </p>

        {/* Countdown */}
        <div className="mb-12 opacity-0 animate-fade-up-d3">
          <p className="text-xs text-muted-foreground uppercase tracking-[0.2em] mb-4">Próximo treino em</p>
          <div className="flex justify-center gap-3 md:gap-5">
            <CountdownUnit value={countdown.days} label="Dias" />
            <CountdownUnit value={countdown.hours} label="Horas" />
            <CountdownUnit value={countdown.minutes} label="Min" />
            <CountdownUnit value={countdown.seconds} label="Seg" />
          </div>
        </div>

        <button
          onClick={scrollToForm}
          className="btn-neon px-10 py-4 rounded-lg text-sm md:text-base font-bold uppercase tracking-wider opacity-0 animate-fade-up-d4"
        >
          Garantir minha vaga
        </button>
      </div>
    </section>
  );
};

export default HeroSection;

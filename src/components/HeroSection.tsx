import { useState, useEffect } from "react";
import heroImg from "@/assets/hero-bg.jpg";
import logoImg from "@/assets/revi-logo.png";

const TARGET_DATE = new Date("2026-04-08T19:00:00-03:00");

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
    <span className="font-heading text-3xl md:text-4xl font-bold text-foreground tabular-nums">
      {String(value).padStart(2, "0")}
    </span>
    <span className="text-[10px] text-muted-foreground mt-1 uppercase tracking-[0.2em]">{label}</span>
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
      <div className="absolute inset-0 bg-background/85" />

      <div className="relative z-10 container text-center px-4 py-32 md:py-40">
        <img
          src={logoImg}
          alt="Revi Runners"
          className="mx-auto w-16 h-16 md:w-20 md:h-20 mb-10 opacity-0 animate-fade-up"
          width={512}
          height={512}
        />

        <p className="text-muted-foreground font-medium text-xs tracking-[0.4em] uppercase mb-6 opacity-0 animate-fade-up-d1">
          Revi Runners Networking
        </p>

        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-foreground mb-6 opacity-0 animate-fade-up-d2 leading-tight">
          Networking em{" "}
          <span className="text-primary">Movimento</span>
        </h1>

        <p className="text-muted-foreground text-sm md:text-base max-w-lg mx-auto mb-16 opacity-0 animate-fade-up-d3 leading-relaxed">
          O ecossistema que conecta negócios e alta performance. Treinos mensais no Parque Ibirapuera para executivos e empreendedores.
        </p>

        <div className="mb-16 opacity-0 animate-fade-up-d3">
          <p className="text-[10px] text-muted-foreground uppercase tracking-[0.3em] mb-5">Próximo treino em</p>
          <div className="flex justify-center gap-8 md:gap-12">
            <CountdownUnit value={countdown.days} label="Dias" />
            <CountdownUnit value={countdown.hours} label="Horas" />
            <CountdownUnit value={countdown.minutes} label="Min" />
            <CountdownUnit value={countdown.seconds} label="Seg" />
          </div>
        </div>

        <button
          onClick={scrollToForm}
          className="btn-neon px-10 py-4 rounded-lg text-sm font-bold uppercase tracking-wider opacity-0 animate-fade-up-d4"
        >
          Garantir minha vaga
        </button>
      </div>
    </section>
  );
};

export default HeroSection;

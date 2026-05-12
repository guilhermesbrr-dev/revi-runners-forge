import { useState, useEffect } from "react";
import heroImg from "@/assets/hero-bg.jpg";
const logoImg = "/favicon.png";

const TARGET_DATE = new Date("2026-05-21T18:30:00-03:00");

const useCountdown = (target: Date) => {
  const calc = () => {
    const diff = Math.max(0, target.getTime() - Date.now());
    return {
      days: Math.floor(diff / 86400000),
      hours: Math.floor((diff % 86400000) / 3600000),
      minutes: Math.floor((diff % 3600000) / 60000),
      seconds: Math.floor((diff % 60000) / 1000),
      isFinished: diff === 0,
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
    <span className="font-display text-4xl md:text-6xl text-primary tabular-nums text-glow">
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-texture">
      {/* Background image */}
      <img src={heroImg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" width={1920} height={1080} />
      
      {/* Diagonal stripe overlay */}
      <div className="absolute inset-0 diagonal-stripe" />
      
      {/* Speed lines */}
      <div className="speed-line top-[20%] left-0 w-[40%] opacity-40" />
      <div className="speed-line top-[35%] right-0 w-[30%] opacity-30" />
      <div className="speed-line bottom-[25%] left-[10%] w-[50%] opacity-20" />
      <div className="speed-line bottom-[40%] right-[5%] w-[25%] opacity-35" />

      <div className="relative z-10 container text-center px-4 py-32 md:py-40">
        {/* Logo */}
        <div className="flex items-center justify-center gap-3 mb-8 opacity-0 animate-fade-up">
          <img
            src={logoImg}
            alt="Revi Runners"
            className="w-28 h-28 md:w-36 md:h-36 object-contain drop-shadow-[0_0_25px_hsl(var(--primary)/0.4)]"
            width={512}
            height={512}
          />
        </div>

        {/* Badge */}
        <div className="opacity-0 animate-fade-up-d1 mb-6">
          <span className="badge-sport">
            🏃 Comunidade de Corrida & Networking
          </span>
        </div>

        {/* Main Title */}
        <h1 className="opacity-0 animate-fade-up-d2 mb-2">
          <span className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold uppercase text-foreground block leading-[0.9]">
            REVI
          </span>
          <span className="font-display text-[5rem] sm:text-[7rem] md:text-[9rem] lg:text-[12rem] text-primary text-glow block leading-[0.85] -mt-2">
            RUNNERS
          </span>
        </h1>

        {/* Networking tag */}
        <div className="opacity-0 animate-fade-up-d2 mb-8">
          <span className="badge-blue text-xs px-4 py-1.5">
            ⚡ NETWORKING EM MOVIMENTO
          </span>
        </div>

        {/* Subtitle */}
        <p className="text-foreground/80 text-sm md:text-base max-w-xl mx-auto mb-12 opacity-0 animate-fade-up-d3 leading-relaxed">
          Treinos mensais no <strong className="text-foreground">Parque Ibirapuera</strong> que conectam executivos e empreendedores.
          <br className="hidden md:block" />
          Kits exclusivos, sorteios, desafios e muito networking.
        </p>

        {/* Countdown */}
        <div className="mb-12 opacity-0 animate-fade-up-d3">
          {countdown.isFinished ? (
            <div className="sport-card inline-block px-8 py-4 border-primary/40">
              <p className="font-heading text-xl md:text-2xl text-primary text-glow uppercase tracking-wide">
                🏃 O treino começou!
              </p>
            </div>
          ) : (
            <>
              <p className="text-[11px] text-muted-foreground uppercase tracking-[0.3em] mb-5 font-heading">Próximo treino em</p>
              <div className="flex justify-center gap-6 md:gap-10">
                <CountdownUnit value={countdown.days} label="Dias" />
                <CountdownUnit value={countdown.hours} label="Horas" />
                <CountdownUnit value={countdown.minutes} label="Min" />
                <CountdownUnit value={countdown.seconds} label="Seg" />
              </div>
            </>
          )}
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fade-up-d4">
          <button
            onClick={scrollToForm}
            className="btn-sport px-10 py-4 text-base animate-pulse-glow"
          >
            GARANTIR MINHA VAGA
          </button>
          <a
            href="#experience"
            className="btn-outline-sport px-8 py-4 text-sm"
          >
            SAIBA MAIS
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

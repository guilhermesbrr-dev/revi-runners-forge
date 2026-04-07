import { useState, useEffect } from "react";
import logoImg from "@/assets/revi-logo.png";

const navItems = [
  { label: "Experience", href: "#experience" },
  { label: "Agenda", href: "#agenda" },
  { label: "Galeria", href: "#galeria" },
  { label: "FAQ", href: "#faq" },
];

const StickyHeader = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToForm = () => {
    document.getElementById("inscricao")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-2 bg-background/90 backdrop-blur-xl border-b border-border/30"
          : "py-4 bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between px-4">
        <a href="#" className="flex items-center gap-2">
          <img
            src={logoImg}
            alt="Revi Runners"
            className={`transition-all duration-500 ${scrolled ? "w-7 h-7" : "w-9 h-9"}`}
            width={512}
            height={512}
          />
          <span className={`font-heading font-bold text-foreground transition-all duration-500 ${scrolled ? "text-xs" : "text-sm"}`}>
            Revi Runners
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          onClick={scrollToForm}
          className={`btn-ghost rounded-md font-bold uppercase tracking-wider transition-all duration-500 ${
            scrolled ? "text-[10px] px-4 py-1.5" : "text-[10px] px-5 py-2"
          }`}
        >
          Inscrição
        </button>
      </div>
    </header>
  );
};

export default StickyHeader;

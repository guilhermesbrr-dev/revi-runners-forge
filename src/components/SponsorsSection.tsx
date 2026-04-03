import ScrollReveal from "./ScrollReveal";

const sponsors = [
  { name: "Goldko", url: "#" },
  { name: "Biso", url: "#" },
  { name: "Uappi", url: "#" },
  { name: "Snugg", url: "#" },
  { name: "Velocità", url: "#" },
  { name: "Z2", url: "#" },
  { name: "Widde", url: "#" },
  { name: "Tec4u", url: "#" },
  { name: "Eitri", url: "#" },
  { name: "Appmax", url: "#" },
  { name: "Wicomm", url: "#" },
  { name: "Glow", url: "#" },
  { name: "Cajubrasil", url: "#" },
];

const SponsorsSection = () => (
  <section className="py-16 px-4 relative z-10">
    <div className="container">
      <ScrollReveal>
        <p className="text-primary font-semibold text-xs tracking-[0.3em] uppercase text-center mb-3">Parceiros</p>
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
          Apoiadores do <span className="text-primary">Revi Runners</span>
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {sponsors.map(({ name, url }) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="sponsor-logo glass-card rounded-lg px-5 py-4 flex items-center justify-center hover:border-primary/30 hover:neon-border transition-all duration-500 cursor-pointer"
            >
              <span className="font-heading font-bold text-xs tracking-wider text-muted-foreground uppercase">{name}</span>
            </a>
          ))}
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default SponsorsSection;

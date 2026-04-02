import ScrollReveal from "./ScrollReveal";

const sponsors = [
  "Goldko", "Biso", "Uappi", "Snugg", "Velocità", "Z2", "Widde",
  "Tec4u", "Eitri", "Appmax", "Wicomm", "Glow", "Cajubrasil",
];

const SponsorsSection = () => (
  <section className="py-20 px-4 gradient-bg-alt">
    <div className="container">
      <ScrollReveal>
        <p className="text-primary font-semibold text-xs tracking-[0.3em] uppercase text-center mb-3">Parceiros</p>
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
          Apoiadores do <span className="text-primary">Revi Runners</span>
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {sponsors.map((name) => (
            <div
              key={name}
              className="sponsor-logo glass-card rounded-lg px-5 py-4 flex items-center justify-center hover:border-primary/30 transition-all duration-500 cursor-default"
            >
              <span className="font-heading font-bold text-xs tracking-wider text-muted-foreground uppercase">{name}</span>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default SponsorsSection;

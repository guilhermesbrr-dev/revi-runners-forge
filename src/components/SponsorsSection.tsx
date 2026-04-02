const sponsors = [
  "Goldko", "Biso", "Uappi", "Snugg", "Velocità", "Z2", "Widde",
  "Tec4u", "Eitri", "Appmax", "Wicomm", "Glow", "Cajubrasil",
];

const SponsorsSection = () => (
  <section className="py-20 px-4 bg-secondary/50">
    <div className="container">
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-10">
        Apoiadores do <span className="text-primary neon-text">Revi Runners</span>
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {sponsors.map((name) => (
          <div
            key={name}
            className="bg-card border border-border rounded-lg px-4 py-6 flex items-center justify-center hover:border-primary/50 transition-colors duration-300"
          >
            <span className="font-heading font-semibold text-muted-foreground text-sm">{name}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SponsorsSection;

import ScrollReveal from "./ScrollReveal";

const sponsors = [
  { name: "GoldKo", url: "https://goldko.com.br", logo: "https://lh4.googleusercontent.com/proxy/cWI0pBF5a4cxLSB6yTsEgGU1hjZ1lHoIHmzBUkDDm6U-nV0CDkoveLSVINtotO1NoPaLeOSDtVaxgziPUeyLRwS-h9Ow80zAIawqHlk8Anmwn-wvZvD9sIGQhYvw46wRtI8cjL_j4rd96OvK0lA" },
  { name: "Biso", url: "https://bfrtech.com", logo: "https://cdn.theorg.com/c7ced991-3e33-4fbe-b8a7-fc13f6311266_thumb.jpg" },
  { name: "Uappi", url: "https://uappi.com.br", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB71hNovAOAVv1T4rRjOLLI8KJKKZO94cpHg&s" },
  { name: "Snugg", url: "https://snugg.com.br", logo: "https://acdn-us.mitiendanube.com/stores/001/669/803/themes/common/ogimage-1284238393-1759929012-6a7a4a1a1ecee354a1efc36b4325c8591759929012.png?0" },
  { name: "Velocitá", url: "https://velocita.com.br", logo: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1481/d07056cb-f9d3-476b-a97e-637e9c141ada" },
  { name: "Z2", url: "https://z2performance.com", logo: "https://z2performance.com/cdn/shop/files/logo_Z2_azul_1200x1200.png?v=1722533849" },
  { name: "Widde", url: "https://widde.ai", logo: "https://www.projetodraft.com/wp-content/uploads/2022/10/widde.png" },
  { name: "Eitri", url: "https://eitri.tech", logo: "https://inngage.com.br/wp-content/uploads/2025/05/eitri@3x.png" },
  { name: "Appmax", url: "https://appmax.com.br", logo: "https://blog.appmax.com.br/wp-content/uploads/2020/01/APPMAX_LOGO_LILA%CC%81S-2.webp" },
  { name: "Wicomm", url: "https://wicomm.com.br", logo: "https://lirp.cdn-website.com/c88c0c2e/dms3rep/multi/opt/logo-positivo+%284%29-640w.png" },
  { name: "Caju Brasil", url: "https://cajubrasil.com", logo: "https://cajubrasil.com/pt-br/wp-content/uploads/sites/5/2023/02/cropped-logo-wordpress-4.png" },
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
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {sponsors.map(({ name, url, logo }) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="sponsor-logo glass-card rounded-lg px-5 py-4 flex items-center justify-center hover:border-primary/30 hover:neon-border transition-all duration-500 cursor-pointer"
            >
              <img
                src={logo}
                alt={name}
                className="h-10 w-auto max-w-[120px] object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                loading="lazy"
              />
            </a>
          ))}
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default SponsorsSection;

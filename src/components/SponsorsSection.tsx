import ScrollReveal from "./ScrollReveal";

const sponsors = [
  { name: "GoldKo", url: "https://www.goldko.com.br/", logo: "https://arnold.savagetgroup.com.br/wp-content/uploads/2025/12/goldko-v2.webp", height: "h-[45px]" },
  { name: "Biso", url: "https://www.biso.digital/", logo: "https://cdn.prod.website-files.com/68fa856745b8c4cf7f5f6685/6937daeac6aef9759d3ec480_e8a2bbc1-db89-4257-a59b-47bbaae76e6a.png", height: "h-[35px]" },
  { name: "Uappi", url: "https://uappi.com.br/", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB71hNovAOAVv1T4rRjOLLI8KJKKZO94cpHg&s", height: "h-[35px]" },
  { name: "Snugg", url: "https://www.snuggwear.com.br/", logo: "https://dcdn-us.mitiendanube.com/stores/005/889/505/themes/common/ogimage-239390870-1748374953-a20231bb46195117c175c5f8bedd9b411748374953.png?0", height: "h-[35px]" },
  { name: "Velocitá", url: "https://velocita.com.br", logo: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1481/d07056cb-f9d3-476b-a97e-637e9c141ada", height: "h-[35px]" },
  { name: "Z2", url: "https://z2performance.com/", logo: "https://z2performance.com/cdn/shop/files/logo_Z2_azul_1200x1200.png?v=1722533849", height: "h-[35px]" },
  { name: "Widde", url: "https://widde.io/", logo: "https://www.projetodraft.com/wp-content/uploads/2022/10/widde.png", height: "h-[35px]" },
  { name: "Eitri", url: "https://www.eitri.tech/pt/", logo: "https://inngage.com.br/wp-content/uploads/2025/05/eitri@3x.png", height: "h-[35px]" },
  { name: "Appmax", url: "https://appmax.com.br/", logo: "https://blog.appmax.com.br/wp-content/uploads/2020/01/APPMAX_LOGO_LILA%CC%81S-2.webp", height: "h-[35px]" },
  { name: "Wicomm", url: "https://www.wicomm.com.br/", logo: "https://lirp.cdn-website.com/c88c0c2e/dms3rep/multi/opt/logo-positivo+%284%29-640w.png", height: "h-[25px]" },
  { name: "Caju Brasil", url: "https://www.cajubrasil.com.br/", logo: "https://cajubrasil.com/pt-br/wp-content/uploads/sites/5/2023/02/cropped-logo-wordpress-4.png", height: "h-[35px]" },
  { name: "PowerFocus", url: "https://www.powerfocus.com.br/", logo: "https://storage.googleapis.com/housi-images/appspace/parceiros/powerfocus-logo.png", height: "h-[35px]" },
];

const SponsorsSection = () => (
  <section className="py-16 px-4">
    <div className="container">
      <ScrollReveal>
        <p className="text-muted-foreground text-[10px] tracking-[0.3em] uppercase text-center mb-8 font-heading">
          Marcas que correm com a gente
        </p>
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <div className="sport-card-white rounded-2xl py-6 px-4 max-w-4xl mx-auto overflow-hidden">
          <div className="relative">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10" />
            
            {/* Scrolling track */}
            <div className="overflow-hidden">
              <div className="flex animate-scroll-left w-max gap-12 items-center">
                {/* Double the logos for seamless loop */}
                {[...sponsors, ...sponsors].map(({ name, url, logo }, i) => (
                  <a
                    key={`${name}-${i}`}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 flex items-center justify-center px-2 hover:scale-110 transition-transform duration-300"
                  >
                    <img
                      src={logo}
                      alt={name}
                      className="h-[35px] w-auto max-w-[100px] object-contain"
                      loading="lazy"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default SponsorsSection;

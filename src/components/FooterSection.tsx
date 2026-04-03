import { Instagram, Linkedin } from "lucide-react";

const FooterSection = () => (
  <footer className="border-t border-border py-10 px-4 relative z-10">
    <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
      <div>
        <p className="font-heading font-bold text-sm text-foreground">Revi Runners</p>
        <p className="text-xs text-muted-foreground mt-1">© 2026 Todos os direitos reservados.</p>
      </div>
      <div className="flex gap-4">
        <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
          <Instagram className="w-4 h-4" />
        </a>
        <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
          <Linkedin className="w-4 h-4" />
        </a>
      </div>
    </div>
  </footer>
);

export default FooterSection;

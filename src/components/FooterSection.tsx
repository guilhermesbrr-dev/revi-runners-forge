import { Instagram, Linkedin, Youtube } from "lucide-react";

const FooterSection = () => (
  <footer className="border-t border-border py-8 px-4">
    <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">
        © 2026 Revi Runners Networking. Todos os direitos reservados.
      </p>
      <div className="flex gap-4">
        <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Instagram className="w-5 h-5" /></a>
        <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin className="w-5 h-5" /></a>
        <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Youtube className="w-5 h-5" /></a>
      </div>
    </div>
  </footer>
);

export default FooterSection;

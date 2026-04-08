import { Instagram, MessageCircle } from "lucide-react";

const FooterSection = () => (
  <footer className="border-t border-border py-10 px-4">
    <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
      <div>
        <p className="font-heading font-bold text-sm text-foreground uppercase tracking-wider">Revi Runners</p>
        <p className="text-[10px] text-muted-foreground mt-1">© 2026 Todos os direitos reservados.</p>
      </div>
      <div className="flex gap-5">
        <a href="https://www.instagram.com/revirunners" target="_blank" rel="noopener noreferrer" className="text-muted-foreground/40 hover:text-primary transition-colors duration-300">
          <Instagram className="w-5 h-5" />
        </a>
        <a href="https://www.strava.com/clubs/revirunners" target="_blank" rel="noopener noreferrer" className="text-muted-foreground/40 hover:text-primary transition-colors duration-300">
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
            <path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.598h4.172L10.463 0l-7 13.828h4.169" />
          </svg>
        </a>
        <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground/40 hover:text-primary transition-colors duration-300">
          <MessageCircle className="w-5 h-5" />
        </a>
      </div>
    </div>
  </footer>
);

export default FooterSection;

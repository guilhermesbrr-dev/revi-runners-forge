import { MessageCircle } from "lucide-react";

const FloatingCTA = () => (
  <a
    href="https://wa.me/"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-foreground/10 backdrop-blur-sm border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-muted-foreground/30 transition-all duration-300"
    title="Grupo VIP WhatsApp"
  >
    <MessageCircle className="w-5 h-5" />
  </a>
);

export default FloatingCTA;

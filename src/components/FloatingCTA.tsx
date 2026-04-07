import { MessageCircle } from "lucide-react";

const FloatingCTA = () => (
  <a
    href="https://wa.me/"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
    title="Grupo VIP WhatsApp"
  >
    <MessageCircle className="w-5 h-5" />
  </a>
);

export default FloatingCTA;

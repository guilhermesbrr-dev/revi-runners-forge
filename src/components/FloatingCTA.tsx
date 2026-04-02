import { MessageCircle } from "lucide-react";

const FloatingCTA = () => (
  <a
    href="https://wa.me/"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 btn-neon flex items-center gap-2 px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider shadow-2xl"
  >
    <MessageCircle className="w-4 h-4" />
    <span className="hidden sm:inline">Grupo VIP WhatsApp</span>
    <span className="sm:hidden">VIP</span>
  </a>
);

export default FloatingCTA;

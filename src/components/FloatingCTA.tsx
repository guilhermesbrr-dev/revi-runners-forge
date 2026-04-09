import { MessageCircle } from "lucide-react";

const FloatingCTA = () => (
  <a
    href="https://chat.whatsapp.com/JZcz1OOkOAvLc0X8HSJYmv"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary flex items-center justify-center text-primary-foreground shadow-lg hover:shadow-primary/30 hover:scale-110 transition-all duration-300"
    title="Grupo VIP WhatsApp"
  >
    <MessageCircle className="w-6 h-6" />
  </a>
);

export default FloatingCTA;

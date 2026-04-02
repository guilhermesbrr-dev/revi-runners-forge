import { CalendarDays, MapPin, Gift } from "lucide-react";

const items = [
  { icon: CalendarDays, label: "Sábados", desc: "Treinos mensais" },
  { icon: MapPin, label: "Parque Ibirapuera", desc: "São Paulo – SP" },
  { icon: Gift, label: "Sorteio de Kits", desc: "Para participantes" },
];

const InfoBar = () => (
  <section className="bg-secondary py-6 border-y border-border">
    <div className="container grid grid-cols-1 md:grid-cols-3 gap-4">
      {items.map((item) => (
        <div key={item.label} className="flex items-center gap-3 justify-center">
          <item.icon className="w-6 h-6 text-primary shrink-0" />
          <div>
            <p className="font-heading font-semibold text-foreground">{item.label}</p>
            <p className="text-sm text-muted-foreground">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default InfoBar;

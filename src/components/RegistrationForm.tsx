import { useState } from "react";
import { Send } from "lucide-react";

const shirtSizes = ["P", "M", "G", "GG", "XG"];
const distances = ["5km", "10km", "21km"];

const RegistrationForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    shirtSize: "",
    distance: "",
    scheduleWeeknight: false,
    scheduleSaturday: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      setForm((f) => ({ ...f, [name]: (e.target as HTMLInputElement).checked }));
    } else {
      setForm((f) => ({ ...f, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="inscricao" className="py-20 px-4">
        <div className="container max-w-lg">
          <div className="bg-card border border-border rounded-xl p-8 text-center">
            <div className="w-16 h-16 rounded-full gradient-neon flex items-center justify-center mx-auto mb-4">
              <Send className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="font-heading text-2xl font-bold text-foreground mb-2">Inscrição recebida!</h3>
            <p className="text-muted-foreground">Nos vemos na próxima corrida 🏃‍♂️</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="inscricao" className="py-20 px-4">
      <div className="container max-w-lg">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-8">
          Inscreva-se <span className="text-primary neon-text">agora</span>
        </h2>
        <form onSubmit={handleSubmit} className="bg-card border border-border rounded-xl p-6 md:p-8 space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Nome Completo</label>
            <input name="name" required value={form.name} onChange={handleChange} className="w-full bg-muted border border-border rounded-lg px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Seu nome" />
          </div>
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">E-mail</label>
            <input name="email" type="email" required value={form.email} onChange={handleChange} className="w-full bg-muted border border-border rounded-lg px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" placeholder="email@empresa.com" />
          </div>
          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Telefone (WhatsApp)</label>
            <input name="phone" type="tel" required value={form.phone} onChange={handleChange} className="w-full bg-muted border border-border rounded-lg px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" placeholder="(11) 99999-9999" />
          </div>
          {/* Company */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Empresa</label>
            <input name="company" value={form.company} onChange={handleChange} className="w-full bg-muted border border-border rounded-lg px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Sua empresa" />
          </div>
          {/* Shirt size */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Tamanho da Camiseta</label>
            <select name="shirtSize" required value={form.shirtSize} onChange={handleChange} className="w-full bg-muted border border-border rounded-lg px-4 py-2.5 text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
              <option value="">Selecione</option>
              {shirtSizes.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
          {/* Distance */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Distância pretendida</label>
            <div className="flex gap-3">
              {distances.map((d) => (
                <label key={d} className={`flex-1 text-center cursor-pointer border rounded-lg py-2.5 font-semibold transition-all duration-200 ${form.distance === d ? "gradient-neon text-primary-foreground border-primary neon-glow" : "bg-muted border-border text-muted-foreground hover:border-primary/50"}`}>
                  <input type="radio" name="distance" value={d} checked={form.distance === d} onChange={handleChange} className="sr-only" />
                  {d}
                </label>
              ))}
            </div>
          </div>
          {/* Schedule */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Preferência de horário</label>
            <div className="space-y-2">
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" name="scheduleWeeknight" checked={form.scheduleWeeknight} onChange={handleChange} className="w-4 h-4 rounded border-border accent-primary" />
                <span className="text-foreground text-sm">Durante a semana (Noite)</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" name="scheduleSaturday" checked={form.scheduleSaturday} onChange={handleChange} className="w-4 h-4 rounded border-border accent-primary" />
                <span className="text-foreground text-sm">Sábado de manhã</span>
              </label>
            </div>
          </div>
          {/* Submit */}
          <button type="submit" className="w-full gradient-neon text-primary-foreground font-heading font-bold text-lg py-3 rounded-lg neon-glow hover:neon-glow-strong transition-all duration-300 hover:scale-[1.02]">
            Enviar inscrição
          </button>
        </form>
      </div>
    </section>
  );
};

export default RegistrationForm;

import { useState } from "react";
import { Send } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const shirtSizes = ["P", "M", "G", "GG", "XG"];
const distances = ["5km", "10km", "21km"];

const RegistrationForm = () => {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", company: "", role: "",
    shirtSize: "", distance: "", scheduleWeeknight: false, scheduleSaturday: false,
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
      <section id="inscricao" className="py-24 px-4 gradient-bg-alt">
        <div className="container max-w-lg">
          <div className="glass-card neon-border-strong rounded-lg p-10 text-center">
            <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mx-auto mb-5">
              <Send className="w-7 h-7 text-primary-foreground" />
            </div>
            <h3 className="font-heading text-2xl font-bold text-foreground mb-2">Inscrição confirmada</h3>
            <p className="text-muted-foreground text-sm">Bem-vindo ao Revi Runners. Nos vemos na pista 🏃‍♂️</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="inscricao" className="py-24 px-4 gradient-bg-alt">
      <div className="container max-w-lg">
        <ScrollReveal>
          <p className="text-primary font-semibold text-xs tracking-[0.3em] uppercase text-center mb-3">Inscrição</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-10">
            Garanta sua <span className="text-primary">vaga</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <form onSubmit={handleSubmit} className="glass-card neon-border rounded-lg p-6 md:p-8 space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-1.5 uppercase tracking-wider">Nome</label>
                <input name="name" required value={form.name} onChange={handleChange} className="form-input" placeholder="Seu nome completo" />
              </div>
              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-1.5 uppercase tracking-wider">E-mail Corporativo</label>
                <input name="email" type="email" required value={form.email} onChange={handleChange} className="form-input" placeholder="nome@empresa.com" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-1.5 uppercase tracking-wider">WhatsApp</label>
                <input name="phone" type="tel" required value={form.phone} onChange={handleChange} className="form-input" placeholder="(11) 99999-9999" />
              </div>
              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-1.5 uppercase tracking-wider">Empresa</label>
                <input name="company" value={form.company} onChange={handleChange} className="form-input" placeholder="Sua empresa" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-1.5 uppercase tracking-wider">Cargo</label>
              <input name="role" value={form.role} onChange={handleChange} className="form-input" placeholder="CEO, Diretor, Gerente..." />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-1.5 uppercase tracking-wider">Camiseta</label>
                <select name="shirtSize" required value={form.shirtSize} onChange={handleChange} className="form-input">
                  <option value="">Tamanho</option>
                  {shirtSizes.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-1.5 uppercase tracking-wider">Distância</label>
                <div className="flex gap-2">
                  {distances.map((d) => (
                    <label
                      key={d}
                      className={`flex-1 text-center cursor-pointer rounded-lg py-3 text-xs font-semibold transition-all duration-200 ${
                        form.distance === d
                          ? "btn-neon"
                          : "glass-card border border-border text-muted-foreground hover:border-primary/30"
                      }`}
                    >
                      <input type="radio" name="distance" value={d} checked={form.distance === d} onChange={handleChange} className="sr-only" />
                      {d}
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wider">Preferência de horário</label>
              <div className="flex gap-6">
                <label className="flex items-center gap-2 cursor-pointer text-sm text-foreground">
                  <input type="checkbox" name="scheduleWeeknight" checked={form.scheduleWeeknight} onChange={handleChange} className="w-4 h-4 rounded accent-primary" />
                  Noite (semana)
                </label>
                <label className="flex items-center gap-2 cursor-pointer text-sm text-foreground">
                  <input type="checkbox" name="scheduleSaturday" checked={form.scheduleSaturday} onChange={handleChange} className="w-4 h-4 rounded accent-primary" />
                  Manhã (sábado)
                </label>
              </div>
            </div>

            <button type="submit" className="btn-neon w-full py-3.5 rounded-lg text-sm font-bold uppercase tracking-wider mt-2">
              Confirmar inscrição
            </button>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default RegistrationForm;

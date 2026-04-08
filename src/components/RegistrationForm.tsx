import { useState, useMemo } from "react";
import { Send, User, Mail, Phone, Building2, Briefcase, Loader2 } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { Progress } from "./ui/progress";

const shirtSizes = ["P", "M", "G", "GG", "XG"];
const distances = ["5km", "10km", "21km"];

const RegistrationForm = () => {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", company: "", role: "",
    shirtSize: "", distance: "", scheduleWeeknight: false, scheduleSaturday: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const progress = useMemo(() => {
    const fields = [form.name, form.email, form.phone, form.company, form.role, form.shirtSize, form.distance];
    const checks = [form.scheduleWeeknight || form.scheduleSaturday];
    const filled = fields.filter(Boolean).length + checks.filter(Boolean).length;
    return Math.round((filled / (fields.length + checks.length)) * 100);
  }, [form]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      setForm((f) => ({ ...f, [name]: (e.target as HTMLInputElement).checked }));
    } else {
      setForm((f) => ({ ...f, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const payload = {
      Nome: form.name,
      "E-mail": form.email,
      WhatsApp: form.phone,
      Empresa: form.company,
      Cargo: form.role,
      "Tamanho Camiseta": form.shirtSize,
      Distância: form.distance,
      "Horário": [
        form.scheduleWeeknight ? "Noite (semana)" : "",
        form.scheduleSaturday ? "Manhã (sábado)" : "",
      ].filter(Boolean).join(", "),
    };

    try {
      const res = await fetch("https://formspree.io/f/xwpkgjvn", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError("Erro ao enviar. Tente novamente.");
      }
    } catch {
      setError("Erro de conexão. Verifique sua internet.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <section id="inscricao" className="py-24 px-4">
        <div className="container max-w-lg">
          <div className="sport-card rounded-2xl p-12 text-center border-primary/20">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Send className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-heading text-2xl font-bold text-foreground uppercase mb-3">Inscrição Confirmada!</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">Em breve entraremos em contato com os detalhes do seu kit.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="inscricao" className="py-24 px-4">
      <div className="container max-w-lg">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="badge-sport mb-4 inline-block">VAGAS LIMITADAS</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase text-foreground mt-4">
              GARANTA SUA <span className="text-primary text-glow-sm">VAGA</span>
            </h2>
            <p className="text-muted-foreground text-sm mt-4">
              Preencha o formulário e entre para a comunidade
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <form onSubmit={handleSubmit} className="sport-card rounded-2xl p-6 md:p-8 space-y-5 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0">
              <Progress value={progress} className="h-1 rounded-none bg-secondary [&>div]:bg-primary" />
            </div>

            <p className="text-[10px] text-muted-foreground text-right uppercase tracking-wider pt-2 font-heading">{progress}% completo</p>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-bold text-muted-foreground mb-1.5 uppercase tracking-wider font-heading">Nome</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/40" />
                  <input name="name" required value={form.name} onChange={handleChange} className="form-input pl-10" placeholder="Seu nome completo" />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-bold text-muted-foreground mb-1.5 uppercase tracking-wider font-heading">Empresa</label>
                <div className="relative">
                  <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/40" />
                  <input name="company" value={form.company} onChange={handleChange} className="form-input pl-10" placeholder="Sua empresa" />
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-bold text-muted-foreground mb-1.5 uppercase tracking-wider font-heading">E-mail Corporativo</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/40" />
                  <input name="email" type="email" required value={form.email} onChange={handleChange} className="form-input pl-10" placeholder="nome@empresa.com" />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-bold text-muted-foreground mb-1.5 uppercase tracking-wider font-heading">WhatsApp</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/40" />
                  <input name="phone" type="tel" required value={form.phone} onChange={handleChange} className="form-input pl-10" placeholder="(11) 99999-9999" />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-bold text-muted-foreground mb-1.5 uppercase tracking-wider font-heading">Cargo</label>
              <div className="relative">
                <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/40" />
                <input name="role" value={form.role} onChange={handleChange} className="form-input pl-10" placeholder="CEO, Diretor, Gerente..." />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-bold text-muted-foreground mb-1.5 uppercase tracking-wider font-heading">Camiseta</label>
                <select name="shirtSize" required value={form.shirtSize} onChange={handleChange} className="form-input">
                  <option value="">Tamanho</option>
                  {shirtSizes.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-[10px] font-bold text-muted-foreground mb-1.5 uppercase tracking-wider font-heading">Distância</label>
                <div className="flex gap-2">
                  {distances.map((d) => (
                    <label
                      key={d}
                      className={`flex-1 text-center cursor-pointer rounded-lg py-3 text-xs font-bold uppercase transition-all duration-200 font-heading ${
                        form.distance === d
                          ? "bg-primary text-primary-foreground"
                          : "border border-border text-muted-foreground hover:border-primary/30"
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
              <label className="block text-[10px] font-bold text-muted-foreground mb-2 uppercase tracking-wider font-heading">Preferência de horário</label>
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

            {error && <p className="text-destructive text-xs text-center">{error}</p>}

            <button
              type="submit"
              disabled={loading}
              className="btn-sport w-full py-4 text-sm mt-2 flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : null}
              {loading ? "ENVIANDO..." : "CONFIRMAR INSCRIÇÃO"}
            </button>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default RegistrationForm;

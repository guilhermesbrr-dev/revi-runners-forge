import { useState, useMemo } from "react";
import { Send, User, Mail, Phone, Building2, Briefcase, Loader2, Shirt } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { Progress } from "./ui/progress";

const shirtSizes = ["P", "M", "G", "GG", "XG"];

const maskPhone = (value: string) => {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return digits.length ? `(${digits}` : "";
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10)
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
};

const RegistrationForm = () => {
  const [form, setForm] = useState({
    name: "", phone: "", email: "", company: "", role: "", shirtSize: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const progress = useMemo(() => {
    const values = Object.values(form);
    const filled = values.filter(Boolean).length;
    return Math.round((filled / values.length) * 100);
  }, [form]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === "phone") {
      setForm((f) => ({ ...f, phone: maskPhone(value) }));
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
      WhatsApp: form.phone,
      "E-mail": form.email,
      Empresa: form.company,
      Cargo: form.role,
      "Tamanho Camiseta": form.shirtSize,
    };

    try {
      const res = await fetch("https://formspree.io/f/mwvwywyl", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) setSubmitted(true);
      else setError("Erro ao enviar. Tente novamente.");
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
            <p className="text-muted-foreground text-sm leading-relaxed">Em breve entraremos em contato.</p>
          </div>
        </div>
      </section>
    );
  }

  const fieldLabel = "block text-[10px] font-bold text-muted-foreground mb-1.5 uppercase tracking-wider font-heading";

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

            <div>
              <label className={fieldLabel}>Nome</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/40" />
                <input name="name" required value={form.name} onChange={handleChange} className="form-input pl-10" placeholder="Seu nome completo" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className={fieldLabel}>WhatsApp</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/40" />
                  <input name="phone" type="tel" required value={form.phone} onChange={handleChange} className="form-input pl-10" placeholder="(11) 99999-9999" />
                </div>
              </div>
              <div>
                <label className={fieldLabel}>E-mail</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/40" />
                  <input name="email" type="email" required value={form.email} onChange={handleChange} className="form-input pl-10" placeholder="seu@email.com" />
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className={fieldLabel}>Empresa</label>
                <div className="relative">
                  <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/40" />
                  <input name="company" required value={form.company} onChange={handleChange} className="form-input pl-10" placeholder="Sua empresa" />
                </div>
              </div>
              <div>
                <label className={fieldLabel}>Cargo</label>
                <div className="relative">
                  <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/40" />
                  <input name="role" required value={form.role} onChange={handleChange} className="form-input pl-10" placeholder="CEO, Diretor..." />
                </div>
              </div>
            </div>

            <div>
              <label className={fieldLabel}>Tamanho da Camiseta</label>
              <div className="relative">
                <Shirt className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/40 z-10" />
                <select name="shirtSize" required value={form.shirtSize} onChange={handleChange} className="form-input pl-10">
                  <option value="">Selecione o tamanho</option>
                  {shirtSizes.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
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

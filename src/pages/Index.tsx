import magoAvatar from "@/assets/mago-avatar.webp";
import magoBanner from "@/assets/mago-banner.webp";
import {
  Star,
  Users,
  Zap,
  Shield,
  ShoppingBag,
  Smartphone,
  CheckCircle2,
  AlertTriangle,
  MessageCircle,
  TrendingDown,
  Gift,
} from "lucide-react";

const WHATSAPP_LINK = "https://chat.whatsapp.com/EkiyYscD3tOLe34nv8bu1s";
const INSTAGRAM_LINK = "https://instagram.com/magopromobr";

const CTAButton = ({ text, className = "" }: { text: string; className?: string }) => (
  <button
    onClick={() => {
      if (typeof window !== "undefined" && (window as any).fbq) {
        (window as any).fbq("track", "Lead");
      }
      window.open(WHATSAPP_LINK, "_blank", "noopener,noreferrer");
    }}
    className={`shimmer block w-full text-center font-extrabold text-xl py-5 rounded-2xl transition-transform duration-200 hover:scale-[1.03] bg-cta-green text-cta-green-foreground animate-pulse-glow shadow-lg shadow-cta-green/30 ${className}`}
  >
    {text}
  </button>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center">
      {/* Decorative top bar */}
      <div className="w-full h-1 gold-gradient" />

      <div className="w-full max-w-md mx-auto px-4 py-6 flex flex-col items-center gap-7">

        {/* ===== 1. LOGO + NOME ===== */}
        <header className="flex flex-col items-center gap-3 text-center">
          <div className="relative">
            <div className="w-24 h-24 rounded-full overflow-hidden border-[3px] border-primary glow-gold animate-float">
              <img
                src={magoAvatar}
                alt="Mago das Promoções"
                className="w-full h-full object-cover"
                width={96}
                height={96}
                fetchPriority="high"
              />
            </div>
            <span className="absolute -bottom-1 -right-1 text-2xl animate-sparkle">✨</span>
          </div>
          <h1 className="text-xl font-black gold-text tracking-tight leading-tight">
            MAGO DAS PROMOÇÕES
          </h1>
        </header>

        {/* ===== 2. HEADLINE — GANCHO FORTE ===== */}
        <section className="text-center space-y-3">
          <h2 className="text-2xl sm:text-3xl font-black text-foreground leading-tight">
            Você está <span className="text-primary">pagando caro</span> sem saber disso… 😱
          </h2>
          <p className="text-muted-foreground text-base font-medium leading-relaxed">
            Enquanto você paga o preço cheio, <strong className="text-primary">+1000 pessoas</strong> já estão comprando pela <strong className="text-primary">metade do preço</strong> todos os dias 🔥
          </p>
        </section>

        {/* ===== 3. BOTÃO PRINCIPAL (ACIMA DA DOBRA) ===== */}
        <div className="w-full space-y-2">
          <CTAButton text="QUERO ENTRAR NO GRUPO AGORA 🔥" />
          <p className="text-center text-xs text-muted-foreground font-semibold">
            🔒 100% gratuito • Sem spam • Só ofertas reais
          </p>
        </div>

        {/* ===== 4. STATS PILLS ===== */}
        <div className="flex gap-2.5 flex-wrap justify-center">
          {[
            { icon: <Users className="w-3.5 h-3.5" />, text: "+1000 economizando AGORA" },
            { icon: <Zap className="w-3.5 h-3.5" />, text: "Ofertas acabam em minutos" },
            { icon: <Shield className="w-3.5 h-3.5" />, text: "100% gratuito" },
          ].map((item) => (
            <span
              key={item.text}
              className="flex items-center gap-1.5 bg-secondary px-3 py-1.5 rounded-full text-xs font-semibold text-primary"
            >
              {item.icon}
              {item.text}
            </span>
          ))}
        </div>

        {/* ===== 5. PROVA SOCIAL - DEPOIMENTOS ===== */}
        <section className="w-full space-y-3">
          <h3 className="text-center text-sm font-bold text-muted-foreground uppercase tracking-wider">
            Quem entrou, não sai mais 👇
          </h3>
          <div className="space-y-2.5">
            {[
              { name: "Ana M.", text: "Entrei sem acreditar… economizei mais de R$200 em poucos dias 😳", stars: 5 },
              { name: "Pedro S.", text: "As ofertas chegam ANTES de qualquer outro lugar. Já indiquei pra família toda!", stars: 5 },
              { name: "Julia R.", text: "Comprei um celular por METADE do preço. Grupo sério demais! 🔥", stars: 5 },
            ].map((dep) => (
              <div
                key={dep.name}
                className="bg-card border border-border rounded-xl p-4 space-y-2"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">
                    {dep.name[0]}
                  </div>
                  <span className="text-sm font-bold text-foreground">{dep.name}</span>
                  <div className="flex gap-0.5 ml-auto">
                    {[...Array(dep.stars)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-foreground/90 leading-relaxed">"{dep.text}"</p>
              </div>
            ))}
          </div>

          {/* Avatar stack */}
          <div className="flex items-center justify-center gap-1 pt-1">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-7 h-7 rounded-full bg-muted border-2 border-background flex items-center justify-center text-[10px] font-bold text-muted-foreground -ml-2 first:ml-0"
              >
                {["A", "M", "J", "P", "R"][i]}
              </div>
            ))}
            <span className="text-xs text-primary font-semibold ml-2">
              +1000 pessoas economizando AGORA
            </span>
          </div>
        </section>

        {/* ===== 6. PROVA VISUAL - BANNER ===== */}
        <section className="w-full space-y-3">
          <div className="w-full rounded-2xl overflow-hidden glow-gold border border-border">
            <img
              src={magoBanner}
              alt="Grupo de promoções no WhatsApp com ofertas reais"
              className="w-full h-auto"
              width={940}
              height={1671}
              loading="lazy"
              decoding="async"
            />
          </div>
          <p className="text-center text-sm text-muted-foreground font-semibold">
            👆 Isso é o que rola no grupo TODOS os dias
          </p>
        </section>

        {/* ===== 7. BENEFÍCIOS ===== */}
        <section className="w-full bg-card border border-border rounded-2xl p-5 space-y-4">
          <h3 className="text-center text-lg font-extrabold text-foreground">
            Por que entrar no grupo? 👇
          </h3>
          <div className="space-y-3">
            {[
              { icon: <TrendingDown className="w-5 h-5" />, text: "Produtos até 70% mais baratos" },
              { icon: <Zap className="w-5 h-5" />, text: "Ofertas relâmpago a cada hora" },
              { icon: <Smartphone className="w-5 h-5" />, text: "Eletrônicos, roupas, perfumes e mais" },
              { icon: <CheckCircle2 className="w-5 h-5" />, text: "Links verificados (Shopee, Amazon, ML)" },
              { icon: <Gift className="w-5 h-5" />, text: "Cupons exclusivos que ninguém divulga" },
              { icon: <MessageCircle className="w-5 h-5" />, text: "Comunidade ativa com +1000 membros" },
            ].map((b) => (
              <div key={b.text} className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-primary/15 flex items-center justify-center text-primary shrink-0">
                  {b.icon}
                </div>
                <span className="text-sm font-semibold text-foreground">{b.text}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ===== 8. URGÊNCIA ===== */}
        <section className="w-full bg-destructive/10 border border-destructive/30 rounded-2xl p-5 space-y-3">
          <div className="flex items-center gap-2 justify-center">
            <AlertTriangle className="w-5 h-5 text-destructive animate-pulse" />
            <h3 className="text-base font-extrabold text-destructive">ATENÇÃO: VOCÊ ESTÁ PERDENDO DINHEIRO</h3>
            <AlertTriangle className="w-5 h-5 text-destructive animate-pulse" />
          </div>
          <div className="space-y-2 text-center">
            <p className="text-sm font-bold text-foreground">
              ⚠️ As melhores ofertas acabam em <span className="text-destructive">minutos</span>
            </p>
            <p className="text-sm font-bold text-foreground">
              💸 Quem entra depois <span className="text-destructive">paga mais caro</span>
            </p>
            <p className="text-sm font-bold text-foreground">
              ⏳ Cada segundo fora do grupo é dinheiro jogado fora
            </p>
          </div>
        </section>

        {/* ===== 9. ESCASSEZ ===== */}
        <div className="w-full bg-secondary border border-primary/30 rounded-xl p-4 text-center space-y-1">
          <p className="text-sm font-bold text-primary">
            🚨 Vagas limitadas — o grupo pode FECHAR a qualquer momento
          </p>
          <p className="text-xs text-muted-foreground font-semibold">
            Quem não entrar agora, pode ficar de fora
          </p>
        </div>

        {/* ===== 10. CTA FINAL ===== */}
        <div className="w-full space-y-3">
          <p className="text-center text-base font-extrabold text-foreground">
            Não fique de fora. Entre agora e comece a economizar 👇
          </p>
          <CTAButton text="🚀 LIBERAR MEU ACESSO AO GRUPO VIP" />
          <p className="text-center text-sm font-bold text-primary">
            🔥 +1000 pessoas já economizando todos os dias
          </p>
        </div>

        {/* ===== INSTAGRAM ===== */}
        <a
          href={INSTAGRAM_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between w-full font-bold text-base py-3.5 px-5 rounded-xl transition-all duration-200 text-white"
          style={{ background: "linear-gradient(135deg, #833AB4, #E1306C, #F77737)" }}
        >
          <span>ME SEGUE NO INSTAGRAM 📲</span>
          <span className="text-sm font-normal text-white/80">
            @magopromobr
          </span>
        </a>

        {/* ===== RODAPÉ ===== */}
        <footer className="text-center text-xs text-muted-foreground py-4">
          <p>Grupo 100% gratuito • Sem spam • Ofertas reais</p>
          <p className="mt-1 opacity-60">© 2026 Mago das Promoções</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;

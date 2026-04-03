import magoAvatar from "@/assets/mago-avatar.webp";
import magoBanner from "@/assets/mago-banner.webp";
import { Star, Users, Zap, ShieldCheck, TrendingDown } from "lucide-react";

const WHATSAPP_LINK = "https://chat.whatsapp.com/EkiyYscD3tOLe34nv8bu1s";

const Index = () => {
  const handleCTA = () => {
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "Lead");
    }
    window.open(WHATSAPP_LINK, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="h-[100dvh] bg-background flex flex-col overflow-hidden">
      <div className="w-full h-0.5 gold-gradient shrink-0" />

      <div className="flex-1 flex flex-col items-center justify-between w-full max-w-lg mx-auto px-3 py-2 sm:py-3">
        {/* Header */}
        <header className="flex items-center gap-2 shrink-0">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 border-primary glow-gold">
            <img src={magoAvatar} alt="Mago das Promoções" className="w-full h-full object-cover" width={40} height={40} fetchPriority="high" />
          </div>
          <h1 className="text-xs sm:text-sm font-black gold-text tracking-tight">MAGO DAS PROMOÇÕES</h1>
          <span className="text-sm animate-sparkle">✨</span>
        </header>

        {/* Headline */}
        <section className="text-center shrink-0 space-y-0.5">
          <h2 className="text-[15px] sm:text-xl font-black text-foreground leading-tight">
            Você está <span className="text-primary">pagando caro</span> sem saber disso…
          </h2>
          <p className="text-[10px] sm:text-xs text-muted-foreground font-medium leading-snug">
            Mais de <strong className="text-primary">1.000 pessoas</strong> já economizam TODOS OS DIAS com ofertas até <strong className="text-primary">70% mais baratas</strong>.
          </p>
        </section>

        {/* Banner — larger and dominant */}
        <div className="w-full shrink-0 flex gap-2 items-stretch" style={{ flex: '1 1 0', minHeight: 0, maxHeight: '42vh' }}>
          <div className="flex-[1.3] min-w-0 rounded-xl overflow-hidden border border-border glow-gold">
            <img src={magoBanner} alt="Ofertas reais do grupo — Tênis de R$457 por R$99" className="w-full h-full object-cover" loading="eager" />
          </div>

          {/* Side column */}
          <div className="flex flex-col justify-between gap-1 shrink-0 w-[38%]">
            <div className="bg-card border border-border rounded-lg px-2 py-1.5 text-center space-y-0.5">
              <div className="flex justify-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-2.5 h-2.5 fill-primary text-primary" />
                ))}
              </div>
              <div className="flex items-center justify-center gap-0.5">
                <Users className="w-2.5 h-2.5 text-primary" />
                <span className="text-[8px] sm:text-[10px] font-bold text-primary">+1000 economizando</span>
              </div>
              <div className="flex justify-center -space-x-1">
                {["A", "M", "J", "P", "R"].map((l) => (
                  <div key={l} className="w-3.5 h-3.5 rounded-full bg-muted border border-background flex items-center justify-center text-[6px] font-bold text-muted-foreground">{l}</div>
                ))}
              </div>
            </div>

            <div className="space-y-0.5">
              {[
                { icon: <TrendingDown className="w-2.5 h-2.5" />, text: "Até 70% OFF" },
                { icon: <Zap className="w-2.5 h-2.5" />, text: "Acabam em minutos" },
                { icon: <ShieldCheck className="w-2.5 h-2.5" />, text: "Links confiáveis" },
              ].map((b) => (
                <div key={b.text} className="flex items-center gap-1 bg-card border border-border rounded-md px-1.5 py-0.5">
                  <span className="text-primary shrink-0">{b.icon}</span>
                  <span className="text-[8px] sm:text-[10px] font-semibold text-foreground">{b.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Urgency + CTA */}
        <div className="w-full space-y-1 shrink-0">
          <p className="text-center text-[9px] sm:text-[11px] text-primary font-bold animate-pulse">
            ⚡ Quem entra primeiro pega os melhores preços
          </p>
          <button
            onClick={handleCTA}
            className="shimmer block w-full text-center font-extrabold text-sm sm:text-lg py-3 sm:py-4 rounded-2xl transition-all duration-200 hover:scale-[1.03] hover:shadow-xl bg-cta-green text-cta-green-foreground animate-pulse-glow shadow-lg shadow-cta-green/40"
          >
            QUERO ENTRAR NO GRUPO AGORA 🔥
          </button>
          <p className="text-center text-[8px] sm:text-[10px] text-muted-foreground font-semibold">
            Clique e veja as ofertas ainda hoje 👆
          </p>
        </div>

        {/* Trust footer */}
        <footer className="flex flex-wrap justify-center gap-x-2 text-[7px] sm:text-[9px] text-muted-foreground font-medium shrink-0">
          <span>🔒 100% gratuito</span>
          <span>• Sem spam</span>
          <span>• Ofertas reais</span>
          <span>• Cancele quando quiser</span>
        </footer>
      </div>
    </div>
  );
};

export default Index;

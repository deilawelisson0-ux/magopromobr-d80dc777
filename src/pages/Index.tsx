import magoAvatar from "@/assets/mago-avatar.webp";
import magoBanner from "@/assets/mago-banner.webp";
import { Star, Users, Zap, ShieldCheck, TrendingDown, CheckCircle2 } from "lucide-react";

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

      <div className="flex-1 flex flex-col items-center w-full max-w-2xl mx-auto px-3 py-1.5 overflow-hidden" style={{ gap: '0.6vh' }}>
        {/* 1. Logo + Nome — compacto */}
        <header className="flex items-center gap-2 shrink-0">
          <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full overflow-hidden border-2 border-primary glow-gold">
            <img src={magoAvatar} alt="Mago das Promoções" className="w-full h-full object-cover" width={36} height={36} fetchPriority="high" />
          </div>
          <h1 className="text-[11px] sm:text-sm font-black gold-text tracking-tight">MAGO DAS PROMOÇÕES</h1>
          <span className="text-xs animate-sparkle">✨</span>
        </header>

        {/* 2 & 3. Headline + Subheadline — sem gap extra */}
        <section className="text-center shrink-0">
          <h2 className="text-[14px] sm:text-xl font-black text-foreground leading-tight">
            Você está <span className="text-primary">pagando caro</span> sem saber disso…
          </h2>
          <p className="text-[9px] sm:text-xs text-muted-foreground font-medium leading-snug mt-0.5">
            Mais de <strong className="text-primary">1.000 pessoas</strong> já economizam TODOS OS DIAS com ofertas até <strong className="text-primary">70% mais baratas</strong>.
          </p>
        </section>

        {/* 4. Bloco Principal — imagem dominante + lado direito */}
        <div className="w-full flex gap-2 items-stretch flex-1 min-h-0">
          {/* Imagem — solta, sem caixa, dominante */}
          <div className="flex-[1.6] min-w-0 flex items-center justify-center relative">
            <div className="absolute inset-0 rounded-2xl glow-gold-border pointer-events-none z-20" />
            <img
              src={magoBanner}
              alt="Ofertas reais do grupo — Tênis de R$457 por R$99"
              className="w-full h-full object-cover rounded-2xl drop-shadow-2xl relative z-10"
              loading="eager"
            />
          </div>

          {/* Lado direito — prova social + benefícios */}
          <div className="flex-1 min-w-0 flex flex-col gap-1.5 justify-center">
            <div className="bg-card/60 border border-border rounded-lg px-2 py-1.5 text-center space-y-0.5">
              <div className="flex justify-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-primary text-primary" />
                ))}
              </div>
              <div className="flex items-center justify-center gap-1">
                <Users className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-primary" />
                <span className="text-[8px] sm:text-[11px] font-bold text-primary">+1000 economizando</span>
              </div>
              <div className="flex justify-center -space-x-1.5">
                {["A", "M", "J", "P", "R"].map((l) => (
                  <div key={l} className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-muted border border-background flex items-center justify-center text-[6px] sm:text-[7px] font-bold text-muted-foreground">{l}</div>
                ))}
              </div>
            </div>

            <div className="space-y-0.5 sm:space-y-1">
              {[
                { icon: <TrendingDown className="w-2.5 h-2.5 sm:w-3 sm:h-3" />, text: "Até 70% OFF" },
                { icon: <Zap className="w-2.5 h-2.5 sm:w-3 sm:h-3" />, text: "Acabam em minutos" },
                { icon: <ShieldCheck className="w-2.5 h-2.5 sm:w-3 sm:h-3" />, text: "Links confiáveis" },
              ].map((b) => (
                <div key={b.text} className="flex items-center gap-1 bg-card/60 border border-border rounded-md px-1.5 py-0.5 sm:py-1">
                  <span className="text-primary shrink-0">{b.icon}</span>
                  <span className="text-[8px] sm:text-[11px] font-semibold text-foreground">{b.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 5-7. Urgência + CTA + Subtexto — colados */}
        <div className="w-full shrink-0" style={{ marginTop: '-0.3vh' }}>
          <p className="text-center text-[8px] sm:text-[11px] text-primary font-bold animate-pulse mb-1">
            ⚡ Quem entra primeiro pega os melhores preços
          </p>
          <button
            onClick={handleCTA}
            className="shimmer block w-full text-center font-extrabold text-sm sm:text-lg py-2.5 sm:py-3.5 rounded-2xl transition-all duration-200 hover:scale-[1.03] hover:shadow-xl bg-cta-green text-cta-green-foreground animate-pulse-glow shadow-lg shadow-cta-green/40"
          >
            QUERO ENTRAR NO GRUPO AGORA 🔥
          </button>
          <p className="text-center text-[7px] sm:text-[10px] text-muted-foreground font-semibold mt-0.5">
            Clique e veja as ofertas ainda hoje 👆
          </p>
        </div>

        {/* 8. Confiança */}
        <footer className="flex flex-wrap justify-center gap-x-2 sm:gap-x-3 text-[7px] sm:text-[9px] text-muted-foreground font-medium shrink-0">
          <span className="flex items-center gap-0.5"><CheckCircle2 className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-cta-green" /> 100% gratuito</span>
          <span className="flex items-center gap-0.5"><CheckCircle2 className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-cta-green" /> Sem spam</span>
          <span className="flex items-center gap-0.5"><CheckCircle2 className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-cta-green" /> Cancele quando quiser</span>
        </footer>
      </div>
    </div>
  );
};

export default Index;

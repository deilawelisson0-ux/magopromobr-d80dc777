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

      <div className="flex-1 flex flex-col items-center w-full max-w-2xl mx-auto px-3 py-2 gap-[1vh] overflow-hidden">
        {/* 1. Logo + Nome */}
        <header className="flex items-center gap-2 shrink-0">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 border-primary glow-gold">
            <img src={magoAvatar} alt="Mago das Promoções" className="w-full h-full object-cover" width={40} height={40} fetchPriority="high" />
          </div>
          <h1 className="text-xs sm:text-sm font-black gold-text tracking-tight">MAGO DAS PROMOÇÕES</h1>
          <span className="text-sm animate-sparkle">✨</span>
        </header>

        {/* 2 & 3. Headline + Subheadline */}
        <section className="text-center shrink-0">
          <h2 className="text-sm sm:text-xl font-black text-foreground leading-tight">
            Você está <span className="text-primary">pagando caro</span> sem saber disso…
          </h2>
          <p className="text-[10px] sm:text-xs text-muted-foreground font-medium leading-snug mt-0.5">
            Mais de <strong className="text-primary">1.000 pessoas</strong> já economizam TODOS OS DIAS com ofertas até <strong className="text-primary">70% mais baratas</strong>.
          </p>
        </section>

        {/* 4. Bloco Principal — 2 colunas */}
        <div className="w-full flex gap-2 items-stretch flex-1 min-h-0">
          {/* Lado Esquerdo — Imagem dominante (~60%) */}
          <div className="flex-[1.4] min-w-0 rounded-xl overflow-hidden flex items-center justify-center bg-card">
            <img
              src={magoBanner}
              alt="Ofertas reais do grupo — Tênis de R$457 por R$99"
              className="w-full h-full object-contain"
              loading="eager"
            />
          </div>

          {/* Lado Direito — Prova social + benefícios (~40%) */}
          <div className="flex-1 min-w-0 flex flex-col gap-1.5 justify-center">
            {/* Prova social */}
            <div className="bg-card border border-border rounded-lg px-2 py-1.5 text-center space-y-1">
              <div className="flex justify-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-primary text-primary" />
                ))}
              </div>
              <div className="flex items-center justify-center gap-1">
                <Users className="w-3 h-3 text-primary" />
                <span className="text-[9px] sm:text-[11px] font-bold text-primary">+1000 economizando</span>
              </div>
              <div className="flex justify-center -space-x-1.5">
                {["A", "M", "J", "P", "R"].map((l) => (
                  <div key={l} className="w-4 h-4 rounded-full bg-muted border border-background flex items-center justify-center text-[7px] font-bold text-muted-foreground">{l}</div>
                ))}
              </div>
            </div>

            {/* Benefícios */}
            <div className="space-y-1">
              {[
                { icon: <TrendingDown className="w-3 h-3" />, text: "Até 70% OFF" },
                { icon: <Zap className="w-3 h-3" />, text: "Acabam em minutos" },
                { icon: <ShieldCheck className="w-3 h-3" />, text: "Links confiáveis" },
              ].map((b) => (
                <div key={b.text} className="flex items-center gap-1.5 bg-card border border-border rounded-md px-2 py-1">
                  <span className="text-primary shrink-0">{b.icon}</span>
                  <span className="text-[9px] sm:text-[11px] font-semibold text-foreground">{b.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 5. Urgência + 6. CTA + 7. Subtexto */}
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

        {/* 8. Confiança */}
        <footer className="flex flex-wrap justify-center gap-x-3 text-[7px] sm:text-[9px] text-muted-foreground font-medium shrink-0">
          <span className="flex items-center gap-0.5"><CheckCircle2 className="w-2.5 h-2.5 text-cta-green" /> 100% gratuito</span>
          <span className="flex items-center gap-0.5"><CheckCircle2 className="w-2.5 h-2.5 text-cta-green" /> Sem spam</span>
          <span className="flex items-center gap-0.5"><CheckCircle2 className="w-2.5 h-2.5 text-cta-green" /> Cancele quando quiser</span>
        </footer>
      </div>
    </div>
  );
};

export default Index;

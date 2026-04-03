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

      <div className="flex-1 flex flex-col items-center justify-between w-full max-w-lg mx-auto px-4 py-2 sm:py-4">
        {/* Header */}
        <header className="flex items-center gap-2 shrink-0">
          <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full overflow-hidden border-2 border-primary glow-gold">
            <img
              src={magoAvatar}
              alt="Mago das Promoções"
              className="w-full h-full object-cover"
              width={44}
              height={44}
              fetchPriority="high"
            />
          </div>
          <h1 className="text-xs sm:text-sm font-black gold-text tracking-tight">
            MAGO DAS PROMOÇÕES
          </h1>
          <span className="text-base animate-sparkle">✨</span>
        </header>

        {/* Headline */}
        <section className="text-center space-y-0.5 shrink-0">
          <h2 className="text-base sm:text-xl font-black text-foreground leading-tight">
            Você está <span className="text-primary">pagando caro</span> sem saber disso…
          </h2>
          <p className="text-[11px] sm:text-xs text-muted-foreground font-medium leading-snug">
            Mais de <strong className="text-primary">1.000 pessoas</strong> já economizam TODOS OS DIAS com ofertas até <strong className="text-primary">70% mais baratas</strong>.
          </p>
        </section>

        {/* Banner + Social Proof */}
        <div className="w-full flex gap-2 items-stretch shrink-0">
          {/* Banner image */}
          <div className="flex-1 min-w-0 rounded-xl overflow-hidden border border-border glow-gold max-h-[35vh]">
            <img
              src={magoBanner}
              alt="Ofertas reais do grupo — Tênis de R$457 por R$99"
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>

          {/* Social proof + Benefits */}
          <div className="flex flex-col justify-between gap-1 shrink-0 w-[42%]">
            <div className="bg-card border border-border rounded-lg px-2 py-1.5 text-center space-y-0.5">
              <div className="flex justify-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-2.5 h-2.5 fill-primary text-primary" />
                ))}
              </div>
              <div className="flex items-center justify-center gap-1">
                <Users className="w-2.5 h-2.5 text-primary" />
                <span className="text-[9px] sm:text-[11px] font-bold text-primary">+1000 economizando</span>
              </div>
              <div className="flex justify-center -space-x-1.5">
                {["A", "M", "J", "P", "R"].map((l) => (
                  <div
                    key={l}
                    className="w-4 h-4 rounded-full bg-muted border border-background flex items-center justify-center text-[7px] font-bold text-muted-foreground"
                  >
                    {l}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-0.5">
              {[
                { icon: <TrendingDown className="w-2.5 h-2.5" />, text: "Até 70% OFF" },
                { icon: <Zap className="w-2.5 h-2.5" />, text: "Acabam em minutos" },
                { icon: <ShieldCheck className="w-2.5 h-2.5" />, text: "Links confiáveis" },
              ].map((b) => (
                <div key={b.text} className="flex items-center gap-1.5 bg-card border border-border rounded-md px-2 py-1">
                  <span className="text-primary shrink-0">{b.icon}</span>
                  <span className="text-[9px] sm:text-[11px] font-semibold text-foreground">{b.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Urgency + CTA */}
        <div className="w-full space-y-1 shrink-0">
          <p className="text-center text-[10px] sm:text-xs text-primary font-bold animate-pulse">
            ⚡ Quem entra primeiro pega os melhores preços
          </p>
          <button
            onClick={handleCTA}
            className="shimmer block w-full text-center font-extrabold text-sm sm:text-lg py-3.5 sm:py-4 rounded-2xl transition-all duration-200 hover:scale-[1.03] hover:shadow-xl bg-cta-green text-cta-green-foreground animate-pulse-glow shadow-lg shadow-cta-green/40"
          >
            QUERO ENTRAR NO GRUPO AGORA 🔥
          </button>
          <p className="text-center text-[9px] sm:text-[11px] text-muted-foreground font-semibold">
            Clique e veja as ofertas ainda hoje 👆
          </p>
        </div>

        {/* Trust footer */}
        <footer className="flex flex-wrap justify-center gap-x-2.5 gap-y-0 text-[8px] sm:text-[10px] text-muted-foreground font-medium shrink-0">
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

import magoAvatar from "@/assets/mago-avatar.webp";
import magoBanner from "@/assets/mago-banner.webp";
import { Star, Users, ShieldCheck, TrendingDown, CheckCircle2, Lock, Clock, MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://chat.whatsapp.com/EkiyYscD3tOLe34nv8bu1s";

const Index = () => {
  const handleCTA = () => {
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "Lead");
    }
    window.open(WHATSAPP_LINK, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="bg-background flex flex-col overflow-hidden">
      <div className="flex items-center gap-2 lg:gap-4 shrink-0">

      <div className="flex-1 flex flex-col items-start lg:items-start w-full max-w-[1500px] px-3 lg:px-10 py-0 pb-16 lg:pb-20 overflow-hidden" style={{ gap: '0.6vh' }}>
        {/* 1. Logo + Nome + Escassez */}
        <header className="flex items-center gap-2 lg:gap-4 shrink-0">
          <div className="w-7 h-7 sm:w-9 sm:h-9 lg:w-12 lg:h-12 rounded-full overflow-hidden border-2 border-primary glow-gold">
            <img src={magoAvatar} alt="Mago das Promoções" className="w-full h-full object-cover" width={36} height={36} fetchPriority="high" />
          </div>
          <h1 className="text-[11px] sm:text-sm lg:text-xl font-black gold-text tracking-tight">MAGO DAS PROMOÇÕES</h1>
          <span className="flex items-center gap-1 text-[7px] sm:text-[9px] text-primary font-bold border border-primary/40 rounded-full px-2 py-0.5 bg-primary/10 animate-pulse">
            <Lock className="w-2.5 h-2.5" /> Grupo fechado • vagas limitadas
          </span>
        </header>

        {/* 2. Headline */}
        <section className="text-center lg:text-left shrink-0 w-full lg:max-w-[900px]">
          <h2 className="text-[15px] sm:text-xl lg:text-6xl font-black text-foreground leading-tight max-w-4xl lg:max-w-[900px]">
            Você está <span className="text-primary">pagando caro</span> sem saber disso…
          </h2>
          <p className="text-[9px] sm:text-xs lg:text-xl text-muted-foreground font-medium leading-snug mt-1">
            <strong className="text-primary">+1.000 pessoas</strong> já economizam TODOS OS DIAS com ofertas até <strong className="text-primary">70% OFF</strong>
          </p>
          <p className="text-[8px] sm:text-[10px] lg:text-lg text-foreground/50 font-medium mt-1">
            Todos os dias selecionamos as melhores promoções da internet
          </p>
        </section>

        {/* 3. Bloco Principal — imagem + lado direito */}
       <div className="w-full flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-8 mt-2 lg:mt-6">
        {/* Imagem dominante */}
        <div className="w-full lg:w-[75%]">
          <img
            src={magoBanner}
            alt="Ofertas reais do grupo — Tênis de R$457 por R$99"
            className="w-full h-auto object-cover relative z-10 rounded-2xl glow-gold-border"
            loading="eager"
          />
        </div>

        {/* Lado direito — prova social + benefícios */}
        <div className="w-full lg:w-[25%] flex flex-col gap-2 lg:gap-3 justify-center">
          {/* Prova social */}
          <div className="bg-card/60 border border-border rounded-lg px-3 py-2 lg:px-4 lg:py-3 text-center space-y-1">
            <div className="flex justify-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-primary text-primary"
                />
              ))}
            </div>

            <div className="flex items-center justify-center gap-1">
              <Users className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-primary" />
              <span className="text-[8px] sm:text-[11px] lg:text-lg font-bold text-primary">
                +1.000 economizando
              </span>
            </div>

            <div className="flex justify-center -space-x-1.5">
              {["A", "M", "J", "P", "R"].map((l) => (
                <div
                  key={l}
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-muted border border-background flex items-center justify-center text-[6px] sm:text-[7px] font-bold text-muted-foreground"
                >
                  {l}
                </div>
              ))}
            </div>
          </div>

          {/* Mini depoimentos */}
          <div className="space-y-1">
            {[
              { name: "Ana", msg: "Economizei R$200 essa semana! 😍" },
              { name: "Pedro", msg: "Melhor grupo que entrei 🔥" },
            ].map((d, i) => (
              <div
                key={i}
                className="flex items-start gap-1 bg-card/40 border border-border/50 rounded-md px-1.5 py-0.5 lg:px-3 lg:py-2"
              >
                <MessageCircle className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-primary shrink-0 mt-0.5" />
                <p className="text-[7px] sm:text-[9px] lg:text-sm text-foreground/80 leading-tight">
                  <strong className="text-foreground">{d.name}:</strong> {d.msg}
                </p>
              </div>
            ))}
          </div>

          {/* Benefícios */}
          <div className="space-y-1">
            {[
              { icon: <TrendingDown className="w-2.5 h-2.5 sm:w-3 sm:h-3" />, text: "Até 70% OFF" },
              { icon: <Clock className="w-2.5 h-2.5 sm:w-3 sm:h-3" />, text: "Somem em minutos" },
              { icon: <ShieldCheck className="w-2.5 h-2.5 sm:w-3 sm:h-3" />, text: "Links confiáveis" },
            ].map((b) => (
              <div
                key={b.text}
                className="flex items-center gap-1 bg-card/60 border border-border rounded-md px-1.5 py-0.5 lg:px-3 lg:py-2"
              >
                <span className="text-primary shrink-0">{b.icon}</span>
                <span className="text-[8px] sm:text-[11px] lg:text-sm font-semibold text-foreground">
                  {b.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

       
         {/* 4. Reforço de decisão + Urgência + CTA */}
      <div className="w-full shrink-0 mt-0">
        <p className="text-center text-[9px] sm:text-[11px] text-primary font-bold mb-1">
          ⚠️ Mais de 1.000 pessoas já estão economizando — não fique de fora
        </p>

        <div className="flex items-center justify-center gap-2 mb-0">
          <p className="text-[7px] sm:text-[9px] text-foreground/60 font-semibold">
            ⏳ Promoções somem em minutos
          </p>
          <span className="text-[7px] text-muted-foreground">•</span>
          <p className="text-[7px] sm:text-[9px] text-foreground/60 font-semibold">
            🔥 Quem entra primeiro pega os melhores preços
          </p>
        </div>

        <div className="fixed bottom-0 left-0 w-full px-3 pb-3 z-50 bg-background/80 backdrop-blur-sm lg:static lg:bg-transparent lg:backdrop-blur-0 lg:px-0 lg:pb-0 lg:mt-2">
          <button
            onClick={handleCTA}
            className="animate-button-pulse w-full lg:max-w-xl lg:mx-0 text-center font-extrabold text-sm sm:text-lg lg:text-xl py-3.5 lg:py-4 rounded-2xl bg-green-500 text-white shadow-lg shadow-green-500/30 transition-all duration-200 hover:scale-[1.05] active:scale-[0.97]"
          >
            🔥 ENTRAR NO GRUPO AGORA
          </button>
        </div>

        {/* 5. Microcopy persuasivo */}
        <footer className="flex flex-wrap justify-center gap-x-3 sm:gap-x-4 text-[7px] sm:text-[9px] text-muted-foreground font-medium">
          <span className="flex items-center gap-0.5">
            <CheckCircle2 className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-cta-green" />
            Acesso imediato
          </span>
          <span className="flex items-center gap-0.5">
            <CheckCircle2 className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-cta-green" />
            Promoções todos os dias
          </span>
          <span className="flex items-center gap-0.5">
            <CheckCircle2 className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-cta-green" />
            Saia quando quiser
          </span>
        </footer>
    </div>
  </div>
</div>
);
};

export default Index;

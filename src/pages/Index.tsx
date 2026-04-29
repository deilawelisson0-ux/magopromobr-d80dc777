import magoBg from "@/assets/mago-bg.webp";
import magoAvatar from "@/assets/mago-avatar.webp";
import { useEffect, useState } from "react";
import { Check, MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://chat.whatsapp.com/EkiyYscD3tOLe34nv8bu1s";

const Index = () => {
  const [peopleCount, setPeopleCount] = useState(4);

  useEffect(() => {
    const id = setInterval(() => {
      setPeopleCount(Math.floor(Math.random() * 5) + 2);
    }, 4500);
    return () => clearInterval(id);
  }, []);

  const handleCTA = () => {
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "Lead");
    }
    window.open(WHATSAPP_LINK, "_blank", "noopener,noreferrer");
  };

  const bullets = [
    "Descontos reais de até 70%",
    "Promoções todos os dias",
    "Links verificados",
    "Sem spam",
  ];

  return (
    <main className="relative min-h-[100dvh] lg:h-[100dvh] w-full overflow-hidden bg-background text-foreground">
      {/* BACKGROUND — fundo full-screen com overlay para legibilidade */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <img
          src={magoBg}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center lg:object-right"
          width={1712}
          height={960}
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        {/* Mobile: overlay escuro forte para leitura perfeita */}
        <div className="absolute inset-0 bg-background/80 lg:hidden" />
        {/* Desktop: gradiente — esquerda escura (texto), direita revelando a magia */}
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/20" />
        {/* Vinheta superior/inferior sutil */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-background/30" />
        {/* Glow dourado animado — bem leve */}
        <div className="absolute top-1/2 right-[10%] -translate-y-1/2 w-[50%] h-[70%] bg-primary/[0.10] blur-[140px] rounded-full animate-pulse-glow" />
      </div>

      {/* TOP BAR — logo centralizada */}
      <header className="absolute top-5 left-0 right-0 lg:top-7 z-30 flex items-center justify-center px-5">
        <div className="flex items-center gap-2.5 bg-background/40 backdrop-blur-md border border-primary/20 rounded-full pl-1.5 pr-4 py-1.5">
          <div className="w-8 h-8 rounded-full overflow-hidden ring-1 ring-primary/40">
            <img src={magoAvatar} alt="Mago das Promoções" className="w-full h-full object-cover" width={40} height={40} />
          </div>
          <span className="text-[13px] font-bold tracking-tight">
            Mago<span className="text-primary"> das Promoções</span>
          </span>
        </div>
      </header>

      {/* CONTEÚDO */}
      <div className="relative h-full w-full max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-14 pt-24 pb-8 lg:py-0 flex flex-col lg:justify-center">
        <div className="flex flex-col gap-5 lg:gap-6 max-w-[640px]">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 self-start text-[11px] font-semibold text-foreground border border-primary/40 rounded-full px-3 py-1.5 bg-background/50 backdrop-blur">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            +1.000 pessoas economizando agora
          </div>

          {/* Headline gigante estilo Achados */}
          <h1 className="font-black tracking-tight leading-[0.95] text-[40px] sm:text-6xl lg:text-[78px] xl:text-[88px] drop-shadow-[0_4px_20px_rgba(0,0,0,0.6)]">
            Você ainda paga <span className="gold-text">caro</span> enquanto outros pagam até <span className="gold-text">70% menos</span>
          </h1>

          {/* Subheadline */}
          <p className="text-[14px] sm:text-base lg:text-[17px] text-foreground/85 leading-relaxed max-w-[560px] font-medium">
            Eu monitoro as maiores lojas do Brasil — <strong className="text-primary">Nike, Amazon, Mercado Livre, Centauro</strong> e outras — em tempo real e te mando os melhores achados do dia direto no WhatsApp.
          </p>

          {/* Bullets */}
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2 max-w-[480px]">
            {bullets.map((text) => (
              <li key={text} className="flex items-center gap-2 text-[12.5px] sm:text-sm text-foreground/90 font-medium">
                <span className="flex items-center justify-center w-4 h-4 rounded-full bg-primary text-primary-foreground shrink-0">
                  <Check className="w-2.5 h-2.5" strokeWidth={4} />
                </span>
                {text}
              </li>
            ))}
          </ul>

          {/* CTA — DESTAQUE MÁXIMO (amarelo/dourado estilo referência) */}
          <div className="flex flex-col gap-2 mt-1">
            <button
              onClick={handleCTA}
              className="animate-button-pulse group w-full sm:max-w-[460px] inline-flex items-center justify-center gap-3 font-black text-base lg:text-[18px] py-[20px] px-6 rounded-2xl bg-primary text-primary-foreground shadow-[0_15px_40px_-10px_hsl(var(--primary)/0.7)] hover:shadow-[0_20px_50px_-10px_hsl(var(--primary)/0.95)] hover:scale-[1.02] transition-all border-2 border-primary/60 ring-2 ring-primary/20"
            >
              <MessageCircle className="w-5 h-5" strokeWidth={2.5} fill="currentColor" />
              QUERO ENTRAR NO GRUPO AGORA
            </button>
            <p className="text-[11px] text-foreground/70 font-medium sm:max-w-[460px] text-center">
              Gratuito • Sem spam • Saia quando quiser
            </p>
          </div>

          {/* Social proof + urgência */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-1">
            <div className="flex items-center gap-2.5">
              <div className="flex -space-x-2">
                {["A", "M", "J", "P"].map((l, i) => (
                  <div
                    key={l}
                    className="w-7 h-7 rounded-full border-2 border-background flex items-center justify-center text-[10px] font-bold text-white"
                    style={{ background: `hsl(${30 + i * 25} 65% ${48 + i * 4}%)` }}
                  >
                    {l}
                  </div>
                ))}
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-[12px] font-bold">+1.000 membros</span>
                <span className="text-[10px] text-foreground/60">★★★★★ avaliação</span>
              </div>
            </div>
            <div className="hidden sm:block w-px h-9 bg-border" />
            <p className="text-[11px] text-foreground/75 font-medium flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--cta-green))] animate-pulse" />
              {peopleCount} pessoas entraram agora • vagas limitadas
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Index;

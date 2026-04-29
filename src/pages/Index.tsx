import magoBanner from "@/assets/mago-banner.webp";
import magoAvatar from "@/assets/mago-avatar.webp";
import { useEffect, useState } from "react";
import { Check } from "lucide-react";

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
      {/* Ambient gold glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-0 w-[60%] h-[80%] bg-primary/[0.10] blur-[140px] rounded-full" />
        <div className="absolute -bottom-40 -left-32 w-[420px] h-[420px] bg-primary/[0.06] blur-[120px] rounded-full" />
      </div>

      {/* TOP BAR */}
      <header className="absolute top-5 left-5 right-5 lg:top-7 lg:left-12 lg:right-12 z-30 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-full overflow-hidden ring-1 ring-primary/40">
            <img src={magoAvatar} alt="Mago das Promoções" className="w-full h-full object-cover" width={48} height={48} />
          </div>
          <span className="text-[13px] font-bold tracking-tight">
            Mago<span className="text-primary"> das Promoções</span>
          </span>
        </div>
        <div className="flex items-center gap-2 text-[11px] font-medium text-muted-foreground">
          <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--cta-green))] animate-pulse" />
          Online agora
        </div>
      </header>

      <div className="mx-auto h-full w-full max-w-[1400px] px-5 sm:px-8 lg:px-14 pt-20 pb-6 lg:py-0 grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-6 lg:gap-10 items-center">
        {/* LEFT — COPY */}
        <div className="flex flex-col gap-5 lg:gap-6 order-2 lg:order-1 max-w-[640px]">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 self-start text-[11px] font-semibold text-foreground/85 border border-primary/30 rounded-full px-3 py-1.5 bg-primary/5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            +1.000 pessoas economizando agora
          </div>

          {/* Headline gigante estilo Achados */}
          <h1 className="font-black tracking-tight leading-[0.95] text-[36px] sm:text-6xl lg:text-[78px] xl:text-[88px]">
            Você ainda paga <span className="gold-text">caro</span> enquanto outros pagam até <span className="gold-text">70% menos</span>
          </h1>

          {/* Subheadline */}
          <p className="text-[14px] sm:text-base lg:text-[17px] text-muted-foreground leading-relaxed max-w-[560px]">
            Eu monitoro as maiores lojas do Brasil — <strong className="text-foreground">Nike, Amazon, Mercado Livre, Centauro</strong> e outras — em tempo real e te mando os melhores achados do dia direto no WhatsApp.
          </p>

          {/* Bullets */}
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2 max-w-[480px]">
            {bullets.map((text) => (
              <li key={text} className="flex items-center gap-2 text-[12.5px] sm:text-sm text-foreground/85">
                <span className="flex items-center justify-center w-4 h-4 rounded-full bg-primary/15 text-primary shrink-0">
                  <Check className="w-2.5 h-2.5" strokeWidth={4} />
                </span>
                {text}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="flex flex-col gap-2">
            <button
              onClick={handleCTA}
              className="animate-button-pulse w-full sm:max-w-[440px] text-center font-extrabold text-base lg:text-[17px] py-[18px] rounded-2xl bg-[hsl(var(--cta-green))] text-[hsl(var(--cta-green-foreground))] shadow-[0_10px_30px_-10px_hsl(var(--cta-green)/0.7)] hover:scale-[1.02] hover:shadow-[0_14px_40px_-10px_hsl(var(--cta-green)/0.9)] transition-all"
            >
              🔥 QUERO ENTRAR NO GRUPO AGORA
            </button>
            <p className="text-[11px] text-muted-foreground font-medium sm:max-w-[440px] text-center">
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
                <span className="text-[10px] text-muted-foreground">★★★★★ avaliação</span>
              </div>
            </div>
            <div className="hidden sm:block w-px h-9 bg-border" />
            <p className="text-[11px] text-foreground/70 font-medium flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--cta-green))] animate-pulse" />
              {peopleCount} pessoas entraram agora • vagas limitadas
            </p>
          </div>
        </div>

        {/* RIGHT — visual dominante */}
        <div className="relative order-1 lg:order-2 flex items-center justify-center h-[240px] sm:h-[300px] lg:h-full">
          {/* glow dourado de fundo dominante */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[85%] h-[75%] rounded-full bg-primary/15 blur-[100px]" />
          </div>

          <div className="relative w-full max-w-[360px] sm:max-w-[420px] lg:max-w-[560px]">
            <img
              src={magoBanner}
              alt="Mockup do grupo Mago das Promoções com ofertas reais"
              className="relative z-10 w-full h-auto object-contain drop-shadow-[0_30px_50px_rgba(0,0,0,0.55)]"
              width={800}
              height={800}
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />

            {/* Selos flutuantes */}
            <div className="absolute top-2 -left-1 lg:top-6 lg:-left-4 z-20 bg-[hsl(var(--cta-green))] text-white text-[11px] lg:text-sm font-black px-3 py-1.5 rounded-full shadow-lg animate-float">
              -70% OFF
            </div>
            <div className="absolute bottom-3 -right-1 lg:bottom-10 lg:-right-2 z-20 bg-card/90 backdrop-blur border border-primary/30 text-foreground text-[10px] lg:text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--cta-green))] animate-pulse" />
              Promoção real
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Index;

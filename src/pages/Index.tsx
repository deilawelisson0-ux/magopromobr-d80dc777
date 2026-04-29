import magoBanner from "@/assets/mago-banner.webp";
import magoAvatar from "@/assets/mago-avatar.webp";
import { useEffect, useState } from "react";
import { Check, Sparkles } from "lucide-react";

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
    "Sem spam, sem enrolação",
  ];

  return (
    <main className="relative min-h-[100dvh] lg:h-[100dvh] w-full overflow-hidden bg-background text-foreground">
      {/* Subtle ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-32 w-[420px] h-[420px] rounded-full bg-primary/[0.07] blur-[120px]" />
        <div className="absolute -bottom-40 -right-32 w-[480px] h-[480px] rounded-full bg-primary/[0.05] blur-[140px]" />
      </div>

      <div className="mx-auto h-full w-full max-w-[1240px] px-5 sm:px-8 lg:px-12 py-6 lg:py-0 flex flex-col lg:justify-center">
        {/* TOP BAR */}
        <header className="flex items-center justify-between mb-6 lg:mb-0 lg:absolute lg:top-7 lg:left-12 lg:right-12">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full overflow-hidden ring-1 ring-primary/30">
              <img src={magoAvatar} alt="Mago das Promoções" className="w-full h-full object-cover" width={48} height={48} />
            </div>
            <span className="text-[13px] font-bold tracking-tight text-foreground">
              Mago<span className="text-primary"> das Promoções</span>
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-[11px] font-medium text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--cta-green))] animate-pulse" />
            Online agora
          </div>
        </header>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-center flex-1 lg:flex-none">
          {/* LEFT */}
          <div className="flex flex-col gap-5 lg:gap-6 order-1 max-w-[560px]">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 self-start text-[11px] font-semibold text-foreground/80 border border-border rounded-full px-3 py-1.5 bg-card/40 backdrop-blur">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              +1.000 pessoas economizando agora
            </div>

            {/* Headline */}
            <h1 className="text-[30px] sm:text-5xl lg:text-[58px] font-black leading-[1.02] tracking-tight">
              Você ainda paga caro enquanto outros pagam até{" "}
              <span className="gold-text">70% menos</span>
            </h1>

            {/* Subheadline */}
            <p className="text-[15px] sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
              Eu monitoro as maiores lojas do Brasil e envio apenas <strong className="text-foreground">promoções reais</strong> todos os dias, direto no seu WhatsApp.
            </p>

            {/* Bullets */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-2.5">
              {bullets.map((text) => (
                <li key={text} className="flex items-center gap-2.5 text-[13px] sm:text-sm text-foreground/85">
                  <span className="flex items-center justify-center w-4 h-4 rounded-full bg-primary/15 text-primary shrink-0">
                    <Check className="w-2.5 h-2.5" strokeWidth={4} />
                  </span>
                  {text}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="flex flex-col gap-2 mt-1">
              <button
                onClick={handleCTA}
                className="animate-button-pulse w-full sm:max-w-[420px] text-center font-extrabold text-base lg:text-[17px] py-[18px] rounded-2xl bg-[hsl(var(--cta-green))] text-[hsl(var(--cta-green-foreground))] shadow-[0_10px_30px_-10px_hsl(var(--cta-green)/0.7)] hover:scale-[1.02] hover:shadow-[0_14px_40px_-10px_hsl(var(--cta-green)/0.9)] transition-all"
              >
                🔥 QUERO ENTRAR NO GRUPO AGORA
              </button>
              <p className="text-[11px] text-muted-foreground font-medium sm:max-w-[420px] text-center">
                Gratuito • Sem spam • Saia quando quiser
              </p>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-4 pt-1">
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
              <div className="w-px h-9 bg-border" />
              <div className="flex flex-col gap-0.5 text-[11px] text-muted-foreground leading-tight">
                <p>"Economizei R$200 essa semana." — <span className="text-foreground/80">Ana</span></p>
                <p>"Melhor grupo que já entrei." — <span className="text-foreground/80">Pedro</span></p>
              </div>
            </div>

            {/* Urgency note */}
            <p className="text-[11px] text-foreground/60 font-medium flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--cta-green))] animate-pulse" />
              {peopleCount} pessoas entraram nos últimos minutos • vagas limitadas
            </p>
          </div>

          {/* RIGHT — visual */}
          <div className="relative order-2 flex items-center justify-center min-h-[280px] lg:min-h-0">
            {/* soft glow */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[70%] h-[70%] rounded-full bg-primary/10 blur-[90px]" />
            </div>

            <Sparkles className="absolute top-6 right-8 w-4 h-4 text-primary/50 animate-pulse" />
            <Sparkles className="absolute bottom-12 left-6 w-3 h-3 text-primary/40 animate-pulse" style={{ animationDelay: "0.7s" }} />

            <div className="relative w-full max-w-[380px] lg:max-w-[440px]">
              <img
                src={magoBanner}
                alt="Mockup de WhatsApp com promoções reais do Mago das Promoções"
                className="relative z-10 w-full h-auto object-contain rounded-[28px] drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
                width={800}
                height={800}
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />

              {/* Floating badges */}
              <div className="absolute -top-2 -left-2 lg:-top-3 lg:-left-3 z-20 bg-[hsl(var(--cta-green))] text-white text-[11px] lg:text-xs font-black px-3 py-1.5 rounded-full shadow-lg animate-float">
                -70% OFF
              </div>
              <div className="absolute -bottom-2 -right-2 lg:-bottom-3 lg:-right-3 z-20 bg-card/90 backdrop-blur border border-border text-foreground text-[10px] lg:text-[11px] font-semibold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--cta-green))] animate-pulse" />
                Promoção real
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Index;

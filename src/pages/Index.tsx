import magoBanner from "@/assets/mago-banner.webp";
import magoAvatar from "@/assets/mago-avatar.webp";
import { useEffect } from "react";
import { Check, Sparkles, ShieldCheck, Zap, Tag } from "lucide-react";

const WHATSAPP_LINK = "https://chat.whatsapp.com/EkiyYscD3tOLe34nv8bu1s";

const Index = () => {
  const handleCTA = () => {
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "Lead");
    }
    window.open(WHATSAPP_LINK, "_blank", "noopener,noreferrer");
  };

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  const bullets = [
    { icon: Tag, text: "Descontos reais de até 70%" },
    { icon: Zap, text: "Promoções novas todos os dias" },
    { icon: ShieldCheck, text: "Links verificados" },
    { icon: Check, text: "Sem spam, sem enrolação" },
  ];

  const testimonials = [
    { name: "Ana", msg: "Economizei R$200 essa semana 💃" },
    { name: "Pedro", msg: "Melhor grupo que já entrei 🔥" },
    { name: "Juliana", msg: "Todo dia tem oferta absurda 🚀" },
  ];

  return (
    <main className="relative min-h-[100dvh] lg:h-[100dvh] w-full overflow-hidden bg-background text-foreground">
      {/* Background ambient glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-40 w-[480px] h-[480px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute -bottom-40 -right-40 w-[520px] h-[520px] rounded-full bg-accent/10 blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(var(--background))_85%)]" />
      </div>

      <div className="mx-auto h-full w-full max-w-[1280px] px-5 sm:px-8 lg:px-12 py-5 lg:py-0 flex flex-col lg:justify-center">
        {/* TOP BAR */}
        <header className="flex items-center justify-between mb-5 lg:mb-8 lg:absolute lg:top-6 lg:left-12 lg:right-12">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full overflow-hidden border border-primary/40 ring-2 ring-primary/20">
              <img src={magoAvatar} alt="Mago das Promoções" className="w-full h-full object-cover" width={48} height={48} />
            </div>
            <span className="text-sm font-extrabold tracking-tight gold-text">MAGO DAS PROMOÇÕES</span>
          </div>
          <div className="hidden sm:flex items-center gap-1.5 text-[10px] font-semibold text-primary/90 border border-primary/30 rounded-full px-3 py-1 bg-primary/5">
            <Sparkles className="w-3 h-3" />
            Grupo VIP • vagas limitadas
          </div>
        </header>

        {/* GRID 2 COLS */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-8 lg:gap-14 items-center flex-1 lg:flex-none">
          {/* LEFT — COPY */}
          <div className="flex flex-col gap-4 lg:gap-5 order-1">
            <div className="inline-flex items-center gap-1.5 self-start text-[10px] sm:text-[11px] font-semibold text-primary border border-primary/30 rounded-full px-3 py-1 bg-primary/5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              +1.000 pessoas economizando agora
            </div>

            <h1 className="text-[26px] sm:text-4xl lg:text-[52px] font-black leading-[1.05] tracking-tight">
              Você ainda está pagando caro enquanto outros pagam até{" "}
              <span className="gold-text">70% mais barato</span>
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-snug max-w-[520px]">
              Entre no grupo onde mais de <strong className="text-foreground">1.000 pessoas</strong> recebem promoções <strong className="text-foreground">reais</strong> todos os dias.
            </p>

            {/* Bullets */}
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 max-w-[520px]">
              {bullets.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-2 text-[12px] sm:text-sm text-foreground/90">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-primary/15 text-primary shrink-0">
                    <Icon className="w-3 h-3" strokeWidth={3} />
                  </span>
                  {text}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="flex flex-col gap-2 mt-1 max-w-[520px]">
              <button
                onClick={handleCTA}
                className="animate-button-pulse w-full text-center font-extrabold text-sm sm:text-base lg:text-lg py-4 lg:py-[18px] rounded-2xl bg-[hsl(var(--cta-green))] text-[hsl(var(--cta-green-foreground))] shadow-[0_10px_30px_-10px_hsl(var(--cta-green)/0.6)] hover:scale-[1.02] hover:shadow-[0_14px_40px_-10px_hsl(var(--cta-green)/0.8)] transition-all"
              >
                🔥 QUERO ENTRAR NO GRUPO AGORA
              </button>
              <p className="text-[11px] text-muted-foreground text-center font-medium">
                100% gratuito • Sem spam • Saia quando quiser
              </p>
            </div>

            {/* Social proof / testimonials */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 max-w-[520px] pt-1">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {["A", "M", "J", "P"].map((l, i) => (
                    <div key={l} className="w-7 h-7 rounded-full border-2 border-background flex items-center justify-center text-[10px] font-bold"
                      style={{ background: `hsl(${40 + i * 20} 70% ${45 + i * 5}%)`, color: "white" }}>
                      {l}
                    </div>
                  ))}
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="text-[11px] font-bold text-foreground">+1.000 membros</span>
                  <span className="text-[10px] text-muted-foreground">avaliação ★★★★★</span>
                </div>
              </div>
              <div className="hidden sm:block w-px h-8 bg-border/60" />
              <div className="flex flex-col gap-0.5">
                {testimonials.slice(0, 2).map((t) => (
                  <p key={t.name} className="text-[11px] text-muted-foreground leading-tight">
                    <strong className="text-foreground/90">{t.name}:</strong> {t.msg}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — VISUAL */}
          <div className="relative order-2 flex items-center justify-center">
            {/* Soft gold glow behind */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[80%] h-[80%] rounded-full bg-primary/15 blur-[80px]" />
            </div>

            {/* Sparkles */}
            <Sparkles className="absolute top-4 right-6 w-5 h-5 text-primary/70 animate-pulse" />
            <Sparkles className="absolute bottom-8 left-4 w-4 h-4 text-primary/50 animate-pulse" style={{ animationDelay: "0.6s" }} />
            <Sparkles className="absolute top-1/2 right-2 w-3 h-3 text-primary/40 animate-pulse" style={{ animationDelay: "1.2s" }} />

            <div className="relative w-full max-w-[420px] lg:max-w-[460px]">
              <img
                src={magoBanner}
                alt="Grupo de WhatsApp do Mago das Promoções com ofertas reais"
                className="relative z-10 w-full h-auto object-contain rounded-[28px]"
                width={800}
                height={800}
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />

              {/* Floating discount badge */}
              <div className="absolute -top-2 -left-2 lg:-top-3 lg:-left-3 z-20 bg-[hsl(var(--cta-green))] text-white text-[11px] lg:text-xs font-black px-3 py-1.5 rounded-full shadow-lg rotate-[-8deg] animate-float">
                -70% OFF
              </div>
              <div className="absolute -bottom-2 -right-2 lg:-bottom-3 lg:-right-3 z-20 bg-card/90 backdrop-blur border border-primary/30 text-foreground text-[10px] lg:text-[11px] font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--cta-green))] animate-pulse" />
                Online agora
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Index;

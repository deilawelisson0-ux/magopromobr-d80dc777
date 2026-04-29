import magoBg from "../assets/mago-bg.webp";
import magoAvatar from "../assets/mago-avatar.webp";
import { useEffect, useState } from "react";
import { Check, MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://chat.whatsapp.com/EkiyYscD3t0Le34nv8Bu1s";

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
    <main className="relative min-h-[100dvh] w-full overflow-hidden bg-transparent text-foreground">

      {/* BACKGROUND */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        <img
          src={magoBg}
          alt=""
          className="w-full h-full object-cover"
        />

        {/* overlays */}
        <div className="absolute inset-0 bg-black/20 lg:hidden"></div>
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>

        {/* glow */}
        <div className="absolute top-1/2 right-[-10%] -translate-y-1/2 w-[50%] h-[70%] bg-primary/10 blur-[140px] rounded-full animate-pulse"></div>
      </div>

      {/* HEADER */}
      <header className="absolute top-5 left-0 right-0 z-30 flex justify-center px-5">
        <div className="flex items-center gap-2.5 bg-background/40 backdrop-blur-md border border-primary/20 rounded-full px-4 py-1.5">
          <div className="w-8 h-8 rounded-full overflow-hidden ring-1 ring-primary/40">
            <img src={magoAvatar} alt="Mago das Promoções" className="w-full h-full object-cover" />
          </div>
          <span className="text-[13px] font-bold tracking-tight">
            Mago<span className="text-primary"> das Promoções</span>
          </span>
        </div>
      </header>

      {/* CONTEÚDO */}
      <div className="relative z-20 w-full max-w-[1200px] mx-auto px-5 pt-24 pb-10 flex flex-col lg:justify-center min-h-screen">

        <div className="flex flex-col gap-6 max-w-[640px]">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 text-[11px] font-semibold border border-primary/40 rounded-full px-3 py-1.5 bg-background/50 backdrop-blur">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
            +1.000 pessoas economizando agora
          </div>

          {/* Headline */}
          <h1 className="font-black leading-[0.95] text-[40px] sm:text-6xl lg:text-[72px] drop-shadow">
            Você ainda paga <span className="text-primary">caro</span>
            <br />
            enquanto outros pagam até <span className="text-primary">70% menos</span>
          </h1>

          {/* Subheadline */}
          <p className="text-sm sm:text-base text-foreground/80 max-w-[560px]">
            Eu monitoro as maiores lojas do Brasil (Nike, Amazon, Mercado Livre...)
            e envio os melhores achados direto no WhatsApp.
          </p>

          {/* Bullets */}
          <ul className="grid grid-cols-2 gap-3 max-w-[480px]">
            {bullets.map((text) => (
              <li key={text} className="flex items-center gap-2 text-sm">
                <span className="w-4 h-4 flex items-center justify-center rounded-full bg-primary text-black">
                  <Check className="w-3 h-3" />
                </span>
                {text}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="flex flex-col gap-2 mt-2">
            <button
              onClick={handleCTA}
              className="w-full sm:max-w-[420px] flex items-center justify-center gap-3 font-bold text-base lg:text-lg py-4 px-6 rounded-xl bg-primary text-black hover:scale-[1.02] transition"
            >
              <MessageCircle className="w-5 h-5" />
              QUERO ENTRAR NO GRUPO AGORA
            </button>

            <p className="text-xs text-foreground/70">
              Gratuito • Sem spam • Saia quando quiser
            </p>
          </div>

          {/* Social proof */}
          <div className="flex items-center gap-4 mt-4">
            <div className="flex -space-x-2">
              {["A", "M", "J", "P"].map((l, i) => (
                <div
                  key={i}
                  className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white border border-background"
                  style={{ background: `hsl(${i * 60},70%,50%)` }}
                >
                  {l}
                </div>
              ))}
            </div>

            <div className="text-xs">
              <div className="font-bold">+1.000 membros</div>
              <div className="text-foreground/60">★★★★★ avaliação</div>
            </div>
          </div>

          {/* Urgência */}
          <p className="text-xs text-foreground/70 mt-2">
            {peopleCount} pessoas entrando agora • vagas limitadas
          </p>

        </div>
      </div>
    </main>
  );
};

export default Index;

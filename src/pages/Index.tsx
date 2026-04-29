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
    <main className="relative h-screen w-full overflow-hidden text-foreground">

  {/* BACKGROUND */}
  <div className="absolute inset-0 -z-10">
    <img
      src={magoBg}
      alt=""
      className="
        w-full h-full
        object-cover
        object-center
        sm:object-center
        lg:object-right
      "
    />

    {/* overlay forte mobile */}
    <div className="absolute inset-0 bg-black/50 lg:bg-black/30"></div>

    {/* glow leve */}
    <div className="hidden lg:block absolute top-1/2 right-[-10%] -translate-y-1/2 w-[50%] h-[70%] bg-primary/10 blur-[140px] rounded-full"></div>
  </div>

  {/* CONTEÚDO */}
  <div className="
    relative z-10
    flex flex-col justify-center
    h-full
    px-5
    max-w-[640px]
    mx-auto
    gap-5
  ">

    {/* LOGO */}
    <div className="flex justify-center">
      <div className="flex items-center gap-2 bg-black/40 backdrop-blur border border-primary/20 rounded-full px-4 py-1.5">
        <img src={magoAvatar} className="w-7 h-7 rounded-full" />
        <span className="text-[12px] font-bold">
          Mago<span className="text-primary"> das Promoções</span>
        </span>
      </div>
    </div>

    {/* HEADLINE */}
    <h1 className="text-[28px] leading-tight font-black text-center sm:text-[36px]">
      Você ainda paga <span className="text-primary">caro</span><br />
      enquanto outros pagam até <span className="text-primary">70% menos</span>
    </h1>

    {/* SUB */}
    <p className="text-[13px] text-center text-foreground/80">
      Eu monitoro as maiores lojas e envio os melhores achados direto no WhatsApp.
    </p>

    {/* BULLETS */}
    <div className="grid grid-cols-2 gap-2 text-[12px]">
      {bullets.map((text) => (
        <div key={text} className="flex items-center gap-2">
          <Check className="w-4 h-4 text-primary" />
          {text}
        </div>
      ))}
    </div>

    {/* CTA */}
    <button
      onClick={handleCTA}
      className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-primary text-black font-bold text-[14px]"
    >
      <MessageCircle className="w-5 h-5" />
      QUERO ENTRAR AGORA
    </button>

    {/* FOOT */}
    <p className="text-[11px] text-center text-foreground/60">
      Gratuito • Sem spam • Saia quando quiser
    </p>

  </div>
</main>
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

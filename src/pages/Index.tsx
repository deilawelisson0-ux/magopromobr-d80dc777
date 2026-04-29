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
    }, 4000);

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
    <main className="relative h-screen w-full overflow-hidden text-white">

      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <img
          src={magoBg}
          alt=""
          className="w-full h-full object-cover object-[center_top] lg:object-right"
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-black/60 lg:bg-black/40"></div>
      </div>

      {/* CONTEÚDO */}
      <div className="relative z-10 h-full flex flex-col justify-center px-5 max-w-[520px] mx-auto gap-5">

        {/* LOGO */}
        <div className="flex justify-center">
          <div className="flex items-center gap-2 bg-black/40 backdrop-blur border border-yellow-500/20 rounded-full px-4 py-1.5">
            <img
              src={magoAvatar}
              alt="Mago"
              className="w-7 h-7 rounded-full"
            />
            <span className="text-[12px] font-bold">
              Mago<span className="text-yellow-400"> das Promoções</span>
            </span>
          </div>
        </div>

        {/* PROVA SOCIAL */}
        <div className="flex justify-center">
          <div className="text-[11px] border border-yellow-500/20 rounded-full px-3 py-1 bg-black/40 backdrop-blur">
            +1.000 pessoas economizando agora
          </div>
        </div>

        {/* HEADLINE */}
        <h1 className="text-[28px] leading-tight font-black text-center sm:text-[36px]">
          Você ainda paga <span className="text-yellow-400">caro</span>
          <br />
          enquanto outros pagam até{" "}
          <span className="text-yellow-400">70% menos</span>
        </h1>

        {/* SUB */}
        <p className="text-[13px] text-center text-white/80">
          Eu monitoro as maiores lojas do Brasil e envio os melhores achados direto no WhatsApp.
        </p>

        {/* BULLETS */}
        <div className="grid grid-cols-2 gap-2 text-[12px]">
          {bullets.map((text) => (
            <div key={text} className="flex items-center gap-2">
              <Check className="w-4 h-4 text-yellow-400" />
              {text}
            </div>
          ))}
        </div>

        {/* CTA */}
        <button
          onClick={handleCTA}
          className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-yellow-400 text-black font-bold text-[14px]"
        >
          <MessageCircle className="w-5 h-5" />
          QUERO ENTRAR NO GRUPO
        </button>

        {/* FOOT */}
        <p className="text-[11px] text-center text-white/60">
          Gratuito • Sem spam • Saia quando quiser
        </p>

        {/* URGÊNCIA */}
        <p className="text-[11px] text-center text-white/50">
          {peopleCount} pessoas entrando agora
        </p>

      </div>
    </main>
  );
};

export default Index;

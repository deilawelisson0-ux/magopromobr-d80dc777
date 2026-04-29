import magoBg from "../assets/mago-bg.webp";
import mobileBg from "../assets/mobile.png";
import magoAvatar from "../assets/mago-avatar.webp";

import { useEffect, useState } from "react";
import { Check, MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://chat.whatsapp.com/EkiYscD3t0eL34nv88u15";

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

    window.open(WHATSAPP_LINK, "_blank");
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
      
      {/* DESKTOP */}
      <img
        src={magoBg}
        className="hidden sm:block w-full h-full object-cover"
      />

      {/* MOBILE */}
      <img
        src={mobileBg}
        className="block sm:hidden w-full h-full object-cover"
      />

      {/* overlay leve (bem mais claro agora) */}
      <div className="absolute inset-0 bg-black/20"></div>
    </div>

    {/* LOGO (MAIS EM CIMA) */}
    <div className="absolute top-10 left-1/2 -translate-x-1/2 z-10">
      <div className="flex items-center gap-2 bg-black/40 backdrop-blur border border-yellow-500/20 rounded-full px-4 py-2">
        <img src={magoAvatar} className="w-8 h-8 rounded-full" />
        <span className="text-[14px] font-bold">
          Mago<span className="text-yellow-400"> das Promoções</span>
        </span>
      </div>
    </div>

    {/* BOTÃO FIXO EMBAIXO */}
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[90%] max-w-[400px] z-10">
      <button
        onClick={handleCTA}
        className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl bg-yellow-400 text-black font-bold text-[16px] shadow-xl"
      >
        <MessageCircle className="w-5 h-5" />
        ENTRAR NO GRUPO
      </button>
    </div>

  </main>
);

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

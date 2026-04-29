import magoBg from "../assets/mago-bg.webp"; // desktop
import mobileBg from "../assets/mobile.png"; // mobile (SUA ARTE COMPLETA)
import magoAvatar from "../assets/mago-avatar.webp";
import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://chat.whatsapp.com/EkiyYscD3tOLe34nv8bu1s";

const Index = () => {
  const [peopleCount, setPeopleCount] = useState(4);

  useEffect(() => {
    const id = setInterval(() => {
      setPeopleCount(Math.floor(Math.random() * 5) + 2);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  const handleCTA = () => {
  const link = "https://chat.whatsapp.com/EkiyYscD3tOLe34nv8bu1s";
  window.open(link, "_blank", "noopener,noreferrer");
};
  return (
    <main className="relative h-screen w-full overflow-hidden text-white">

      {/* 🔥 DESKTOP */}
      <div className="absolute inset-0 z-0 hidden md:block">
        <img
          src={magoBg}
          className="w-full h-full object-cover object-center brightness-110 contrast-110"
        />
      </div>

      {/* 🔥 MOBILE (AQUI ESTÁ O SEGREDO) */}
      <div className="absolute inset-0 z-0 md:hidden">
        <img
          src={mobileBg}
          className="
            w-full h-full
            object-cover
            object-[center_top]
            brightness-110 contrast-110
          "
        />
      </div>

      {/* 🔥 OVERLAY MAIS LEVE */}
      <div className="absolute inset-0 bg-black/25"></div>

      {/* 🔥 CONTEÚDO */}
      <div className="relative z-10 flex flex-col items-center justify-between h-full px-4 py-6">

        {/* 🔥 LOGO */}
        <div className="mt-0 -translate-y-6">
          <div className="flex items-center gap-2 bg-black/70 px-4 py-2 rounded-full border border-yellow-400/30 backdrop-blur-md">
            <img src={magoAvatar} className="w-8 h-8 rounded-full" />
            <span className="font-bold text-sm">
              Mago <span className="text-yellow-400">das Promoções</span>
            </span>
          </div>
        </div>

        {/* 🔥 BOTÃO */}
        <div className="w-full max-w-[420px] mb-4">
          <button
            onClick={handleCTA}
            className="
              w-full flex items-center justify-center gap-3
              py-5 rounded-2xl
              bg-yellow-400 text-black font-bold text-lg
              shadow-2xl
              hover:scale-105 active:scale-95 transition
            "
          >
            <MessageCircle className="w-6 h-6" />
            ENTRAR NO GRUPO
          </button>

          <p className="text-center text-white/80 text-sm mt-3">
            Gratuito • Sem spam • Saia quando quiser
          </p>

          <p className="text-center text-white/60 text-xs mt-1">
            {peopleCount} pessoas entrando agora
          </p>
        </div>
      </div>
    </main>
  );
};

export default Index;

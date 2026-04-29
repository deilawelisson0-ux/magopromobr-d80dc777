import magoBg from "../assets/mago-bg.webp";
import mobileBg from "../assets/mobile.png";
import magoAvatar from "../assets/mago-avatar.webp";

import { MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://chat.whatsapp.com/EkiYscD3t0eL34nv88u15";

const Index = () => {

  const handleCTA = () => {
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "Lead");
    }

    window.open(WHATSAPP_LINK, "_blank");
  };

  return (
  <main className="relative h-screen w-full overflow-hidden text-white">

    {/* BACKGROUND */}
    <div className="absolute inset-0 z-0">
      <picture>
        <source media="(max-width: 768px)" srcSet={mobileBg} />
        <img
          src={magoBg}
          alt="background"
          className="w-full h-full object-cover object-center scale-110"
        />
      </picture>

      {/* overlay mais escuro pra dar destaque */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* brilho central (efeito premium) */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[300px] h-[300px] bg-yellow-500/20 blur-[120px] rounded-full"></div>
      </div>
    </div>

    {/* CONTEÚDO */}
    <div className="relative z-10 h-full flex flex-col justify-between px-6 py-8 max-w-[500px] mx-auto">

      {/* TOPO - LOGO */}
      <div className="flex justify-center mt-4">
        <div className="flex items-center gap-3 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-yellow-500/30 shadow-lg">
          <img src={magoAvatar} className="w-8 h-8 rounded-full" />
          <span className="font-bold text-sm">
            Mago <span className="text-yellow-400">das Promoções</span>
          </span>
        </div>
      </div>

      {/* ESPAÇO CENTRAL (vazio proposital pra imagem aparecer mais) */}
      <div></div>

      {/* BOTÃO */}
      <div className="mb-6">
        <button
          onClick={handleCTA}
          className="w-full flex items-center justify-center gap-3 py-5 rounded-2xl 
          bg-yellow-400 text-black font-extrabold text-[16px]
          shadow-[0_0_30px_rgba(255,215,0,0.5)]
          hover:scale-105 transition-all duration-300"
        >
          <MessageCircle className="w-6 h-6" />
          ENTRAR NO GRUPO VIP
        </button>

        {/* texto de segurança */}
        <p className="text-center text-[11px] text-white/70 mt-3">
          100% gratuito • Sem spam • Saia quando quiser
        </p>
      </div>

    </div>
  </main>
);

export default Index;

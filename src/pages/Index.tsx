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
      <div className="absolute inset-0 -z-10">

        {/* DESKTOP */}
        <img
          src={magoBg}
          alt=""
          className="hidden sm:block w-full h-full object-cover"
        />

        {/* MOBILE */}
        <img
          src={mobileBg}
          alt=""
          className="block sm:hidden w-full h-full object-cover"
        />

        {/* overlay leve (imagem mais destacada) */}
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* LOGO */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-10">
        <div className="flex items-center gap-2 bg-black/40 backdrop-blur border border-yellow-500/20 rounded-full px-4 py-2">
          <img src={magoAvatar} alt="logo" className="w-8 h-8 rounded-full" />
          <span className="text-[14px] font-bold">
            Mago<span className="text-yellow-400"> das Promoções</span>
          </span>
        </div>
      </div>

      {/* BOTÃO */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[90%] max-w-[400px] z-10">
        <button
          onClick={handleCTA}
          className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl bg-yellow-400 text-black font-bold text-[16px] shadow-xl active:scale-95 transition"
        >
          <MessageCircle className="w-5 h-5" />
          ENTRAR NO GRUPO
        </button>
      </div>

    </main>
  );
};

export default Index;

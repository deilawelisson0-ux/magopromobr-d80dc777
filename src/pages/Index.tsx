import magoBg from "../assets/banner-desktop1.jpg";
import mobileBg from "../assets/mobile.png";
import magoAvatar from "../assets/mago-avatar.webp";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";

// 🔥 SEU LINK (mantém esse)
const WHATSAPP_LINK = "https://chat.whatsapp.com/EkiyYscD3tOLe34nv8bu1s";

const Index = () => {
  const [peopleCount, setPeopleCount] = useState(4);

  useEffect(() => {
    const id = setInterval(() => {
      setPeopleCount(Math.floor(Math.random() * 5) + 2);
    }, 4000);

    return () => clearInterval(id);
  }, []);

  return (
    <main className="relative h-screen w-full overflow-hidden text-white bg-black">

      {/* DESKTOP */}
      <div className="absolute inset-0 z-0 hidden md:block">
        <img
          src={magoBg}
          alt=""
          className="absolute inset-0 h-full w-full object-fill brightness-110"
        />
      </div>

      {/* MOBILE */}
      <div className="absolute inset-0 z-0 md:hidden">
        <img
          src={mobileBg}
          alt=""
          className="w-full h-full object-cover brightness-110 contrast-110"
        />
      </div>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/20 z-10"></div>

      {/* CONTEÚDO */}
      <div className="relative z-20 flex flex-col items-center justify-between h-full px-4 py-6">

        {/* LOGO */}
        <div className="-mt-7 md:self-start">
          <div className="flex items-center gap-2 bg-black/70 px-4 py-2 rounded-full border border-yellow-400/30 backdrop-blur-md">
            <img src={magoAvatar} className="w-8 h-8 rounded-full" />
            <span className="font-bold text-sm">
              Mago <span className="text-yellow-400">das Promoções</span>
            </span>
          </div>
        </div>

        {/* BOTÃO */}
        <div className="w-full max-w-[420px] mb-8">

          {/* 🔥 BOTÃO CORRIGIDO */}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-3 py-5 rounded-2xl bg-yellow-400 text-black font-bold text-lg shadow-2xl hover:scale-105 active:scale-95 transition"
          >
            <MessageCircle className="w-6 h-6" />
            ENTRAR NO GRUPO
          </a>

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

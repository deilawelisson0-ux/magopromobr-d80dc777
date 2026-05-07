import magoBg from "../assets/banner-desktop1.webp";
import mobileBg from "../assets/mobile1.webp";
import magoAvatar from "../assets/mago-avatar.webp";

import { useEffect, useState } from "react";

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
  }
}

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
          width={1920}
          height={1080}
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-fill brightness-110"
        />
      </div>

      {/* MOBILE */}
      <div className="absolute inset-0 md:hidden flex items-start justify-center bg-black">
        <img
          src={mobileBg}
          alt=""
          width={1080}
          height={1920}
          fetchPriority="high"
          decoding="async"
          className="w-full h-auto max-h-screen object-contain"
        />
      </div>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/20 z-10"></div>

      {/* CONTEÚDO */}
      <div className="relative z-20 flex flex-col items-center justify-between h-full px-4 py-6">

        {/* LOGO */}
        <div className="relative -top-5 md:top-0 md:mt-1 md:self-start">
          <div className="flex items-center gap-2 bg-black/70 px-4 py-2 rounded-full border border-yellow-400/30 backdrop-blur-md">
            <img
              src={magoAvatar}
              alt="Mago das Promoções"
              width={32}
              height={32}
              decoding="async"
              className="w-8 h-8 rounded-full"
            />
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
  onClick={(e) => {
    e.preventDefault();

    if (window.fbq) {
      window.fbq('trackCustom', 'Lead');
      window.fbq('trackCustom', 'WhatsAppClick');
    }

    setTimeout(() => {
      window.open(WHATSAPP_LINK, "_blank");
    }, 1500);
  }}
  className="w-full flex items-center justify-center gap-3 py-5 rounded-2xl bg-yellow-400 text-black font-bold text-lg shadow-2xl hover:scale-105 active:scale-95 transition"
>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-black"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/>
            </svg>
            ENTRAR NO GRUPO AGORA
          </a>

          <p className="text-center text-white/80 text-sm mt-3">
            Gratuito • Sem spam • Saia quando quiser
          </p>

          <p className="text-center text-white/60 text-xs mt-1">
            🪄✨ JÁ SOMOS +2.000 MEMBROS ✨🪄
          </p>
        </div>

      </div>
    </main>
  );
};

export default Index;

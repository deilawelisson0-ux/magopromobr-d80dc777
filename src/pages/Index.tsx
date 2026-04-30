import magoBg from "../assets/banner-desktop.jpg";
import mobileBg from "../assets/mobile.jpg";
import magoAvatar from "../assets/mago-avatar.webp";

import { useEffect, useState } from "react";

// 🔥 LINK DO WHATSAPP
const WHATSAPP_LINK = "https://chat.whatsapp.com/SEU_LINK_AQUI";

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
      <div className="absolute inset-0 md:hidden flex items-start justify-center bg-black">
        <img
          src={mobileBg}
          alt=""
          className="h-full w-full object-cover"
        />
      </div>

      {/* CONTEÚDO */}
      <div className="relative z-10 flex flex-col items-center justify-end md:justify-center h-full px-4 pb-10 md:pb-0">

        {/* LOGO */}
        <div className="flex items-center gap-2 bg-black/70 px-4 py-2 rounded-full border border-yellow-400/30 backdrop-blur-md mb-6">
          <img src={magoAvatar} className="w-8 h-8 rounded-full" />
          <span className="font-bold text-sm">
            Mago <span className="text-yellow-400">das Promoções</span>
          </span>
        </div>

        {/* BOTÃO */}
        <div className="w-full max-w-[420px]">

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-3 py-5 rounded-2xl bg-yellow-400 text-black font-bold text-lg shadow-2xl active:scale-95 transition"
          >

            {/* 🔥 ÍCONE WHATSAPP OFICIAL */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="black"
              className="w-5 h-5"
            >
              <path d="M20.52 3.48A11.8 11.8 0 0 0 12.05 0C5.5 0 .17 5.33.17 11.88c0 2.1.55 4.15 1.6 5.96L0 24l6.33-1.66a11.86 11.86 0 0 0 5.72 1.46h.01c6.55 0 11.88-5.33 11.88-11.88 0-3.17-1.23-6.15-3.42-8.44ZM12.06 21.3a9.4 9.4 0 0 1-4.8-1.32l-.34-.2-3.76.99 1-3.66-.22-.37a9.37 9.37 0 0 1-1.45-5c0-5.2 4.23-9.43 9.43-9.43 2.52 0 4.88.98 6.65 2.75a9.36 9.36 0 0 1 2.77 6.68c0 5.2-4.23 9.43-9.43 9.43Zm5.17-7.03c-.28-.14-1.64-.81-1.9-.9-.26-.1-.45-.14-.64.14-.19.28-.74.9-.90 1.08-.17.19-.33.21-.61.07-.28-.14-1.2-.44-2.28-1.4-.84-.75-1.4-1.67-1.57-1.95-.17-.28-.02-.43.12-.57.13-.13.28-.33.42-.5.14-.17.19-.28.28-.47.1-.19.05-.36-.02-.50-.07-.14-.64-1.54-.88-2.12-.23-.55-.47-.47-.64-.48l-.55-.01c-.19 0-.50.07-.76.36-.26.28-1 1-1 2.44s1.02 2.83 1.16 3.03c.14.19 2 3.05 4.84 4.28.68.29 1.20.46 1.61.59.68.22 1.30.19 1.80.11.55-.08 1.64-.67 1.87-1.32.23-.64.23-1.20.16-1.32-.06-.12-.25-.19-.53-.33Z"/>
            </svg>

            <span>ENTRAR NO GRUPO</span>
          </a>

          {/* TEXTO ABAIXO */}
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

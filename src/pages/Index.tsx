import magoBg from "../assets/banner-desktop.jpg";
import mobileBg from "../assets/mobile1.jpg";

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
          className="w-full h-full object-cover"
        />
      </div>

      {/* MOBILE */}
      <div className="absolute inset-0 z-0 md:hidden">
        <img
          src={mobileBg}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* CONTEÚDO */}
      <div className="relative z-10 flex flex-col items-center justify-end h-full pb-10 px-4">

        {/* BOTÃO */}
        <div className="w-full max-w-[420px] mb-4">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-3 py-5 rounded-2xl bg-yellow-400 text-black font-bold text-lg shadow-2xl hover:scale-105 active:scale-95 transition"
          >
            {/* ÍCONE WHATSAPP PRETO (SVG CORRETO) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              width="22"
              height="22"
              fill="black"
            >
              <path d="M16 .4C7.5.4.6 7.3.6 15.8c0 2.8.7 5.4 2.1 7.7L.4 31.6l8.3-2.2c2.2 1.2 4.8 1.9 7.4 1.9 8.5 0 15.4-6.9 15.4-15.4S24.5.4 16 .4zm0 28c-2.4 0-4.8-.7-6.8-2l-.5-.3-4.9 1.3 1.3-4.8-.3-.5c-1.3-2.1-2-4.4-2-6.9C2.8 8.6 8.6 2.8 16 2.8s13.2 5.8 13.2 13.2S23.4 28.4 16 28.4zm7.2-9.7c-.4-.2-2.4-1.2-2.7-1.3-.4-.1-.6-.2-.9.2-.2.4-1 1.3-1.2 1.5-.2.2-.4.3-.8.1-.4-.2-1.6-.6-3-2-1.1-1-1.9-2.2-2.1-2.6-.2-.4 0-.6.1-.8.1-.1.4-.4.6-.6.2-.2.2-.4.3-.6.1-.2 0-.5-.1-.7-.1-.2-.9-2.2-1.2-3-.3-.8-.6-.7-.9-.7h-.8c-.3 0-.7.1-1 .5-.3.4-1.3 1.2-1.3 3 0 1.8 1.3 3.5 1.5 3.7.2.2 2.6 4 6.3 5.6.9.4 1.6.6 2.1.8.9.3 1.7.2 2.4.1.7-.1 2.4-1 2.7-2 .3-1 .3-1.9.2-2-.1-.1-.4-.2-.8-.4z"/>
            </svg>

            ENTRAR NO GRUPO
          </a>
        </div>

        {/* TEXTO */}
        <p className="text-center text-white/80 text-sm">
          Gratuito • Sem spam • Saia quando quiser
        </p>

        <p className="text-center text-white/60 text-xs mt-1">
          {peopleCount} pessoas entrando agora
        </p>

      </div>
    </main>
  );
};

export default Index;

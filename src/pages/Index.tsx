import magoBg from "../assets/mago-bg.webp";
import mobileBg from "../assets/mobile.png";
import magoAvatar from "../assets/mago-avatar.webp";
import { MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://chat.whatsapp.com/SEU_LINK_AQUI";

const Index = () => {

  const handleCTA = () => {
    window.open(WHATSAPP_LINK, "_blank");
  };

  return (
    <main className="relative h-screen w-full overflow-hidden text-white">

      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0">

        {/* DESKTOP */}
        <img
          src={magoBg}
          alt="bg"
          className="w-full h-full object-cover object-center hidden md:block
          scale-100 contrast-110 brightness-110"
        />

        {/* MOBILE */}
        <img
          src={mobileBg}
          alt="bg mobile"
          className="w-full h-full object-cover object-center md:hidden
          scale-100 contrast-110 brightness-110"
        />

        {/* OVERLAY MAIS LEVE (quase imperceptível) */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* CONTEÚDO */}
      <div className="relative z-10 h-full flex flex-col justify-between px-6 py-6 max-w-[500px] mx-auto">

        {/* LOGO MAIS ALTA */}
        <div className="flex justify-center mt-[-15px]">
          <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full border border-yellow-400/30 shadow-lg">
            <img
              src={magoAvatar}
              alt="logo"
              className="w-8 h-8 rounded-full"
            />
            <span className="font-bold text-sm">
              Mago <span className="text-yellow-400">das Promoções</span>
            </span>
          </div>
        </div>

        {/* espaço vazio */}
        <div></div>

        {/* BOTÃO */}
        <div className="mb-6">
          <button
            onClick={handleCTA}
            className="w-full flex items-center justify-center gap-3 py-5 rounded-2xl 
            bg-yellow-400 text-black font-extrabold text-[16px]
            shadow-[0_0_25px_rgba(255,215,0,0.5)]
            active:scale-95 transition"
          >
            <MessageCircle className="w-6 h-6" />
            ENTRAR NO GRUPO
          </button>

          <p className="text-center text-[11px] text-white/80 mt-2">
            Gratuito • Sem spam • Saia quando quiser
          </p>
        </div>

      </div>
    </main>
  );
};

export default Index;

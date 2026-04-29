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
          className="w-full h-full object-cover hidden md:block"
        />

        {/* MOBILE */}
        <img
          src={mobileBg}
          alt="bg mobile"
          className="w-full h-full object-cover md:hidden"
        />

        {/* OVERLAY (ajusta aqui se quiser mais claro ou escuro) */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* CONTEÚDO */}
      <div className="relative z-10 h-full flex flex-col justify-between px-6 py-8 max-w-[500px] mx-auto">

        {/* LOGO */}
        <div className="flex justify-center mt-2">
          <div className="flex items-center gap-2 bg-black/60 px-4 py-2 rounded-full border border-yellow-400/30">
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

        {/* ESPAÇO VAZIO (pra imagem aparecer bem) */}
        <div></div>

        {/* BOTÃO */}
        <div className="mb-6">
          <button
            onClick={handleCTA}
            className="w-full flex items-center justify-center gap-3 py-5 rounded-xl 
            bg-yellow-400 text-black font-bold text-[15px]
            shadow-lg active:scale-95 transition"
          >
            <MessageCircle className="w-5 h-5" />
            ENTRAR NO GRUPO
          </button>

          <p className="text-center text-[11px] text-white/70 mt-2">
            Gratuito • Sem spam • Saia quando quiser
          </p>
        </div>

      </div>
    </main>
  );
};

export default Index;

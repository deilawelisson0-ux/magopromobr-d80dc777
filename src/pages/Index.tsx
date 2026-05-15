import { memo } from "react";

const LOGO = "/img/mago-logo.webp";
const WHATSAPP_LINK = "https://chat.whatsapp.com/EkiyYscD3tOLe34nv8bu1s";

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
    __fbqLoaded?: boolean;
    __loadFbq?: () => void;
  }
}

const handleClick = (e: React.MouseEvent) => {
  e.preventDefault();
  if (!window.fbq && typeof window.__loadFbq === "function") window.__loadFbq();
  if (window.fbq) {
    window.fbq("trackCustom", "Lead");
    window.fbq("trackCustom", "WhatsAppClick");
  }
  setTimeout(() => window.open(WHATSAPP_LINK, "_blank"), 800);
};

const Index = () => {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#0a0a0f] text-white">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, rgba(255,193,7,0.18), transparent 60%), radial-gradient(50% 40% at 50% 100%, rgba(255,193,7,0.10), transparent 60%)",
        }}
      />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[440px] flex-col items-center px-5 pt-6 pb-8 sm:max-w-[520px]">
        {/* Top status pill */}
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
          </span>
          <span className="text-[12px] font-semibold tracking-[0.18em] text-white/90">GRUPO ABERTO</span>
        </div>

        {/* Logo */}
        <div className="relative mt-5">
          <div
            aria-hidden
            className="absolute inset-0 -z-10 rounded-full blur-2xl"
            style={{ background: "radial-gradient(circle, rgba(255,193,7,0.55), transparent 70%)" }}
          />
          <img
            src={LOGO}
            alt="Mago das Promoções"
            width={320}
            height={320}
            fetchPriority="high"
            decoding="async"
            className="h-[260px] w-[260px] rounded-full object-cover ring-2 ring-yellow-400/60 shadow-[0_0_60px_rgba(255,193,7,0.35)] sm:h-[300px] sm:w-[300px]"
          />
        </div>

        {/* Badge */}
        <div className="mt-5 inline-flex items-center gap-2 rounded-md border border-yellow-400/40 bg-yellow-400/10 px-3 py-1.5">
          <span className="text-yellow-400">✦</span>
          <span className="text-[11px] font-bold tracking-[0.22em] text-yellow-300">PROMOÇÕES ORIGINAIS</span>
        </div>

        {/* Headline */}
        <h1 className="mt-5 text-center text-[34px] font-black leading-[1.05] tracking-tight sm:text-[40px]">
          AS MELHORES{" "}
          <span className="relative inline-block">
            <span className="relative z-10 text-yellow-400">PROMOÇÕES</span>
            <span
              aria-hidden
              className="absolute inset-x-0 bottom-1 z-0 h-2 rounded-full bg-yellow-400/40"
            />
          </span>{" "}
          DA INTERNET ESTÃO AQUI
        </h1>

        {/* Subheadline */}
        <p className="mt-4 max-w-[420px] text-center text-[15px] leading-relaxed text-white/70">
          A gente monitora <span className="font-semibold text-white">Amazon, Shopee e Mercado Livre</span> 24h por dia pra te mandar só as <span className="font-semibold text-white">melhores promoções</span> — direto no seu WhatsApp.
        </p>

        {/* Trust bullets */}
        <ul className="mt-5 grid w-full max-w-[420px] grid-cols-1 gap-2 text-[13px]">
          {[
            "Até 70% OFF em produtos selecionados a dedo",
            "Cupons exclusivos que ninguém divulga",
            "Sem spam — só promoção que vale a pena",
          ].map((t) => (
            <li key={t} className="flex items-start gap-2 rounded-lg border border-white/5 bg-white/[0.03] px-3 py-2">
              <span className="mt-0.5 text-yellow-400">✓</span>
              <span className="text-white/85">{t}</span>
            </li>
          ))}
        </ul>

        {/* Urgency */}
        <p className="mt-5 text-center text-[12px] font-semibold uppercase tracking-[0.2em] text-yellow-400/90">
          🔥 Vagas limitadas • Entrada gratuita
        </p>

        {/* CTA Button (kept as-is, with pulse) */}
        <div className="mt-3 w-full max-w-[420px]">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClick}
            className="animate-button-pulse flex w-full items-center justify-center gap-3 rounded-2xl bg-[#25D366] py-5 text-lg font-bold text-white shadow-2xl shadow-[#25D366]/30 transition hover:scale-[1.03] active:scale-95"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-white">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
            </svg>
            QUERO PARTICIPAR
          </a>

          <p className="mt-3 text-center text-[13px] text-white/70">Gratuito • Sem spam • Saia quando quiser</p>
          <p className="mt-1 text-center text-[12px] text-white/55">🪄✨ JÁ SOMOS +2.000 MEMBROS ✨🪄</p>
        </div>
      </div>
    </main>
  );
};

export default memo(Index);

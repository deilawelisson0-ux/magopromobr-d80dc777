import magoAvatar from "@/assets/mago-avatar.jpeg";
import magoBanner from "@/assets/mago-banner.png";
import { Star, Users, Zap, Shield, ChevronRight } from "lucide-react";

const WHATSAPP_LINK = "#"; // Substituir pelo link real
const INSTAGRAM_LINK = "https://instagram.com/magopromobr";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center">
      {/* Decorative top bar */}
      <div className="w-full h-1 gold-gradient" />

      <div className="w-full max-w-md mx-auto px-4 py-6 flex flex-col items-center gap-6">
        {/* Avatar + Name */}
        <header className="flex flex-col items-center gap-3 text-center">
          <div className="relative">
            <div className="w-28 h-28 rounded-full overflow-hidden border-[3px] border-primary glow-gold animate-float">
              <img
                src={magoAvatar}
                alt="Mago das Promoções"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="absolute -bottom-1 -right-1 text-2xl animate-sparkle">✨</span>
          </div>

          <h1 className="text-2xl font-black gold-text tracking-tight leading-tight">
            MAGO DAS PROMOÇÕES
          </h1>
          <p className="text-muted-foreground text-sm font-medium">
            As melhores promoções da internet todos os dias 🔥
          </p>
        </header>

        {/* Stats pills */}
        <div className="flex gap-3 flex-wrap justify-center">
          {[
            { icon: <Users className="w-3.5 h-3.5" />, text: "+1000 membros" },
            { icon: <Zap className="w-3.5 h-3.5" />, text: "Ofertas diárias" },
            { icon: <Shield className="w-3.5 h-3.5" />, text: "100% gratuito" },
          ].map((item) => (
            <span
              key={item.text}
              className="flex items-center gap-1.5 bg-secondary px-3 py-1.5 rounded-full text-xs font-semibold text-primary"
            >
              {item.icon}
              {item.text}
            </span>
          ))}
        </div>

        {/* Banner */}
        <div className="w-full rounded-2xl overflow-hidden glow-gold">
          <img
            src={magoBanner}
            alt="Grupo de promoções no WhatsApp"
            className="w-full h-auto"
          />
        </div>

        {/* CTA Buttons */}
        <div className="w-full flex flex-col gap-3">
          {/* Primary CTA */}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="shimmer block w-full text-center bg-cta-green text-cta-green-foreground font-extrabold text-lg py-4 rounded-xl animate-pulse-glow hover:scale-[1.02] transition-transform duration-200"
          >
            ENTRAR NO GRUPO AGORA 🚀
          </a>

          {/* Secondary CTAs */}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between w-full bg-secondary hover:bg-primary hover:text-primary-foreground text-foreground font-bold text-base py-3.5 px-5 rounded-xl transition-all duration-200 border border-border hover:border-primary"
          >
            <span>VER OFERTAS DO DIA 👀</span>
            <ChevronRight className="w-5 h-5 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
          </a>

          <a
            href={INSTAGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between w-full bg-secondary hover:bg-primary hover:text-primary-foreground text-foreground font-bold text-base py-3.5 px-5 rounded-xl transition-all duration-200 border border-border hover:border-primary"
          >
            <span>ME SEGUE NO INSTAGRAM 📲</span>
            <span className="text-sm font-normal text-muted-foreground group-hover:text-primary-foreground transition-colors">
              @magopromobr
            </span>
          </a>
        </div>

        {/* Social Proof */}
        <section className="w-full bg-card rounded-2xl p-5 border border-border">
          <div className="flex items-center gap-2 mb-3">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star
                key={i}
                className="w-4 h-4 fill-primary text-primary"
              />
            ))}
            <span className="text-xs font-semibold text-muted-foreground ml-1">5.0</span>
          </div>

          <p className="text-sm text-foreground leading-relaxed">
            Mais de <strong className="text-primary">1.000 pessoas</strong> já estão
            aproveitando as melhores promoções todos os dias!
          </p>

          {/* Avatar stack */}
          <div className="flex items-center mt-4 gap-1">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full bg-muted border-2 border-card flex items-center justify-center text-xs font-bold text-muted-foreground -ml-2 first:ml-0"
              >
                {["A", "M", "J", "P", "R"][i]}
              </div>
            ))}
            <span className="text-xs text-muted-foreground ml-2">
              +997 membros
            </span>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-xs text-muted-foreground py-4">
          <p>Grupo gratuito • Entre e aproveite</p>
          <p className="mt-1 opacity-60">© 2026 Mago das Promoções</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;

import logo from "@/assets/khatamat-logo.png";
import iphone from "@/assets/khatamat-iphone.jpg";
import pattern from "@/assets/khatamat-pattern.jpg";
import { Apple, Star } from "lucide-react";

export const Hero = () => (
  <section id="home" className="relative overflow-hidden bg-background">
    <img
      src={pattern}
      alt=""
      aria-hidden="true"
      className="absolute inset-0 h-full w-full object-cover opacity-[0.06]"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" />

    <div className="relative container py-20 md:py-28 grid lg:grid-cols-2 gap-12 items-center">
      <div className="text-center lg:text-left">
        <img src={logo} alt="Khatamat" className="h-24 w-24 mx-auto lg:mx-0 mb-6 object-contain" />
        <p className="font-display text-gold text-sm md:text-base mb-3 tracking-[0.3em] uppercase">
          ختمات قرآنية
        </p>
        <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight text-foreground">
          Read, share & complete the <span className="text-gold-gradient">Quran together</span>
        </h1>
        <p className="max-w-xl mx-auto lg:mx-0 text-base md:text-lg text-muted-foreground mb-8 leading-relaxed">
          Khatamat helps you organize group Quran khatmas with friends and family.
          Read ahzab in-app with Hafs or Warsh riwayah, share a private link, and track progress together.
        </p>

        <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
          <a
            href="https://apps.apple.com/app/id6446455582"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-gradient-gold text-gold-foreground font-semibold shadow-gold hover:opacity-90 transition"
          >
            <Apple className="h-6 w-6" />
            <div className="text-left leading-tight">
              <div className="text-[10px] uppercase tracking-wider opacity-80">Download on the</div>
              <div className="text-base">App Store</div>
            </div>
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-gold/40 text-foreground hover:bg-secondary transition"
          >
            Learn more
          </a>
        </div>

        <div className="flex items-center gap-3 justify-center lg:justify-start text-sm text-muted-foreground">
          <div className="flex text-gold">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-current" />
            ))}
          </div>
          <span>5.0 on the App Store · Free · iPhone & iPad</span>
        </div>
      </div>

      <div className="relative">
        <div className="absolute -inset-6 bg-gold/10 blur-3xl rounded-full" />
        <img
          src={iphone}
          alt="Khatamat app on iPhone showing a page of the Quran"
          width={1280}
          height={1280}
          className="relative w-full max-w-md mx-auto rounded-3xl"
        />
      </div>
    </div>
  </section>
);

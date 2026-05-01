import heroImg from "@/assets/hero-kaaba.jpg";
import { Plane, FileCheck, Hotel, Bus } from "lucide-react";

const features = [
  { icon: Plane, label: "Volo" },
  { icon: FileCheck, label: "Visto" },
  { icon: Hotel, label: "Hotel" },
  { icon: Bus, label: "Trasporto" },
];

export const Hero = () => (
  <section id="home" className="relative overflow-hidden">
    <img
      src={heroImg}
      alt="La Sacra Kaaba alla Mecca all'ora dorata"
      width={1920}
      height={1080}
      className="absolute inset-0 h-full w-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-hero" />
    <div className="relative container py-24 md:py-36 text-center text-primary-foreground">
      <p className="font-display text-gold text-lg md:text-xl mb-4 tracking-wide">
        Abidoune Travel
      </p>
      <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
        Pacchetti Hajj e Umrah <span className="text-gold-gradient">Tutto Incluso</span>
      </h1>
      <p className="max-w-2xl mx-auto text-base md:text-lg text-primary-foreground/80 mb-10">
        La tua guida di fiducia per un viaggio sacro. Prenota in tutta serenità — voli,
        visti, hotel e trasporti, organizzati dai nostri specialisti.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
        {features.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex flex-col items-center gap-2 rounded-xl border border-gold/30 bg-primary/40 backdrop-blur px-4 py-5"
          >
            <Icon className="h-7 w-7 text-gold" />
            <span className="text-sm font-medium">{label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);
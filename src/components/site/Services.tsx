import { Plane, BedDouble, FileCheck2, Bus, ShieldCheck, HeartHandshake } from "lucide-react";

const services = [
  { icon: Plane, title: "Flights", desc: "Direct & connecting flights with leading airlines from UK airports." },
  { icon: FileCheck2, title: "Visa Processing", desc: "Fast, hassle-free Saudi visa applications managed for you." },
  { icon: BedDouble, title: "Hotels", desc: "Hand-picked 3, 4 & 5 star hotels closest to the Haram." },
  { icon: Bus, title: "Transport", desc: "Comfortable transfers between airport, Makkah & Madinah." },
  { icon: ShieldCheck, title: "Trusted & Accredited", desc: "IATA accredited & approved by the Ministry of Hajj." },
  { icon: HeartHandshake, title: "24/7 Support", desc: "Dedicated guidance from booking until your safe return." },
];

export const Services = () => (
  <section className="py-20 bg-gradient-dark text-primary-foreground">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <p className="text-gold uppercase tracking-[0.25em] text-sm mb-3">Why Abidoune</p>
        <h2 className="text-3xl md:text-5xl font-bold mb-4">A Sacred Journey, Perfectly Arranged</h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="rounded-2xl p-6 border border-gold/20 bg-primary-foreground/5 backdrop-blur hover:border-gold transition"
          >
            <div className="h-12 w-12 rounded-xl bg-gradient-gold flex items-center justify-center mb-4">
              <Icon className="h-6 w-6 text-gold-foreground" />
            </div>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
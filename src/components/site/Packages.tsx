import { Star, Check } from "lucide-react";
import medina from "@/assets/medina.jpg";
import hotel from "@/assets/hotel.jpg";
import kaaba from "@/assets/hero-kaaba.jpg";
import { Button } from "@/components/ui/button";

const packages = [
  {
    title: "Economy Umrah",
    nights: "10 Nights",
    price: "£795",
    img: kaaba,
    features: ["3★ hotels near Haram", "Return flights", "Visa included", "Airport transfers"],
    badge: "Best Seller",
  },
  {
    title: "Premium Umrah",
    nights: "14 Nights",
    price: "£1,495",
    img: hotel,
    features: ["5★ hotels in Makkah & Madinah", "Direct flights", "Visa & Ziaraat tour", "Private transfers"],
    badge: "Premium",
  },
  {
    title: "Ramadan Umrah",
    nights: "10 Nights",
    price: "£1,295",
    img: medina,
    features: ["4★ hotels", "Iftar included", "Visa included", "Group transfers"],
    badge: "Limited",
  },
];

export const Packages = () => (
  <section id="umrah" className="py-20 bg-background">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <p className="text-gold uppercase tracking-[0.25em] text-sm mb-3">Our Packages</p>
        <h2 className="text-3xl md:text-5xl font-bold mb-4">All-Inclusive Umrah Packages from UK</h2>
        <p className="text-muted-foreground">
          Carefully crafted journeys to suit every pilgrim — from value-friendly to luxury.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {packages.map((p) => (
          <article
            key={p.title}
            className="group rounded-2xl overflow-hidden bg-card border border-border shadow-elegant hover:-translate-y-1 transition-transform duration-300"
          >
            <div className="relative h-56 overflow-hidden">
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-4 left-4 bg-gradient-gold text-gold-foreground px-3 py-1 rounded-full text-xs font-semibold">
                {p.badge}
              </span>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold">{p.title}</h3>
                <div className="flex text-gold">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4">{p.nights} · From</p>
              <p className="text-3xl font-display font-bold text-gold mb-5">
                {p.price}
                <span className="text-sm text-muted-foreground font-sans font-normal"> /pp</span>
              </p>
              <ul className="space-y-2 mb-6">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-gold mt-0.5 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-primary text-primary-foreground hover:bg-gold hover:text-gold-foreground transition">
                Enquire Now
              </Button>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
import { Star } from "lucide-react";

const reviews = [
  { name: "Yusuf A.", text: "Alhamdulillah, una Umrah indimenticabile. Tutto organizzato perfettamente fino a Makkah." },
  { name: "Fatima R.", text: "L'attenzione del team ha reso il nostro Hajj davvero spirituale. Hotel a pochi passi dal Haram." },
  { name: "Ibrahim K.", text: "Servizio eccellente e prezzi onesti. Viaggerò ancora con Abidoune, in sha Allah." },
];

export const Testimonials = () => (
  <section className="py-20 bg-secondary">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <p className="text-gold uppercase tracking-[0.25em] text-sm mb-3">Storie di Pellegrini</p>
        <h2 className="text-3xl md:text-5xl font-bold">Scelti da Migliaia di Pellegrini</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {reviews.map((r) => (
          <blockquote key={r.name} className="rounded-2xl bg-card border border-border p-7 shadow-elegant">
            <div className="flex text-gold mb-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <p className="text-foreground/80 leading-relaxed mb-4">"{r.text}"</p>
            <footer className="font-semibold">— {r.name}</footer>
          </blockquote>
        ))}
      </div>
    </div>
  </section>
);
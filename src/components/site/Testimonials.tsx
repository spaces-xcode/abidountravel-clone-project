import { Star } from "lucide-react";

const reviews = [
  { name: "Yusuf A.", text: "Alhamdulillah, an unforgettable Umrah. Everything was arranged seamlessly from London to Makkah." },
  { name: "Fatima R.", text: "The team's care and attention made our Hajj truly spiritual. Hotels were minutes from the Haram." },
  { name: "Ibrahim K.", text: "Excellent service and honest pricing. Will travel with Abidoune again, in sha Allah." },
];

export const Testimonials = () => (
  <section className="py-20 bg-secondary">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <p className="text-gold uppercase tracking-[0.25em] text-sm mb-3">Pilgrim Stories</p>
        <h2 className="text-3xl md:text-5xl font-bold">Trusted by Thousands of Pilgrims</h2>
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
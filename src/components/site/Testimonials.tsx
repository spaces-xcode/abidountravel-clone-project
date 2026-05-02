import { Star } from "lucide-react";

const reviews = [
  {
    name: "App Store reviewer",
    title: "تطبيق رائع",
    text: "جزاكم الله خيرا كثيرا",
    rating: 5,
  },
  {
    name: "Amine — Casablanca",
    title: "Perfect for family khatmas",
    text: "We started a Ramadan khatma with cousins across three countries. The link sharing and hizb reservation made it effortless.",
    rating: 5,
  },
  {
    name: "Sara — Paris",
    title: "Clean and respectful",
    text: "The interface is simple and the Quran text is beautifully presented. I love that you can choose Warsh.",
    rating: 5,
  },
];

export const Testimonials = () => (
  <section id="reviews" className="py-20 bg-secondary">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <p className="text-gold uppercase tracking-[0.25em] text-sm mb-3">Reviews</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
          Loved by readers worldwide
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {reviews.map((r) => (
          <blockquote key={r.name} className="rounded-2xl bg-card border border-border p-7 shadow-elegant">
            <div className="flex text-gold mb-3">
              {Array.from({ length: r.rating }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <p className="font-display font-bold text-foreground mb-2">{r.title}</p>
            <p className="text-foreground/75 leading-relaxed mb-4 text-sm">"{r.text}"</p>
            <footer className="text-muted-foreground text-sm">— {r.name}</footer>
          </blockquote>
        ))}
      </div>
    </div>
  </section>
);

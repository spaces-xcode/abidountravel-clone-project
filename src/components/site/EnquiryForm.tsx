import { Apple, Star, Users, BookOpenCheck } from "lucide-react";

const stats = [
  { icon: Star, value: "5.0", label: "App Store rating" },
  { icon: BookOpenCheck, value: "60", label: "Ahzab per khatma" },
  { icon: Users, value: "∞", label: "Participants per khatma" },
];

export const Download = () => (
  <section id="download" className="relative overflow-hidden bg-gradient-dark border-y border-border">
    <div className="container py-20 text-center">
      <p className="text-gold uppercase tracking-[0.25em] text-sm mb-3">Available now</p>
      <h2 className="font-display text-3xl md:text-5xl font-bold mb-5 text-foreground">
        Start your <span className="text-gold-gradient">first khatma</span> today
      </h2>
      <p className="max-w-xl mx-auto text-muted-foreground mb-10">
        Free on iPhone and iPad. Designed by Agility Concepts. May Allah accept it from you.
      </p>

      <div className="flex flex-wrap gap-4 justify-center mb-12">
        <a
          href="https://apps.apple.com/app/id6446455582"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-7 py-4 rounded-xl bg-gradient-gold text-gold-foreground font-semibold shadow-gold hover:opacity-90 transition"
        >
          <Apple className="h-6 w-6" />
          <div className="text-left leading-tight">
            <div className="text-[10px] uppercase tracking-wider opacity-80">Download on the</div>
            <div className="text-base">App Store</div>
          </div>
        </a>
      </div>

      <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
        {stats.map(({ icon: Icon, value, label }) => (
          <div key={label} className="rounded-xl border border-gold/20 bg-card/50 backdrop-blur p-5">
            <Icon className="h-5 w-5 text-gold mx-auto mb-2" />
            <div className="font-display text-2xl font-bold text-gold">{value}</div>
            <div className="text-xs text-muted-foreground mt-1">{label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Backwards-compat export to avoid touching the page import
export { Download as EnquiryForm };

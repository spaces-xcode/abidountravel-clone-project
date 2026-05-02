import { Download, Users, BookOpen } from "lucide-react";

const steps = [
  {
    n: "01",
    icon: Download,
    title: "Download the app",
    desc: "Get Khatamat free from the App Store on iPhone or iPad — no account required.",
  },
  {
    n: "02",
    icon: BookOpen,
    title: "Create a khatma",
    desc: "Pick the riwayah (Hafs or Warsh) and choose whether the khatma is public or private.",
  },
  {
    n: "03",
    icon: Users,
    title: "Invite & complete",
    desc: "Share the link, let participants reserve ahzab, and track progress until the khatma is complete.",
  },
];

export const Packages = () => (
  <section id="how" className="py-20 bg-background">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <p className="text-gold uppercase tracking-[0.25em] text-sm mb-3">How it works</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
          Three simple steps
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6 relative">
        {steps.map(({ n, icon: Icon, title, desc }) => (
          <article
            key={n}
            className="relative rounded-2xl p-8 bg-card border border-border hover:border-gold/50 transition group"
          >
            <span className="absolute top-6 right-6 font-display text-5xl font-bold text-gold/15 group-hover:text-gold/30 transition">
              {n}
            </span>
            <div className="h-12 w-12 rounded-xl bg-gradient-gold flex items-center justify-center mb-5 shadow-gold">
              <Icon className="h-6 w-6 text-gold-foreground" />
            </div>
            <h3 className="font-display text-xl font-bold mb-3 text-foreground">{title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

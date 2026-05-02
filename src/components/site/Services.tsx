import { BookOpen, BookMarked, Lock, UserPlus, ListChecks, MessageCircle, Share2, Download } from "lucide-react";

const features = [
  { icon: BookOpen, title: "In-app Quran reader", desc: "Read every hizb directly inside the app with a clean, distraction-free interface." },
  { icon: BookMarked, title: "Hafs & Warsh riwayah", desc: "Choose between the two riwayat (rahimahum Allah) when creating a khatma." },
  { icon: Lock, title: "Private khatmas", desc: "Create closed khatmas reserved for those who hold the share link." },
  { icon: UserPlus, title: "No account needed", desc: "Friends can join and reserve ahzab without signing up — just open the link." },
  { icon: ListChecks, title: "Smart hizb sorting", desc: "Unreserved ahzab appear first to make distribution effortless." },
  { icon: MessageCircle, title: "Comments", desc: "Leave dedications and notes inside the khatma for everyone to see." },
  { icon: Share2, title: "Share in one tap", desc: "Send a single link by WhatsApp, Telegram or email to invite participants." },
  { icon: Download, title: "Download the mushaf", desc: "Read offline anywhere with the full mushaf available on your device." },
];

export const Services = () => (
  <section id="features" className="py-20 bg-gradient-dark">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <p className="text-gold uppercase tracking-[0.25em] text-sm mb-3">Features</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 text-foreground">
          Everything you need for a group khatma
        </h2>
        <p className="text-muted-foreground">
          Designed with care so families, study circles and friends can complete the Quran together — wherever they are.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {features.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="rounded-2xl p-6 border border-gold/15 bg-card/50 backdrop-blur hover:border-gold/60 hover:-translate-y-1 transition-all duration-300"
          >
            <div className="h-11 w-11 rounded-xl bg-gradient-gold flex items-center justify-center mb-4 shadow-gold">
              <Icon className="h-5 w-5 text-gold-foreground" />
            </div>
            <h3 className="text-base font-bold mb-2 text-foreground">{title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

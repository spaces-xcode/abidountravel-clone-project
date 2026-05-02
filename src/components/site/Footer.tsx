import { Mail, Globe } from "lucide-react";
import logo from "@/assets/khatamat-logo.png";

export const Footer = () => (
  <footer id="contact" className="bg-primary text-primary-foreground border-t border-border">
    <div className="container py-14 grid md:grid-cols-4 gap-10">
      <div className="md:col-span-2">
        <div className="flex items-center gap-3 mb-4">
          <img src={logo} alt="Khatamat" className="h-14 w-14 object-contain" />
          <div className="leading-tight">
            <div className="font-display text-lg font-bold text-gold">KHATAMAT</div>
            <div className="text-xs text-primary-foreground/60 uppercase tracking-[0.2em]">ختمات قرآنية</div>
          </div>
        </div>
        <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-md">
          Khatamat helps Muslims organize and complete the Quran together — a quiet,
          beautifully crafted companion for personal and group recitation.
        </p>
      </div>
      <div>
        <h4 className="font-display text-gold mb-4">Explore</h4>
        <ul className="space-y-2 text-sm text-primary-foreground/80">
          <li><a href="#features" className="hover:text-gold">Features</a></li>
          <li><a href="#how" className="hover:text-gold">How it works</a></li>
          <li><a href="#reviews" className="hover:text-gold">Reviews</a></li>
          <li><a href="#download" className="hover:text-gold">Download</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-display text-gold mb-4">Developer</h4>
        <ul className="space-y-3 text-sm text-primary-foreground/80">
          <li>Agility Concepts</li>
          <li className="flex items-start gap-2"><Globe className="h-4 w-4 text-gold mt-0.5" /> yassine.mobi</li>
          <li className="flex items-start gap-2"><Mail className="h-4 w-4 text-gold mt-0.5" /> Privacy & support</li>
        </ul>
      </div>
    </div>
    <div className="border-t border-primary-foreground/10">
      <div className="container py-5 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-primary-foreground/60">
        <span>© {new Date().getFullYear()} Khatamat — Agility Concepts.</span>
        <span>Designed for iPhone & iPad · Free</span>
      </div>
    </div>
  </footer>
);

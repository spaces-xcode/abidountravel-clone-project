import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/khatamat-logo.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how" },
  { label: "Reviews", href: "#reviews" },
  { label: "Download", href: "#download" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-background/85 backdrop-blur border-b border-border">
      <div className="container flex items-center justify-between py-3 gap-4">
        <a href="#home" className="flex items-center gap-3">
          <img src={logo} alt="Khatamat logo" className="h-12 w-12 object-contain" />
          <div className="leading-tight">
            <div className="font-display text-lg font-bold tracking-wide text-gold">KHATAMAT</div>
            <div className="text-[11px] text-muted-foreground uppercase tracking-[0.2em]">ختمات قرآنية</div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-8 text-sm">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-foreground/80 hover:text-gold transition">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://apps.apple.com/app/id6446455582"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-gradient-gold text-gold-foreground shadow-gold hover:opacity-90 transition"
          >
            Download
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-border hover:bg-secondary transition"
            aria-label="Open menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="lg:hidden border-t border-border bg-background">
          <ul className="container py-2">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 px-2 border-b border-border/50 hover:text-gold transition"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

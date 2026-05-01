import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/abidoune-logo.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Hajj 2026", href: "#hajj" },
  { label: "Pacchetti Umrah", href: "#umrah" },
  { label: "Umrah Ramadan", href: "#ramadan" },
  { label: "Voli", href: "#flights" },
  { label: "Contatti", href: "#contact" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="container flex items-center justify-between py-3 gap-4">
        <a href="#home" className="flex items-center gap-3">
          <img src={logo} alt="Logo Abidoune Travel" className="h-14 w-auto" />
          <div className="hidden sm:block leading-tight">
            <div className="font-display text-lg font-bold tracking-wide">ABIDOUNE</div>
            <div className="text-xs text-gold uppercase tracking-[0.2em]">Hajj e Omra</div>
          </div>
        </a>

        <div className="hidden lg:flex items-center text-sm text-muted-foreground">
          1447 Hijri · Specialisti Hajj e Umrah
        </div>

        <div className="flex items-center gap-3">
          <a
            href="tel:+442033554383"
            className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-gold transition"
          >
            <Phone className="h-4 w-4 text-gold" />
            +44 203 355 4383
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="inline-flex items-center justify-center h-10 w-10 rounded-md border border-border hover:bg-secondary transition"
            aria-label="Apri menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-border bg-background">
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
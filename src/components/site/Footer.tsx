import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/abidoune-logo.png";

export const Footer = () => (
  <footer id="contact" className="bg-primary text-primary-foreground">
    <div className="container py-16 grid md:grid-cols-4 gap-10">
      <div>
        <img src={logo} alt="Abidoune Travel" className="h-20 w-auto mb-4 brightness-110" />
        <p className="text-primary-foreground/70 text-sm leading-relaxed">
          Abidoune Travel — il tuo partner di fiducia per Hajj e Umrah.
        </p>
      </div>
      <div>
        <h4 className="font-display text-gold mb-4">Link Utili</h4>
        <ul className="space-y-2 text-sm text-primary-foreground/80">
          <li><a href="#hajj" className="hover:text-gold">Hajj 2026</a></li>
          <li><a href="#umrah" className="hover:text-gold">Pacchetti Umrah</a></li>
          <li><a href="#ramadan" className="hover:text-gold">Umrah Ramadan</a></li>
          <li><a href="#flights" className="hover:text-gold">Voli</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-display text-gold mb-4">Informazioni</h4>
        <ul className="space-y-2 text-sm text-primary-foreground/80">
          <li>Consigli di Viaggio</li>
          <li>Salute e Sicurezza</li>
          <li>Privacy Policy</li>
          <li>Termini e Condizioni</li>
        </ul>
      </div>
      <div>
        <h4 className="font-display text-gold mb-4">Contatti</h4>
        <ul className="space-y-3 text-sm text-primary-foreground/80">
          <li className="flex items-start gap-2"><Phone className="h-4 w-4 text-gold mt-0.5" /> +39 000 000 0000</li>
          <li className="flex items-start gap-2"><Mail className="h-4 w-4 text-gold mt-0.5" /> info@abidounetravel.com</li>
          <li className="flex items-start gap-2"><MapPin className="h-4 w-4 text-gold mt-0.5" /> Italia</li>
        </ul>
      </div>
    </div>
    <div className="border-t border-primary-foreground/10">
      <div className="container py-5 text-center text-xs text-primary-foreground/60">
        © {new Date().getFullYear()} Abidoune Travel. Tutti i diritti riservati.
      </div>
    </div>
  </footer>
);
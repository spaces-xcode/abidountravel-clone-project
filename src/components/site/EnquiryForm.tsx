import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

export const EnquiryForm = () => {
  const [tab, setTab] = useState<"umrah" | "hajj">("umrah");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Richiesta ricevuta",
      description: "Il nostro team ti contatterà a breve con le migliori offerte.",
    });
  };

  return (
    <section className="bg-secondary border-y border-border">
      <div className="container py-12">
        <div className="flex gap-3 mb-6">
          <button
            onClick={() => setTab("umrah")}
            className={`px-6 py-2.5 rounded-full font-medium transition ${
              tab === "umrah"
                ? "bg-gradient-gold text-gold-foreground shadow-gold"
                : "bg-background border border-border text-foreground"
            }`}
          >
            Richiesta Umrah
          </button>
          <button
            onClick={() => setTab("hajj")}
            className={`px-6 py-2.5 rounded-full font-medium transition ${
              tab === "hajj"
                ? "bg-gradient-gold text-gold-foreground shadow-gold"
                : "bg-background border border-border text-foreground"
            }`}
          >
            Richiesta Hajj
          </button>
        </div>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
          <div>
            <Label htmlFor="name">Passeggero principale</Label>
            <Input id="name" placeholder="Nome completo" required className="bg-background" />
          </div>
          <div>
            <Label htmlFor="email">Indirizzo Email</Label>
            <Input id="email" type="email" placeholder="tu@esempio.com" required className="bg-background" />
          </div>
          <div>
            <Label htmlFor="phone">Telefono</Label>
            <Input id="phone" placeholder="+39..." required className="bg-background" />
          </div>
          <div>
            <Label htmlFor="adult">Adulti</Label>
            <Input id="adult" type="number" min={1} defaultValue={1} className="bg-background" />
          </div>
          <Button type="submit" size="lg" className="bg-gradient-gold text-gold-foreground hover:opacity-90 shadow-gold h-11">
            Richiedi Miglior Prezzo {tab === "umrah" ? "Umrah" : "Hajj"}
          </Button>
        </form>
      </div>
    </section>
  );
};
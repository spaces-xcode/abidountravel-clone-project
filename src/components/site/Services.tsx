import { Plane, BedDouble, FileCheck2, Bus, ShieldCheck, HeartHandshake } from "lucide-react";

const services = [
  { icon: Plane, title: "Voli", desc: "Voli diretti e con scalo con le migliori compagnie aeree." },
  { icon: FileCheck2, title: "Pratica Visto", desc: "Richieste di visto saudita rapide e senza pensieri." },
  { icon: BedDouble, title: "Hotel", desc: "Hotel 3, 4 e 5 stelle selezionati, più vicini al Haram." },
  { icon: Bus, title: "Trasporti", desc: "Transfer comodi tra aeroporto, Makkah e Madinah." },
  { icon: ShieldCheck, title: "Affidabili e Accreditati", desc: "Accreditati IATA e approvati dal Ministero dell'Hajj." },
  { icon: HeartHandshake, title: "Supporto 24/7", desc: "Assistenza dedicata dalla prenotazione al rientro." },
];

export const Services = () => (
  <section className="py-20 bg-gradient-dark text-primary-foreground">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <p className="text-gold uppercase tracking-[0.25em] text-sm mb-3">Perché Abidoune</p>
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Un Viaggio Sacro, Organizzato alla Perfezione</h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="rounded-2xl p-6 border border-gold/20 bg-primary-foreground/5 backdrop-blur hover:border-gold transition"
          >
            <div className="h-12 w-12 rounded-xl bg-gradient-gold flex items-center justify-center mb-4">
              <Icon className="h-6 w-6 text-gold-foreground" />
            </div>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { Packages } from "@/components/site/Packages";
import { Services } from "@/components/site/Services";
import { Testimonials } from "@/components/site/Testimonials";
import { Footer } from "@/components/site/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main>
      <Hero />
      <EnquiryForm />
      <Packages />
      <Services />
      <Testimonials />
    </main>
    <Footer />
  </div>
);

export default Index;

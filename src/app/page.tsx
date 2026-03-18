import { Navbar } from "@/components/sections/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { EmergencyAndExoticsSection } from "@/components/sections/EmergencySection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { LocationSection } from "@/components/sections/LocationSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { Footer } from "@/components/sections/Footer";
import { FloatWhatsApp } from "@/components/ui/float-whatsapp";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <EmergencyAndExoticsSection />
      <TestimonialsSection />
      <FAQSection />
      <LocationSection />
      <Footer />
      <FloatWhatsApp />
    </main>
  );
}

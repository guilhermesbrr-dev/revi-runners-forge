import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import CalendarSection from "@/components/CalendarSection";
import GallerySection from "@/components/GallerySection";
import RegistrationForm from "@/components/RegistrationForm";
import FAQSection from "@/components/FAQSection";
import SponsorsSection from "@/components/SponsorsSection";
import FooterSection from "@/components/FooterSection";
import FloatingCTA from "@/components/FloatingCTA";

const Index = () => (
  <div className="min-h-screen bg-background">
    <HeroSection />
    <ExperienceSection />
    <CalendarSection />
    <GallerySection />
    <RegistrationForm />
    <FAQSection />
    <SponsorsSection />
    <FooterSection />
    <FloatingCTA />
  </div>
);

export default Index;

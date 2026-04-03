import StickyHeader from "@/components/StickyHeader";
import HeroSection from "@/components/HeroSection";
import SponsorsSection from "@/components/SponsorsSection";
import ExperienceSection from "@/components/ExperienceSection";
import NetworkingSection from "@/components/NetworkingSection";
import CalendarSection from "@/components/CalendarSection";
import MapSection from "@/components/MapSection";
import GallerySection from "@/components/GallerySection";
import RegistrationForm from "@/components/RegistrationForm";
import FAQSection from "@/components/FAQSection";
import FooterSection from "@/components/FooterSection";
import FloatingCTA from "@/components/FloatingCTA";

const Index = () => (
  <div className="min-h-screen bg-background texture-bg">
    <StickyHeader />
    <HeroSection />
    <SponsorsSection />
    <ExperienceSection />
    <NetworkingSection />
    <CalendarSection />
    <MapSection />
    <GallerySection />
    <RegistrationForm />
    <FAQSection />
    <FooterSection />
    <FloatingCTA />
  </div>
);

export default Index;

import HeroSection from "@/components/HeroSection";
import InfoBar from "@/components/InfoBar";
import AboutSection from "@/components/AboutSection";
import CalendarSection from "@/components/CalendarSection";
import RegistrationForm from "@/components/RegistrationForm";
import SponsorsSection from "@/components/SponsorsSection";
import FooterSection from "@/components/FooterSection";
import ScrollFadeIn from "@/components/ScrollFadeIn";

const Index = () => (
  <div className="min-h-screen bg-background">
    <HeroSection />
    <InfoBar />
    <ScrollFadeIn>
      <AboutSection />
    </ScrollFadeIn>
    <ScrollFadeIn>
      <CalendarSection />
    </ScrollFadeIn>
    <ScrollFadeIn>
      <RegistrationForm />
    </ScrollFadeIn>
    <ScrollFadeIn>
      <SponsorsSection />
    </ScrollFadeIn>
    <FooterSection />
  </div>
);

export default Index;

import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import TechServicesSection from '@/components/TechServicesSection';
import IndustriesSection from '@/components/IndustriesSection';
import TeamSection from '@/components/TeamSection';
import ClientsSection from '@/components/ClientsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => (
  <div className="min-h-screen overflow-x-hidden">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <TechServicesSection />
    <IndustriesSection />
    <TeamSection />
    <ClientsSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;

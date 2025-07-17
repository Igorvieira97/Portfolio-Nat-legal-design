import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import ContractsSection from '@/components/ContractsSection';
import ProposalsSection from '@/components/ProposalsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ContractsSection />
        <ProposalsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;


import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SEOWrapper } from "@/components/seo/SEOWrapper";
import HomeButton from "@/components/shared/HomeButton";
import SafewaySEOContent from "./components/safeway/SafewaySEOContent";
import { 
  HeroSection, 
  FeaturesSection, 
  QuickLinksSection, 
  QuoteCTASection 
} from "./components/safeway";

const SafewayInsurance = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-950 to-slate-900">
      <SEOWrapper />
      <Navbar />
      
      <main className="flex-grow">
        <div className="fixed bottom-6 right-6 z-40">
          <HomeButton />
        </div>
        
        {/* Hero Section */}
        <HeroSection />
        
        {/* Features Section */}
        <FeaturesSection />
        
        {/* Quick Links Section */}
        <QuickLinksSection />
        
        {/* Quote CTA Section */}
        <QuoteCTASection />
        
        {/* SEO Content Section - Hidden but important for SEO */}
        <SafewaySEOContent />
      </main>
      
      <Footer />
    </div>
  );
};

export default SafewayInsurance;

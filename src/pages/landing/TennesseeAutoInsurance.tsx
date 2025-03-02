
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { HelmetProvider } from "react-helmet-async";
import { SEOWrapper } from "@/components/seo/SEOWrapper";
import TennesseeHero from "@/components/tennessee/TennesseeHero";
import TennesseeMainContent from "@/components/tennessee/TennesseeMainContent";
import TennesseeCoverageOptions from "@/components/tennessee/TennesseeCoverageOptions";
import TennesseeCities from "@/components/tennessee/TennesseeCities";
import TennesseeCTA from "@/components/tennessee/TennesseeCTA";
import TennesseeContactForm from "@/components/tennessee/TennesseeContactForm";

const TennesseeAutoInsurance = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <HelmetProvider>
        <SEOWrapper />
      </HelmetProvider>
      
      <Navbar />
      <main className="flex-grow">
        <TennesseeHero />
        <TennesseeMainContent />
        <TennesseeCoverageOptions />
        <TennesseeCities />
        <TennesseeCTA />
        <TennesseeContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default TennesseeAutoInsurance;

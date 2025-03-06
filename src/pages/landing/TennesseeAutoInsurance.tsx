
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TennesseeHero from "@/components/tennessee/TennesseeHero";
import TennesseeMainContent from "@/components/tennessee/TennesseeMainContent";
import TennesseeCoverageOptions from "@/components/tennessee/TennesseeCoverageOptions";
import TennesseeCities from "@/components/tennessee/TennesseeCities";
import TennesseeCTA from "@/components/tennessee/TennesseeCTA";
import TennesseeContactForm from "@/components/tennessee/TennesseeContactForm";
import HomeButton from "@/components/shared/HomeButton";

const TennesseeAutoInsurance = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="fixed bottom-6 right-6 z-40">
          <HomeButton />
        </div>
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

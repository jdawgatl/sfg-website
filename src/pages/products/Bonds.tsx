
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BondsHero from "@/components/bonds/BondsHero";
import BondsContent from "@/components/bonds/BondsContent";
import BondsSEO from "@/components/bonds/BondsSEO";
import { SEOWrapper } from "@/components/seo/SEOWrapper";
import HomeButton from "@/components/shared/HomeButton";

const Bonds = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOWrapper />
      <Navbar />

      <main className="flex-grow">
        <div className="fixed bottom-6 right-6 z-40">
          <HomeButton />
        </div>
        <BondsHero />
        <BondsContent />
        <BondsSEO />
      </main>

      <Footer />
    </div>
  );
};

export default Bonds;

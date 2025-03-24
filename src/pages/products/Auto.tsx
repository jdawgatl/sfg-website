
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AutoHero from "@/components/auto/AutoHero";
import AutoContent from "@/components/auto/AutoContent";
import SEOContent from "@/components/auto/SEOContent";
import HomeButton from "@/components/shared/HomeButton";
import { SEOWrapper } from "@/components/seo/SEOWrapper";

const Auto = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOWrapper />
      <Navbar />

      <main className="flex-grow">
        <div className="fixed bottom-6 right-6 z-40">
          <HomeButton />
        </div>
        <AutoHero />
        <AutoContent />
        <SEOContent />
      </main>

      <Footer />
    </div>
  );
};

export default Auto;

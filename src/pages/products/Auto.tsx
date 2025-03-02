
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { HelmetProvider } from "react-helmet-async";
import { SEOWrapper } from "@/components/seo/SEOWrapper";
import AutoHero from "@/components/auto/AutoHero";
import AutoContent from "@/components/auto/AutoContent";
import SEOContent from "@/components/auto/SEOContent";

const Auto = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <HelmetProvider>
        <SEOWrapper />
      </HelmetProvider>
      <Navbar />

      <main className="flex-grow">
        <AutoHero />
        <AutoContent />
        <SEOContent />
      </main>

      <Footer />
    </div>
  );
};

export default Auto;

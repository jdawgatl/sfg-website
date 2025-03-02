
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Helmet } from "react-helmet-async";
import BondsHero from "@/components/bonds/BondsHero";
import BondsContent from "@/components/bonds/BondsContent";
import BondsSEO from "@/components/bonds/BondsSEO";

const Bonds = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Surety Bonds | Title Bonds | Court Bonds | Fayetteville GA</title>
        <meta name="description" content="Fast title bonds, court bonds, probate bonds and contract bonds in Georgia. Easy online bond application and same-day service." />
        <meta name="keywords" content="title bond Georgia, surety bonds Fayetteville GA, court bonds, probate bonds, contract bonds, title bond near me, cheap title bond, lost title bond, vehicle title bond, auto title bond, motor vehicle title bond" />
      </Helmet>
      <Navbar />

      <main className="flex-grow">
        <BondsHero />
        <BondsContent />
        <BondsSEO />
      </main>

      <Footer />
    </div>
  );
};

export default Bonds;

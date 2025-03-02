
import { Link } from "react-router-dom";
import { Shield, Check, DollarSign, FileText, Building, MapPin } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/shared/ContactForm";
import { Card } from "@/components/ui/card";
import { BondType } from "./types/suretyBonds";
import {
  HeroSection,
  BondTypesSection,
  TitleBondSection,
  OtherBondsSection,
  CountiesSection,
  CallToAction,
  SEOContent
} from "./components/surety";

const SuretyBonds = () => {
  const bondTypes: BondType[] = [
    {
      title: "Certificate of Title Bonds",
      icon: FileText,
      description: "Obtain a bonded title when you've lost your vehicle title or purchased a vehicle without proper documentation.",
      link: "/landing/title-bonds",
      featured: true
    },
    {
      title: "Probate & Court Bonds",
      icon: Building,
      description: "Required bonds for estate administrators, guardians, and other court-appointed fiduciaries.",
      link: "#probate-section"
    },
    {
      title: "License & Permit Bonds",
      icon: Check,
      description: "Required for contractors, auto dealers, and businesses to obtain necessary licenses.",
      link: "#license-section"
    },
    {
      title: "Contract Bonds",
      icon: DollarSign,
      description: "Performance bonds, bid bonds, and payment bonds for contractors and construction projects.",
      link: "#contract-section"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <BondTypesSection bondTypes={bondTypes} />
        <TitleBondSection />
        <OtherBondsSection />
        <CountiesSection />
        <CallToAction />

        {/* Contact Form Section */}
        <section className="py-16 bg-white" id="contactSection">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
              <div className="w-20 h-1 bg-[#9b87f5] mx-auto rounded-full mb-6"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Need help with a surety bond? Our bond specialists are ready to assist you.
              </p>
            </div>

            <Card className="p-8">
              <ContactForm />
            </Card>
          </div>
        </section>

        <SEOContent />
      </main>
      <Footer />
    </div>
  );
};

export default SuretyBonds;

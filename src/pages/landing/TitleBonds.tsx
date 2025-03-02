
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/shared/ContactForm";
import { Card } from "@/components/ui/card";
import { 
  HeroTitleSection, 
  WhatIsTitleBondSection, 
  HowItWorksSection, 
  TitleBondTypesSection, 
  BenefitsSection, 
  GeorgiaCountiesSection, 
  CitiesSection, 
  TitleBondCTA, 
  FAQSection, 
  TitleBondSEO 
} from "./components/surety";

const TitleBonds = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Certificate of Title Bonds Georgia | Cheap Title Bonds | Standard Financial Group</title>
        <meta name="description" content="Get cheap certificate of title bonds in Georgia. Same-day service for lost title bonds - serving all 159 counties. Instant online quotes with rates starting at $100. Georgia's trusted source for vehicle title bonds." />
        <meta name="keywords" content="certificate of title bonds Georgia, title bond Georgia, lost title bond, cheap title bond, affordable title bond, bonded title Georgia, motor vehicle title bond, car title bond, mobile home title bond, motorcycle title bond, boat title bond, fayetteville title bond, Atlanta title bond, same day title bond" />
        <link rel="canonical" href="https://sfg-ins.com/landing/title-bonds" />
      </Helmet>

      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <HeroTitleSection />

        {/* What is a Title Bond Section */}
        <WhatIsTitleBondSection />

        {/* How It Works Section */}
        <HowItWorksSection />

        {/* Types of Title Bonds */}
        <TitleBondTypesSection />

        {/* Benefits Section */}
        <BenefitsSection />

        {/* Georgia Counties Section */}
        <GeorgiaCountiesSection />

        {/* Cities Section */}
        <CitiesSection />

        {/* Call To Action */}
        <TitleBondCTA />

        {/* FAQ Section */}
        <FAQSection />

        {/* Contact Form Section */}
        <section className="py-16 bg-gray-50" id="contactSection">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Our Title Bond Specialists</h2>
              <div className="w-20 h-1 bg-[#9b87f5] mx-auto rounded-full mb-6"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Need help with a Georgia title bond? Our specialists are ready to assist you.
              </p>
            </div>

            <Card className="p-8">
              <ContactForm />
            </Card>
          </div>
        </section>

        {/* Hidden SEO Section */}
        <TitleBondSEO />
      </main>
      <Footer />
    </div>
  );
};

export default TitleBonds;

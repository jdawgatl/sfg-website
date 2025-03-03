
import FAQHeader from "./faq/FAQHeader";
import FAQAccordion from "./faq/FAQAccordion";
import SavingsChart from "./faq/SavingsChart";
import ClientSatisfaction from "./faq/ClientSatisfaction";
import ServiceAreas from "./faq/ServiceAreas";
import ResourceCards from "./faq/ResourceCards";
import ContactCTA from "./faq/ContactCTA";
import SEOContent from "./faq/SEOContent";

const FAQSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <FAQHeader />
        <FAQAccordion />
        
        {/* Charts side by side with improved styling */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <SavingsChart />
          <ClientSatisfaction />
        </div>
        
        {/* Added margin-top to create padding before ServiceAreas section */}
        <div className="mt-16">
          <ServiceAreas />
        </div>
        
        {/* Enhanced Resources Cards with expandable content */}
        <div className="mt-12">
          <ResourceCards />
        </div>
        
        <ContactCTA />
        <SEOContent />
      </div>
    </section>
  );
};

export default FAQSection;

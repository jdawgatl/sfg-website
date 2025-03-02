
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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FAQHeader />
        <FAQAccordion />
        <SavingsChart />
        <ClientSatisfaction />
        <ServiceAreas />
        <ResourceCards />
        <ContactCTA />
        <SEOContent />
      </div>
    </section>
  );
};

export default FAQSection;

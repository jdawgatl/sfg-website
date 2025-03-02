
import { Card } from "@/components/ui/card";
import ContactForm from "@/components/shared/ContactForm";

const TennesseeContactForm = () => {
  return (
    <section className="py-16 bg-white" id="contactSection">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Get Your Tennessee Auto Quote</h2>
          <div className="w-20 h-1 bg-sky-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Fill out the form below, and our Tennessee insurance specialists will contact you with a customized quote.
          </p>
        </div>

        <Card className="p-8">
          <ContactForm />
        </Card>
      </div>
    </section>
  );
};

export default TennesseeContactForm;

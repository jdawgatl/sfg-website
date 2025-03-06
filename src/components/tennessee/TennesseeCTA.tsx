
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { trackButtonClick } from "@/utils/analytics";

const TennesseeCTA = () => {
  const handleQuoteClick = () => {
    trackButtonClick("Get Tennessee Quote", "Tennessee CTA Section");
  };

  const handleContactClick = () => {
    trackButtonClick("Contact Us", "Tennessee CTA Section");
  };

  return (
    <section className="py-16 bg-gradient-to-r from-sky-600 to-sky-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Get Tennessee Auto Coverage?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Talk to one of our Tennessee insurance specialists today for a personalized quote.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-white text-sky-600 hover:bg-gray-100"
            onClick={handleQuoteClick}
          >
            <Link to="/quote">Get a Quote</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="bg-transparent border-white text-white hover:bg-white hover:text-sky-600"
            onClick={handleContactClick}
          >
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TennesseeCTA;

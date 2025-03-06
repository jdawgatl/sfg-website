
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { trackButtonClick, trackOutboundLink } from "@/utils/analytics";

const CallToAction = () => {
  const handleBuyOnlineClick = () => {
    trackOutboundLink('https://www.mybondapp.com/23196952');
    trackButtonClick("Buy Bond Online", "Surety Bonds CTA Section");
  };

  const handleTitleBondInfoClick = () => {
    trackButtonClick("Title Bond Information", "Surety Bonds CTA Section");
  };

  return (
    <section className="py-16 bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Get Your Bond?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Purchase your bond online now or contact us for expert guidance and assistance.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={handleBuyOnlineClick}
            size="lg"
            className="bg-white text-[#9b87f5] hover:bg-gray-100 hover:text-[#7E69AB]"
          >
            Buy Bond Online
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="bg-transparent border-white text-white hover:bg-white hover:text-[#9b87f5]"
            onClick={handleTitleBondInfoClick}
          >
            <Link to="/landing/title-bonds">Title Bond Information</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

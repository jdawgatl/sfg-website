
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const QuoteCTASection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-900 to-indigo-900">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready for Affordable Auto Insurance?
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Get a personalized Safeway Insurance quote today through Standard Financial Group, your trusted local agent.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-white text-blue-900 hover:bg-gray-100 text-lg px-8 py-6"
              onClick={() => window.open('https://www.safewayxchange.com/SafewayDirect/Token/AgencyQuote?QuotingId=72650486', '_blank')}
            >
              Get Safeway Quote
            </Button>
            <Button 
              asChild
              className="bg-blue-600 text-white hover:bg-blue-700 border border-white/20 text-lg px-8 py-6"
            >
              <Link to="/contact">Contact Our Agency</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QuoteCTASection;

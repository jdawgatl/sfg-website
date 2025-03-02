
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import TennesseeBenefitsList from "./TennesseeBenefitsList";
import TennesseeSidePanel from "./TennesseeSidePanel";

const TennesseeMainContent = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid md:grid-cols-2 gap-12"
      >
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">
            Affordable Auto Insurance in Tennessee
          </h2>
          <p className="text-lg text-gray-600">
            Get competitive rates on Tennessee auto insurance. We work with multiple
            carriers to find you the best coverage at the lowest rates in the Volunteer State.
          </p>
          
          <TennesseeBenefitsList />
          
          <Button asChild size="lg" className="mt-6 bg-sky-600 hover:bg-sky-700">
            <Link to="/quote">Get a Tennessee Auto Quote</Link>
          </Button>
        </div>
        
        <TennesseeSidePanel />
      </motion.div>
    </div>
  );
};

export default TennesseeMainContent;

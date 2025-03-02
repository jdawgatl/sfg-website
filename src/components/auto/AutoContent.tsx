
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Image } from "@/components/ui/image";
import CoverageOptions from "./CoverageOptions";
import InsuranceTips from "./InsuranceTips";
import CarrierShowcase from "./CarrierShowcase";
import ServiceFeatures from "./ServiceFeatures";

const AutoContent = () => {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid md:grid-cols-2 gap-12"
      >
        <div>
          <h2 className="text-3xl font-bold mb-6">Affordable Auto Insurance Options</h2>
          <p className="text-lg text-gray-700 mb-6">
            At Standard Financial Group, we compare rates from multiple insurance carriers to find you the cheapest car insurance in Fayetteville and throughout Georgia. As an independent agency, we shop the market so you don't have to!
          </p>
          
          <CoverageOptions />
          <InsuranceTips />

          <div className="mt-8">
            <Button asChild size="lg" className="bg-sky-600 hover:bg-sky-700">
              <a href="https://www.safewayxchange.com/SafewayDirect/Token/AgencyQuote?QuotingId=72650486" target="_blank" rel="noopener noreferrer">
                Get Instant Auto Quote
              </a>
            </Button>
          </div>
        </div>

        <div>
          <Image 
            src="/images/camaro.avif" 
            alt="Cheap Car Insurance in Fayetteville GA"
            className="rounded-lg shadow-lg w-full h-[300px] object-cover object-center mb-8"
          />
          
          <CarrierShowcase />
          <ServiceFeatures />
        </div>
      </motion.div>
    </section>
  );
};

export default AutoContent;

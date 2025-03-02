
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const TitleBondSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Certificate of Title Bonds</h2>
            <div className="w-20 h-1 bg-[#9b87f5] rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 mb-6">
              A Certificate of Title Bond (also known as a Lost Title Bond) allows you to obtain a bonded title when you don't have proper ownership documentation for your vehicle.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Same-day issuance available for most title bonds",
                "Competitive rates starting at just $100",
                "Serving all 159 counties in Georgia",
                "No credit check required for most applicants",
                "Expert guidance through the entire bonding process"
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <Check className="h-5 w-5 text-[#7E69AB] mt-1 mr-2 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Button
              asChild
              size="lg"
              className="bg-[#9b87f5] hover:bg-[#7E69AB]"
            >
              <Link to="/landing/title-bonds">Learn More About Title Bonds</Link>
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <img 
                src="/images/products-surety-surety-bonds.avif" 
                alt="Certificate of Title Bond" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1F2C]/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Need a Title Bond?</h3>
                <p className="mb-4">Purchase your title bond online in minutes</p>
                <Button
                  onClick={() => window.open('https://www.mybondapp.com/23196952', '_blank')}
                  className="bg-white text-[#9b87f5] hover:bg-gray-100"
                >
                  Buy Now
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TitleBondSection;

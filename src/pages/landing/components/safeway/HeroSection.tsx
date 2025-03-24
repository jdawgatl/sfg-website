
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 bg-[url('/images/safeway-insurance.avif')] bg-no-repeat bg-cover bg-center opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 to-indigo-900/60 backdrop-blur-sm"></div>
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 shadow-2xl">
            <img 
              src="/images/safeway-insurance.avif" 
              alt="Safeway Insurance Company" 
              className="h-24 md:h-28 mx-auto mb-6"
            />
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Safeway Insurance: <span className="text-blue-400">Affordable</span> Auto Coverage
            </h1>
            
            <p className="text-lg text-white/90 mb-8">
              Trusted Safeway Agent in Georgia providing competitive rates, low down payments, and exceptional service.
            </p>
            
            <Button 
              className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
              onClick={() => window.open('https://www.safewayxchange.com/SafewayDirect/Token/AgencyQuote?QuotingId=72650486', '_blank')}
            >
              Get Your Safeway Quote Now
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

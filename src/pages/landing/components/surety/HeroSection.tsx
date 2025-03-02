
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Georgia's Trusted Surety Bond Provider
            </h1>
            <p className="text-lg mb-8 max-w-lg">
              Fast, affordable surety bonds for any need - available online with same-day service throughout Georgia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-white text-[#9b87f5] hover:bg-gray-100 hover:text-[#7E69AB]"
              >
                <Link to="/landing/title-bonds">Title Bonds</Link>
              </Button>
              <Button
                onClick={() => window.open('https://www.mybondapp.com/23196952', '_blank')}
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-[#9b87f5]"
              >
                Buy Bond Online
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:block"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-[#9b87f5] opacity-20 rounded-xl transform rotate-3"></div>
              <img
                src="/images/products-surety-cover.avif"
                alt="Surety bonds"
                className="relative z-10 rounded-xl shadow-xl max-h-[400px] w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="fill-white">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,42.7C1120,32,1280,32,1360,32L1440,32L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;

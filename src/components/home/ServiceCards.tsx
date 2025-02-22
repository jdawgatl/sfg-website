import { Link } from "react-router-dom";
import { Car, Home, Building, Shield, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
const services = [{
  title: "Auto Insurance",
  description: "Comprehensive coverage for your vehicles",
  icon: Car,
  href: "/products/auto",
  image: "/images/service-auto-card.avif"
}, {
  title: "Home Insurance",
  description: "Protect your most valuable asset",
  icon: Home,
  href: "/products/home",
  image: "/images/service-home-card.avif"
}, {
  title: "Commercial Insurance",
  description: "Tailored solutions for your business",
  icon: Building,
  href: "/products/commercial",
  image: "/images/service-commercial-card.avif"
}, {
  title: "Surety Bonds",
  description: "Guarantee your contractual obligations",
  icon: Shield,
  href: "/products/bonds",
  image: "/images/service-surety-card.avif"
}];
const ServiceCards = () => {
  return <div className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5
      }} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Products
          </h2>
          <div className="w-20 h-1 bg-sky-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Choose from our comprehensive range of insurance solutions.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => <motion.div key={service.title} initial={{
          opacity: 0,
          y: 50
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: index * 0.1
        }}>
              <Link to={service.href} className="block transform hover:scale-105 transition-all duration-300">
                <Card className="h-full overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                  <div className="relative h-48 overflow-hidden">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="flex items-center gap-2">
                        <service.icon className="h-6 w-6" />
                        <h3 className="text-xl font-semibold">{service.title}</h3>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-gray-600">{service.description}</p>
                    <div className="mt-4 flex items-center text-sky-600 font-medium group">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>)}
        </div>
      </div>
    </div>;
};
export default ServiceCards;
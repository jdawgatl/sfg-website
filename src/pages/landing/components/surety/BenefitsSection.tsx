
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Clock, MapPin, Settings, Shield } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Same-Day Service",
      description: "Most title bonds can be issued the same day you apply."
    },
    {
      icon: Shield,
      title: "Competitive Rates",
      description: "Title bond rates starting at just $100 for most vehicles."
    },
    {
      icon: Settings,
      title: "Experienced Specialists",
      description: "Our bond experts have helped thousands of Georgia residents."
    },
    {
      icon: MapPin,
      title: "Statewide Service",
      description: "Serving all 159 counties in Georgia remotely and in-person."
    },
    {
      icon: Check,
      title: "No Credit Check",
      description: "Most title bonds don't require credit checks or financial statements."
    }
  ];

  return (
    <section className="py-16 bg-[#E5DEFF]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us for Your Title Bond?</h2>
            <div className="w-20 h-1 bg-[#9b87f5] rounded-full mb-6"></div>
            
            <ul className="space-y-4">
              {benefits.map((item, i) => (
                <li key={i} className="flex items-start">
                  <div className="w-10 h-10 bg-[#9b87f5]/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <item.icon className="h-5 w-5 text-[#7E69AB]" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative max-w-md">
              <div className="absolute inset-0 bg-[#9b87f5] opacity-20 rounded-xl transform -rotate-3"></div>
              <Card className="p-8 relative z-10">
                <h3 className="text-2xl font-bold mb-4">Get an Instant Quote</h3>
                <p className="text-gray-600 mb-6">
                  Purchase your title bond online now or contact us for expert assistance.
                </p>
                <Button
                  onClick={() => window.open('https://www.mybondapp.com/23196952', '_blank')}
                  className="w-full bg-[#9b87f5] hover:bg-[#7E69AB] mb-4"
                >
                  Buy Title Bond Online
                </Button>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => {
                    document.getElementById('contactSection')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Contact Us
                </Button>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;

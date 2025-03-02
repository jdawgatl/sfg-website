
import { motion } from "framer-motion";
import { Car, FileText, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";

const WhatIsTitleBondSection = () => {
  const features = [
    {
      icon: Car,
      title: "Replace a Lost Title",
      description: "If you've lost your vehicle title or it was destroyed, a title bond helps you obtain a replacement."
    },
    {
      icon: FileText,
      title: "Purchase Without Title",
      description: "If you purchased a vehicle without receiving a properly signed title, a title bond allows you to register it."
    },
    {
      icon: Shield,
      title: "Protection for Georgia",
      description: "The bond protects the state and any previous owners if someone later claims ownership of the vehicle."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What is a Certificate of Title Bond?</h2>
          <div className="w-20 h-1 bg-[#9b87f5] mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A Certificate of Title Bond (also called a Lost Title Bond) is required when you need to obtain a bonded title for a vehicle when you don't have proper ownership documentation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full">
                <div className="w-12 h-12 bg-[#E5DEFF] rounded-full flex items-center justify-center mb-4">
                  <item.icon className="h-6 w-6 text-[#7E69AB]" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIsTitleBondSection;

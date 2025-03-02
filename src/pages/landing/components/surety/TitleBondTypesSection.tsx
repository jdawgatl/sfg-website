
import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import { Card } from "@/components/ui/card";

const TitleBondTypesSection = () => {
  const bondTypes = [
    {
      title: "Car & Truck Title Bonds",
      description: "Title bonds for passenger vehicles, trucks, SUVs, and vans of all makes and models."
    },
    {
      title: "Motorcycle Title Bonds",
      description: "Lost the title to your motorcycle? Get a bonded title to legally register your bike."
    },
    {
      title: "ATV & UTV Title Bonds",
      description: "Title bonds for off-road vehicles, ATVs, UTVs, and other recreational vehicles."
    },
    {
      title: "Mobile Home Title Bonds",
      description: "Specialized title bonds for mobile homes and manufactured housing."
    },
    {
      title: "Boat & Watercraft Title Bonds",
      description: "Title bonds for boats, jet skis, and other watercraft without proper documentation."
    },
    {
      title: "RV & Camper Title Bonds",
      description: "Title bonds for recreational vehicles, motorhomes, and campers."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Types of Vehicle Title Bonds We Offer</h2>
          <div className="w-20 h-1 bg-[#9b87f5] mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide title bonds for all types of vehicles throughout Georgia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bondTypes.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full flex items-start space-x-4">
                <Shield className="h-6 w-6 text-[#9b87f5] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TitleBondTypesSection;

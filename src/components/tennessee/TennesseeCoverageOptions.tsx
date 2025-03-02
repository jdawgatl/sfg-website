
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Shield, BadgeCheck, Car } from "lucide-react";

const TennesseeCoverageOptions = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Tennessee Coverage Options</h2>
          <div className="w-20 h-1 bg-sky-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We offer a variety of coverage options to protect you and your vehicle on Tennessee roads.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Liability Coverage",
              icon: Shield,
              description: "Meets Tennessee's minimum requirements and protects you against claims from others."
            },
            {
              title: "Comprehensive Coverage",
              icon: BadgeCheck,
              description: "Protects against non-collision damage like theft, vandalism, and weather events."
            },
            {
              title: "Collision Coverage",
              icon: Car,
              description: "Covers damage to your vehicle from collisions regardless of fault."
            }
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full">
                <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center mb-4">
                  <item.icon className="h-6 w-6 text-sky-600" />
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

export default TennesseeCoverageOptions;

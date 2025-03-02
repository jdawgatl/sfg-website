
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

// Client satisfaction data with custom colors
const satisfactionMetrics = [
  { name: "Customer Satisfaction", value: 96, color: "from-blue-400 to-blue-600" },
  { name: "Policy Customization", value: 94, color: "from-purple-400 to-purple-600" },
  { name: "Response Time", value: 98, color: "from-emerald-400 to-emerald-600" },
  { name: "Service Quality", value: 95, color: "from-amber-400 to-amber-600" }
];

const ClientSatisfaction = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Card className="p-6 h-full shadow-md hover:shadow-lg transition-shadow duration-300">
        <h3 className="text-xl font-bold text-center mb-6">Client Satisfaction</h3>
        <div className="space-y-4">
          {satisfactionMetrics.map((metric, index) => (
            <motion.div 
              key={index} 
              className="space-y-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
            >
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">{metric.name}</span>
                <span className="text-sm font-bold bg-gradient-to-r from-sky-500 to-sky-700 text-white px-2 py-0.5 rounded-full">
                  {metric.value}%
                </span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
                <motion.div 
                  className={`bg-gradient-to-r ${metric.color} h-3 rounded-full`} 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${metric.value}%` }}
                  transition={{ 
                    duration: 1.2, 
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </Card>
    </motion.div>
  );
};

export default ClientSatisfaction;

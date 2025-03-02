
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

// Client satisfaction data
const satisfactionMetrics = [
  { name: "Customer Satisfaction", value: 96 },
  { name: "Policy Customization", value: 94 },
  { name: "Response Time", value: 98 },
  { name: "Service Quality", value: 95 }
];

const ClientSatisfaction = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mb-10"
    >
      <Card className="p-6">
        <h3 className="text-xl font-bold text-center mb-6">Client Satisfaction</h3>
        <div className="space-y-6">
          {satisfactionMetrics.map((metric, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm font-medium">{metric.name}</span>
                <span className="text-sm font-medium">{metric.value}%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-3">
                <div 
                  className="bg-gradient-to-r from-sky-400 to-sky-600 h-3 rounded-full" 
                  style={{ width: `${metric.value}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </motion.div>
  );
};

export default ClientSatisfaction;


import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

// Insurance resources content
const insuranceResources = [
  {
    title: "Understanding Auto Insurance Deductibles",
    description: "How to choose the right deductible for your needs and budget while balancing premium costs and out-of-pocket expenses."
  },
  {
    title: "Home Insurance Coverage Gaps",
    description: "Identify and address common coverage gaps that could leave you financially vulnerable in the event of a disaster."
  },
  {
    title: "Business Insurance Essentials",
    description: "Key coverages every business owner should consider to protect their company from common risks and liabilities."
  },
  {
    title: "Insurance Tips for New Homeowners",
    description: "What first-time homebuyers need to know about protecting their investment with the right insurance coverage."
  }
];

const ResourceCards = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <div className="text-center mb-4">
        <h3 className="text-xl font-bold">Insurance Resources</h3>
        <p className="text-sm text-gray-600 mt-1">
          Check out our latest articles to stay informed about insurance topics
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {insuranceResources.map((resource, index) => (
          <Card key={index} className="p-4 hover:shadow-md transition-shadow">
            <h4 className="font-medium text-sm mb-2">{resource.title}</h4>
            <p className="text-xs text-gray-600">{resource.description}</p>
            <div className="mt-3">
              <a href="#" className="text-xs text-sky-600 hover:underline">Read more →</a>
            </div>
          </Card>
        ))}
      </div>
    </motion.div>
  );
};

export default ResourceCards;

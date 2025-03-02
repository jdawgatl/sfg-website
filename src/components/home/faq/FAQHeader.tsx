
import { motion } from "framer-motion";

const FAQHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center mb-12"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Frequently Asked Questions
      </h2>
      <div className="w-20 h-1 bg-sky-600 mx-auto rounded-full mb-6"></div>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Find answers to common questions about insurance and our services.
      </p>
    </motion.div>
  );
};

export default FAQHeader;

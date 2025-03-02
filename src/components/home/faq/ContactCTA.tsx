
import { motion } from "framer-motion";

const ContactCTA = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mt-8 text-center"
    >
      <p className="text-gray-600">
        Still have questions? <a href="/contact" className="text-sky-600 font-medium hover:underline">Contact us</a> for personalized assistance.
      </p>
    </motion.div>
  );
};

export default ContactCTA;

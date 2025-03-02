
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ContactCTA = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mt-8 text-center"
    >
      <p className="text-gray-600">
        Still have questions? <Link to="/contact" className="text-sky-600 font-medium hover:underline">Contact us</Link> for personalized assistance or <Link to="/blog" className="text-sky-600 font-medium hover:underline">visit our blog</Link> for more insurance resources.
      </p>
    </motion.div>
  );
};

export default ContactCTA;

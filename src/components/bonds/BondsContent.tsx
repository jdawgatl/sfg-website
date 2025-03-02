
import { motion } from "framer-motion";
import TitleBondInfo from "./TitleBondInfo";
import OtherBondsInfo from "./OtherBondsInfo";

const BondsContent = () => {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid md:grid-cols-2 gap-12"
      >
        <TitleBondInfo />
        <OtherBondsInfo />
      </motion.div>
    </section>
  );
};

export default BondsContent;

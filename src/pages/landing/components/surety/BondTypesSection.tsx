
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { BondType } from "../../types/suretyBonds";

interface BondTypesSectionProps {
  bondTypes: BondType[];
}

const BondTypesSection = ({ bondTypes }: BondTypesSectionProps) => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Surety Bonds for Every Need</h2>
          <div className="w-20 h-1 bg-[#9b87f5] mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of surety bonds throughout Georgia with competitive rates and fast service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {bondTypes.map((bond, index) => (
            <motion.div
              key={bond.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link 
                to={bond.link}
                className={`block h-full ${bond.featured ? 'transform hover:scale-105 transition-transform' : 'hover:shadow-lg'}`}
              >
                <Card className={`p-6 h-full ${bond.featured ? 'border-[#9b87f5] border-2 shadow-lg' : ''}`}>
                  <div className={`w-12 h-12 ${bond.featured ? 'bg-[#9b87f5]' : 'bg-[#E5DEFF]'} rounded-full flex items-center justify-center mb-4`}>
                    <bond.icon className={`h-6 w-6 ${bond.featured ? 'text-white' : 'text-[#7E69AB]'}`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{bond.title}</h3>
                  <p className="text-gray-600">{bond.description}</p>
                  {bond.featured && (
                    <span className="inline-block mt-4 text-[#9b87f5] font-medium">
                      Learn more →
                    </span>
                  )}
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BondTypesSection;

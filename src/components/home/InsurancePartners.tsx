
import { motion } from "framer-motion";
import { carriers } from "@/data/carriers";
import { Card } from "@/components/ui/card";
import { Image } from "@/components/ui/image";

const InsurancePartners = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Trusted Partners
          </h2>
          <div className="w-20 h-1 bg-sky-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We work with the nation's top-rated insurance carriers to provide you with competitive rates and comprehensive coverage options.
          </p>
        </motion.div>
        
        <Card className="p-6 shadow-md hover:shadow-xl transition-shadow">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {carriers.map((carrier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex items-center justify-center p-4 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <div className="relative aspect-square w-full max-w-[120px]">
                  <Image
                    src={carrier.logo}
                    alt={carrier.name}
                    width={120}
                    height={120}
                    className="object-contain"
                    loading={index < 5 ? "eager" : "lazy"}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default InsurancePartners;

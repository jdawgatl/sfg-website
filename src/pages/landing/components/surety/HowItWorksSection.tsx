
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const HowItWorksSection = () => {
  const steps = [
    {
      step: "1",
      title: "Contact Us",
      description: "Get in touch with our bond specialists to discuss your specific title bond needs."
    },
    {
      step: "2",
      title: "Provide Information",
      description: "Share details about your vehicle including VIN, make, model, and year."
    },
    {
      step: "3",
      title: "Get Your Bond",
      description: "We'll issue your title bond, often the same day you apply."
    },
    {
      step: "4",
      title: "Visit DMV",
      description: "Take your bond to the tag office or Georgia DOR to obtain your bonded vehicle title."
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How Title Bonds Work in Georgia</h2>
          <div className="w-20 h-1 bg-[#9b87f5] mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Getting a certificate of title bond in Georgia is a straightforward process when you work with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full relative">
                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-[#9b87f5] text-white flex items-center justify-center font-bold text-lg">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-3 mt-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            onClick={() => window.open('https://www.mybondapp.com/23196952', '_blank')}
            size="lg"
            className="bg-[#9b87f5] hover:bg-[#7E69AB]"
          >
            Get Your Title Bond Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

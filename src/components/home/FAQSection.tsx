
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

const faqs = [
  {
    question: "Why should I use an independent insurance agent?",
    answer: "Independent agents work with multiple insurance carriers, allowing us to compare rates and coverage options to find the best fit for your specific needs. We're not tied to a single company, so we can truly put your interests first."
  },
  {
    question: "How can I save money on my insurance premiums?",
    answer: "There are several ways to save, including bundling multiple policies, maintaining a good credit score, increasing deductibles, and qualifying for discounts. As your agent, we'll explore all available discounts and savings opportunities for you."
  },
  {
    question: "What types of insurance do you offer?",
    answer: "We offer a comprehensive range of insurance products including auto, home, commercial, life, health, and specialty insurance like surety bonds. Whatever your insurance needs, we can help you find the right coverage."
  },
  {
    question: "How do I file a claim?",
    answer: "You can file a claim directly with your insurance carrier or contact our office for assistance. We're here to guide you through the claims process and advocate on your behalf to ensure a fair and prompt settlement."
  },
  {
    question: "How often should I review my insurance coverage?",
    answer: "We recommend reviewing your insurance at least annually, as well as after major life events like purchasing a home, getting married, having children, or starting a business. Regular reviews help ensure you're adequately covered as your circumstances change."
  }
];

const FAQSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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

        <Card className="p-6">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`}>
                <AccordionTrigger className="text-left font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Card>

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
      </div>
    </section>
  );
};

export default FAQSection;

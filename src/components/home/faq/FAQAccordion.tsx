
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
    question: "What is the history of Standard Financial Group?",
    answer: "Standard Financial Group was formally known as S & S Insurance Agency. With over 30 years of experience serving Georgia and surrounding states, we've built a reputation for personalized service and finding the best coverage options for our clients."
  },
  {
    question: "Where do you provide insurance services?",
    answer: "We're proud to serve all counties across Georgia including Fulton, Fayette, Coweta, Clayton, Henry, Spalding, DeKalb, Gwinnett, Cobb, Rockdale, Douglas, Cherokee, and all other GA counties. Our services extend to cities such as Atlanta, Fayetteville, Peachtree City, Newnan, McDonough, Jonesboro, Marietta, Alpharetta, Roswell, Sandy Springs, Decatur, and throughout Georgia. We're also licensed in Tennessee and Mississippi, providing multi-state coverage options for our clients."
  },
  {
    question: "How often should I review my insurance coverage?",
    answer: "We recommend reviewing your insurance at least annually, as well as after major life events like purchasing a home, getting married, having children, or starting a business. Regular reviews help ensure you're adequately covered as your circumstances change."
  }
];

const FAQAccordion = () => {
  return (
    <Card className="p-6 mb-10">
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
  );
};

export default FAQAccordion;

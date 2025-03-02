
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";

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
    answer: "We're proud to serve all counties across Georgia including Fulton, Fayette, Coweta, Clayton, Henry, Spalding, and all other GA counties. We're also licensed in Tennessee and Mississippi, providing multi-state coverage options for our clients."
  },
  {
    question: "How often should I review my insurance coverage?",
    answer: "We recommend reviewing your insurance at least annually, as well as after major life events like purchasing a home, getting married, having children, or starting a business. Regular reviews help ensure you're adequately covered as your circumstances change."
  }
];

// Client savings data for visualization
const savingsData = [
  { name: "Auto Insurance", value: 32, color: "#0088FE" },
  { name: "Home Insurance", value: 28, color: "#00C49F" },
  { name: "Commercial", value: 18, color: "#FFBB28" },
  { name: "Surety Bonds", value: 22, color: "#FF8042" }
];

// Client satisfaction data
const satisfactionMetrics = [
  { name: "Customer Satisfaction", value: 96 },
  { name: "Claims Assistance", value: 92 },
  { name: "Policy Customization", value: 94 },
  { name: "Response Time", value: 98 }
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

        {/* Client Savings Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-10"
        >
          <Card className="p-6">
            <h3 className="text-xl font-bold text-center mb-6">Average Client Savings</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={savingsData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  >
                    {savingsData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `${value}%`} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <p className="text-center text-sm text-gray-500 mt-4">
              Average percentage savings by insurance type compared to previous providers
            </p>
          </Card>
        </motion.div>

        {/* Client Satisfaction Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-10"
        >
          <Card className="p-6">
            <h3 className="text-xl font-bold text-center mb-6">Client Satisfaction</h3>
            <div className="space-y-6">
              {satisfactionMetrics.map((metric, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">{metric.name}</span>
                    <span className="text-sm font-medium">{metric.value}%</span>
                  </div>
                  <Progress value={metric.value} className="h-2" />
                </div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Service Areas Collapsible */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-8"
        >
          <Card className="p-6">
            <Collapsible className="w-full">
              <div className="flex items-center justify-between space-x-4 px-2">
                <h3 className="text-xl font-bold">Our Service Areas</h3>
                <CollapsibleTrigger className="hover:bg-gray-100 p-2 rounded-full">
                  <ChevronDown className="h-5 w-5" />
                </CollapsibleTrigger>
              </div>
              <CollapsibleContent className="mt-4 space-y-3">
                <div>
                  <h4 className="font-medium mb-2">Georgia</h4>
                  <p className="text-sm text-gray-600">
                    Proudly serving all counties including Fulton, DeKalb, Gwinnett, Cobb, Clayton, Fayette, Coweta, Henry, and more.
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    Cities include: Atlanta, Fayetteville, Peachtree City, Newnan, McDonough, Jonesboro, Marietta, Alpharetta, and throughout the state.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Tennessee &amp; Mississippi</h4>
                  <p className="text-sm text-gray-600">
                    We're also licensed to serve clients throughout Tennessee and Mississippi. Contact us for details about available coverage options in your area.
                  </p>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </Card>
        </motion.div>

        {/* Latest Blog Posts */}
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
          <div className="grid grid-cols-2 gap-4">
            <Card className="p-4 hover:shadow-md transition-shadow">
              <h4 className="font-medium text-sm mb-1">Understanding Auto Insurance Deductibles</h4>
              <p className="text-xs text-gray-600">How to choose the right deductible for your needs and budget</p>
            </Card>
            <Card className="p-4 hover:shadow-md transition-shadow">
              <h4 className="font-medium text-sm mb-1">Home Insurance Coverage Gaps</h4>
              <p className="text-xs text-gray-600">Common coverage gaps and how to address them</p>
            </Card>
          </div>
        </motion.div>

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

      {/* Hidden SEO Content */}
      <div className="hidden">
        <h2>Insurance Services Throughout Georgia, Tennessee, and Mississippi</h2>
        <p>
          Standard Financial Group, formerly known as S & S Insurance Agency, provides affordable insurance coverage
          throughout Georgia, Tennessee, and Mississippi. With our office in Fayetteville, GA, we serve clients in
          Atlanta, Peachtree City, Newnan, McDonough, Jonesboro, Marietta, Alpharetta and all counties in Georgia.
        </p>
        <p>
          Georgia counties served: Fulton, DeKalb, Gwinnett, Cobb, Clayton, Fayette, Coweta, Henry, Rockdale, Douglas,
          Cherokee, Forsyth, Paulding, Bartow, Newton, Walton, Spalding, Carroll, Hall, Barrow, Columbia, Richmond,
          Muscogee, Bibb, Houston, Chatham, Lowndes, Glynn, Whitfield, Floyd, Clarke, Dougherty, Bulloch, Troup, Liberty,
          Walker, Catoosa, Effingham, Camden, Baldwin, Gordon, Habersham, Coffee, Tift, Laurens, Ware, Jackson,
          and all 159 counties.
        </p>
        <p>
          We also provide competitive insurance options in Tennessee and Mississippi.
        </p>
      </div>
    </section>
  );
};

export default FAQSection;


import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
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
    answer: "We're proud to serve all counties across Georgia including Fulton, Fayette, Coweta, Clayton, Henry, Spalding, DeKalb, Gwinnett, Cobb, Rockdale, Douglas, Cherokee, and all other GA counties. Our services extend to cities such as Atlanta, Fayetteville, Peachtree City, Newnan, McDonough, Jonesboro, Marietta, Alpharetta, Roswell, Sandy Springs, Decatur, and throughout Georgia. We're also licensed in Tennessee and Mississippi, providing multi-state coverage options for our clients."
  },
  {
    question: "How often should I review my insurance coverage?",
    answer: "We recommend reviewing your insurance at least annually, as well as after major life events like purchasing a home, getting married, having children, or starting a business. Regular reviews help ensure you're adequately covered as your circumstances change."
  }
];

// Average annual client savings data for visualization
const savingsData = [
  { name: "Auto Insurance", savings: 485 },
  { name: "Home Insurance", savings: 380 },
  { name: "Commercial", savings: 1250 },
  { name: "Surety Bonds", savings: 275 }
];

// Client satisfaction data
const satisfactionMetrics = [
  { name: "Customer Satisfaction", value: 96 },
  { name: "Policy Customization", value: 94 },
  { name: "Response Time", value: 98 },
  { name: "Service Quality", value: 95 }
];

// Insurance resources content
const insuranceResources = [
  {
    title: "Understanding Auto Insurance Deductibles",
    description: "How to choose the right deductible for your needs and budget while balancing premium costs and out-of-pocket expenses."
  },
  {
    title: "Home Insurance Coverage Gaps",
    description: "Identify and address common coverage gaps that could leave you financially vulnerable in the event of a disaster."
  },
  {
    title: "Business Insurance Essentials",
    description: "Key coverages every business owner should consider to protect their company from common risks and liabilities."
  },
  {
    title: "Insurance Tips for New Homeowners",
    description: "What first-time homebuyers need to know about protecting their investment with the right insurance coverage."
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

        {/* Average Annual Client Savings Bar Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-10"
        >
          <Card className="p-6">
            <h3 className="text-xl font-bold text-center mb-6">Average Annual Client Savings</h3>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={savingsData}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis label={{ value: 'Dollars Saved ($)', angle: -90, position: 'insideLeft' }} />
                  <Tooltip formatter={(value) => [`$${value}`, "Annual Savings"]} />
                  <Legend />
                  <Bar dataKey="savings" name="Annual Savings" fill="#0284C7" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-center text-sm text-gray-500 mt-4">
              Average dollar savings per year based on client data compared to previous providers
            </p>
          </Card>
        </motion.div>

        {/* Client Satisfaction Stats with Updated Progress Bars */}
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
                  <div className="w-full bg-gray-100 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-sky-400 to-sky-600 h-3 rounded-full" 
                      style={{ width: `${metric.value}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Service Areas Collapsible with Enhanced Content */}
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
              <CollapsibleContent className="mt-4 space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Georgia Counties</h4>
                  <p className="text-sm text-gray-600">
                    Proudly serving all 159 counties across Georgia including: Fulton, DeKalb, Gwinnett, Cobb, Clayton, 
                    Fayette, Coweta, Henry, Rockdale, Douglas, Cherokee, Forsyth, Paulding, Bartow, Newton, Walton, 
                    Spalding, Carroll, Hall, Barrow, Columbia, Richmond, Muscogee, Bibb, Houston, Chatham, Lowndes, 
                    Glynn, Whitfield, Floyd, Clarke, Dougherty, Bulloch, Troup, Liberty, Walker, Catoosa, Effingham, 
                    Camden, Baldwin, Gordon, Habersham, Coffee, Tift, Laurens, Ware, Jackson, and all others.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Georgia Cities</h4>
                  <p className="text-sm text-gray-600">
                    Cities include: Atlanta, Fayetteville, Peachtree City, Newnan, McDonough, Jonesboro, Marietta, 
                    Alpharetta, Roswell, Sandy Springs, Decatur, Dunwoody, Brookhaven, Smyrna, Kennesaw, Acworth, 
                    Douglasville, Stockbridge, Griffin, Macon, Columbus, Augusta, Savannah, Athens, Valdosta, Albany, 
                    Rome, Brunswick, Gainesville, Lawrenceville, Norcross, Duluth, Conyers, Covington, Cartersville, 
                    Dalton, LaGrange, Statesboro, Warner Robins, Hinesville, and throughout the state.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Tennessee &amp; Mississippi</h4>
                  <p className="text-sm text-gray-600">
                    We're also licensed to serve clients throughout Tennessee and Mississippi. Our Tennessee coverage includes
                    major areas like Nashville, Memphis, Knoxville, Chattanooga, and surrounding communities. In Mississippi,
                    we provide service to Jackson, Gulfport, Biloxi, Hattiesburg, and more. Contact us for details about 
                    available coverage options in your specific area.
                  </p>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </Card>
        </motion.div>

        {/* Enhanced Insurance Resources */}
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {insuranceResources.map((resource, index) => (
              <Card key={index} className="p-4 hover:shadow-md transition-shadow">
                <h4 className="font-medium text-sm mb-2">{resource.title}</h4>
                <p className="text-xs text-gray-600">{resource.description}</p>
                <div className="mt-3">
                  <a href="#" className="text-xs text-sky-600 hover:underline">Read more →</a>
                </div>
              </Card>
            ))}
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

      {/* Enhanced SEO Content */}
      <div className="hidden">
        <h2>Insurance Services Throughout Georgia, Tennessee, and Mississippi</h2>
        <p>
          Standard Financial Group, formerly known as S & S Insurance Agency, provides affordable insurance coverage
          throughout Georgia, Tennessee, and Mississippi. With our office in Fayetteville, GA, we serve clients in
          Atlanta, Peachtree City, Newnan, McDonough, Jonesboro, Marietta, Alpharetta, Roswell, Sandy Springs, Decatur,
          Dunwoody, Brookhaven, Smyrna, Kennesaw, Acworth, Douglasville, Stockbridge, Griffin and all counties in Georgia.
        </p>
        <p>
          Georgia counties served: Fulton, DeKalb, Gwinnett, Cobb, Clayton, Fayette, Coweta, Henry, Rockdale, Douglas,
          Cherokee, Forsyth, Paulding, Bartow, Newton, Walton, Spalding, Carroll, Hall, Barrow, Columbia, Richmond,
          Muscogee, Bibb, Houston, Chatham, Lowndes, Glynn, Whitfield, Floyd, Clarke, Dougherty, Bulloch, Troup, Liberty,
          Walker, Catoosa, Effingham, Camden, Baldwin, Gordon, Habersham, Coffee, Tift, Laurens, Ware, Jackson, Oconee,
          Morgan, Pickens, Fannin, Union, Towns, Rabun, White, Lumpkin, Dawson, Gilmer, Murray, Haralson, Polk, Chattooga,
          Stephens, Banks, Franklin, Hart, Elbert, Madison, Oglethorpe, Wilkes, Lincoln, Taliaferro, Greene, Putnam,
          Jasper, Butts, Lamar, Pike, Upson, Meriwether, Harris, Talbot, Taylor, Crawford, Peach, Monroe, Jones, Twiggs,
          Wilkinson, Washington, Johnson, Jefferson, Burke, McDuffie, Warren, Glascock, Hancock, Baldwin, Wilcox, Pulaski,
          Bleckley, Dodge, Telfair, Wheeler, Montgomery, Treutlen, Emanuel, Candler, Bulloch, Evans, Tattnall, Toombs,
          Jeff Davis, Appling, Wayne, Long, Liberty, Bryan, McIntosh, Glynn, Camden, Charlton, Brantley, Pierce, Bacon,
          Ware, Clinch, Atkinson, Lanier, Lowndes, Echols, Brooks, Thomas, Grady, Decatur, Seminole, Early, Miller,
          Baker, Mitchell, Colquitt, Worth, Tift, Turner, Ben Hill, Irwin, Coffee, Berrien, Cook, and all 159 counties.
        </p>
        <p>
          We also provide competitive insurance options in Tennessee and Mississippi, covering major metropolitan areas and
          rural communities alike. Our licensed agents are ready to help you find the right coverage at the best rates.
        </p>
      </div>
    </section>
  );
};

export default FAQSection;

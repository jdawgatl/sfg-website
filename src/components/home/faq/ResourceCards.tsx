
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

// Insurance resources content with expanded content
const insuranceResources = [
  {
    title: "Understanding Auto Insurance Deductibles",
    description: "How to choose the right deductible for your needs and budget while balancing premium costs and out-of-pocket expenses.",
    slug: "understanding-auto-insurance-deductibles",
    content: `
      <div class="space-y-4">
        <h3 class="text-lg font-semibold">What is an Auto Insurance Deductible?</h3>
        <p>An auto insurance deductible is the amount you agree to pay out of pocket before your insurance coverage kicks in after a covered accident or claim. For example, if you have a $500 deductible and $2,000 in damage, you'll pay $500 and your insurer will cover the remaining $1,500.</p>
        
        <h3 class="text-lg font-semibold">How Deductibles Affect Your Premium</h3>
        <p>Generally, the higher your deductible, the lower your premium (monthly or annual payment). This is because you're taking on more financial risk. Conversely, a lower deductible means you'll pay more for your policy but less out of pocket when filing a claim.</p>
        
        <h4 class="text-md font-medium mt-3">Finding the Right Balance</h4>
        <p>When selecting a deductible, consider:</p>
        <ul class="list-disc pl-5 space-y-1">
          <li>Your emergency savings and ability to pay the deductible if needed</li>
          <li>The value of your vehicle (higher-value cars may warrant lower deductibles)</li>
          <li>Your driving habits and accident history</li>
          <li>The age and condition of your vehicle</li>
        </ul>
        
        <h4 class="text-md font-medium">Typical Deductible Options</h4>
        <p>Most insurers offer deductibles ranging from $250 to $2,000. For many drivers, a $500 or $1,000 deductible offers a good balance between affordable premiums and reasonable out-of-pocket costs.</p>
      </div>
    `
  },
  {
    title: "Home Insurance Coverage Gaps",
    description: "Identify and address common coverage gaps that could leave you financially vulnerable in the event of a disaster.",
    slug: "home-insurance-coverage-gaps",
    content: `
      <div class="space-y-4">
        <h3 class="text-lg font-semibold">Common Home Insurance Coverage Gaps</h3>
        <p>Even comprehensive home insurance policies can have significant gaps that leave homeowners exposed to unexpected costs. Understanding these gaps is essential for complete protection.</p>
        
        <h4 class="text-md font-medium">Flood Damage</h4>
        <p>Standard home insurance policies typically don't cover flood damage. For homes in flood-prone areas, a separate flood insurance policy through the National Flood Insurance Program (NFIP) or private insurers is essential.</p>
        
        <h4 class="text-md font-medium">Earthquake Coverage</h4>
        <p>Like floods, earthquake damage is excluded from standard policies. Homeowners in seismic zones should consider dedicated earthquake insurance or an endorsement to their existing policy.</p>
        
        <h4 class="text-md font-medium">Valuable Personal Property</h4>
        <p>High-value items like jewelry, art, or collectibles often exceed standard coverage limits. Scheduled personal property endorsements can provide adequate coverage for these items.</p>
        
        <h4 class="text-md font-medium">Home-Based Business Assets</h4>
        <p>Standard policies provide minimal coverage for business equipment. If you work from home, consider additional business property coverage or a business owner's policy.</p>
        
        <h4 class="text-md font-medium">Service Line Coverage</h4>
        <p>Damage to water, sewer, or electrical lines on your property is typically not covered but can be added through an endorsement.</p>
      </div>
    `
  },
  {
    title: "Business Insurance Essentials",
    description: "Key coverages every business owner should consider to protect their company from common risks and liabilities.",
    slug: "business-insurance-essentials",
    content: `
      <div class="space-y-4">
        <h3 class="text-lg font-semibold">Essential Coverage for Business Owners</h3>
        <p>Properly insuring your business is crucial for long-term success and financial stability. These fundamental coverages form the foundation of a comprehensive business insurance program.</p>
        
        <h4 class="text-md font-medium">General Liability Insurance</h4>
        <p>Protects against claims of bodily injury, property damage, and advertising injury. This is often the first policy businesses purchase and sometimes required by client contracts or leases.</p>
        
        <h4 class="text-md font-medium">Property Insurance</h4>
        <p>Covers damage to your business property, including buildings, equipment, inventory, and furniture due to fire, theft, and certain natural disasters.</p>
        
        <h4 class="text-md font-medium">Business Interruption Insurance</h4>
        <p>Compensates for lost income if your business must temporarily close due to a covered event. It can also cover operating expenses during the downtime.</p>
        
        <h4 class="text-md font-medium">Professional Liability/E&O Insurance</h4>
        <p>Essential for service providers, protecting against claims of negligence, mistakes, or failure to perform professional services.</p>
        
        <h4 class="text-md font-medium">Workers' Compensation</h4>
        <p>Required in most states for businesses with employees, covering medical expenses and lost wages for work-related injuries or illnesses.</p>
        
        <h4 class="text-md font-medium">Cyber Liability Insurance</h4>
        <p>Increasingly important coverage protecting against data breaches, cyberattacks, and the costs associated with notifying affected parties and recovery.</p>
      </div>
    `
  },
  {
    title: "Insurance Tips for New Homeowners",
    description: "What first-time homebuyers need to know about protecting their investment with the right insurance coverage.",
    slug: "insurance-tips-for-new-homeowners",
    content: `
      <div class="space-y-4">
        <h3 class="text-lg font-semibold">Essential Insurance Guidance for New Homeowners</h3>
        <p>Buying your first home is exciting, but it also comes with new responsibilities, including securing proper insurance protection. These tips will help you navigate the process with confidence.</p>
        
        <h4 class="text-md font-medium">Understand Replacement Cost vs. Market Value</h4>
        <p>Insure your home for its replacement cost (rebuilding cost), not its market value or purchase price. Replacement cost coverage ensures you can rebuild your home with similar materials and quality after a covered loss.</p>
        
        <h4 class="text-md font-medium">Take a Home Inventory</h4>
        <p>Document your belongings with photos, videos, and receipts. Store this inventory in the cloud or another secure location away from your home to make claims easier after a loss.</p>
        
        <h4 class="text-md font-medium">Consider Additional Coverage</h4>
        <p>Standard policies may not cover everything. Depending on your location and circumstances, consider additional coverage for:</p>
        <ul class="list-disc pl-5 space-y-1">
          <li>Floods</li>
          <li>Earthquakes</li>
          <li>Sewage backups</li>
          <li>Home businesses</li>
          <li>High-value items</li>
        </ul>
        
        <h4 class="text-md font-medium">Bundle Policies</h4>
        <p>Combining your home and auto insurance with the same company typically results in significant discounts, often 10-15% on both policies.</p>
        
        <h4 class="text-md font-medium">Review Annually</h4>
        <p>As your home appreciates or you make improvements, your insurance needs change. Review your policy annually and after major renovations to ensure adequate coverage.</p>
      </div>
    `
  }
];

const ResourceCards = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold">Insurance Resources</h3>
        <p className="text-sm text-gray-600 mt-1">
          Check out our latest articles to stay informed about insurance topics
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {insuranceResources.map((resource, index) => (
          <Card 
            key={index} 
            className={`p-4 hover:shadow-md transition-all duration-300 ${
              expandedIndex === index ? 'sm:col-span-2 shadow-md' : ''
            }`}
          >
            <div className="flex justify-between items-start">
              <h4 className="font-medium text-sm mb-2">{resource.title}</h4>
              {expandedIndex === index ? (
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="ml-2 p-1 h-auto"
                  onClick={() => toggleExpand(index)}
                >
                  <ChevronUp size={16} />
                </Button>
              ) : null}
            </div>
            <p className="text-xs text-gray-600">{resource.description}</p>
            
            <AnimatePresence>
              {expandedIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <CardContent className="pt-4 px-0">
                    <div 
                      className="text-sm text-gray-700" 
                      dangerouslySetInnerHTML={{ __html: resource.content }}
                    />
                  </CardContent>
                </motion.div>
              )}
            </AnimatePresence>
            
            <div className="mt-3">
              {expandedIndex !== index && (
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-xs text-sky-600 hover:text-sky-800 p-0 h-auto"
                  onClick={() => toggleExpand(index)}
                >
                  Read more <ChevronDown size={16} className="ml-1" />
                </Button>
              )}
            </div>
          </Card>
        ))}
      </div>
    </motion.div>
  );
};

export default ResourceCards;

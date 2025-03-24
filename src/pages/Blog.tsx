
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import HomeButton from "@/components/shared/HomeButton";

const blogPosts = [
  {
    id: 1,
    slug: "understanding-auto-insurance-deductibles",
    title: "Understanding Auto Insurance Deductibles",
    date: "March 15, 2024",
    excerpt: "Learn about the different types of auto insurance coverage and what they mean for you.",
    content: `Auto insurance is more than just a legal requirement—it's a crucial financial protection for you and your vehicle. 

<h3 class="text-xl font-semibold mt-6 mb-3">What is a Deductible?</h3>

A deductible is the amount you agree to pay out of pocket before your insurance coverage kicks in. For example, if you have a $500 deductible and experience $2,000 in covered damages, you would pay $500 and your insurance would cover the remaining $1,500.

<h3 class="text-xl font-semibold mt-6 mb-3">How Deductibles Affect Premiums</h3>

Generally, the higher your deductible, the lower your premium (monthly or annual payment). This is because you're agreeing to take on more financial responsibility in the event of a claim, which reduces the insurer's risk.

<h3 class="text-xl font-semibold mt-6 mb-3">Choosing the Right Deductible</h3>

When selecting a deductible, consider:

1. Your emergency savings: Can you comfortably pay your deductible if you need to file a claim?
2. The value of your vehicle: For older vehicles, a high deductible might not make sense
3. Your driving habits: If you have a long commute or drive in high-traffic areas, you might be at higher risk for accidents
4. Your risk tolerance: Some people prefer the peace of mind of a lower deductible even if it means higher premiums

<h3 class="text-xl font-semibold mt-6 mb-3">SFG Insurance Approach</h3>

At SFG Insurance, we help clients find the perfect balance between deductible amounts and premium costs to match their unique financial situation and risk tolerance. Contact us today for a personalized consultation.`,
    image: "/images/blog1.avif",
    author: "Sarah Johnson",
    readTime: "5 min read"
  },
  {
    id: 2,
    slug: "home-insurance-coverage-gaps",
    title: "Home Insurance Tips for First-Time Buyers",
    date: "March 10, 2024",
    excerpt: "Essential home insurance tips every first-time homebuyer should know.",
    content: `Buying your first home is exciting, but don't forget about protecting your investment. 

<h3 class="text-xl font-semibold mt-6 mb-3">Common Home Insurance Coverage Gaps</h3>

Even when you have a standard homeowner's insurance policy, you might still have significant coverage gaps that could leave you financially vulnerable:

<h4 class="text-lg font-medium mt-4 mb-2">1. Flood Damage</h4>
Standard homeowner's policies typically don't cover flood damage. If you live in a flood zone or area prone to heavy rainfall, consider purchasing separate flood insurance through the National Flood Insurance Program (NFIP) or a private insurer.

<h4 class="text-lg font-medium mt-4 mb-2">2. Earthquake Protection</h4>
Like floods, earthquakes aren't covered by standard policies. In areas with seismic activity, dedicated earthquake insurance is essential for complete protection.

<h4 class="text-lg font-medium mt-4 mb-2">3. Sewer Backup Coverage</h4>
Damage from sewer backups can be extensive and costly. Most standard policies exclude this coverage, but it can usually be added as an endorsement for a reasonable cost.

<h4 class="text-lg font-medium mt-4 mb-2">4. Valuable Item Limits</h4>
Standard policies have coverage limits for valuable items like jewelry, art, and collectibles. For high-value items, consider scheduled personal property coverage to ensure adequate protection.

<h4 class="text-lg font-medium mt-4 mb-2">5. Home Business Exposure</h4>
If you run a business from home, your standard homeowner's policy likely provides very limited coverage for business equipment and no liability coverage for business activities.

<h3 class="text-xl font-semibold mt-6 mb-3">SFG Insurance Protection</h3>

At SFG Insurance, we specialize in identifying and addressing these common coverage gaps. We'll work with you to ensure your home and possessions have complete protection without unnecessary overlap or expense.`,
    image: "/images/blog2.avif",
    author: "Michael Chen",
    readTime: "6 min read"
  },
  {
    id: 3,
    slug: "business-insurance-essentials",
    title: "Why Small Businesses Need Commercial Insurance",
    date: "March 5, 2024",
    excerpt: "Protect your business with the right commercial insurance coverage.",
    content: `Every small business faces unique risks that require proper insurance protection. 

<h3 class="text-xl font-semibold mt-6 mb-3">Essential Commercial Insurance Coverages</h3>

<h4 class="text-lg font-medium mt-4 mb-2">General Liability Insurance</h4>
This fundamental coverage protects your business against third-party claims for bodily injury, property damage, and advertising injury. Whether a customer slips and falls on your premises or you're accused of defamation, general liability provides crucial protection.

<h4 class="text-lg font-medium mt-4 mb-2">Professional Liability/Errors & Omissions</h4>
For businesses that provide services or advice, this coverage protects against claims of negligence, errors, or inadequate work. Even when you do everything right, clients can still file claims if they believe your service caused them financial harm.

<h4 class="text-lg font-medium mt-4 mb-2">Commercial Property Insurance</h4>
This protects your business's physical assets, including buildings, equipment, inventory, and furniture, from perils like fire, theft, and certain natural disasters. Consider business interruption coverage as well to replace lost income if you can't operate due to a covered event.

<h4 class="text-lg font-medium mt-4 mb-2">Workers' Compensation</h4>
Required in most states, this coverage pays for medical expenses and partial lost wages for employees who suffer work-related injuries or illnesses. It also typically provides liability protection against employee lawsuits related to workplace injuries.

<h4 class="text-lg font-medium mt-4 mb-2">Commercial Auto Insurance</h4>
If your business owns or operates vehicles, this coverage is essential. Personal auto policies typically exclude business use, leaving you exposed to significant liability without dedicated commercial coverage.

<h3 class="text-xl font-semibold mt-6 mb-3">SFG Insurance Advantage</h3>

At SFG Insurance, we understand that each business has unique needs. We'll help you create a comprehensive insurance program that protects your specific operation without paying for unnecessary coverages. Our commercial specialists have helped businesses across Georgia, Tennessee, and Mississippi find the right protection at competitive rates.`,
    image: "/images/blog3.avif",
    author: "David Martinez",
    readTime: "7 min read"
  },
  {
    id: 4,
    slug: "insurance-tips-for-new-homeowners",
    title: "The Benefits of Life Insurance at Every Age",
    date: "March 1, 2024",
    excerpt: "Discover why life insurance is important regardless of your age or life stage.",
    content: `Life insurance isn't just for older adults—it's valuable at every stage of life. 

<h3 class="text-xl font-semibold mt-6 mb-3">Insurance Tips for New Homeowners</h3>

<h4 class="text-lg font-medium mt-4 mb-2">1. Understand Replacement Cost vs. Market Value</h4>
Your home should be insured for what it would cost to rebuild, not its market value or purchase price. Building costs can differ significantly from real estate values, and proper replacement cost coverage ensures you can rebuild your home to its previous standard after a total loss.

<h4 class="text-lg font-medium mt-4 mb-2">2. Take Inventory of Your Possessions</h4>
Create a detailed inventory of your belongings with photos, descriptions, and approximate values. This documentation will be invaluable if you need to file a claim. Consider using a home inventory app to simplify this process.

<h4 class="text-lg font-medium mt-4 mb-2">3. Consider Additional Coverage Riders</h4>
Standard policies have limits on certain items like jewelry, art, and electronics. If you have valuable possessions, ask about scheduled personal property endorsements to ensure they're fully covered.

<h4 class="text-lg font-medium mt-4 mb-2">4. Don't Forget Liability Protection</h4>
Your homeowner's policy includes liability coverage that protects you if someone is injured on your property. Consider whether the standard limits (typically $100,000-$300,000) are sufficient or if you need additional protection through an umbrella policy.

<h4 class="text-lg font-medium mt-4 mb-2">5. Review Your Policy Annually</h4>
As you make improvements to your home, acquire new possessions, or experience life changes, your insurance needs will evolve. Schedule an annual review with your SFG Insurance agent to ensure your coverage keeps pace with your changing needs.

<h3 class="text-xl font-semibold mt-6 mb-3">SFG Insurance Commitment</h3>

At SFG Insurance, we specialize in helping new homeowners understand and secure the right insurance protection. Our experienced agents will walk you through the process, explain your coverage options in plain language, and find you the best value across our multiple carrier options in Georgia, Tennessee, and Mississippi.`,
    image: "/images/blog4.avif",
    author: "Emily Thompson",
    readTime: "5 min read"
  }
];

const Blog = () => {
  const [expandedPost, setExpandedPost] = useState<number | null>(null);
  const location = useLocation();

  useEffect(() => {
    // Check if there's a hash in the URL and scroll to that post
    if (location.hash) {
      const slug = location.hash.replace('#', '');
      const post = blogPosts.find(post => post.slug === slug);
      if (post) {
        setExpandedPost(post.id);
        
        // Scroll to the post with a slight delay to ensure rendering
        setTimeout(() => {
          const element = document.getElementById(`post-${post.id}`);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 300);
      }
    }
  }, [location]);

  const togglePost = (id: number) => {
    setExpandedPost(expandedPost === id ? null : id);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8">
        <div className="fixed bottom-6 right-6 z-40">
          <HomeButton />
        </div>
        
        <div className="max-w-7xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary-700 to-primary-500 bg-clip-text text-transparent"
          >
            Insurance Insights & Resources
          </motion.h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <motion.div
                key={post.id}
                id={`post-${post.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: post.id * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-2">
                      <p className="text-sm text-gray-500">{post.date}</p>
                      <p className="text-sm text-gray-500">{post.readTime}</p>
                    </div>
                    <h2 className="text-xl font-semibold mb-2" id={post.slug}>{post.title}</h2>
                    <div className="text-gray-600 mb-4">
                      {expandedPost === post.id ? (
                        <div dangerouslySetInnerHTML={{ __html: post.content }} />
                      ) : (
                        <p>{post.excerpt}</p>
                      )}
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-sm text-primary-600">By {post.author}</p>
                      <Button
                        variant="outline"
                        onClick={() => togglePost(post.id)}
                        className="hover:bg-primary-50"
                      >
                        {expandedPost === post.id ? "Show Less" : "Read More"}
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;

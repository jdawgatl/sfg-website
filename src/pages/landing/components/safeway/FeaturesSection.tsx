
import { motion } from "framer-motion";
import { Phone, Download, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Why Choose <span className="text-blue-400">Safeway Insurance</span> with Us?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <Card className="bg-slate-800/70 border-slate-700 backdrop-blur-sm shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-blue-900/30 hover:shadow-2xl">
              <CardContent className="p-6">
                <div className="h-12 w-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">24/7 Claims Support</h3>
                <p className="text-slate-300">
                  Claims assistance available anytime with Safeway's dedicated customer service team at (800) 723-3929.
                </p>
              </CardContent>
            </Card>
            
            {/* Feature 2 */}
            <Card className="bg-slate-800/70 border-slate-700 backdrop-blur-sm shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-blue-900/30 hover:shadow-2xl">
              <CardContent className="p-6">
                <div className="h-12 w-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4">
                  <Download className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">MySafeway Mobile App</h3>
                <p className="text-slate-300">
                  Manage your policy, make payments, and access ID cards from your smartphone with the MySafeway app.
                </p>
              </CardContent>
            </Card>
            
            {/* Feature 3 */}
            <Card className="bg-slate-800/70 border-slate-700 backdrop-blur-sm shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-blue-900/30 hover:shadow-2xl">
              <CardContent className="p-6">
                <div className="h-12 w-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4">
                  <ExternalLink className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Online Account Access</h3>
                <p className="text-slate-300">
                  View and manage your policy details online through MySafeway.com portal.
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;

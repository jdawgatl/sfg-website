
import { motion } from "framer-motion";
import { Phone, MessageSquare, Download, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const QuickLinksSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-10">
              Safeway Insurance <span className="text-blue-400">Quick Links</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Claims Number */}
              <Card className="bg-slate-800/60 border-slate-700 backdrop-blur-sm overflow-hidden">
                <CardContent className="p-5 flex items-center">
                  <div className="bg-blue-600/20 rounded-full p-3 mr-4">
                    <Phone className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white">Claims Hotline</h3>
                    <p className="text-blue-400 font-bold">(800) 723-3929</p>
                  </div>
                </CardContent>
              </Card>
              
              {/* Customer Service */}
              <Card className="bg-slate-800/60 border-slate-700 backdrop-blur-sm overflow-hidden">
                <CardContent className="p-5 flex items-center">
                  <div className="bg-blue-600/20 rounded-full p-3 mr-4">
                    <MessageSquare className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white">Customer Service</h3>
                    <p className="text-blue-400 font-bold">(470) 236-8355</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Mobile App */}
              <Card className="bg-slate-800/60 border-slate-700 backdrop-blur-sm overflow-hidden">
                <CardContent className="p-5">
                  <h3 className="text-lg font-medium text-white mb-3">Download MySafeway App</h3>
                  <div className="flex flex-wrap gap-4">
                    <Button 
                      className="bg-black text-white border border-white/10 hover:bg-gray-900"
                      onClick={() => window.open('https://apps.apple.com/us/app/mysafeway/id1577775014', '_blank')}
                    >
                      <Download className="mr-2 h-4 w-4" />
                      iOS App Store
                    </Button>
                    <Button 
                      className="bg-black text-white border border-white/10 hover:bg-gray-900"
                      onClick={() => window.open('https://play.google.com/store/apps/details?id=com.safeway.mysafeway', '_blank')}
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Google Play
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              {/* Online Portal */}
              <Card className="bg-slate-800/60 border-slate-700 backdrop-blur-sm overflow-hidden">
                <CardContent className="p-5">
                  <h3 className="text-lg font-medium text-white mb-3">Manage Your Policy Online</h3>
                  <Button 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                    onClick={() => window.open('https://mysafeway.com', '_blank')}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Visit MySafeway.com
                  </Button>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default QuickLinksSection;

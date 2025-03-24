
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ExternalLink, Download, Home, Phone, MessageSquare } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SEOWrapper } from "@/components/seo/SEOWrapper";
import HomeButton from "@/components/shared/HomeButton";
import SafewaySEOContent from "./components/safeway/SafewaySEOContent";

const SafewayInsurance = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-950 to-slate-900">
      <SEOWrapper />
      <Navbar />
      
      <main className="flex-grow">
        <div className="fixed bottom-6 right-6 z-40">
          <HomeButton />
        </div>
        
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-28">
          <div className="absolute inset-0 bg-[url('/images/safeway-insurance.avif')] bg-no-repeat bg-cover bg-center opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 to-indigo-900/60 backdrop-blur-sm"></div>
          
          <div className="container relative z-10 mx-auto px-4 sm:px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto"
            >
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 shadow-2xl">
                <img 
                  src="/images/safeway-insurance.avif" 
                  alt="Safeway Insurance Company" 
                  className="h-24 md:h-28 mx-auto mb-6"
                />
                
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                  Safeway Insurance: <span className="text-blue-400">Affordable</span> Auto Coverage
                </h1>
                
                <p className="text-lg text-white/90 mb-8">
                  Trusted Safeway Agent in Georgia providing competitive rates, low down payments, and exceptional service.
                </p>
                
                <Button 
                  className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
                  onClick={() => window.open('https://www.safewayxchange.com/SafewayDirect/Token/AgencyQuote?QuotingId=72650486', '_blank')}
                >
                  Get Your Safeway Quote Now
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Features Section */}
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
        
        {/* Quick Links Section */}
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
        
        {/* Quote CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-900 to-indigo-900">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready for Affordable Auto Insurance?
              </h2>
              <p className="text-lg text-white/80 mb-8">
                Get a personalized Safeway Insurance quote today through Standard Financial Group, your trusted local agent.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-white text-blue-900 hover:bg-gray-100 text-lg px-8 py-6"
                  onClick={() => window.open('https://www.safewayxchange.com/SafewayDirect/Token/AgencyQuote?QuotingId=72650486', '_blank')}
                >
                  Get Safeway Quote
                </Button>
                <Button 
                  asChild
                  variant="outline" 
                  className="border-white text-white hover:bg-white/10 text-lg px-8 py-6"
                >
                  <Link to="/contact">Contact Our Agency</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* SEO Content Section - Hidden but important for SEO */}
        <SafewaySEOContent />
      </main>
      
      <Footer />
    </div>
  );
};

export default SafewayInsurance;

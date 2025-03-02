
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Car, Shield, Gauge, Ban, Clock, DollarSign, Tag, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";

const Auto = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Auto Insurance | Cheap Car Insurance | Fayetteville GA</title>
        <meta name="description" content="Get affordable car insurance in Fayetteville, GA. Compare rates from multiple carriers for the best cheap auto insurance coverage with same-day service." />
        <meta name="keywords" content="cheap car insurance Fayetteville GA, affordable auto insurance Georgia, car insurance quotes, cheap auto insurance, liability car insurance, full coverage auto insurance, SR22 insurance, high risk auto insurance" />
      </Helmet>
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[400px]">
          <img
            src="/images/products-auto-cover.avif"
            alt="Cheap Car Insurance in Fayetteville GA"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Cheap Car Insurance in Fayetteville, GA
              </h1>
              <div className="w-20 h-1 bg-sky-600 mx-auto rounded-full mb-6"></div>
              <p className="text-white text-lg max-w-2xl mx-auto px-4">
                Get affordable auto insurance quotes from multiple carriers. Save money today!
              </p>
              <div className="mt-8">
                <Button asChild size="lg" className="bg-sky-600 hover:bg-sky-700">
                  <Link to="/quote">Get a Cheap Quote</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 px-4 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-12"
          >
            <div>
              <h2 className="text-3xl font-bold mb-6">Affordable Auto Insurance Options</h2>
              <p className="text-lg text-gray-700 mb-6">
                At Standard Financial Group, we compare rates from multiple insurance carriers to find you the cheapest car insurance in Fayetteville and throughout Georgia. As an independent agency, we shop the market so you don't have to!
              </p>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Coverage Options We Offer:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Shield className="h-5 w-5 text-sky-600 mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-medium">Liability Coverage</span>
                      <p className="text-sm text-gray-600">Affordable liability-only policies that meet Georgia state requirements</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Car className="h-5 w-5 text-sky-600 mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-medium">Full Coverage</span>
                      <p className="text-sm text-gray-600">Comprehensive and collision coverage at competitive rates</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Ban className="h-5 w-5 text-sky-600 mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-medium">SR22/FR44 Filing</span>
                      <p className="text-sm text-gray-600">Help with high-risk insurance needs and SR22 filings</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Gauge className="h-5 w-5 text-sky-600 mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-medium">Rideshare Coverage</span>
                      <p className="text-sm text-gray-600">Protection for Uber and Lyft drivers</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-sky-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <DollarSign className="h-5 w-5 text-sky-600 mr-2" />
                  How to Get the Cheapest Car Insurance
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-sky-600" />
                    <span>Bundle auto with home or renters insurance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-sky-600" />
                    <span>Ask about available discounts (multi-car, good driver, etc.)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-sky-600" />
                    <span>Adjust deductibles to fit your budget</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-sky-600" />
                    <span>Let us compare rates from multiple carriers</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8">
                <Button asChild size="lg" className="bg-sky-600 hover:bg-sky-700">
                  <a href="https://www.safewayxchange.com/SafewayDirect/Token/AgencyQuote?QuotingId=72650486" target="_blank" rel="noopener noreferrer">
                    Get Instant Auto Quote
                  </a>
                </Button>
              </div>
            </div>

            <div>
              <img 
                src="/images/camaro.avif" 
                alt="Cheap Car Insurance in Fayetteville GA"
                className="rounded-lg shadow-lg w-full h-auto mb-8"
              />
              
              <Card className="shadow-md mb-8">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Tag className="h-5 w-5 text-sky-600 mr-2" />
                    Our Auto Insurance Carriers
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    <img src="/images/progressive.avif" alt="Progressive Insurance" className="h-12 object-contain" />
                    <img src="/images/dairyland.avif" alt="Dairyland Insurance" className="h-12 object-contain" />
                    <img src="/images/national-general.avif" alt="National General" className="h-12 object-contain" />
                    <img src="/images/safeway-insurance.avif" alt="Safeway Insurance" className="h-12 object-contain" />
                    <img src="/images/clearcover.avif" alt="Clearcover Insurance" className="h-12 object-contain" />
                    <img src="/images/geico.avif" alt="Geico Insurance" className="h-12 object-contain" />
                  </div>
                </CardContent>
              </Card>
              
              <div className="space-y-6">
                <div className="flex items-start gap-3 p-4 bg-white rounded-lg shadow">
                  <Clock className="h-8 w-8 text-sky-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Same-Day Coverage</h4>
                    <p className="text-gray-600">Get insured today with our quick quote process</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 bg-white rounded-lg shadow">
                  <Award className="h-8 w-8 text-sky-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Local Expertise</h4>
                    <p className="text-gray-600">Fayetteville agents who understand Georgia insurance laws</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 bg-white rounded-lg shadow">
                  <DollarSign className="h-8 w-8 text-sky-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Flexible Payment Options</h4>
                    <p className="text-gray-600">Low down payments and monthly installment plans</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
        
        {/* Hidden section for SEO - only screen readers will read this, but search engines will index it */}
        <section className="sr-only">
          <h2>Cheap Car Insurance in Georgia</h2>
          <p>
            We offer cheap car insurance and affordable auto insurance throughout Georgia including Fayetteville, 
            Atlanta, Peachtree City, Newnan, McDonough, Jonesboro, Stockbridge, Griffin, Riverdale, Union City, 
            College Park, East Point, Forest Park, Morrow, Lovejoy, Hampton, Fairburn, Tyrone, Senoia, Brooks, 
            Sharpsburg, Locust Grove, Jackson, Flovilla, Jenkinsburg, Milner, Zebulon, Barnesville, Thomaston, 
            LaGrange, Carrollton, Villa Rica, Douglasville, Lithia Springs, Austell, Powder Springs, Hiram, Dallas, 
            Acworth, Kennesaw, Marietta, Smyrna, Mableton, Lithonia, Conyers, Covington, Social Circle, Monroe, 
            Loganville, Snellville, Lawrenceville, Lilburn, Stone Mountain, Tucker, Decatur, Avondale Estates, 
            Clarkston, Chamblee, Doraville, Dunwoody, Sandy Springs, Roswell, Alpharetta, Milton, Johns Creek, 
            Cumming, Suwanee, Sugar Hill, Buford, Flowery Branch, Oakwood, Gainesville, Athens, Rome, Dalton, 
            Macon, Savannah, Augusta, Columbus, Valdosta, Albany, Warner Robins, Hinesville, Statesboro, Brunswick, 
            and all counties in Georgia.
          </p>
          <p>
            Get cheap liability insurance, affordable full coverage, SR22 insurance, high risk auto insurance, 
            non-standard auto insurance, and insurance for drivers with tickets or accidents. We specialize in 
            finding affordable rates for all drivers in Fayetteville and throughout Georgia.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Auto;

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Shield, Check, DollarSign, FileText, Building, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/shared/ContactForm";

const SuretyBonds = () => {
  const bondTypes = [
    {
      title: "Certificate of Title Bonds",
      icon: FileText,
      description: "Obtain a bonded title when you've lost your vehicle title or purchased a vehicle without proper documentation.",
      link: "/landing/title-bonds",
      featured: true
    },
    {
      title: "Probate & Court Bonds",
      icon: Building,
      description: "Required bonds for estate administrators, guardians, and other court-appointed fiduciaries.",
      link: "#probate-section"
    },
    {
      title: "License & Permit Bonds",
      icon: Check,
      description: "Required for contractors, auto dealers, and businesses to obtain necessary licenses.",
      link: "#license-section"
    },
    {
      title: "Contract Bonds",
      icon: DollarSign,
      description: "Performance bonds, bid bonds, and payment bonds for contractors and construction projects.",
      link: "#contract-section"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Surety Bonds Georgia | Certificate of Title Bonds | Standard Financial Group</title>
        <meta name="description" content="Get instant surety bonds in Georgia - title bonds, probate bonds, court bonds, and more. Trusted bond provider serving all Georgia counties with same-day service. Fast, affordable bonding solutions from Standard Financial Group." />
        <meta name="keywords" content="surety bonds Georgia, certificate of title bonds, cheap title bonds, Georgia title bonds, probate bonds, court bonds, administrator bonds, guardian bonds, fiduciary bonds, executor bonds, license bonds, permit bonds, contract bonds, performance bonds, bid bonds, payment bonds, same-day bonds, instant bonds, affordable surety bonds" />
        <link rel="canonical" href="https://sfg-ins.com/surety-bonds" />
      </Helmet>

      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center md:text-left"
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Georgia's Trusted Surety Bond Provider
                </h1>
                <p className="text-lg mb-8 max-w-lg">
                  Fast, affordable surety bonds for any need - available online with same-day service throughout Georgia.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <Button
                    asChild
                    size="lg"
                    className="bg-white text-[#9b87f5] hover:bg-gray-100 hover:text-[#7E69AB]"
                  >
                    <Link to="/landing/title-bonds">Title Bonds</Link>
                  </Button>
                  <Button
                    onClick={() => window.open('https://www.mybondapp.com/23196952', '_blank')}
                    size="lg"
                    variant="outline"
                    className="bg-transparent border-white text-white hover:bg-white hover:text-[#9b87f5]"
                  >
                    Buy Bond Online
                  </Button>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="hidden md:block"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-[#9b87f5] opacity-20 rounded-xl transform rotate-3"></div>
                  <img
                    src="/images/products-surety-cover.avif"
                    alt="Surety bonds"
                    className="relative z-10 rounded-xl shadow-xl max-h-[400px] w-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Wave Divider */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="fill-white">
              <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,42.7C1120,32,1280,32,1360,32L1440,32L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"></path>
            </svg>
          </div>
        </section>

        {/* Bond Types Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Surety Bonds for Every Need</h2>
              <div className="w-20 h-1 bg-[#9b87f5] mx-auto rounded-full mb-6"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We offer a comprehensive range of surety bonds throughout Georgia with competitive rates and fast service.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {bondTypes.map((bond, index) => (
                <motion.div
                  key={bond.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Link 
                    to={bond.link}
                    className={`block h-full ${bond.featured ? 'transform hover:scale-105 transition-transform' : 'hover:shadow-lg'}`}
                  >
                    <Card className={`p-6 h-full ${bond.featured ? 'border-[#9b87f5] border-2 shadow-lg' : ''}`}>
                      <div className={`w-12 h-12 ${bond.featured ? 'bg-[#9b87f5]' : 'bg-[#E5DEFF]'} rounded-full flex items-center justify-center mb-4`}>
                        <bond.icon className={`h-6 w-6 ${bond.featured ? 'text-white' : 'text-[#7E69AB]'}`} />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{bond.title}</h3>
                      <p className="text-gray-600">{bond.description}</p>
                      {bond.featured && (
                        <span className="inline-block mt-4 text-[#9b87f5] font-medium">
                          Learn more →
                        </span>
                      )}
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Title Bond Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Certificate of Title Bonds</h2>
                <div className="w-20 h-1 bg-[#9b87f5] rounded-full mb-6"></div>
                <p className="text-lg text-gray-600 mb-6">
                  A Certificate of Title Bond (also known as a Lost Title Bond) allows you to obtain a bonded title when you don't have proper ownership documentation for your vehicle.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Same-day issuance available for most title bonds",
                    "Competitive rates starting at just $100",
                    "Serving all 159 counties in Georgia",
                    "No credit check required for most applicants",
                    "Expert guidance through the entire bonding process"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-[#7E69AB] mt-1 mr-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  size="lg"
                  className="bg-[#9b87f5] hover:bg-[#7E69AB]"
                >
                  <Link to="/landing/title-bonds">Learn More About Title Bonds</Link>
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="relative rounded-xl overflow-hidden shadow-xl">
                  <img 
                    src="/images/products-surety-surety-bonds.avif" 
                    alt="Certificate of Title Bond" 
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1F2C]/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">Need a Title Bond?</h3>
                    <p className="mb-4">Purchase your title bond online in minutes</p>
                    <Button
                      onClick={() => window.open('https://www.mybondapp.com/23196952', '_blank')}
                      className="bg-white text-[#9b87f5] hover:bg-gray-100"
                    >
                      Buy Now
                    </Button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Other Bond Types */}
        <section className="py-16 bg-white" id="probate-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Other Surety Bond Services</h2>
              <div className="w-20 h-1 bg-[#9b87f5] mx-auto rounded-full mb-6"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Beyond title bonds, we offer a comprehensive range of surety bonds to meet your specific needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Building className="h-5 w-5 text-[#9b87f5] mr-2" />
                  Probate & Court Bonds
                </h3>
                <ul className="space-y-2 mb-6 text-gray-600">
                  <li>Administrator Bonds</li>
                  <li>Guardian Bonds</li>
                  <li>Conservator Bonds</li>
                  <li>Executor Bonds</li>
                  <li>Appeal Bonds</li>
                </ul>
                <p className="text-sm text-gray-500 mb-4">
                  Serving all Georgia Probate Courts in all 159 counties
                </p>
              </Card>

              <Card className="p-6" id="license-section">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Check className="h-5 w-5 text-[#9b87f5] mr-2" />
                  License & Permit Bonds
                </h3>
                <ul className="space-y-2 mb-6 text-gray-600">
                  <li>Contractor License Bonds</li>
                  <li>Auto Dealer Bonds</li>
                  <li>Alcohol License Bonds</li>
                  <li>Notary Bonds</li>
                  <li>Weight & Scale Bonds</li>
                </ul>
                <p className="text-sm text-gray-500 mb-4">
                  Fast approval for business license requirements
                </p>
              </Card>

              <Card className="p-6" id="contract-section">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <DollarSign className="h-5 w-5 text-[#9b87f5] mr-2" />
                  Contract Bonds
                </h3>
                <ul className="space-y-2 mb-6 text-gray-600">
                  <li>Performance Bonds</li>
                  <li>Payment Bonds</li>
                  <li>Bid Bonds</li>
                  <li>Maintenance Bonds</li>
                  <li>Supply Bonds</li>
                </ul>
                <p className="text-sm text-gray-500 mb-4">
                  Supporting contractors throughout Georgia
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Counties Section */}
        <section className="py-16 bg-[#E5DEFF]/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Serving All Georgia Counties</h2>
              <div className="w-20 h-1 bg-[#9b87f5] mx-auto rounded-full mb-6"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We provide fast bond services in all 159 counties across Georgia - from Atlanta to Savannah and everywhere in between.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 text-sm">
              {[
                "Appling", "Atkinson", "Bacon", "Baker", "Baldwin", "Banks", "Barrow", "Bartow", "Ben Hill", "Berrien", 
                "Bibb", "Bleckley", "Brantley", "Brooks", "Bryan", "Bulloch", "Burke", "Butts", "Calhoun", "Camden", 
                "Candler", "Carroll", "Catoosa", "Charlton", "Chatham", "Chattahoochee", "Chattooga", "Cherokee", "Clarke", "Clay", 
                "Clayton", "Clinch", "Cobb", "Coffee", "Colquitt", "Columbia", "Cook", "Coweta", "Crawford", "Crisp", 
                "Dade", "Dawson", "Decatur", "DeKalb", "Dodge", "Dooly", "Dougherty", "Douglas", "Early", "Echols", 
                "Effingham", "Elbert", "Emanuel", "Evans", "Fannin", "Fayette", "Floyd", "Forsyth", "Franklin", "Fulton"
              ].map((county) => (
                <div key={county} className="px-3 py-2 bg-white rounded shadow-sm">
                  <span>{county} County</span>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Button
                variant="link"
                className="text-[#7E69AB] hover:text-[#9b87f5]"
                onClick={() => {
                  document.getElementById('contactSection')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Contact us for service in your county →
              </Button>
            </div>
          </div>
        </section>

        {/* Call To Action */}
        <section className="py-16 bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Your Bond?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Purchase your bond online now or contact us for expert guidance and assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => window.open('https://www.mybondapp.com/23196952', '_blank')}
                size="lg"
                className="bg-white text-[#9b87f5] hover:bg-gray-100 hover:text-[#7E69AB]"
              >
                Buy Bond Online
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-[#9b87f5]"
              >
                <Link to="/landing/title-bonds">Title Bond Information</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 bg-white" id="contactSection">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
              <div className="w-20 h-1 bg-[#9b87f5] mx-auto rounded-full mb-6"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Need help with a surety bond? Our bond specialists are ready to assist you.
              </p>
            </div>

            <Card className="p-8">
              <ContactForm />
            </Card>
          </div>
        </section>

        {/* Hidden SEO Content */}
        <div className="hidden">
          <h2>Georgia Title Bonds in Every City and County</h2>
          <p>
            We provide certificate of title bonds in Atlanta, Savannah, Macon, Augusta, Columbus, Athens, Sandy Springs, 
            Roswell, Johns Creek, Alpharetta, Marietta, Smyrna, Dunwoody, Brookhaven, Peachtree Corners, Kennesaw, 
            Gainesville, Dalton, Lawrenceville, Duluth, Peachtree City, Newnan, Douglasville, Carrollton, Rome, 
            Warner Robins, Valdosta, Albany, Fayetteville, Mcdonough, Hinesville, Milton, Statesboro.
          </p>
          <p>
            Affordable title bonds available in Fulton County, Gwinnett County, Cobb County, DeKalb County, Clayton County, 
            Chatham County, Cherokee County, Henry County, Forsyth County, Richmond County, Hall County, Muscogee County, 
            Bibb County, Houston County, Paulding County, Glynn County, Columbia County, Carroll County, Douglas County, 
            Bartow County, Fayette County, Coweta County, Newton County, Lowndes County, Floyd County, Dougherty County.
          </p>
          <h2>Title Bond Keywords</h2>
          <p>
            Certificate of title bond Georgia, lost title bond Georgia, bonded title Georgia, cheap title bond, 
            affordable title bond, title bond near me, motor vehicle title bond, mobile home title bond, 
            motorcycle title bond, boat title bond, car title bond Georgia, vehicle title bond, bonded certificate of title, 
            certificate of title surety bond, same day title bond Georgia, instant title bond, title bond application, 
            bonding company for title bond, title bond services, no title bond, replacement title bond.
          </p>
          <h2>Tennessee Title Bonds</h2>
          <p>
            We also provide certificate of title bonds in Nashville, Memphis, Knoxville, Chattanooga, Clarksville, 
            Murfreesboro, Franklin, Jackson, Johnson City, Hendersonville, Kingsport, Collierville, Smyrna, Brentwood, 
            Cleveland, Germantown, Spring Hill, Columbia, Gallatin, Lebanon, Cookeville, Mount Juliet.
          </p>
          <h2>Mississippi Title Bonds</h2>
          <p>
            Certificate of title bonds available in Jackson, Gulfport, Southaven, Hattiesburg, Biloxi, Meridian, Tupelo, 
            Olive Branch, Oxford, Pearl, Clinton, Horn Lake, Madison, Brandon, Ridgeland, Starkville, Vicksburg, Columbus, 
            Greenville, Pascagoula, Gautier, Ocean Springs, Natchez.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SuretyBonds;

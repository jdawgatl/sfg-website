
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Shield, Check, FileText, MapPin, Car, Settings, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/shared/ContactForm";

const TitleBonds = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Certificate of Title Bonds Georgia | Cheap Title Bonds | Standard Financial Group</title>
        <meta name="description" content="Get cheap certificate of title bonds in Georgia. Same-day service for lost title bonds - serving all 159 counties. Instant online quotes with rates starting at $100. Georgia's trusted source for vehicle title bonds." />
        <meta name="keywords" content="certificate of title bonds Georgia, title bond Georgia, lost title bond, cheap title bond, affordable title bond, bonded title Georgia, motor vehicle title bond, car title bond, mobile home title bond, motorcycle title bond, boat title bond, fayetteville title bond, Atlanta title bond, same day title bond" />
        <link rel="canonical" href="https://sfg-ins.com/landing/title-bonds" />
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
                  Georgia Certificate of Title Bonds
                </h1>
                <p className="text-lg mb-8 max-w-lg">
                  Get your Georgia title bond quickly and affordably. Same-day service available in all 159 counties.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <Button
                    onClick={() => window.open('https://www.mybondapp.com/23196952', '_blank')}
                    size="lg"
                    className="bg-white text-[#9b87f5] hover:bg-gray-100 hover:text-[#7E69AB]"
                  >
                    Buy Title Bond Now
                  </Button>
                  <Button
                    onClick={() => {
                      document.getElementById('contactSection')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    size="lg"
                    variant="outline"
                    className="bg-transparent border-white text-white hover:bg-white hover:text-[#9b87f5]"
                  >
                    Contact Us
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
                    alt="Georgia Certificate of Title Bond"
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

        {/* What is a Title Bond Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What is a Certificate of Title Bond?</h2>
              <div className="w-20 h-1 bg-[#9b87f5] mx-auto rounded-full mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                A Certificate of Title Bond (also called a Lost Title Bond) is required when you need to obtain a bonded title for a vehicle when you don't have proper ownership documentation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Car,
                  title: "Replace a Lost Title",
                  description: "If you've lost your vehicle title or it was destroyed, a title bond helps you obtain a replacement."
                },
                {
                  icon: FileText,
                  title: "Purchase Without Title",
                  description: "If you purchased a vehicle without receiving a properly signed title, a title bond allows you to register it."
                },
                {
                  icon: Shield,
                  title: "Protection for Georgia",
                  description: "The bond protects the state and any previous owners if someone later claims ownership of the vehicle."
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="p-6 h-full">
                    <div className="w-12 h-12 bg-[#E5DEFF] rounded-full flex items-center justify-center mb-4">
                      <item.icon className="h-6 w-6 text-[#7E69AB]" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How Title Bonds Work in Georgia</h2>
              <div className="w-20 h-1 bg-[#9b87f5] mx-auto rounded-full mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Getting a certificate of title bond in Georgia is a straightforward process when you work with us.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Contact Us",
                  description: "Get in touch with our bond specialists to discuss your specific title bond needs."
                },
                {
                  step: "2",
                  title: "Provide Information",
                  description: "Share details about your vehicle including VIN, make, model, and year."
                },
                {
                  step: "3",
                  title: "Get Your Bond",
                  description: "We'll issue your title bond, often the same day you apply."
                },
                {
                  step: "4",
                  title: "Visit DMV",
                  description: "Take your bond to the Georgia DMV to obtain your bonded vehicle title."
                },
              ].map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="p-6 h-full relative">
                    <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-[#9b87f5] text-white flex items-center justify-center font-bold text-lg">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-semibold mb-3 mt-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button
                onClick={() => window.open('https://www.mybondapp.com/23196952', '_blank')}
                size="lg"
                className="bg-[#9b87f5] hover:bg-[#7E69AB]"
              >
                Get Your Title Bond Now
              </Button>
            </div>
          </div>
        </section>

        {/* Types of Title Bonds */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Types of Vehicle Title Bonds We Offer</h2>
              <div className="w-20 h-1 bg-[#9b87f5] mx-auto rounded-full mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We provide title bonds for all types of vehicles throughout Georgia.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Car & Truck Title Bonds",
                  description: "Title bonds for passenger vehicles, trucks, SUVs, and vans of all makes and models."
                },
                {
                  title: "Motorcycle Title Bonds",
                  description: "Lost the title to your motorcycle? Get a bonded title to legally register your bike."
                },
                {
                  title: "ATV & UTV Title Bonds",
                  description: "Title bonds for off-road vehicles, ATVs, UTVs, and other recreational vehicles."
                },
                {
                  title: "Mobile Home Title Bonds",
                  description: "Specialized title bonds for mobile homes and manufactured housing."
                },
                {
                  title: "Boat & Watercraft Title Bonds",
                  description: "Title bonds for boats, jet skis, and other watercraft without proper documentation."
                },
                {
                  title: "RV & Camper Title Bonds",
                  description: "Title bonds for recreational vehicles, motorhomes, and campers."
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="p-6 h-full flex items-start space-x-4">
                    <Shield className="h-6 w-6 text-[#9b87f5] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-[#E5DEFF]/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us for Your Title Bond?</h2>
                <div className="w-20 h-1 bg-[#9b87f5] rounded-full mb-6"></div>
                
                <ul className="space-y-4">
                  {[
                    {
                      icon: Clock,
                      title: "Same-Day Service",
                      description: "Most title bonds can be issued the same day you apply."
                    },
                    {
                      icon: Shield,
                      title: "Competitive Rates",
                      description: "Title bond rates starting at just $100 for most vehicles."
                    },
                    {
                      icon: Settings,
                      title: "Experienced Specialists",
                      description: "Our bond experts have helped thousands of Georgia residents."
                    },
                    {
                      icon: MapPin,
                      title: "Statewide Service",
                      description: "Serving all 159 counties in Georgia remotely and in-person."
                    },
                    {
                      icon: Check,
                      title: "No Credit Check",
                      description: "Most title bonds don't require credit checks or financial statements."
                    }
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <div className="w-10 h-10 bg-[#9b87f5]/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <item.icon className="h-5 w-5 text-[#7E69AB]" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex justify-center lg:justify-end"
              >
                <div className="relative max-w-md">
                  <div className="absolute inset-0 bg-[#9b87f5] opacity-20 rounded-xl transform -rotate-3"></div>
                  <Card className="p-8 relative z-10">
                    <h3 className="text-2xl font-bold mb-4">Get an Instant Quote</h3>
                    <p className="text-gray-600 mb-6">
                      Purchase your title bond online now or contact us for expert assistance.
                    </p>
                    <Button
                      onClick={() => window.open('https://www.mybondapp.com/23196952', '_blank')}
                      className="w-full bg-[#9b87f5] hover:bg-[#7E69AB] mb-4"
                    >
                      Buy Title Bond Online
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() => {
                        document.getElementById('contactSection')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      Contact Us
                    </Button>
                  </Card>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Georgia Counties Section - More Compact */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Title Bonds Throughout Georgia</h2>
              <div className="w-20 h-1 bg-[#9b87f5] mx-auto rounded-full mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We provide fast, affordable certificate of title bonds in all 159 counties across Georgia.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 text-xs">
              {[
                "Fulton", "Gwinnett", "Cobb", "DeKalb", "Clayton", "Chatham", "Cherokee", "Henry", 
                "Forsyth", "Richmond", "Hall", "Muscogee", "Bibb", "Houston", "Paulding", "Glynn", 
                "Columbia", "Carroll", "Douglas", "Bartow", "Fayette", "Coweta", "Newton", "Lowndes", 
                "Floyd", "Dougherty", "Rockdale", "Barrow", "Walton", "Jackson", "Gordon", "Whitfield", 
                "Clarke", "Bulloch", "Troup", "Liberty", "Camden", "Effingham", "Thomas", "Ware"
              ].map((county) => (
                <div key={county} className="px-2 py-1 border rounded text-center">
                  <span>{county}</span>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-6">
              <p className="text-sm text-gray-500 mb-4">
                Serving all 159 Georgia counties including Appling, Atkinson, Bacon, Baker, Baldwin, Banks, Barrow, Bartow, Ben Hill, Berrien, 
                Bibb, Bleckley, Brantley, Brooks, Bryan, Bulloch, Burke, Butts, Calhoun, Camden, 
                Candler, Carroll, Catoosa, Charlton, Chatham, Chattahoochee, Chattooga, Cherokee, Clarke, Clay and more.
              </p>
              <Button
                asChild
                variant="link"
                className="text-[#7E69AB] hover:text-[#9b87f5]"
              >
                <Link to="/surety-bonds">See All Counties We Serve</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Cities Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Title Bonds in Major Georgia Cities</h2>
              <div className="w-20 h-1 bg-[#9b87f5] mx-auto rounded-full mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                From Atlanta to Savannah and everywhere in between, we provide title bond services throughout Georgia.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                {
                  city: "Atlanta",
                  description: "Georgia's capital and largest city"
                },
                {
                  city: "Savannah",
                  description: "Historic coastal city"
                },
                {
                  city: "Macon",
                  description: "Central Georgia's hub"
                },
                {
                  city: "Augusta",
                  description: "Home of the Masters"
                },
                {
                  city: "Columbus",
                  description: "Western Georgia's largest city"
                },
                {
                  city: "Athens",
                  description: "Classic college town"
                },
                {
                  city: "Roswell",
                  description: "Historic Atlanta suburb"
                },
                {
                  city: "Fayetteville",
                  description: "Our home base"
                }
              ].map((item) => (
                <Card key={item.city} className="p-4 text-center">
                  <h3 className="font-semibold mb-1">{item.city}</h3>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <p className="text-sm text-gray-600 mb-4">
                Also serving Sandy Springs, Johns Creek, Alpharetta, Marietta, Smyrna, Dunwoody, Brookhaven, 
                Peachtree Corners, Kennesaw, Gainesville, Dalton, Lawrenceville, Duluth, Peachtree City, 
                Newnan, Douglasville, Carrollton, Rome, Warner Robins, Valdosta, Albany, Mcdonough, 
                Hinesville, Milton, Statesboro and all Georgia municipalities.
              </p>
            </div>
          </div>
        </section>

        {/* Call To Action */}
        <section className="py-16 bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Your Georgia Title Bond?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Purchase your certificate of title bond online now or contact us for expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => window.open('https://www.mybondapp.com/23196952', '_blank')}
                size="lg"
                className="bg-white text-[#9b87f5] hover:bg-gray-100 hover:text-[#7E69AB]"
              >
                Buy Title Bond Online
              </Button>
              <Button
                onClick={() => {
                  document.getElementById('contactSection')?.scrollIntoView({ behavior: 'smooth' });
                }}
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-[#9b87f5]"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <div className="w-20 h-1 bg-[#9b87f5] mx-auto rounded-full mb-6"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Common questions about certificate of title bonds in Georgia
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: "What exactly is a certificate of title bond?",
                  answer: "A certificate of title bond (also called a lost title bond) is a surety bond required by the Georgia Department of Revenue when you need to obtain a bonded title for a vehicle. This typically happens when you don't have proper ownership documentation, such as when you've lost your title or purchased a vehicle without receiving the title."
                },
                {
                  question: "How much does a title bond cost in Georgia?",
                  answer: "The cost of a title bond in Georgia typically starts around $100 for most vehicles, but varies based on the value of your vehicle. The bond amount is usually set at 1.5 times the vehicle's value, but you only pay a percentage of this amount (the premium) to purchase the bond."
                },
                {
                  question: "How long does it take to get a title bond?",
                  answer: "With our streamlined process, most title bonds can be issued the same day you apply. Once you have your bond, you'll take it to your local Georgia DMV office to apply for a bonded title."
                },
                {
                  question: "Do I need a credit check to get a title bond?",
                  answer: "Most title bonds do not require credit checks or extensive financial information, making them accessible to nearly everyone who needs one."
                },
                {
                  question: "How long is a title bond valid in Georgia?",
                  answer: "A Georgia certificate of title bond remains in effect for 3 years. After this period, if no one has come forward to claim ownership of the vehicle, the \"bonded\" status is removed from your title."
                }
              ].map((item, index) => (
                <Card key={index} className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{item.question}</h3>
                  <p className="text-gray-600">{item.answer}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 bg-gray-50" id="contactSection">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Our Title Bond Specialists</h2>
              <div className="w-20 h-1 bg-[#9b87f5] mx-auto rounded-full mb-6"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Need help with a Georgia title bond? Our specialists are ready to assist you.
              </p>
            </div>

            <Card className="p-8">
              <ContactForm />
            </Card>
          </div>
        </section>

        {/* Hidden SEO Section */}
        <div className="hidden">
          <h2>Georgia Certificate of Title Bonds</h2>
          <p>
            Certificate of title bond Georgia, lost title bond Georgia, bonded title Georgia, cheap title bond, 
            affordable title bond, title bond near me, motor vehicle title bond, mobile home title bond, 
            motorcycle title bond, boat title bond, car title bond Georgia, vehicle title bond, bonded certificate of title, 
            certificate of title surety bond, same day title bond Georgia, instant title bond, title bond application, 
            bonding company for title bond, title bond services, no title bond, replacement title bond.
          </p>
          <h2>Georgia Counties Title Bonds</h2>
          <p>
            We provide certificate of title bonds in all 159 Georgia counties including Fulton County, Gwinnett County, 
            Cobb County, DeKalb County, Clayton County, Chatham County, Cherokee County, Henry County, Forsyth County, 
            Richmond County, Hall County, Muscogee County, Bibb County, Houston County, Paulding County, Glynn County, 
            Columbia County, Carroll County, Douglas County, Bartow County, Fayette County, Coweta County, Newton County, 
            Lowndes County, Floyd County, Dougherty County, Rockdale County, Barrow County, Walton County, Jackson County, 
            Gordon County, Whitfield County, Clarke County, Bulloch County, Troup County, Liberty County, Camden County, 
            Effingham County, Thomas County, Ware County, Laurens County, Walker County, Colquitt County, Catoosa County, 
            Habersham County, Polk County, Oconee County, Peach County, Harris County, Butts County, Wayne County, 
            Coffee County, Decatur County, Bryan County, Spalding County, Murray County, Toombs County, Putnam County, 
            Sumter County, Stephens County, White County, Gilmer County, Mitchell County, Haralson County, Tift County, 
            Jones County, Crisp County, Baldwin County, Morgan County, Franklin County, Madison County, Burke County, 
            Greene County, Washington County, Upson County, Banks County, Early County, Union County, Long County, 
            Ben Hill County, Tattnall County, Worth County, McDuffie County, Grady County, Pierce County, Towns County, 
            Pike County, Dodge County, Dade County, Appling County, Bacon County, Baker County, Berrien County, 
            Bleckley County, Brantley County, Brooks County, Candler County, Charlton County, Chattahoochee County, 
            Chattooga County, Clay County, Clinch County, Cook County, Crawford County, Dawson County, Dooly County, 
            Echols County, Elbert County, Emanuel County, Evans County, Fannin County, Glascock County, Hancock County, 
            Hart County, Heard County, Irwin County, Jasper County, Jeff Davis County, Jefferson County, Jenkins County, 
            Johnson County, Lamar County, Lanier County, Lee County, Lincoln County, Lumpkin County, Macon County, 
            Marion County, McIntosh County, Meriwether County, Miller County, Monroe County, Montgomery County, 
            Oglethorpe County, Pickens County, Pulaski County, Quitman County, Rabun County, Randolph County, 
            Schley County, Screven County, Seminole County, Stewart County, Talbot County, Taliaferro County, 
            Taylor County, Telfair County, Terrell County, Treutlen County, Turner County, Twiggs County, 
            Warren County, Webster County, Wheeler County, Wilcox County, Wilkes County, Wilkinson County.
          </p>
          <h2>Georgia Cities Title Bonds</h2>
          <p>
            We provide certificate of title bonds in Atlanta, Savannah, Macon, Augusta, Columbus, Athens, Sandy Springs, 
            Roswell, Johns Creek, Alpharetta, Marietta, Smyrna, Dunwoody, Brookhaven, Peachtree Corners, Kennesaw, 
            Gainesville, Dalton, Lawrenceville, Duluth, Peachtree City, Newnan, Douglasville, Carrollton, Rome, 
            Warner Robins, Valdosta, Albany, Fayetteville, Mcdonough, Hinesville, Milton, Statesboro, 
            Woodstock, Canton, Acworth, Pooler, Decatur, Snellville, Kingsland, Suwanee, Braselton, Buford, 
            Sugar Hill, Fairburn, Union City, Conyers, Stockbridge, Winder, Jefferson, Villa Rica, Holly Springs, 
            Tyrone, Hampton, Loganville, St. Marys, Richmond Hill, Rincon, Calhoun, Griffin, Covington, Jesup, 
            Tifton, Cordele, Dublin, Moultrie, La Grange, Thomasville, Brunswick, Americus, Waycross, Cusseta, 
            Fitzgerald, Fort Valley, Perry, Vidalia, Cairo, Bainbridge, Sylvania, Statesboro.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TitleBonds;

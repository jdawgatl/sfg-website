
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Key, Check, FileCheck, Shield, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";

const Bonds = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Surety Bonds | Title Bonds | Court Bonds | Fayetteville GA</title>
        <meta name="description" content="Fast title bonds, court bonds, probate bonds and contract bonds in Georgia. Easy online bond application and same-day service." />
        <meta name="keywords" content="title bond Georgia, surety bonds Fayetteville GA, court bonds, probate bonds, contract bonds, title bond near me, cheap title bond, lost title bond, vehicle title bond, auto title bond, motor vehicle title bond" />
      </Helmet>
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[400px]">
          <img
            src="/images/products-surety-cover.avif"
            alt="Surety Bonds and Title Bonds"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Surety Bonds & Title Bonds
              </h1>
              <div className="w-20 h-1 bg-sky-600 mx-auto rounded-full mb-6"></div>
              <p className="text-white text-lg max-w-2xl mx-auto px-4">
                Fast, affordable surety bonds including title bonds, court bonds, probate bonds and more
              </p>
              <div className="mt-8">
                <Button asChild size="lg" className="bg-sky-600 hover:bg-sky-700">
                  <Link to="/quote">Get a Bond Quote</Link>
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
              <h2 className="text-3xl font-bold mb-6">Title Bonds in Georgia</h2>
              <p className="text-lg text-gray-700 mb-6">
                Need a title bond (also called a lost title bond) in Georgia? We provide fast, affordable title bonds to help you get a bonded title for your vehicle when the original title is lost, stolen, or unavailable.
              </p>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Why You Might Need a Title Bond:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-sky-600 mt-1 flex-shrink-0" />
                    <span>You purchased a vehicle without receiving a title</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-sky-600 mt-1 flex-shrink-0" />
                    <span>The original title was lost or destroyed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-sky-600 mt-1 flex-shrink-0" />
                    <span>You have a bill of sale but no title</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-sky-600 mt-1 flex-shrink-0" />
                    <span>The seller never provided the title after purchase</span>
                  </li>
                </ul>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Our Title Bond Process:</h3>
                <ol className="space-y-4">
                  <li className="flex gap-3">
                    <div className="bg-sky-100 text-sky-600 h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0">1</div>
                    <div>
                      <p className="font-medium">Complete our quick application</p>
                      <p className="text-gray-600">Just a few basic details about your vehicle</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="bg-sky-100 text-sky-600 h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0">2</div>
                    <div>
                      <p className="font-medium">Receive your bond</p>
                      <p className="text-gray-600">Same-day processing in most cases</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="bg-sky-100 text-sky-600 h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0">3</div>
                    <div>
                      <p className="font-medium">Submit to DMV</p>
                      <p className="text-gray-600">Take your bond to your local tag office</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="bg-sky-100 text-sky-600 h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0">4</div>
                    <div>
                      <p className="font-medium">Get your bonded title</p>
                      <p className="text-gray-600">Drive legally with your new bonded title</p>
                    </div>
                  </li>
                </ol>
              </div>

              <div className="mt-8">
                <Button asChild size="lg">
                  <a href="https://www.mybondapp.com/23196952" target="_blank" rel="noopener noreferrer">
                    Buy a Title Bond Now
                  </a>
                </Button>
              </div>
            </div>

            <div>
              <img 
                src="/images/products-surety-surety-bonds.avif" 
                alt="Title Bond and Surety Bond Services"
                className="rounded-lg shadow-lg w-full h-auto mb-8"
              />
              
              <Card className="shadow-md mb-8">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Shield className="h-5 w-5 text-sky-600 mr-2" />
                    Other Bond Types We Offer
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <FileCheck className="h-5 w-5 text-sky-600 mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-medium">Court Bonds</span>
                        <p className="text-sm text-gray-600">Administrator bonds, executor bonds, guardianship bonds</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <FileCheck className="h-5 w-5 text-sky-600 mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-medium">Probate Bonds</span>
                        <p className="text-sm text-gray-600">Estate bonds, fiduciary bonds, trustee bonds</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <FileCheck className="h-5 w-5 text-sky-600 mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-medium">License Bonds</span>
                        <p className="text-sm text-gray-600">Contractor bonds, auto dealer bonds, mortgage broker bonds</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <FileCheck className="h-5 w-5 text-sky-600 mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-medium">Contract Bonds</span>
                        <p className="text-sm text-gray-600">Performance bonds, payment bonds, bid bonds</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <div className="bg-sky-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Award className="h-5 w-5 text-sky-600 mr-2" />
                  Why Choose Us For Your Bond Needs
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-sky-600" />
                    <span>Fast approval process - same day in most cases</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-sky-600" />
                    <span>Direct appointments with top surety companies</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-sky-600" />
                    <span>Competitive rates for all bond types</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-sky-600" />
                    <span>Expert guidance through the bonding process</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-sky-600" />
                    <span>Serving Georgia, Tennessee and Mississippi</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Hidden section for SEO - only screen readers will read this, but search engines will index it */}
        <section className="sr-only">
          <h2>Georgia Title Bonds and Surety Bonds</h2>
          <p>
            We provide title bonds and surety bonds throughout Georgia including Fayetteville, Atlanta, Peachtree City, 
            Newnan, McDonough, Jonesboro, Stockbridge, Griffin, Riverdale, Union City, College Park, East Point, 
            Forest Park, Morrow, Lovejoy, Hampton, Fairburn, Tyrone, Senoia, Brooks, Sharpsburg, Locust Grove, 
            Jackson, Flovilla, Jenkinsburg, Milner, Zebulon, Barnesville, Thomaston, LaGrange, Carrollton, Villa Rica, 
            Douglasville, Lithia Springs, Austell, Powder Springs, Hiram, Dallas, Acworth, Kennesaw, Marietta, Smyrna, 
            Mableton, Lithonia, Conyers, Covington, Social Circle, Monroe, Loganville, Snellville, Lawrenceville, 
            Lilburn, Stone Mountain, Tucker, Decatur, Avondale Estates, Clarkston, Chamblee, Doraville, Dunwoody, 
            Sandy Springs, Roswell, Alpharetta, Milton, Johns Creek, Cumming, Suwanee, Sugar Hill, Buford, Flowery Branch, 
            Oakwood, Gainesville, Dahlonega, Cleveland, Helen, Baldwin, Cornelia, Toccoa, Clayton, Dillard, Hiawassee, 
            Young Harris, Blairsville, Blue Ridge, Ellijay, Jasper, Canton, Woodstock, Holly Springs, Waleska, Ball Ground, 
            Nelson, Talking Rock, Fairmount, Chatsworth, Dalton, Calhoun, Adairsville, Cartersville, White, Kingston, 
            Rome, Cedartown, Rockmart, Bremen, Buchanan, Temple, Tallapoosa.
          </p>
          <p>
            We also serve Tennessee with title bonds and surety bonds in Nashville, Memphis, Knoxville, Chattanooga, 
            Clarksville, Murfreesboro, Franklin, Jackson, Johnson City, Kingsport, Hendersonville, Bartlett, Cleveland, 
            Smyrna, Germantown, Columbia, Gallatin, Spring Hill, Cookeville, Lebanon, Mount Juliet, Morristown, Oak Ridge, 
            Bristol, Sevierville, Maryville, Eastgate, Elizabethton, La Vergne, Athens, Springfield, Portland, Shelbyville, 
            Dyersburg, Tullahoma, Goodlettsville, Greeneville, Dickson, Union City, Paris, Soddy-Daisy, Martin, Collierville, 
            Manchester, Crossville, Pulaski, Millington, Jefferson City, Erwin, Oakland, Lewisburg, Newport, Ripley, 
            Seymour, Dayton, Lexington, Covington, Church Hill, Mount Carmel, Collegedale, Winchester, Brownsville, 
            McKenzie, Sparta, Kingston, Fairview, Milan, Henderson, Savannah, Clinton, Lenoir City, Farragut, Fayetteville, 
            Harriman, Signal Mountain, Bolivar, Atoka, Munford, Humboldt, Rockwood, LaFollette, Camden, Sweetwater, Alcoa, 
            Rogersville, Selmer, Dunlap, South Pittsburg, Huntingdon, Forest Hills, Gatlinburg, Pigeon Forge, Lawrenceburg.
          </p>
          <p>
            Mississippi residents can access title bonds and surety bonds through our agency in Jackson, Gulfport, Southaven, 
            Hattiesburg, Biloxi, Meridian, Tupelo, Olive Branch, Greenville, Horn Lake, Pearl, Madison, Clinton, Ridgeland, 
            Starkville, Oxford, Vicksburg, Columbus, Pascagoula, Brandon, Hernando, Gautier, Laurel, Ocean Springs, 
            Long Beach, Corinth, Natchez, Moss Point, Grenada, McComb, Brookhaven, Canton, Greenwood, D'Iberville, 
            West Point, Picayune, Clarksdale, Flowood, Yazoo City, Richland, Batesville, Cleveland, Louisville, Aberdeen, 
            Bay St. Louis, New Albany, Philadelphia, Waynesboro, Kosciusko, Senatobia, Columbia, Forest, Amory, 
            Holly Springs, Indianola, Petal, Pontotoc, Booneville, Waveland, Pass Christian, Ripley, Winona, 
            Magee, Carthage, Diamondhead, Iuka, Fulton.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Bonds;

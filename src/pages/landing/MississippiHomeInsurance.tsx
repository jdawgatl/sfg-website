
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Home, Shield, Umbrella, DollarSign, BadgeCheck, Clock, MapPin } from "lucide-react";
import ContactForm from "@/components/shared/ContactForm";
import { HelmetProvider } from "react-helmet-async";
import { SEOWrapper } from "@/components/seo/SEOWrapper";

const MississippiHomeInsurance = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <HelmetProvider>
        <SEOWrapper />
      </HelmetProvider>
      
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative h-[500px]">
          <img
            src="/images/products-home-cover.avif"
            alt="Mississippi Home Insurance"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center max-w-4xl mx-auto px-4">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Mississippi Home Insurance</h1>
              <div className="w-20 h-1 bg-sky-600 mx-auto rounded-full mb-6"></div>
              <p className="text-xl text-white mb-8">
                Protect your Mississippi home with comprehensive coverage at competitive rates.
              </p>
              <Button asChild size="lg" className="bg-sky-600 hover:bg-sky-700">
                <Link to="/quote">Get a Free Quote</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-12"
          >
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">
                Protect Your Mississippi Home
              </h2>
              <p className="text-lg text-gray-600">
                Get comprehensive home insurance coverage in Mississippi. We understand
                the unique needs of Mississippi homeowners and offer tailored protection
                for your property.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <Home className="h-6 w-6 text-sky-600" />
                  <div>
                    <h3 className="font-semibold">Property Coverage</h3>
                    <p className="text-gray-600">Protect your Mississippi home</p>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <Shield className="h-6 w-6 text-sky-600" />
                  <div>
                    <h3 className="font-semibold">Liability Protection</h3>
                    <p className="text-gray-600">Coverage for accidents on your property</p>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <Umbrella className="h-6 w-6 text-sky-600" />
                  <div>
                    <h3 className="font-semibold">Storm Coverage</h3>
                    <p className="text-gray-600">Protection from Mississippi weather</p>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <DollarSign className="h-6 w-6 text-sky-600" />
                  <div>
                    <h3 className="font-semibold">Contents Coverage</h3>
                    <p className="text-gray-600">Protect your belongings</p>
                  </div>
                </li>
              </ul>
              <Button asChild size="lg" className="mt-6 bg-sky-600 hover:bg-sky-700">
                <Link to="/quote">Get a Mississippi Home Quote</Link>
              </Button>
            </div>
            <div className="space-y-6">
              <img
                src="/images/products-home-home-insurance.avif"
                alt="Mississippi Home Insurance Coverage"
                className="rounded-lg shadow-lg"
              />
              <div className="bg-sky-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Why Choose Us for Mississippi Home Insurance?</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-sky-600" />
                    Mississippi insurance experts
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-sky-600" />
                    Multiple carrier options
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-sky-600" />
                    Competitive rates
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-sky-600" />
                    Fast claims service
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Coverage Options Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Mississippi Coverage Options</h2>
              <div className="w-20 h-1 bg-sky-600 mx-auto rounded-full mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We offer comprehensive coverage options to protect your Mississippi home.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Dwelling Coverage",
                  icon: Home,
                  description: "Protects the physical structure of your home from covered perils like fire and storms."
                },
                {
                  title: "Personal Property",
                  icon: DollarSign,
                  description: "Covers your belongings inside the home, from furniture to electronics."
                },
                {
                  title: "Liability Coverage",
                  icon: Shield,
                  description: "Protects you if someone is injured on your property or if you damage others' property."
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="p-6 h-full">
                    <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center mb-4">
                      <item.icon className="h-6 w-6 text-sky-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mississippi Cities Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Serving All of Mississippi</h2>
              <div className="w-20 h-1 bg-sky-600 mx-auto rounded-full mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We provide home insurance coverage throughout Mississippi, including these major cities:
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Jackson", "Gulfport", "Southaven", "Hattiesburg", 
                "Biloxi", "Meridian", "Tupelo", "Olive Branch",
                "Greenville", "Horn Lake", "Pearl", "Oxford"
              ].map((city) => (
                <div key={city} className="bg-gray-50 p-4 rounded-lg text-center">
                  <MapPin className="h-5 w-5 text-sky-600 mx-auto mb-2" />
                  <span className="font-medium">{city}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-sky-600 to-sky-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Protect Your Mississippi Home?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Talk to one of our Mississippi insurance specialists today for a personalized quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-sky-600 hover:bg-gray-100"
              >
                <Link to="/quote">Get a Quote</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-sky-600"
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 bg-white" id="contactSection">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Get Your Mississippi Home Quote</h2>
              <div className="w-20 h-1 bg-sky-600 mx-auto rounded-full mb-6"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Fill out the form below, and our Mississippi insurance specialists will contact you with a customized quote.
              </p>
            </div>

            <Card className="p-8">
              <ContactForm />
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MississippiHomeInsurance;

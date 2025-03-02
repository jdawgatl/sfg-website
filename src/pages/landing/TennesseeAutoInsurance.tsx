
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Car, Shield, AlertTriangle, Clock, BadgeCheck, Coins, MapPin } from "lucide-react";
import ContactForm from "@/components/shared/ContactForm";
import { HelmetProvider } from "react-helmet-async";
import { SEOWrapper } from "@/components/seo/SEOWrapper";
import { Image } from "@/components/ui/image";

const TennesseeAutoInsurance = () => {
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
            src="/images/toyota.avif"
            alt="Tennessee Auto Insurance"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center max-w-4xl mx-auto px-4">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Tennessee Auto Insurance</h1>
              <div className="w-20 h-1 bg-sky-600 mx-auto rounded-full mb-6"></div>
              <p className="text-xl text-white mb-8">
                Affordable auto insurance for drivers throughout Tennessee with same-day coverage and competitive rates.
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
                Affordable Auto Insurance in Tennessee
              </h2>
              <p className="text-lg text-gray-600">
                Get competitive rates on Tennessee auto insurance. We work with multiple
                carriers to find you the best coverage at the lowest rates in the Volunteer State.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <Car className="h-6 w-6 text-sky-600" />
                  <div>
                    <h3 className="font-semibold">Liability Coverage</h3>
                    <p className="text-gray-600">Meet Tennessee state requirements</p>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <Shield className="h-6 w-6 text-sky-600" />
                  <div>
                    <h3 className="font-semibold">Full Coverage</h3>
                    <p className="text-gray-600">Comprehensive protection for your vehicle</p>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <AlertTriangle className="h-6 w-6 text-sky-600" />
                  <div>
                    <h3 className="font-semibold">High-Risk Coverage</h3>
                    <p className="text-gray-600">Solutions for all driving records</p>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="h-6 w-6 text-sky-600" />
                  <div>
                    <h3 className="font-semibold">Quick Service</h3>
                    <p className="text-gray-600">Same-day coverage available</p>
                  </div>
                </li>
              </ul>
              <Button asChild size="lg" className="mt-6 bg-sky-600 hover:bg-sky-700">
                <Link to="/quote">Get a Tennessee Auto Quote</Link>
              </Button>
            </div>
            <div className="space-y-6">
              <Image
                src="/images/camaro-resized.avif"
                alt="Tennessee Auto Insurance Coverage"
                className="rounded-lg shadow-lg w-full h-[300px] object-cover object-center"
              />
              <div className="bg-sky-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Why Choose Us for Tennessee Auto Insurance?</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-sky-600" />
                    Multiple carrier options
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-sky-600" />
                    Competitive Tennessee rates
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-sky-600" />
                    Easy claims process
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-sky-600" />
                    Local expertise
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Tennessee Coverage Options</h2>
              <div className="w-20 h-1 bg-sky-600 mx-auto rounded-full mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We offer a variety of coverage options to protect you and your vehicle on Tennessee roads.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Liability Coverage",
                  icon: Shield,
                  description: "Meets Tennessee's minimum requirements and protects you against claims from others."
                },
                {
                  title: "Comprehensive Coverage",
                  icon: BadgeCheck,
                  description: "Protects against non-collision damage like theft, vandalism, and weather events."
                },
                {
                  title: "Collision Coverage",
                  icon: Car,
                  description: "Covers damage to your vehicle from collisions regardless of fault."
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

        {/* Tennessee Cities Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Serving All of Tennessee</h2>
              <div className="w-20 h-1 bg-sky-600 mx-auto rounded-full mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We provide auto insurance coverage throughout Tennessee, including these major cities:
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Nashville", "Memphis", "Knoxville", "Chattanooga", 
                "Clarksville", "Murfreesboro", "Franklin", "Jackson",
                "Johnson City", "Kingsport", "Hendersonville", "Bartlett"
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
            <h2 className="text-3xl font-bold mb-6">Ready to Get Covered in Tennessee?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Talk to one of our Tennessee insurance specialists today for a personalized quote.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Get Your Tennessee Auto Quote</h2>
              <div className="w-20 h-1 bg-sky-600 mx-auto rounded-full mb-6"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Fill out the form below, and our Tennessee insurance specialists will contact you with a customized quote.
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

export default TennesseeAutoInsurance;

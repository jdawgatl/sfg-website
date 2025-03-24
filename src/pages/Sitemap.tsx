
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SEOWrapper } from "@/components/seo/SEOWrapper";
import HomeButton from "@/components/shared/HomeButton";

const Sitemap = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOWrapper />
      <Navbar />

      <main className="container mx-auto px-4 py-12 flex-grow relative">
        <div className="fixed bottom-6 right-6 z-40">
          <HomeButton />
        </div>
        <h1 className="text-3xl font-bold mb-8 text-gray-800">Site Map</h1>
        
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {/* Main Pages */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-700 border-b pb-2">Main Pages</h2>
            <ul className="space-y-2">
              <li><Link to="/" className="text-blue-600 hover:underline">Home</Link></li>
              <li><Link to="/about" className="text-blue-600 hover:underline">About Us</Link></li>
              <li><Link to="/service" className="text-blue-600 hover:underline">Our Services</Link></li>
              <li><Link to="/products" className="text-blue-600 hover:underline">Insurance Products</Link></li>
              <li><Link to="/quote" className="text-blue-600 hover:underline">Get a Quote</Link></li>
              <li><Link to="/contact" className="text-blue-600 hover:underline">Contact Us</Link></li>
              <li><Link to="/blog" className="text-blue-600 hover:underline">Insurance Blog</Link></li>
              <li><Link to="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Product Pages */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-700 border-b pb-2">Insurance Products</h2>
            <ul className="space-y-2">
              <li><Link to="/products/auto" className="text-blue-600 hover:underline">Auto Insurance</Link></li>
              <li><Link to="/products/home" className="text-blue-600 hover:underline">Home Insurance</Link></li>
              <li><Link to="/products/commercial" className="text-blue-600 hover:underline">Commercial Insurance</Link></li>
              <li><Link to="/products/bonds" className="text-blue-600 hover:underline">Surety Bonds</Link></li>
            </ul>
          </div>

          {/* Geographic Pages */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-700 border-b pb-2">Service Areas</h2>
            <ul className="space-y-2">
              <li><Link to="/georgia-insurance" className="text-blue-600 hover:underline">Georgia Insurance</Link></li>
              <li><Link to="/tennessee-auto-insurance" className="text-blue-600 hover:underline">Tennessee Auto Insurance</Link></li>
              <li><Link to="/mississippi-home-insurance" className="text-blue-600 hover:underline">Mississippi Home Insurance</Link></li>
            </ul>
          </div>

          {/* Specialty Pages */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-700 border-b pb-2">Specialty Services</h2>
            <ul className="space-y-2">
              <li><Link to="/safeway-insurance" className="text-blue-600 hover:underline">Safeway Insurance</Link></li>
              <li><Link to="/surety-bonds" className="text-blue-600 hover:underline">Surety Bonds</Link></li>
              <li><Link to="/landing/title-bonds" className="text-blue-600 hover:underline">Title Bonds</Link></li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Sitemap;

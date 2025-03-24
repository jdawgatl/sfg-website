
import { Link } from "react-router-dom";
import { PhoneIcon, MailIcon, MapPinIcon } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Column 1: Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Standard Financial Group</h3>
            <div className="space-y-2">
              <p className="flex items-start">
                <MapPinIcon className="h-5 w-5 mr-2 shrink-0 mt-0.5" />
                <span>490 Bradley Dr Ste A<br />Fayetteville, GA 30214</span>
              </p>
              <p className="flex items-center">
                <PhoneIcon className="h-5 w-5 mr-2 shrink-0" />
                <a href="tel:+17709977999" className="hover:text-sky-400 transition-colors">(770) 997-7999</a>
              </p>
              <p className="flex items-center">
                <MailIcon className="h-5 w-5 mr-2 shrink-0" />
                <a href="mailto:info@sfg-ins.com" className="hover:text-sky-400 transition-colors">info@sfg-ins.com</a>
              </p>
            </div>
          </div>
          
          {/* Column 2: Insurance Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Insurance Products</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products/auto" className="hover:text-sky-400 transition-colors">Auto Insurance</Link>
              </li>
              <li>
                <Link to="/products/home" className="hover:text-sky-400 transition-colors">Home Insurance</Link>
              </li>
              <li>
                <Link to="/products/commercial" className="hover:text-sky-400 transition-colors">Commercial Insurance</Link>
              </li>
              <li>
                <Link to="/products/bonds" className="hover:text-sky-400 transition-colors">Surety Bonds</Link>
              </li>
            </ul>
          </div>
          
          {/* Column 3: Specialty Services - formerly Locations */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Specialty Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/georgia-insurance" className="hover:text-sky-400 transition-colors">Georgia Insurance</Link>
              </li>
              <li>
                <Link to="/tennessee-auto-insurance" className="hover:text-sky-400 transition-colors">Tennessee Auto Insurance</Link>
              </li>
              <li>
                <Link to="/mississippi-home-insurance" className="hover:text-sky-400 transition-colors">Mississippi Home Insurance</Link>
              </li>
              <li>
                <Link to="/safeway-insurance" className="hover:text-sky-400 transition-colors">Safeway Insurance</Link>
              </li>
              <li>
                <Link to="/landing/title-bonds" className="hover:text-sky-400 transition-colors">Title Bonds</Link>
              </li>
            </ul>
          </div>
          
          {/* Column 4: Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-sky-400 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-sky-400 transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-sky-400 transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="/quote" className="hover:text-sky-400 transition-colors">Get a Quote</Link>
              </li>
              <li>
                <Link to="/sitemap" className="hover:text-sky-400 transition-colors">Site Map</Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-sky-400 transition-colors">Privacy Policy</Link>
              </li>
            </ul>
          </div>
          
          {/* NEW Column 5: Insurance Glossary */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Insurance Glossary</h3>
            <p className="text-gray-400 mb-3">Learn about insurance terms and concepts with our comprehensive glossary.</p>
            <Link 
              to="/glossary" 
              className="bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded transition-colors inline-block"
            >
              View Glossary
            </Link>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-sm text-gray-400">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p>&copy; {currentYear} Standard Financial Group. All rights reserved.</p>
            <div className="text-gray-600 text-xs">
              <Link to="/agent-login" className="hover:text-gray-500 opacity-40" aria-label="Agent Login">Agent Login</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

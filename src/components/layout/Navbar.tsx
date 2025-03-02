
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const navigation = [{
    name: "HOME",
    href: "/"
  }, {
    name: "PRODUCTS",
    href: "/products",
    submenu: [
      { name: "Auto Insurance", href: "/products/auto" },
      { name: "Home Insurance", href: "/products/home" },
      { name: "Commercial Insurance", href: "/products/commercial" },
      { name: "Surety Bonds", href: "/products/bonds" }
    ]
  }, {
    name: "SERVICE",
    href: "/service"
  }, {
    name: "ABOUT",
    href: "/about"
  }, {
    name: "CONTACT",
    href: "/contact"
  }];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24">
          {/* Logo Section with Stacked Text */}
          <div className="flex items-center">
            <div className="flex flex-col">
              <Link to="/" className="block">
                <div className="text-[#003087] text-3xl md:text-4xl font-bold tracking-wide">
                  STANDARD
                </div>
              </Link>
              <div className="text-[#003087] text-xl md:text-2xl font-semibold tracking-wide">
                FINANCIAL GROUP
              </div>
              <div className="text-[#003087] text-sm md:text-base">
                INSURANCE & BONDS
              </div>
              <a 
                href="tel:+17709977999" 
                className="mt-1 inline-flex items-center text-sm text-sky-600 hover:text-sky-700 transition-colors group"
                aria-label="Call us at (770) 997-7999"
              >
                <Phone className="h-3 w-3 mr-1 group-hover:scale-110 transition-transform" />
                (770) 997-7999
              </a>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center">
            <NavigationMenu>
              <NavigationMenuList>
                {navigation.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    {item.submenu ? (
                      <>
                        <NavigationMenuTrigger className="text-gray-700 hover:text-sky-600 transition-colors text-base font-medium">
                          {item.name}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid w-[200px] gap-2 p-4">
                            {item.submenu.map((subItem) => (
                              <li key={subItem.name}>
                                <NavigationMenuLink asChild>
                                  <Link
                                    to={subItem.href}
                                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-sky-100 hover:text-sky-600 focus:bg-sky-100 focus:text-sky-600"
                                  >
                                    <div className="text-sm font-medium leading-none">{subItem.name}</div>
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            ))}
                            <li>
                              <NavigationMenuLink asChild>
                                <Link
                                  to={item.href}
                                  className="block select-none rounded-md p-3 text-sm leading-none no-underline outline-none transition-colors hover:bg-sky-100 hover:text-sky-600 focus:bg-sky-100 focus:text-sky-600 text-sky-600 font-medium"
                                >
                                  View All Products
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <Link 
                        to={item.href} 
                        className="relative text-gray-700 hover:text-sky-600 transition-colors py-2 px-4 text-base font-medium after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-sky-600 after:left-0 after:bottom-0 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100"
                      >
                        {item.name}
                      </Link>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-700 hover:text-sky-600 transition-colors p-2"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map(item => (
              <div key={item.name}>
                {item.submenu ? (
                  <div>
                    <div className="flex items-center justify-between text-gray-700 px-3 py-2">
                      <Link 
                        to={item.href} 
                        className="hover:text-sky-600 transition-colors text-base font-medium"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                      <ChevronDown className="h-4 w-4 text-gray-500" />
                    </div>
                    <div className="pl-4 border-l-2 border-gray-200 ml-3 mb-2">
                      {item.submenu.map(subItem => (
                        <Link 
                          key={subItem.name} 
                          to={subItem.href} 
                          className="text-gray-700 hover:text-sky-600 transition-colors block px-3 py-2 text-sm"
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link 
                    to={item.href} 
                    className="text-gray-700 hover:text-sky-600 transition-colors block px-3 py-2 hover:bg-sky-50 text-base font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

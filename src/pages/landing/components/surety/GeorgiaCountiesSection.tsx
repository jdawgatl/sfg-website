
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const GeorgiaCountiesSection = () => {
  const featuredCounties = [
    "Fulton", "Gwinnett", "Cobb", "DeKalb", "Clayton", "Chatham", "Cherokee", "Henry", 
    "Forsyth", "Richmond", "Hall", "Muscogee", "Bibb", "Houston", "Paulding", "Glynn", 
    "Columbia", "Carroll", "Douglas", "Bartow", "Fayette", "Coweta", "Newton", "Lowndes", 
    "Floyd", "Dougherty", "Rockdale", "Barrow", "Walton", "Jackson", "Gordon", "Whitfield", 
    "Clarke", "Bulloch", "Troup", "Liberty", "Camden", "Effingham", "Thomas", "Ware"
  ];

  return (
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
          {featuredCounties.map((county) => (
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
  );
};

export default GeorgiaCountiesSection;

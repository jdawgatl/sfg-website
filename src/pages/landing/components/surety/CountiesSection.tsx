
import { Button } from "@/components/ui/button";

const CountiesSection = () => {
  return (
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
  );
};

export default CountiesSection;

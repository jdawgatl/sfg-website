
import { Card } from "@/components/ui/card";

const CitiesSection = () => {
  const cities = [
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
  ];

  return (
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
          {cities.map((item) => (
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
  );
};

export default CitiesSection;

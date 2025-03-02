
import { MapPin } from "lucide-react";

const TennesseeCities = () => {
  return (
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
  );
};

export default TennesseeCities;

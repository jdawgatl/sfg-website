
import { Tag } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const CarrierShowcase = () => {
  return (
    <Card className="shadow-md mb-8">
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <Tag className="h-5 w-5 text-sky-600 mr-2" />
          Our Auto Insurance Carriers
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <img src="/images/progressive.avif" alt="Progressive Insurance" className="h-12 object-contain" />
          <img src="/images/dairyland.avif" alt="Dairyland Insurance" className="h-12 object-contain" />
          <img src="/images/national-general.avif" alt="National General" className="h-12 object-contain" />
          <img src="/images/safeway-insurance.avif" alt="Safeway Insurance" className="h-12 object-contain" />
          <img src="/images/clearcover.avif" alt="Clearcover Insurance" className="h-12 object-contain" />
          <img src="/images/geico.avif" alt="Geico Insurance" className="h-12 object-contain" />
        </div>
      </CardContent>
    </Card>
  );
};

export default CarrierShowcase;

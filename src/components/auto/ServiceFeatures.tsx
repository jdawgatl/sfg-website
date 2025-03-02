
import { Clock, Award, DollarSign } from "lucide-react";

const ServiceFeatures = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-start gap-3 p-4 bg-white rounded-lg shadow">
        <Clock className="h-8 w-8 text-sky-600 flex-shrink-0" />
        <div>
          <h4 className="font-semibold">Same-Day Coverage</h4>
          <p className="text-gray-600">Get insured today with our quick quote process</p>
        </div>
      </div>
      
      <div className="flex items-start gap-3 p-4 bg-white rounded-lg shadow">
        <Award className="h-8 w-8 text-sky-600 flex-shrink-0" />
        <div>
          <h4 className="font-semibold">Local Expertise</h4>
          <p className="text-gray-600">Fayetteville agents who understand Georgia insurance laws</p>
        </div>
      </div>
      
      <div className="flex items-start gap-3 p-4 bg-white rounded-lg shadow">
        <DollarSign className="h-8 w-8 text-sky-600 flex-shrink-0" />
        <div>
          <h4 className="font-semibold">Flexible Payment Options</h4>
          <p className="text-gray-600">Low down payments and monthly installment plans</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceFeatures;

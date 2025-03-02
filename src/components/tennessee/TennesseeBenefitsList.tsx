
import { Car, Shield, AlertTriangle, Clock } from "lucide-react";

const TennesseeBenefitsList = () => {
  return (
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
  );
};

export default TennesseeBenefitsList;

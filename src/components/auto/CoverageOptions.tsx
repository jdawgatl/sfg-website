
import { Shield, Car, Ban, Gauge } from "lucide-react";

const CoverageOptions = () => {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-4">Coverage Options We Offer:</h3>
      <ul className="space-y-3">
        <li className="flex items-start gap-2">
          <Shield className="h-5 w-5 text-sky-600 mt-1 flex-shrink-0" />
          <div>
            <span className="font-medium">Liability Coverage</span>
            <p className="text-sm text-gray-600">Affordable liability-only policies that meet Georgia state requirements</p>
          </div>
        </li>
        <li className="flex items-start gap-2">
          <Car className="h-5 w-5 text-sky-600 mt-1 flex-shrink-0" />
          <div>
            <span className="font-medium">Full Coverage</span>
            <p className="text-sm text-gray-600">Comprehensive and collision coverage at competitive rates</p>
          </div>
        </li>
        <li className="flex items-start gap-2">
          <Ban className="h-5 w-5 text-sky-600 mt-1 flex-shrink-0" />
          <div>
            <span className="font-medium">SR22/FR44 Filing</span>
            <p className="text-sm text-gray-600">Help with high-risk insurance needs and SR22 filings</p>
          </div>
        </li>
        <li className="flex items-start gap-2">
          <Gauge className="h-5 w-5 text-sky-600 mt-1 flex-shrink-0" />
          <div>
            <span className="font-medium">Rideshare Coverage</span>
            <p className="text-sm text-gray-600">Protection for Uber and Lyft drivers</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default CoverageOptions;

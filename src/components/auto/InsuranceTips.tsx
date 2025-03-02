
import { DollarSign } from "lucide-react";

const InsuranceTips = () => {
  return (
    <div className="bg-sky-50 p-6 rounded-lg mb-8">
      <h3 className="text-xl font-semibold mb-4 flex items-center">
        <DollarSign className="h-5 w-5 text-sky-600 mr-2" />
        How to Get the Cheapest Car Insurance
      </h3>
      <ul className="space-y-3">
        <li className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-sky-600" />
          <span>Bundle auto with home or renters insurance</span>
        </li>
        <li className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-sky-600" />
          <span>Ask about available discounts (multi-car, good driver, etc.)</span>
        </li>
        <li className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-sky-600" />
          <span>Adjust deductibles to fit your budget</span>
        </li>
        <li className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-sky-600" />
          <span>Let us compare rates from multiple carriers</span>
        </li>
      </ul>
    </div>
  );
};

export default InsuranceTips;

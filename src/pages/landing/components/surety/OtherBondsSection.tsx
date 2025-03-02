
import { Building, Check, DollarSign } from "lucide-react";
import { Card } from "@/components/ui/card";

const OtherBondsSection = () => {
  return (
    <section className="py-16 bg-white" id="probate-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Other Surety Bond Services</h2>
          <div className="w-20 h-1 bg-[#9b87f5] mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Beyond title bonds, we offer a comprehensive range of surety bonds to meet your specific needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Building className="h-5 w-5 text-[#9b87f5] mr-2" />
              Probate & Court Bonds
            </h3>
            <ul className="space-y-2 mb-6 text-gray-600">
              <li>Administrator Bonds</li>
              <li>Guardian Bonds</li>
              <li>Conservator Bonds</li>
              <li>Executor Bonds</li>
              <li>Appeal Bonds</li>
            </ul>
            <p className="text-sm text-gray-500 mb-4">
              Serving all Georgia Probate Courts in all 159 counties
            </p>
          </Card>

          <Card className="p-6" id="license-section">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Check className="h-5 w-5 text-[#9b87f5] mr-2" />
              License & Permit Bonds
            </h3>
            <ul className="space-y-2 mb-6 text-gray-600">
              <li>Contractor License Bonds</li>
              <li>Auto Dealer Bonds</li>
              <li>Alcohol License Bonds</li>
              <li>Notary Bonds</li>
              <li>Weight & Scale Bonds</li>
            </ul>
            <p className="text-sm text-gray-500 mb-4">
              Fast approval for business license requirements
            </p>
          </Card>

          <Card className="p-6" id="contract-section">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <DollarSign className="h-5 w-5 text-[#9b87f5] mr-2" />
              Contract Bonds
            </h3>
            <ul className="space-y-2 mb-6 text-gray-600">
              <li>Performance Bonds</li>
              <li>Payment Bonds</li>
              <li>Bid Bonds</li>
              <li>Maintenance Bonds</li>
              <li>Supply Bonds</li>
            </ul>
            <p className="text-sm text-gray-500 mb-4">
              Supporting contractors throughout Georgia
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default OtherBondsSection;

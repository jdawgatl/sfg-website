
import { Card, CardContent } from "@/components/ui/card";
import { FileCheck, Shield, Award } from "lucide-react";

const OtherBondsInfo = () => {
  return (
    <div>
      <img 
        src="/images/products-surety-surety-bonds.avif" 
        alt="Title Bond and Surety Bond Services"
        className="rounded-lg shadow-lg w-full h-auto mb-8"
      />
      
      <Card className="shadow-md mb-8">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <Shield className="h-5 w-5 text-sky-600 mr-2" />
            Other Bond Types We Offer
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <FileCheck className="h-5 w-5 text-sky-600 mt-1 flex-shrink-0" />
              <div>
                <span className="font-medium">Court Bonds</span>
                <p className="text-sm text-gray-600">Administrator bonds, executor bonds, guardianship bonds</p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <FileCheck className="h-5 w-5 text-sky-600 mt-1 flex-shrink-0" />
              <div>
                <span className="font-medium">Probate Bonds</span>
                <p className="text-sm text-gray-600">Estate bonds, fiduciary bonds, trustee bonds</p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <FileCheck className="h-5 w-5 text-sky-600 mt-1 flex-shrink-0" />
              <div>
                <span className="font-medium">License Bonds</span>
                <p className="text-sm text-gray-600">Contractor bonds, auto dealer bonds, mortgage broker bonds</p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <FileCheck className="h-5 w-5 text-sky-600 mt-1 flex-shrink-0" />
              <div>
                <span className="font-medium">Contract Bonds</span>
                <p className="text-sm text-gray-600">Performance bonds, payment bonds, bid bonds</p>
              </div>
            </li>
          </ul>
        </CardContent>
      </Card>
      
      <div className="bg-sky-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <Award className="h-5 w-5 text-sky-600 mr-2" />
          Why Choose Us For Your Bond Needs
        </h3>
        <ul className="space-y-3">
          <li className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-sky-600" />
            <span>Fast approval process - same day in most cases</span>
          </li>
          <li className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-sky-600" />
            <span>Direct appointments with top surety companies</span>
          </li>
          <li className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-sky-600" />
            <span>Competitive rates for all bond types</span>
          </li>
          <li className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-sky-600" />
            <span>Expert guidance through the bonding process</span>
          </li>
          <li className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-sky-600" />
            <span>Serving Georgia, Tennessee and Mississippi</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OtherBondsInfo;

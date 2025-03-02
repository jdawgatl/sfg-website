
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const TitleBondInfo = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Title Bonds in Georgia</h2>
      <p className="text-lg text-gray-700 mb-6">
        Need a title bond (also called a lost title bond) in Georgia? We provide fast, affordable title bonds to help you get a bonded title for your vehicle when the original title is lost, stolen, or unavailable.
      </p>
      
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Why You Might Need a Title Bond:</h3>
        <ul className="space-y-3">
          <li className="flex items-start gap-2">
            <Check className="h-5 w-5 text-sky-600 mt-1 flex-shrink-0" />
            <span>You purchased a vehicle without receiving a title</span>
          </li>
          <li className="flex items-start gap-2">
            <Check className="h-5 w-5 text-sky-600 mt-1 flex-shrink-0" />
            <span>The original title was lost or destroyed</span>
          </li>
          <li className="flex items-start gap-2">
            <Check className="h-5 w-5 text-sky-600 mt-1 flex-shrink-0" />
            <span>You have a bill of sale but no title</span>
          </li>
          <li className="flex items-start gap-2">
            <Check className="h-5 w-5 text-sky-600 mt-1 flex-shrink-0" />
            <span>The seller never provided the title after purchase</span>
          </li>
        </ul>
      </div>
      
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Our Title Bond Process:</h3>
        <ol className="space-y-4">
          <li className="flex gap-3">
            <div className="bg-sky-100 text-sky-600 h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0">1</div>
            <div>
              <p className="font-medium">Complete our quick application</p>
              <p className="text-gray-600">Just a few basic details about your vehicle</p>
            </div>
          </li>
          <li className="flex gap-3">
            <div className="bg-sky-100 text-sky-600 h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0">2</div>
            <div>
              <p className="font-medium">Receive your bond</p>
              <p className="text-gray-600">Same-day processing in most cases</p>
            </div>
          </li>
          <li className="flex gap-3">
            <div className="bg-sky-100 text-sky-600 h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0">3</div>
            <div>
              <p className="font-medium">Submit to DMV</p>
              <p className="text-gray-600">Take your bond to your local tag office</p>
            </div>
          </li>
          <li className="flex gap-3">
            <div className="bg-sky-100 text-sky-600 h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0">4</div>
            <div>
              <p className="font-medium">Get your bonded title</p>
              <p className="text-gray-600">Drive legally with your new bonded title</p>
            </div>
          </li>
        </ol>
      </div>

      <div className="mt-8">
        <Button asChild size="lg">
          <a href="https://www.mybondapp.com/23196952" target="_blank" rel="noopener noreferrer">
            Buy a Title Bond Now
          </a>
        </Button>
      </div>
    </div>
  );
};

export default TitleBondInfo;


import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";

type ConsentCheckboxProps = {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
};

export const ConsentCheckbox = ({ checked, onCheckedChange }: ConsentCheckboxProps) => {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox 
        id="consent" 
        checked={checked}
        onCheckedChange={value => onCheckedChange(value as boolean)} 
        required 
      />
      <label htmlFor="consent" className="text-sm text-gray-600 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
        I consent to receive calls, emails, and/or SMS/MMS for insurance related service and marketing purposes from Standard Financial Group, LLC, including the use of automated technology, artificial voice messages, or pre-recorded calls. Consent is not required to obtain any service or product. Message frequency varies and data rates may apply. Reply STOP to opt-out.
        <Link to="/privacy" className="text-sky-600 hover:underline ml-1">Privacy Policy</Link>
      </label>
    </div>
  );
};


import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface AddressSectionProps {
  address: string;
  city: string;
  state: string;
  zipCode: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const AddressSection: React.FC<AddressSectionProps> = ({
  address,
  city,
  state,
  zipCode,
  onChange
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-2 md:col-span-2">
        <Label htmlFor="address">Street Address</Label>
        <Input
          id="address"
          name="address"
          value={address}
          onChange={onChange}
          placeholder="Enter street address"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="city">City</Label>
        <Input
          id="city"
          name="city"
          value={city}
          onChange={onChange}
          placeholder="Enter city"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="state">State</Label>
        <Input
          id="state"
          name="state"
          value={state}
          onChange={onChange}
          placeholder="Enter state"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="zipCode">ZIP Code</Label>
        <Input
          id="zipCode"
          name="zipCode"
          value={zipCode}
          onChange={onChange}
          placeholder="Enter ZIP code"
        />
      </div>
    </div>
  );
};

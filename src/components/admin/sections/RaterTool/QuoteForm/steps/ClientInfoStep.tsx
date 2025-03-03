
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ClientInfo } from "../../types";

interface ClientInfoStepProps {
  data: ClientInfo;
  onUpdate: (data: ClientInfo) => void;
}

const ClientInfoStep: React.FC<ClientInfoStepProps> = ({ data, onUpdate }) => {
  const [clientInfo, setClientInfo] = useState<ClientInfo>(data);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setClientInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  useEffect(() => {
    onUpdate(clientInfo);
  }, [clientInfo, onUpdate]);

  return (
    <div className="space-y-6">
      <div className="text-xl font-semibold mb-4">Client Information</div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name</Label>
          <Input
            id="firstName"
            name="firstName"
            value={clientInfo.firstName}
            onChange={handleChange}
            placeholder="Enter first name"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            id="lastName"
            name="lastName"
            value={clientInfo.lastName}
            onChange={handleChange}
            placeholder="Enter last name"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={clientInfo.email}
            onChange={handleChange}
            placeholder="Enter email address"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            name="phone"
            value={clientInfo.phone || ""}
            onChange={handleChange}
            placeholder="Enter phone number"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="dateOfBirth">Date of Birth</Label>
          <Input
            id="dateOfBirth"
            name="dateOfBirth"
            type="date"
            value={clientInfo.dateOfBirth || ""}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="pt-4 border-t border-gray-200">
        <div className="text-xl font-semibold mb-4">Address Information</div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="address">Street Address</Label>
            <Input
              id="address"
              name="address"
              value={clientInfo.address}
              onChange={handleChange}
              placeholder="Enter street address"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="city">City</Label>
            <Input
              id="city"
              name="city"
              value={clientInfo.city}
              onChange={handleChange}
              placeholder="Enter city"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="state">State</Label>
            <Input
              id="state"
              name="state"
              value={clientInfo.state}
              onChange={handleChange}
              placeholder="Enter state"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="zipCode">ZIP Code</Label>
            <Input
              id="zipCode"
              name="zipCode"
              value={clientInfo.zipCode}
              onChange={handleChange}
              placeholder="Enter ZIP code"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientInfoStep;

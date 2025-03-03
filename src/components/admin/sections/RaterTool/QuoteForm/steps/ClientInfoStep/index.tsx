
import { useState, useEffect } from "react";
import { ClientInfo } from "../../../types";
import { PersonalInfoSection } from "./PersonalInfoSection";
import { AddressInfoSection } from "./AddressInfoSection";

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
      
      <PersonalInfoSection
        firstName={clientInfo.firstName}
        lastName={clientInfo.lastName}
        email={clientInfo.email}
        phone={clientInfo.phone || ""}
        dateOfBirth={clientInfo.dateOfBirth || ""}
        onChange={handleChange}
      />

      <div className="pt-4 border-t border-gray-200">
        <div className="text-xl font-semibold mb-4">Address Information</div>
        
        <AddressInfoSection
          address={clientInfo.address}
          city={clientInfo.city}
          state={clientInfo.state}
          zipCode={clientInfo.zipCode}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default ClientInfoStep;

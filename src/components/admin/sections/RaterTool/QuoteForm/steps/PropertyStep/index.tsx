
import { useState, useEffect } from "react";
import { PropertyInfo } from "../../../types";
import { AddressSection } from "./AddressSection";
import { BuildingDetailsSection } from "./BuildingDetailsSection";
import { PropertyFeaturesSection } from "./PropertyFeaturesSection";

interface PropertyStepProps {
  data: PropertyInfo;
  onUpdate: (data: PropertyInfo) => void;
}

const PropertyStep: React.FC<PropertyStepProps> = ({ data, onUpdate }) => {
  const [propertyInfo, setPropertyInfo] = useState<PropertyInfo>(data);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPropertyInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const numValue = value === "" ? undefined : Number(value);
    setPropertyInfo(prev => ({
      ...prev,
      [name]: numValue
    }));
  };

  const handleBooleanChange = (name: string, checked: boolean) => {
    setPropertyInfo(prev => ({
      ...prev,
      [name]: checked
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setPropertyInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  useEffect(() => {
    onUpdate(propertyInfo);
  }, [propertyInfo, onUpdate]);

  return (
    <div className="space-y-6">
      <div className="text-xl font-semibold mb-4">Property Information</div>
      
      <AddressSection 
        address={propertyInfo.address}
        city={propertyInfo.city}
        state={propertyInfo.state}
        zipCode={propertyInfo.zipCode}
        onChange={handleChange}
      />

      <div className="pt-4 border-t border-gray-200">
        <div className="text-xl font-semibold mb-4">Building Details</div>
        
        <BuildingDetailsSection
          yearBuilt={propertyInfo.yearBuilt}
          squareFootage={propertyInfo.squareFootage}
          purchaseDate={propertyInfo.purchaseDate}
          roofReplacedYear={propertyInfo.roofReplacedYear}
          numberOfStories={propertyInfo.numberOfStories}
          constructionType={propertyInfo.constructionType}
          garageType={propertyInfo.garageType}
          onNumberChange={handleNumberChange}
          onChange={handleChange}
          onSelectChange={handleSelectChange}
        />
        
        <PropertyFeaturesSection
          hasAlarmSystem={propertyInfo.hasAlarmSystem}
          hasBasement={propertyInfo.hasBasement}
          hasPool={propertyInfo.hasPool}
          hasGarage={propertyInfo.hasGarage}
          onBooleanChange={handleBooleanChange}
        />
      </div>
    </div>
  );
};

export default PropertyStep;

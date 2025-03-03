
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PropertyInfo } from "../../types";

interface PropertyStepProps {
  data: PropertyInfo;
  onUpdate: (data: PropertyInfo) => void;
}

const constructionTypes = [
  "frame", "masonry", "brick", "steel", "concrete", "other"
];

const garageTypes = [
  "attached", "detached", "carport", "none"
];

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
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="address">Street Address</Label>
          <Input
            id="address"
            name="address"
            value={propertyInfo.address}
            onChange={handleChange}
            placeholder="Enter street address"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="city">City</Label>
          <Input
            id="city"
            name="city"
            value={propertyInfo.city}
            onChange={handleChange}
            placeholder="Enter city"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="state">State</Label>
          <Input
            id="state"
            name="state"
            value={propertyInfo.state}
            onChange={handleChange}
            placeholder="Enter state"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="zipCode">ZIP Code</Label>
          <Input
            id="zipCode"
            name="zipCode"
            value={propertyInfo.zipCode}
            onChange={handleChange}
            placeholder="Enter ZIP code"
          />
        </div>
      </div>

      <div className="pt-4 border-t border-gray-200">
        <div className="text-xl font-semibold mb-4">Building Details</div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="yearBuilt">Year Built</Label>
            <Input
              id="yearBuilt"
              name="yearBuilt"
              type="number"
              value={propertyInfo.yearBuilt || ""}
              onChange={handleNumberChange}
              placeholder="Enter year built"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="squareFootage">Square Footage</Label>
            <Input
              id="squareFootage"
              name="squareFootage"
              type="number"
              value={propertyInfo.squareFootage || ""}
              onChange={handleNumberChange}
              placeholder="Enter square footage"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="purchaseDate">Purchase Date</Label>
            <Input
              id="purchaseDate"
              name="purchaseDate"
              type="date"
              value={propertyInfo.purchaseDate || ""}
              onChange={handleChange}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="roofReplacedYear">Roof Replaced Year</Label>
            <Input
              id="roofReplacedYear"
              name="roofReplacedYear"
              type="number"
              value={propertyInfo.roofReplacedYear || ""}
              onChange={handleNumberChange}
              placeholder="Enter roof replaced year"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="numberOfStories">Number of Stories</Label>
            <Input
              id="numberOfStories"
              name="numberOfStories"
              type="number"
              value={propertyInfo.numberOfStories || ""}
              onChange={handleNumberChange}
              placeholder="Enter number of stories"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="constructionType">Construction Type</Label>
            <Select
              value={propertyInfo.constructionType || ""}
              onValueChange={(value) => handleSelectChange("constructionType", value)}
            >
              <SelectTrigger id="constructionType">
                <SelectValue placeholder="Select construction type" />
              </SelectTrigger>
              <SelectContent>
                {constructionTypes.map(type => (
                  <SelectItem key={type} value={type}>
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="garageType">Garage Type</Label>
            <Select
              value={propertyInfo.garageType || ""}
              onValueChange={(value) => handleSelectChange("garageType", value)}
            >
              <SelectTrigger id="garageType">
                <SelectValue placeholder="Select garage type" />
              </SelectTrigger>
              <SelectContent>
                {garageTypes.map(type => (
                  <SelectItem key={type} value={type}>
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="flex items-center space-x-2">
            <Switch
              id="hasAlarmSystem"
              checked={propertyInfo.hasAlarmSystem || false}
              onCheckedChange={(checked) => handleBooleanChange("hasAlarmSystem", checked)}
            />
            <Label htmlFor="hasAlarmSystem">Has Alarm System</Label>
          </div>
          
          <div className="flex items-center space-x-2">
            <Switch
              id="hasBasement"
              checked={propertyInfo.hasBasement || false}
              onCheckedChange={(checked) => handleBooleanChange("hasBasement", checked)}
            />
            <Label htmlFor="hasBasement">Has Basement</Label>
          </div>
          
          <div className="flex items-center space-x-2">
            <Switch
              id="hasPool"
              checked={propertyInfo.hasPool || false}
              onCheckedChange={(checked) => handleBooleanChange("hasPool", checked)}
            />
            <Label htmlFor="hasPool">Has Pool</Label>
          </div>
          
          <div className="flex items-center space-x-2">
            <Switch
              id="hasGarage"
              checked={propertyInfo.hasGarage || false}
              onCheckedChange={(checked) => handleBooleanChange("hasGarage", checked)}
            />
            <Label htmlFor="hasGarage">Has Garage</Label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyStep;

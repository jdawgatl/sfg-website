import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Vehicle, HouseholdMember } from "../../types";
import { PlusCircle, X } from "lucide-react";
import { v4 as uuidv4 } from "uuid";

interface VehicleStepProps {
  data: Vehicle[];
  householdMembers: HouseholdMember[];
  onUpdate: (data: Vehicle[]) => void;
}

const parkingTypes = [
  "garage", "carport", "driveway", "street", "parking lot"
];

const VehicleStep: React.FC<VehicleStepProps> = ({ data, householdMembers, onUpdate }) => {
  const [vehicles, setVehicles] = useState<Vehicle[]>(data.length ? data : [
    {
      id: uuidv4(),
    }
  ]);

  const addVehicle = () => {
    const newVehicle: Vehicle = {
      id: uuidv4(),
    };
    
    const updatedVehicles = [...vehicles, newVehicle];
    setVehicles(updatedVehicles);
    onUpdate(updatedVehicles);
  };

  const removeVehicle = (id: string) => {
    if (vehicles.length <= 1) return; // Prevent removing all vehicles
    
    const updatedVehicles = vehicles.filter(vehicle => vehicle.id !== id);
    setVehicles(updatedVehicles);
    onUpdate(updatedVehicles);
  };

  const updateVehicle = (id: string, field: keyof Vehicle, value: any) => {
    const updatedVehicles = vehicles.map(vehicle => 
      vehicle.id === id ? { ...vehicle, [field]: value } : vehicle
    );
    
    setVehicles(updatedVehicles);
    onUpdate(updatedVehicles);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-4">
        <div className="text-xl font-semibold">Vehicles</div>
        <Button 
          onClick={addVehicle} 
          variant="outline" 
          className="flex items-center gap-2"
        >
          <PlusCircle className="h-4 w-4" />
          Add Vehicle
        </Button>
      </div>

      {vehicles.map((vehicle, index) => (
        <Card key={vehicle.id} className="p-4 relative">
          {vehicles.length > 1 && (
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2"
              onClick={() => removeVehicle(vehicle.id)}
            >
              <X className="h-4 w-4" />
            </Button>
          )}
          
          <div className="text-base font-semibold mb-4">
            Vehicle {index + 1}
            {vehicle.year && vehicle.make && vehicle.model ? 
              `: ${vehicle.year} ${vehicle.make} ${vehicle.model}` : 
              ""}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <Label htmlFor={`year-${vehicle.id}`}>Year</Label>
              <Input
                id={`year-${vehicle.id}`}
                type="number"
                value={vehicle.year || ""}
                onChange={(e) => updateVehicle(vehicle.id, 'year', e.target.value === "" ? undefined : Number(e.target.value))}
                placeholder="Enter year"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor={`make-${vehicle.id}`}>Make</Label>
              <Input
                id={`make-${vehicle.id}`}
                value={vehicle.make || ""}
                onChange={(e) => updateVehicle(vehicle.id, 'make', e.target.value)}
                placeholder="Enter make"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor={`model-${vehicle.id}`}>Model</Label>
              <Input
                id={`model-${vehicle.id}`}
                value={vehicle.model || ""}
                onChange={(e) => updateVehicle(vehicle.id, 'model', e.target.value)}
                placeholder="Enter model"
              />
            </div>
            
            <div className="space-y-2 md:col-span-3">
              <Label htmlFor={`vin-${vehicle.id}`}>VIN (Vehicle Identification Number)</Label>
              <Input
                id={`vin-${vehicle.id}`}
                value={vehicle.vin || ""}
                onChange={(e) => updateVehicle(vehicle.id, 'vin', e.target.value)}
                placeholder="Enter 17-digit VIN"
                maxLength={17}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor={`annualMileage-${vehicle.id}`}>Annual Mileage</Label>
              <Input
                id={`annualMileage-${vehicle.id}`}
                type="number"
                value={vehicle.annualMileage || ""}
                onChange={(e) => updateVehicle(vehicle.id, 'annualMileage', e.target.value === "" ? undefined : Number(e.target.value))}
                placeholder="Enter annual mileage"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor={`parkingType-${vehicle.id}`}>Parking Type</Label>
              <Select
                value={vehicle.parkingType || ""}
                onValueChange={(value) => updateVehicle(vehicle.id, 'parkingType', value)}
              >
                <SelectTrigger id={`parkingType-${vehicle.id}`}>
                  <SelectValue placeholder="Select parking type" />
                </SelectTrigger>
                <SelectContent>
                  {parkingTypes.map(type => (
                    <SelectItem key={type} value={type}>
                      {type.charAt(0).toUpperCase() + type.slice(1)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor={`primaryDriver-${vehicle.id}`}>Primary Driver</Label>
              <Select
                value={vehicle.primaryDriver || ""}
                onValueChange={(value) => updateVehicle(vehicle.id, 'primaryDriver', value)}
              >
                <SelectTrigger id={`primaryDriver-${vehicle.id}`}>
                  <SelectValue placeholder="Select primary driver" />
                </SelectTrigger>
                <SelectContent>
                  {householdMembers.map(member => (
                    <SelectItem key={member.id} value={member.id}>
                      {member.firstName} {member.lastName}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="flex items-center space-x-2">
              <Switch
                id={`hasComprehensive-${vehicle.id}`}
                checked={vehicle.hasComprehensive || false}
                onCheckedChange={(checked) => updateVehicle(vehicle.id, 'hasComprehensive', checked)}
              />
              <Label htmlFor={`hasComprehensive-${vehicle.id}`}>Comprehensive Coverage</Label>
            </div>
            
            <div className="flex items-center space-x-2">
              <Switch
                id={`hasCollision-${vehicle.id}`}
                checked={vehicle.hasCollision || false}
                onCheckedChange={(checked) => updateVehicle(vehicle.id, 'hasCollision', checked)}
              />
              <Label htmlFor={`hasCollision-${vehicle.id}`}>Collision Coverage</Label>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default VehicleStep;

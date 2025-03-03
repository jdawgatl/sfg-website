
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Vehicle, HouseholdMember } from "../../../types";
import { PlusCircle } from "lucide-react";
import { v4 as uuidv4 } from "uuid";
import VehicleCard from "./VehicleCard";

interface VehicleStepProps {
  data: Vehicle[];
  householdMembers: HouseholdMember[];
  onUpdate: (data: Vehicle[]) => void;
}

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
        <VehicleCard
          key={vehicle.id}
          vehicle={vehicle}
          index={index}
          householdMembers={householdMembers}
          onUpdate={updateVehicle}
          onRemove={removeVehicle}
          canRemove={vehicles.length > 1}
        />
      ))}
    </div>
  );
};

export default VehicleStep;

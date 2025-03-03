
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

interface PropertyFeaturesSectionProps {
  hasAlarmSystem?: boolean;
  hasBasement?: boolean;
  hasPool?: boolean;
  hasGarage?: boolean;
  onBooleanChange: (name: string, checked: boolean) => void;
}

export const PropertyFeaturesSection: React.FC<PropertyFeaturesSectionProps> = ({
  hasAlarmSystem,
  hasBasement,
  hasPool,
  hasGarage,
  onBooleanChange
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
      <div className="flex items-center space-x-2">
        <Switch
          id="hasAlarmSystem"
          checked={hasAlarmSystem || false}
          onCheckedChange={(checked) => onBooleanChange("hasAlarmSystem", checked)}
        />
        <Label htmlFor="hasAlarmSystem">Has Alarm System</Label>
      </div>
      
      <div className="flex items-center space-x-2">
        <Switch
          id="hasBasement"
          checked={hasBasement || false}
          onCheckedChange={(checked) => onBooleanChange("hasBasement", checked)}
        />
        <Label htmlFor="hasBasement">Has Basement</Label>
      </div>
      
      <div className="flex items-center space-x-2">
        <Switch
          id="hasPool"
          checked={hasPool || false}
          onCheckedChange={(checked) => onBooleanChange("hasPool", checked)}
        />
        <Label htmlFor="hasPool">Has Pool</Label>
      </div>
      
      <div className="flex items-center space-x-2">
        <Switch
          id="hasGarage"
          checked={hasGarage || false}
          onCheckedChange={(checked) => onBooleanChange("hasGarage", checked)}
        />
        <Label htmlFor="hasGarage">Has Garage</Label>
      </div>
    </div>
  );
};

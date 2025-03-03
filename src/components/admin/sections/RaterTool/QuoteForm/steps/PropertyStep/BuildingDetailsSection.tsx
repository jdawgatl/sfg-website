
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { constructionTypes, garageTypes } from "./constants";

interface BuildingDetailsSectionProps {
  yearBuilt?: number;
  squareFootage?: number;
  purchaseDate?: string;
  roofReplacedYear?: number;
  numberOfStories?: number;
  constructionType?: string;
  garageType?: string;
  onNumberChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSelectChange: (name: string, value: string) => void;
}

export const BuildingDetailsSection: React.FC<BuildingDetailsSectionProps> = ({
  yearBuilt,
  squareFootage,
  purchaseDate,
  roofReplacedYear,
  numberOfStories,
  constructionType,
  garageType,
  onNumberChange,
  onChange,
  onSelectChange
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-2">
        <Label htmlFor="yearBuilt">Year Built</Label>
        <Input
          id="yearBuilt"
          name="yearBuilt"
          type="number"
          value={yearBuilt || ""}
          onChange={onNumberChange}
          placeholder="Enter year built"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="squareFootage">Square Footage</Label>
        <Input
          id="squareFootage"
          name="squareFootage"
          type="number"
          value={squareFootage || ""}
          onChange={onNumberChange}
          placeholder="Enter square footage"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="purchaseDate">Purchase Date</Label>
        <Input
          id="purchaseDate"
          name="purchaseDate"
          type="date"
          value={purchaseDate || ""}
          onChange={onChange}
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="roofReplacedYear">Roof Replaced Year</Label>
        <Input
          id="roofReplacedYear"
          name="roofReplacedYear"
          type="number"
          value={roofReplacedYear || ""}
          onChange={onNumberChange}
          placeholder="Enter roof replaced year"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="numberOfStories">Number of Stories</Label>
        <Input
          id="numberOfStories"
          name="numberOfStories"
          type="number"
          value={numberOfStories || ""}
          onChange={onNumberChange}
          placeholder="Enter number of stories"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="constructionType">Construction Type</Label>
        <Select
          value={constructionType || ""}
          onValueChange={(value) => onSelectChange("constructionType", value)}
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
          value={garageType || ""}
          onValueChange={(value) => onSelectChange("garageType", value)}
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
  );
};

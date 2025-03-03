
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { HouseholdMember } from "../../../types";
import { X } from "lucide-react";
import { relationOptions, maritalOptions, genderOptions, stateOptions } from "./constants";

interface MemberCardProps {
  member: HouseholdMember;
  index: number;
  onUpdate: (id: string, field: keyof HouseholdMember, value: string) => void;
  onRemove: (id: string) => void;
  canRemove: boolean;
}

const MemberCard: React.FC<MemberCardProps> = ({ 
  member, 
  index, 
  onUpdate, 
  onRemove,
  canRemove
}) => {
  return (
    <Card className="p-4 relative">
      {canRemove && (
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2"
          onClick={() => onRemove(member.id)}
        >
          <X className="h-4 w-4" />
        </Button>
      )}
      
      <div className="text-base font-semibold mb-4">
        Member {index + 1}: {member.relationToInsured}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor={`firstName-${member.id}`}>First Name</Label>
          <Input
            id={`firstName-${member.id}`}
            value={member.firstName}
            onChange={(e) => onUpdate(member.id, 'firstName', e.target.value)}
            placeholder="Enter first name"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor={`lastName-${member.id}`}>Last Name</Label>
          <Input
            id={`lastName-${member.id}`}
            value={member.lastName}
            onChange={(e) => onUpdate(member.id, 'lastName', e.target.value)}
            placeholder="Enter last name"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor={`dateOfBirth-${member.id}`}>Date of Birth</Label>
          <Input
            id={`dateOfBirth-${member.id}`}
            type="date"
            value={member.dateOfBirth || ''}
            onChange={(e) => onUpdate(member.id, 'dateOfBirth', e.target.value)}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor={`gender-${member.id}`}>Gender</Label>
          <Select
            value={member.gender || ''}
            onValueChange={(value) => onUpdate(member.id, 'gender', value)}
          >
            <SelectTrigger id={`gender-${member.id}`}>
              <SelectValue placeholder="Select gender" />
            </SelectTrigger>
            <SelectContent>
              {genderOptions.map(option => (
                <SelectItem key={option} value={option}>
                  {option.charAt(0).toUpperCase() + option.slice(1)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor={`maritalStatus-${member.id}`}>Marital Status</Label>
          <Select
            value={member.maritalStatus || ''}
            onValueChange={(value) => onUpdate(member.id, 'maritalStatus', value)}
          >
            <SelectTrigger id={`maritalStatus-${member.id}`}>
              <SelectValue placeholder="Select marital status" />
            </SelectTrigger>
            <SelectContent>
              {maritalOptions.map(option => (
                <SelectItem key={option} value={option}>
                  {option.charAt(0).toUpperCase() + option.slice(1)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor={`relationToInsured-${member.id}`}>Relation to Insured</Label>
          <Select
            value={member.relationToInsured}
            onValueChange={(value) => onUpdate(member.id, 'relationToInsured', value)}
          >
            <SelectTrigger id={`relationToInsured-${member.id}`}>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {relationOptions.map(option => (
                <SelectItem key={option} value={option}>
                  {option.charAt(0).toUpperCase() + option.slice(1)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor={`licenseNumber-${member.id}`}>Driver's License Number</Label>
          <Input
            id={`licenseNumber-${member.id}`}
            value={member.licenseNumber || ''}
            onChange={(e) => onUpdate(member.id, 'licenseNumber', e.target.value)}
            placeholder="Enter license number"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor={`licenseState-${member.id}`}>License State</Label>
          <Select
            value={member.licenseState || ''}
            onValueChange={(value) => onUpdate(member.id, 'licenseState', value)}
          >
            <SelectTrigger id={`licenseState-${member.id}`}>
              <SelectValue placeholder="Select state" />
            </SelectTrigger>
            <SelectContent>
              {stateOptions.map(state => (
                <SelectItem key={state} value={state}>{state}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </Card>
  );
};

export default MemberCard;

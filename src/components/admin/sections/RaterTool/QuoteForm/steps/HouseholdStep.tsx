
import { useState } from "react";
import { 
  Button, 
  Input, 
  Label, 
  Card, 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui";
import { HouseholdMember } from "../../types";
import { PlusCircle, X } from "lucide-react";
import { v4 as uuidv4 } from "uuid";

interface HouseholdStepProps {
  data: HouseholdMember[];
  onUpdate: (data: HouseholdMember[]) => void;
}

const relationOptions = [
  "self", "spouse", "child", "parent", "sibling", "other"
];

const maritalOptions = [
  "single", "married", "divorced", "widowed", "separated"
];

const genderOptions = [
  "male", "female", "other", "prefer not to say"
];

const stateOptions = [
  "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", 
  "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", 
  "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", 
  "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", 
  "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"
];

const HouseholdStep: React.FC<HouseholdStepProps> = ({ data, onUpdate }) => {
  const [members, setMembers] = useState<HouseholdMember[]>(data.length ? data : [
    {
      id: uuidv4(),
      firstName: '',
      lastName: '',
      relationToInsured: 'self',
    }
  ]);

  const addMember = () => {
    const newMember: HouseholdMember = {
      id: uuidv4(),
      firstName: '',
      lastName: '',
      relationToInsured: 'other',
    };
    
    const updatedMembers = [...members, newMember];
    setMembers(updatedMembers);
    onUpdate(updatedMembers);
  };

  const removeMember = (id: string) => {
    if (members.length <= 1) return; // Prevent removing all members
    
    const updatedMembers = members.filter(member => member.id !== id);
    setMembers(updatedMembers);
    onUpdate(updatedMembers);
  };

  const updateMember = (id: string, field: keyof HouseholdMember, value: string) => {
    const updatedMembers = members.map(member => 
      member.id === id ? { ...member, [field]: value } : member
    );
    
    setMembers(updatedMembers);
    onUpdate(updatedMembers);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-4">
        <div className="text-xl font-semibold">Household Members</div>
        <Button 
          onClick={addMember} 
          variant="outline" 
          className="flex items-center gap-2"
        >
          <PlusCircle className="h-4 w-4" />
          Add Member
        </Button>
      </div>

      {members.map((member, index) => (
        <Card key={member.id} className="p-4 relative">
          {members.length > 1 && (
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2"
              onClick={() => removeMember(member.id)}
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
                onChange={(e) => updateMember(member.id, 'firstName', e.target.value)}
                placeholder="Enter first name"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor={`lastName-${member.id}`}>Last Name</Label>
              <Input
                id={`lastName-${member.id}`}
                value={member.lastName}
                onChange={(e) => updateMember(member.id, 'lastName', e.target.value)}
                placeholder="Enter last name"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor={`dateOfBirth-${member.id}`}>Date of Birth</Label>
              <Input
                id={`dateOfBirth-${member.id}`}
                type="date"
                value={member.dateOfBirth || ''}
                onChange={(e) => updateMember(member.id, 'dateOfBirth', e.target.value)}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor={`gender-${member.id}`}>Gender</Label>
              <Select
                value={member.gender || ''}
                onValueChange={(value) => updateMember(member.id, 'gender', value)}
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
                onValueChange={(value) => updateMember(member.id, 'maritalStatus', value)}
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
                onValueChange={(value) => updateMember(member.id, 'relationToInsured', value)}
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
                onChange={(e) => updateMember(member.id, 'licenseNumber', e.target.value)}
                placeholder="Enter license number"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor={`licenseState-${member.id}`}>License State</Label>
              <Select
                value={member.licenseState || ''}
                onValueChange={(value) => updateMember(member.id, 'licenseState', value)}
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
      ))}
    </div>
  );
};

export default HouseholdStep;

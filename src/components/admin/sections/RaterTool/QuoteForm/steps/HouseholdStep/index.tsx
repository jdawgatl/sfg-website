
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { HouseholdMember } from "../../../types";
import { PlusCircle } from "lucide-react";
import { v4 as uuidv4 } from "uuid";
import MemberCard from "./MemberCard";

interface HouseholdStepProps {
  data: HouseholdMember[];
  onUpdate: (data: HouseholdMember[]) => void;
}

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
        <MemberCard
          key={member.id}
          member={member}
          index={index}
          onUpdate={updateMember}
          onRemove={removeMember}
          canRemove={members.length > 1}
        />
      ))}
    </div>
  );
};

export default HouseholdStep;

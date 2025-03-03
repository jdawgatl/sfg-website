
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface PersonalInfoSectionProps {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const PersonalInfoSection: React.FC<PersonalInfoSectionProps> = ({
  firstName,
  lastName,
  email,
  phone,
  dateOfBirth,
  onChange
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-2">
        <Label htmlFor="firstName">First Name</Label>
        <Input
          id="firstName"
          name="firstName"
          value={firstName}
          onChange={onChange}
          placeholder="Enter first name"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="lastName">Last Name</Label>
        <Input
          id="lastName"
          name="lastName"
          value={lastName}
          onChange={onChange}
          placeholder="Enter last name"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="email">Email Address</Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={onChange}
          placeholder="Enter email address"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number</Label>
        <Input
          id="phone"
          name="phone"
          value={phone}
          onChange={onChange}
          placeholder="Enter phone number"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="dateOfBirth">Date of Birth</Label>
        <Input
          id="dateOfBirth"
          name="dateOfBirth"
          type="date"
          value={dateOfBirth}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

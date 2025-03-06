
import { Input } from "@/components/ui/input";
import { FormFieldError } from "./FormFieldError";

type ContactInfoFieldsProps = {
  register: any;
  errors: any;
};

export const ContactInfoFields = ({ register, errors }: ContactInfoFieldsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <Input type="email" placeholder="Email" {...register("email", { required: true })} />
        {errors.email && <FormFieldError message="This field is required" />}
      </div>
      <div>
        <Input 
          type="tel" 
          placeholder="Phone (Optional)" 
          {...register("phone")} 
          aria-label="Phone number (Optional)"
        />
      </div>
    </div>
  );
};

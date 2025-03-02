
import { Input } from "@/components/ui/input";
import { FormFieldError } from "./FormFieldError";

type PersonalInfoFieldsProps = {
  register: any;
  errors: any;
};

export const PersonalInfoFields = ({ register, errors }: PersonalInfoFieldsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <Input placeholder="First Name" {...register("firstName", { required: true })} />
        {errors.firstName && <FormFieldError message="This field is required" />}
      </div>
      <div>
        <Input placeholder="Last Name" {...register("lastName", { required: true })} />
        {errors.lastName && <FormFieldError message="This field is required" />}
      </div>
    </div>
  );
};

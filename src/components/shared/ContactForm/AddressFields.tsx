
import { Input } from "@/components/ui/input";
import { FormFieldError } from "./FormFieldError";

type AddressFieldsProps = {
  register: any;
  errors: any;
};

export const AddressFields = ({ register, errors }: AddressFieldsProps) => {
  return (
    <div className="space-y-4">
      <Input placeholder="Street Address" {...register("address", { required: true })} />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Input placeholder="City" {...register("city", { required: true })} />
        <Input placeholder="State" {...register("state", { required: true })} defaultValue="GA" />
        <Input placeholder="ZIP" {...register("zip", { required: true })} />
      </div>
    </div>
  );
};


import { Input } from "@/components/ui/input";
import { FormFieldError } from "./FormFieldError";
import { FormField, FormItem, FormControl, FormMessage } from "@/components/ui/form";
import { UseFormReturn } from "react-hook-form";

type ContactInfoFieldsProps = {
  form: UseFormReturn<any>;
};

export const ContactInfoFields = ({ form }: ContactInfoFieldsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input type="email" placeholder="Email" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <FormField
        control={form.control}
        name="phone"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input 
                type="tel" 
                placeholder="Phone" 
                {...field} 
                aria-label="Phone number"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

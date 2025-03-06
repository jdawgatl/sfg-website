
import { Link } from "react-router-dom";
import { FormField, FormItem, FormControl, FormMessage } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { UseFormReturn } from "react-hook-form";

type ConsentCheckboxProps = {
  form: UseFormReturn<any>;
};

export const ConsentCheckbox = ({ form }: ConsentCheckboxProps) => {
  return (
    <FormField
      control={form.control}
      name="consent"
      render={({ field }) => (
        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
          <FormControl>
            <Checkbox
              checked={field.value}
              onCheckedChange={field.onChange}
              id="consent"
            />
          </FormControl>
          <div className="space-y-1 leading-none">
            <label
              htmlFor="consent"
              className="text-sm text-gray-600 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              I consent to receive calls, emails, and/or SMS/MMS for insurance related service and marketing purposes from Standard Financial Group, LLC, including the use of automated technology, artificial voice messages, or pre-recorded calls. Consent is not required to obtain any service or product. Message frequency varies and data rates may apply. Reply STOP to opt-out.
              <Link to="/privacy" className="text-sky-600 hover:underline ml-1">
                Privacy Policy
              </Link>
            </label>
            <FormMessage />
          </div>
        </FormItem>
      )}
    />
  );
};

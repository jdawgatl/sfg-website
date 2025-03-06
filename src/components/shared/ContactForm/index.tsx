
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { trackFormSubmission, trackButtonClick } from "@/utils/analytics";

import { ContactInfoFields } from "./ContactInfoFields";
import { PersonalInfoFields } from "./PersonalInfoFields";
import { AddressFields } from "./AddressFields";
import { InsuranceTypeSelector } from "./InsuranceTypeSelector";
import { ConsentCheckbox } from "./ConsentCheckbox";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, formState: { errors }, setValue, watch, reset } = useForm();
  const [selectedInsuranceTypes, setSelectedInsuranceTypes] = useState<string[]>([]);
  const [consentChecked, setConsentChecked] = useState(false);

  const handleTypesChange = (types: string[]) => {
    setSelectedInsuranceTypes(types);
    setValue('insuranceTypes', types);
  };

  const handleConsentChange = (checked: boolean) => {
    setConsentChecked(checked);
    setValue('consent', checked);
  };

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    
    // Track the click on the submit button
    trackButtonClick({
      buttonText: "Submit Contact Form",
      location: "Contact Form"
    });

    try {
      // Form submission logic here
      console.log("Form data:", data);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Track successful form submission
      trackFormSubmission({
        formName: "Contact Form",
        successful: true
      });
      
      toast({
        title: "Message Sent",
        description: "We'll get back to you as soon as possible.",
      });
      
      // Reset form
      reset();
      setSelectedInsuranceTypes([]);
      setConsentChecked(false);
    } catch (error) {
      console.error("Form submission error:", error);
      
      // Track failed form submission
      trackFormSubmission({
        formName: "Contact Form",
        successful: false
      });
      
      toast({
        variant: "destructive",
        title: "Error",
        description: "There was a problem submitting your form. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Personal Information */}
      <div>
        <h3 className="text-lg font-medium mb-4">Personal Information</h3>
        <PersonalInfoFields register={register} errors={errors} />
      </div>

      {/* Contact Information */}
      <div>
        <h3 className="text-lg font-medium mb-4">Contact Information</h3>
        <ContactInfoFields register={register} errors={errors} />
      </div>

      {/* Address */}
      <div>
        <h3 className="text-lg font-medium mb-4">Address</h3>
        <AddressFields register={register} errors={errors} />
      </div>

      {/* Insurance Types */}
      <div>
        <h3 className="text-lg font-medium mb-4">What type of insurance are you interested in?</h3>
        <InsuranceTypeSelector
          selected={selectedInsuranceTypes}
          onSelectionChange={handleTypesChange}
        />
      </div>

      {/* Message */}
      <div>
        <h3 className="text-lg font-medium mb-4">Additional Information</h3>
        <Textarea
          placeholder="Please provide any additional details about your insurance needs..."
          className="min-h-[120px]"
          {...register("message")}
        />
      </div>

      {/* Consent Checkbox */}
      <ConsentCheckbox checked={consentChecked} onCheckedChange={handleConsentChange} />

      {/* Submit Button */}
      <Button 
        type="submit" 
        disabled={isSubmitting || !consentChecked}
        className="w-full"
        onClick={() => trackButtonClick({
          buttonText: "Contact Form Submit",
          location: "Contact Form",
        })}
      >
        {isSubmitting ? "Sending..." : "Submit"}
      </Button>
    </form>
  );
};

export default ContactForm;

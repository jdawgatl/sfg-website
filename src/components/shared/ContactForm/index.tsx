
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

import { PersonalInfoFields } from "./PersonalInfoFields";
import { ContactInfoFields } from "./ContactInfoFields";
import { AddressFields } from "./AddressFields";
import { InsuranceTypeSelector } from "./InsuranceTypeSelector";
import { ConsentCheckbox } from "./ConsentCheckbox";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  insuranceTypes: string[];
  message: string;
  consent: boolean;
};

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedInsuranceTypes, setSelectedInsuranceTypes] = useState<string[]>([]);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm<FormData>({
    defaultValues: {
      insuranceTypes: [],
    }
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const dbData = {
        first_name: data.firstName,
        last_name: data.lastName,
        email: data.email,
        phone: data.phone,
        address: data.address,
        city: data.city,
        state: data.state,
        zip: data.zip,
        insurance_type: data.insuranceTypes.join(", "),
        message: data.message,
        consent: data.consent
      };
      const { error: supabaseError } = await supabase.from("contact_submissions").insert(dbData);
      if (supabaseError) throw supabaseError;
      console.log("Sending email notification...");
      const {
        data: emailResponse,
        error: emailError
      } = await supabase.functions.invoke("send-contact-notification", {
        body: {
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          phone: data.phone,
          message: data.message,
          insuranceType: data.insuranceTypes.join(", ")
        }
      });
      console.log("Email response:", emailResponse);
      if (emailError) {
        console.error("Email error:", emailError);
        throw emailError;
      }
      toast({
        title: "Form submitted successfully!",
        description: "We'll get back to you as soon as possible."
      });
      reset();
      setSelectedInsuranceTypes([]);
    } catch (error: any) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error submitting form",
        description: error.message || "Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInsuranceTypesChange = (types: string[]) => {
    setSelectedInsuranceTypes(types);
    setValue("insuranceTypes", types);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <PersonalInfoFields register={register} errors={errors} />
      
      <ContactInfoFields register={register} errors={errors} />

      <AddressFields register={register} errors={errors} />
      
      <InsuranceTypeSelector 
        selectedTypes={selectedInsuranceTypes} 
        onChange={handleInsuranceTypesChange} 
      />

      <Textarea 
        placeholder="How can we help you?" 
        {...register("message")} 
        className="min-h-[100px]" 
      />

      <ConsentCheckbox onCheckedChange={(checked) => setValue("consent", checked)} />

      <Button type="submit" className="w-full bg-sky-600 hover:bg-sky-700" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit"}
      </Button>
    </form>
  );
};

export default ContactForm;

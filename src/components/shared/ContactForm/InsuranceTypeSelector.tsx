
import { useState } from "react";
import { FormField, FormItem, FormControl, FormMessage } from "@/components/ui/form";
import { UseFormReturn } from "react-hook-form";

type InsuranceTypeSelectorProps = {
  form: UseFormReturn<any>;
};

export const InsuranceTypeSelector = ({ form }: InsuranceTypeSelectorProps) => {
  const insuranceTypes = ["auto", "home", "commercial", "bonds", "other"];
  const displayNames: Record<string, string> = {
    auto: "Auto Insurance",
    home: "Home Insurance",
    commercial: "Commercial Insurance",
    bonds: "Surety Bonds",
    other: "Other"
  };

  const handleInsuranceTypeClick = (value: string) => {
    form.setValue("insuranceType", value);
  };

  return (
    <FormField
      control={form.control}
      name="insuranceType"
      render={({ field }) => (
        <FormItem className="col-span-2 md:col-span-4">
          <div className="text-sm font-medium mb-2">Insurance Type (Select one)</div>
          <div className="flex flex-wrap gap-2">
            {insuranceTypes.map((type) => {
              const isSelected = field.value === type;
              
              return (
                <div
                  key={type}
                  onClick={() => handleInsuranceTypeClick(type)}
                  className={`px-3 py-2 rounded-full text-sm cursor-pointer border transition-colors ${
                    isSelected 
                      ? "border-sky-600 bg-sky-100 text-sky-800" 
                      : "border-gray-300 hover:border-sky-400 hover:bg-gray-50"
                  }`}
                >
                  {displayNames[type]}
                </div>
              );
            })}
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};


import { useState, useEffect } from "react";

type InsuranceTypeSelectorProps = {
  selected: string[];
  onSelectionChange: (values: string[]) => void;
};

export const InsuranceTypeSelector = ({ selected, onSelectionChange }: InsuranceTypeSelectorProps) => {
  const handleInsuranceTypeChange = (value: string) => {
    // Check if value is already selected
    if (selected.includes(value)) {
      // Remove it
      const updated = selected.filter(type => type !== value);
      onSelectionChange(updated);
    } else {
      // Add it
      const updated = [...selected, value];
      onSelectionChange(updated);
    }
  };

  const insuranceTypes = ["auto", "home", "commercial", "bonds", "other"];
  const displayNames: Record<string, string> = {
    auto: "Auto Insurance",
    home: "Home Insurance",
    commercial: "Commercial Insurance",
    bonds: "Surety Bonds",
    other: "Other"
  };

  return (
    <div className="col-span-2 md:col-span-4">
      <div className="text-sm font-medium mb-2">Insurance Type (Select all that apply)</div>
      <div className="flex flex-wrap gap-2">
        {insuranceTypes.map((type) => {
          const isSelected = selected.includes(type);
          
          return (
            <div
              key={type}
              onClick={() => handleInsuranceTypeChange(type)}
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
    </div>
  );
};

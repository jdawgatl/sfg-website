
import React from "react";
import { InsuranceQuote, QuoteStep } from "../../types";
import ClientInfoStep from "../steps/ClientInfoStep";
import HouseholdStep from "../steps/HouseholdStep";
import PropertyStep from "../steps/PropertyStep";
import VehicleStep from "../steps/VehicleStep";
import SummaryStep from "../steps/SummaryStep";
import RatingStep from "../steps/RatingStep";

interface StepRendererProps {
  currentStep: QuoteStep;
  formData: InsuranceQuote;
  handleUpdateField: (field: string, value: any) => void;
  handleComplete: () => void;
}

export const StepRenderer: React.FC<StepRendererProps> = ({
  currentStep,
  formData,
  handleUpdateField,
  handleComplete
}) => {
  switch (currentStep) {
    case "client":
      return (
        <ClientInfoStep 
          data={formData.clientInfo} 
          onUpdate={(clientInfo) => handleUpdateField("clientInfo", clientInfo)} 
        />
      );
    case "household":
      return (
        <HouseholdStep 
          data={formData.householdMembers} 
          onUpdate={(members) => handleUpdateField("householdMembers", members)} 
        />
      );
    case "property":
      if (formData.type === "home") {
        return (
          <PropertyStep 
            data={formData.propertyInfo} 
            onUpdate={(propertyInfo) => handleUpdateField("propertyInfo", propertyInfo)} 
          />
        );
      }
      return null;
    case "vehicle":
      if (formData.type === "auto") {
        return (
          <VehicleStep 
            data={"vehicles" in formData ? formData.vehicles : []} 
            householdMembers={formData.householdMembers}
            onUpdate={(vehicles) => handleUpdateField("vehicles", vehicles)} 
          />
        );
      }
      return null;
    case "summary":
      return (
        <SummaryStep 
          quote={formData} 
          onComplete={handleComplete} 
        />
      );
    case "rating":
      return (
        <RatingStep 
          quote={formData} 
        />
      );
    default:
      return null;
  }
};

export default StepRenderer;

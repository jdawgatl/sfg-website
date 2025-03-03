
import React from "react";
import { InsuranceQuote, QuoteStep } from "../../../types";
import ClientInfoStep from "../steps/ClientInfoStep";
import HouseholdStep from "../steps/HouseholdStep";
import VehicleStep from "../steps/VehicleStep";
import PropertyStep from "../steps/PropertyStep";
import RatingStep from "../steps/RatingStep";
import SummaryStep from "../steps/SummaryStep";
import { steps } from "../constants";

interface StepRendererProps {
  currentStep: QuoteStep;
  formData: InsuranceQuote;
  onUpdate: (field: string, value: any) => void;
}

export const StepRenderer: React.FC<StepRendererProps> = ({ currentStep, formData, onUpdate }) => {
  switch (currentStep) {
    case "client":
      return <ClientInfoStep data={formData.clientInfo} onUpdate={(data) => onUpdate("clientInfo", data)} />;
    case "household":
      return <HouseholdStep data={formData.householdMembers} onUpdate={(data) => onUpdate("householdMembers", data)} />;
    case "vehicle":
      return formData.type === "auto" ? (
        <VehicleStep 
          data={formData.vehicles} 
          householdMembers={formData.householdMembers} 
          onUpdate={(data) => onUpdate("vehicles", data)} 
        />
      ) : null;
    case "property":
      return formData.type === "home" ? (
        <PropertyStep data={formData.propertyInfo} onUpdate={(data) => onUpdate("propertyInfo", data)} />
      ) : null;
    case "rating":
      return <RatingStep quote={formData} />;
    case "summary":
      return <SummaryStep quote={formData} onComplete={() => {}} />;
    default:
      return <div>Unknown step</div>;
  }
};

// This additional default export fixes the import issue in the QuoteForm/index.tsx
export default StepRenderer;

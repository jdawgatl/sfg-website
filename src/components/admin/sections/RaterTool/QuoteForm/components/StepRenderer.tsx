
import React from "react";
import { FormStepProps } from "../index";
import ClientInfoStep from "../steps/ClientInfoStep";
import HouseholdStep from "../steps/HouseholdStep";
import VehicleStep from "../steps/VehicleStep";
import PropertyStep from "../steps/PropertyStep";
import RatingStep from "../steps/RatingStep";
import SummaryStep from "../steps/SummaryStep";
import { STEPS } from "../constants";

export const StepRenderer: React.FC<FormStepProps> = ({ currentStep, formData, onUpdate }) => {
  switch (currentStep) {
    case STEPS.CLIENT_INFO:
      return <ClientInfoStep data={formData.clientInfo} onUpdate={(data) => onUpdate("clientInfo", data)} />;
    case STEPS.HOUSEHOLD:
      return <HouseholdStep data={formData.household} onUpdate={(data) => onUpdate("household", data)} />;
    case STEPS.VEHICLE:
      return <VehicleStep data={formData.vehicles} onUpdate={(data) => onUpdate("vehicles", data)} />;
    case STEPS.PROPERTY:
      return <PropertyStep data={formData.property} onUpdate={(data) => onUpdate("property", data)} />;
    case STEPS.RATING:
      return <RatingStep formData={formData} onUpdate={(data) => onUpdate("rating", data)} />;
    case STEPS.SUMMARY:
      return <SummaryStep formData={formData} />;
    default:
      return <div>Unknown step</div>;
  }
};

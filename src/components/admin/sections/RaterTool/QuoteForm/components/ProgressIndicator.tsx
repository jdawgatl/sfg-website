
import React from "react";
import { QuoteStep, InsuranceQuote } from "../../types";

interface ProgressIndicatorProps {
  steps: QuoteStep[];
  formData: InsuranceQuote;
  currentStepIndex: number;
  stepTitles: Record<QuoteStep, string>;
}

export const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
  steps,
  formData,
  currentStepIndex,
  stepTitles
}) => {
  return (
    <div className="flex mb-6">
      {steps
        .filter(step => 
          (formData.type === "auto" && step !== "property") || 
          (formData.type === "home" && step !== "vehicle")
        )
        .map((step, index) => {
          const adjustedIndex = formData.type === "auto" && step === "summary" 
            ? steps.indexOf("summary") - 1 
            : formData.type === "home" && step === "summary" 
              ? steps.indexOf("summary") - 1 
              : steps.indexOf(step);
              
          const isActive = currentStepIndex === adjustedIndex;
          const isCompleted = currentStepIndex > adjustedIndex;
          
          return (
            <div 
              key={step} 
              className="flex-1 flex flex-col items-center"
            >
              <div 
                className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 
                  ${isActive ? 'bg-sky-600 text-white' : 
                    isCompleted ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-600'}`}
              >
                {isCompleted ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                ) : (
                  index + 1
                )}
              </div>
              <span className="text-xs text-center">{stepTitles[step]}</span>
            </div>
          );
        })}
    </div>
  );
};

export default ProgressIndicator;

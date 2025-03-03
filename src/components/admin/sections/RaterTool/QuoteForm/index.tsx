
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, Save } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { useQuotes } from "../context/QuotesContext";
import { InsuranceQuote, QuoteStep } from "../types";

// Step components
import ClientInfoStep from "./steps/ClientInfoStep";
import HouseholdStep from "./steps/HouseholdStep";
import PropertyStep from "./steps/PropertyStep";
import VehicleStep from "./steps/VehicleStep";
import SummaryStep from "./steps/SummaryStep";
import RatingStep from "./steps/RatingStep";

const steps: QuoteStep[] = ["client", "household", "property", "vehicle", "summary", "rating"];

export const QuoteForm = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { getQuoteById, updateQuote } = useQuotes();
  
  const quote = id ? getQuoteById(id) : null;
  
  const [currentStepIndex, setCurrentStepIndex] = useState(() => {
    if (quote) {
      const index = steps.indexOf(quote.currentStep);
      return index >= 0 ? index : 0;
    }
    return 0;
  });
  
  const [formData, setFormData] = useState<InsuranceQuote | null>(quote);
  
  if (!formData) {
    navigate("/admin/rater");
    return null;
  }
  
  const currentStep = steps[currentStepIndex];
  
  const handleNext = () => {
    if (currentStepIndex < steps.length - 1) {
      const updatedQuote = {
        ...formData,
        currentStep: steps[currentStepIndex + 1],
        updatedAt: new Date().toISOString()
      };
      
      updateQuote(updatedQuote);
      setFormData(updatedQuote);
      setCurrentStepIndex(prev => prev + 1);
    }
  };
  
  const handlePrevious = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(prev => prev - 1);
    }
  };
  
  const handleSave = () => {
    const updatedQuote = {
      ...formData,
      updatedAt: new Date().toISOString()
    };
    
    updateQuote(updatedQuote);
    toast({
      title: "Quote saved",
      description: "Your quote has been saved successfully."
    });
  };
  
  const handleComplete = () => {
    const updatedQuote = {
      ...formData,
      status: "completed" as const,
      updatedAt: new Date().toISOString()
    };
    
    updateQuote(updatedQuote);
    toast({
      title: "Quote completed",
      description: "Your quote has been completed successfully."
    });
    navigate("/admin/rater");
  };
  
  const handleUpdateField = (field: string, value: any) => {
    setFormData(prev => {
      if (!prev) return prev;
      
      return {
        ...prev,
        [field]: value
      };
    });
  };
  
  const renderStep = () => {
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
        // Skip property step for auto quotes
        handleNext();
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
        // Skip vehicle step for home quotes
        handleNext();
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
  
  const stepTitles = {
    client: "Client Information",
    household: "Household Members",
    property: "Property Information",
    vehicle: "Vehicle Information",
    summary: "Quote Summary",
    rating: "Generate Quotes"
  };
  
  return (
    <div className="w-full space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight">
          {formData.type === "auto" ? "Auto" : "Home"} Insurance Quote: {stepTitles[currentStep]}
        </h2>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => navigate("/admin/rater")}>
            Cancel
          </Button>
          <Button variant="outline" onClick={handleSave}>
            <Save className="h-4 w-4 mr-2" />
            Save
          </Button>
        </div>
      </div>
      
      {/* Progress indicator */}
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
      
      <Card className="p-6">
        {renderStep()}
      </Card>
      
      <div className="flex justify-between mt-6">
        <Button
          variant="outline"
          onClick={handlePrevious}
          disabled={currentStepIndex === 0}
        >
          <ArrowLeft className="h-4 w-4 mr-2" /> Previous
        </Button>
        
        {currentStep !== "summary" && currentStep !== "rating" && (
          <Button onClick={handleNext}>
            Next <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default QuoteForm;

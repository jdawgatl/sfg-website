
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, Save } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { useQuotes } from "../context/QuotesContext";
import { InsuranceQuote } from "../types";
import { steps, stepTitles } from "./constants";
import { StepRenderer } from "./components/StepRenderer"; // Fixed import syntax
import ProgressIndicator from "./components/ProgressIndicator";

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
      
      <ProgressIndicator 
        steps={steps}
        formData={formData}
        currentStepIndex={currentStepIndex}
        stepTitles={stepTitles}
      />
      
      <Card className="p-6">
        <StepRenderer
          currentStep={currentStep}
          formData={formData}
          onUpdate={handleUpdateField}
        />
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

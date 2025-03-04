
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Car, Home, ArrowLeft, LoaderCircle } from "lucide-react";
import { useQuotes } from "./context/QuotesContext";
import { useToast } from "@/components/ui/use-toast";
import { Alert, AlertDescription } from "@/components/ui/alert";

export const NewQuote = () => {
  const navigate = useNavigate();
  const { createNewQuote } = useQuotes();
  const { toast } = useToast();
  const [isCreating, setIsCreating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<"auto" | "home" | null>(null);
  
  const handleCreateQuote = async (type: "auto" | "home") => {
    if (isCreating) return; // Prevent double submission
    
    setIsCreating(true);
    setSelectedType(type);
    setError(null);
    
    try {
      console.log(`Starting quote creation for type: ${type}`);
      // Create the new quote
      const newQuote = await createNewQuote(type);
      console.log("Created new quote:", newQuote);
      
      if (newQuote && newQuote.id) {
        // Navigate to the quote detail page
        console.log(`Navigating to quote detail: ${newQuote.id}`);
        toast({
          title: "Success",
          description: `New ${type} insurance quote created successfully.`,
        });
        
        // Use timeout to ensure the state has been updated before navigating
        setTimeout(() => {
          navigate(`/admin/rater/quote/${newQuote.id}`);
        }, 300);
      } else {
        throw new Error("Failed to create quote - no ID returned");
      }
    } catch (error: any) {
      console.error("Error creating quote:", error);
      setError(error.message || "Failed to create new quote. Please try again.");
      toast({
        title: "Error",
        description: "Failed to create new quote. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsCreating(false);
      setSelectedType(null);
    }
  };
  
  return (
    <div className="w-full space-y-6">
      <div className="flex items-center gap-4">
        <Button
          variant="outline"
          size="icon"
          onClick={() => navigate("/admin/rater")}
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h2 className="text-3xl font-bold tracking-tight">Create New Quote</h2>
      </div>
      
      {error && (
        <Alert variant="destructive" className="my-4">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <Card 
          className={`p-6 cursor-pointer hover:shadow-md transition-shadow flex flex-col items-center justify-center py-12 ${isCreating ? 'opacity-50 pointer-events-none' : ''}`}
          onClick={() => !isCreating && handleCreateQuote("auto")}
        >
          <Car className="h-16 w-16 mb-4 text-sky-600" />
          <h3 className="text-2xl font-semibold mb-2">Auto Insurance</h3>
          <p className="text-gray-600 text-center max-w-md">
            Create a new auto insurance quote for your client, including vehicle information and coverage options.
          </p>
          <Button className="mt-6" disabled={isCreating} onClick={(e) => {
            e.stopPropagation();
            if (!isCreating) handleCreateQuote("auto");
          }}>
            {isCreating && selectedType === "auto" ? (
              <><LoaderCircle className="h-4 w-4 mr-2 animate-spin" /> Creating...</>
            ) : (
              "Start Auto Quote"
            )}
          </Button>
        </Card>
        
        <Card 
          className={`p-6 cursor-pointer hover:shadow-md transition-shadow flex flex-col items-center justify-center py-12 ${isCreating ? 'opacity-50 pointer-events-none' : ''}`}
          onClick={() => !isCreating && handleCreateQuote("home")}
        >
          <Home className="h-16 w-16 mb-4 text-sky-600" />
          <h3 className="text-2xl font-semibold mb-2">Home Insurance</h3>
          <p className="text-gray-600 text-center max-w-md">
            Create a new home insurance quote for your client, including property details and coverage options.
          </p>
          <Button className="mt-6" disabled={isCreating} onClick={(e) => {
            e.stopPropagation();
            if (!isCreating) handleCreateQuote("home");
          }}>
            {isCreating && selectedType === "home" ? (
              <><LoaderCircle className="h-4 w-4 mr-2 animate-spin" /> Creating...</>
            ) : (
              "Start Home Quote"
            )}
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default NewQuote;

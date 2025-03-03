
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Car, Home, ArrowLeft } from "lucide-react";
import { useQuotes } from "./context/QuotesContext";
import { useToast } from "@/components/ui/use-toast";

export const NewQuote = () => {
  const navigate = useNavigate();
  const { createNewQuote } = useQuotes();
  const { toast } = useToast();
  const [isCreating, setIsCreating] = useState(false);
  
  const handleCreateQuote = (type: "auto" | "home") => {
    setIsCreating(true);
    
    try {
      // Create the new quote
      const newQuote = createNewQuote(type);
      console.log("Created new quote:", newQuote);
      
      // Navigate to the quote detail page
      navigate(`/admin/rater/quote/${newQuote.id}`);
    } catch (error) {
      console.error("Error creating quote:", error);
      toast({
        title: "Error",
        description: "Failed to create new quote",
        variant: "destructive",
      });
      setIsCreating(false);
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
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <Card 
          className="p-6 cursor-pointer hover:shadow-md transition-shadow flex flex-col items-center justify-center py-12"
          onClick={() => !isCreating && handleCreateQuote("auto")}
        >
          <Car className="h-16 w-16 mb-4 text-sky-600" />
          <h3 className="text-2xl font-semibold mb-2">Auto Insurance</h3>
          <p className="text-gray-600 text-center max-w-md">
            Create a new auto insurance quote for your client, including vehicle information and coverage options.
          </p>
          <Button className="mt-6" disabled={isCreating} onClick={() => !isCreating && handleCreateQuote("auto")}>
            {isCreating ? "Creating..." : "Start Auto Quote"}
          </Button>
        </Card>
        
        <Card 
          className="p-6 cursor-pointer hover:shadow-md transition-shadow flex flex-col items-center justify-center py-12"
          onClick={() => !isCreating && handleCreateQuote("home")}
        >
          <Home className="h-16 w-16 mb-4 text-sky-600" />
          <h3 className="text-2xl font-semibold mb-2">Home Insurance</h3>
          <p className="text-gray-600 text-center max-w-md">
            Create a new home insurance quote for your client, including property details and coverage options.
          </p>
          <Button className="mt-6" disabled={isCreating} onClick={() => !isCreating && handleCreateQuote("home")}>
            {isCreating ? "Creating..." : "Start Home Quote"}
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default NewQuote;

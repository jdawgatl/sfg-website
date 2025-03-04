
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { PlusCircle, HomeIcon, Car, LoaderCircle } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useQuotes } from "./context/QuotesContext";
import { useToast } from "@/components/ui/use-toast";
import { Alert, AlertDescription } from "@/components/ui/alert";

export const NewQuoteButton = () => {
  const [open, setOpen] = useState(false);
  const [quoteType, setQuoteType] = useState<"auto" | "home">("auto");
  const [isCreating, setIsCreating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { createNewQuote } = useQuotes();
  const { toast } = useToast();

  const handleCreateQuote = async () => {
    if (isCreating) return; // Prevent double submission
    
    setIsCreating(true);
    setError(null);
    
    try {
      console.log(`Starting quote creation for type: ${quoteType} from dialog`);
      
      // Create the new quote directly with error handling
      const newQuote = await createNewQuote(quoteType);
      console.log("Created new quote from dialog:", newQuote);
      
      if (newQuote && newQuote.id) {
        // Close dialog before navigation
        setOpen(false);
        
        toast({
          title: "Success",
          description: `New ${quoteType} insurance quote created successfully.`,
        });
        
        // Navigate with a slight delay to ensure dialog is fully closed
        setTimeout(() => {
          navigate(`/admin/rater/quote/${newQuote.id}`);
        }, 500);
      } else {
        throw new Error("Quote creation failed - no valid quote returned");
      }
    } catch (error: any) {
      console.error("Error creating quote from dialog:", error);
      setError(error.message || "Failed to create new quote. Please try again.");
      toast({
        title: "Error",
        description: error.message || "Failed to create new quote. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsCreating(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          New Quote
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create New Quote</DialogTitle>
          <DialogDescription>
            Select the type of insurance quote you want to create.
          </DialogDescription>
        </DialogHeader>
        
        {error && (
          <Alert variant="destructive" className="my-2">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        
        <RadioGroup 
          defaultValue="auto" 
          value={quoteType} 
          onValueChange={(value) => setQuoteType(value as "auto" | "home")}
          className="grid grid-cols-2 gap-4 py-4"
        >
          <div className="flex items-center space-x-2 border rounded-md p-4 cursor-pointer hover:bg-muted">
            <RadioGroupItem value="auto" id="auto" />
            <Label htmlFor="auto" className="flex items-center cursor-pointer">
              <Car className="h-5 w-5 mr-2 text-sky-600" />
              Auto Insurance
            </Label>
          </div>
          
          <div className="flex items-center space-x-2 border rounded-md p-4 cursor-pointer hover:bg-muted">
            <RadioGroupItem value="home" id="home" />
            <Label htmlFor="home" className="flex items-center cursor-pointer">
              <HomeIcon className="h-5 w-5 mr-2 text-sky-600" />
              Home Insurance
            </Label>
          </div>
        </RadioGroup>
        
        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)} disabled={isCreating}>Cancel</Button>
          <Button onClick={handleCreateQuote} disabled={isCreating}>
            {isCreating ? (
              <>
                <LoaderCircle className="h-4 w-4 mr-2 animate-spin" />
                Creating...
              </>
            ) : (
              "Create Quote"
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

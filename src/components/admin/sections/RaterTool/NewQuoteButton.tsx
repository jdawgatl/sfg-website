
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
import { PlusCircle, HomeIcon, Car } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useQuotes } from "./context/QuotesContext";
import { useToast } from "@/components/ui/use-toast";

export const NewQuoteButton = () => {
  const [open, setOpen] = useState(false);
  const [quoteType, setQuoteType] = useState<"auto" | "home">("auto");
  const [isCreating, setIsCreating] = useState(false);
  const navigate = useNavigate();
  const { createNewQuote } = useQuotes();
  const { toast } = useToast();

  const handleCreateQuote = () => {
    setIsCreating(true);
    
    try {
      // Create the new quote using the context function
      const newQuote = createNewQuote(quoteType);
      
      // Navigate to the quote detail page
      navigate(`/admin/rater/quote/${newQuote.id}`);
      setOpen(false);
    } catch (error) {
      console.error("Error creating quote:", error);
      toast({
        title: "Error",
        description: "Failed to create new quote",
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
            {isCreating ? "Creating..." : "Create Quote"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

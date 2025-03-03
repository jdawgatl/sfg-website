
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

export const NewQuoteButton = () => {
  const [open, setOpen] = useState(false);
  const [quoteType, setQuoteType] = useState<"auto" | "home">("auto");
  const navigate = useNavigate();

  const handleCreateQuote = () => {
    // In a real implementation, this would create a new quote in the database
    // and then navigate to the quote form
    const quoteId = `new-${quoteType}-${Date.now()}`;
    navigate(`/admin/rater/quote/${quoteId}`);
    setOpen(false);
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
          <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={handleCreateQuote}>Create Quote</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

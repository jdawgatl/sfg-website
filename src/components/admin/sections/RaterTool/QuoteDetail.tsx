
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { QuoteForm } from "./QuoteForm";
import { useQuotes } from "./context/QuotesContext";
import { useToast } from "@/components/ui/use-toast";
import { InsuranceQuote } from "./types";

export const QuoteDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getQuoteById } = useQuotes();
  const { toast } = useToast();
  const [quote, setQuote] = useState<InsuranceQuote | null>(null);
  
  useEffect(() => {
    if (id) {
      const foundQuote = getQuoteById(id);
      console.log("Looking for quote:", id);
      console.log("Found quote:", foundQuote);
      
      if (foundQuote) {
        setQuote(foundQuote);
      } else {
        // If no quote found with this ID, navigate back to quotes list
        toast({
          title: "Quote not found",
          description: "The requested quote could not be found",
          variant: "destructive",
        });
        navigate("/admin/rater");
      }
    }
  }, [id, navigate, toast, getQuoteById]);
  
  if (!quote) {
    return null; // Return null while redirecting
  }
  
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
        <h2 className="text-3xl font-bold tracking-tight">
          {quote.type === "auto" ? "Auto" : "Home"} Insurance Quote
        </h2>
      </div>
      
      <QuoteForm quote={quote} />
    </div>
  );
};

export default QuoteDetail;

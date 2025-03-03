
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { QuoteForm } from "./QuoteForm";
import { useQuotes } from "./context/QuotesContext";
import { useToast } from "@/components/ui/use-toast";
import { InsuranceQuote } from "./types";
import { supabase } from "@/integrations/supabase/client";

export const QuoteDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getQuoteById } = useQuotes();
  const { toast } = useToast();
  const [quote, setQuote] = useState<InsuranceQuote | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const fetchQuote = async () => {
      if (!id) {
        console.error("No ID provided");
        navigate("/admin/rater");
        return;
      }

      console.log("Fetching quote with ID:", id);
      setIsLoading(true);
      
      try {
        // First try to get from context
        const foundQuote = getQuoteById(id);
        console.log("Quote from context:", foundQuote);
        
        if (foundQuote) {
          setQuote(foundQuote);
          setIsLoading(false);
          return;
        }
        
        console.log("Quote not found in context, fetching from Supabase");
        // If not in context, try to get directly from Supabase
        const { data, error } = await supabase
          .from('contact_submissions')
          .select('*')
          .eq('id', id)
          .eq('insurance_type', 'QUOTE_TOOL')
          .single();
        
        if (error) {
          console.error("Error fetching quote from Supabase:", error);
          throw new Error("Quote not found in database");
        }
        
        console.log("Quote data from Supabase:", data);
        
        // Parse the quote data from the message field
        if (data.message) {
          try {
            const quoteData = JSON.parse(data.message);
            console.log("Parsed quote data:", quoteData);
            setQuote(quoteData as InsuranceQuote);
          } catch (err) {
            console.error("Error parsing quote data:", err);
            throw new Error("Invalid quote data format");
          }
        } else {
          throw new Error("Quote data is missing");
        }
      } catch (error) {
        console.error("Error fetching quote:", error);
        toast({
          title: "Quote not found",
          description: "The requested quote could not be found",
          variant: "destructive",
        });
        navigate("/admin/rater");
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchQuote();
  }, [id, navigate, toast, getQuoteById]);
  
  if (isLoading) {
    return <div className="flex items-center justify-center p-12">Loading quote...</div>;
  }
  
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

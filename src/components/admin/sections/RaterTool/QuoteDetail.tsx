
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { QuoteForm } from "./QuoteForm";
import { useQuotes } from "./context/QuotesContext";

export const QuoteDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getQuoteById } = useQuotes();
  
  const quote = id ? getQuoteById(id) : null;
  
  useEffect(() => {
    if (!quote && id) {
      // If no quote found with this ID, navigate back to quotes list
      navigate("/admin/rater");
    }
  }, [quote, id, navigate]);
  
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
          {quote ? `${quote.type === "auto" ? "Auto" : "Home"} Insurance Quote` : "Loading..."}
        </h2>
      </div>
      
      {quote && <QuoteForm />}
    </div>
  );
};

export default QuoteDetail;

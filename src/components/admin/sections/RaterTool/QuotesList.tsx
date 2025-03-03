
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Edit, FileText, Trash2, Share2, Clock } from "lucide-react";
import { useQuotes } from "./context/QuotesContext";

type QuotesListProps = {
  type: "completed" | "draft";
};

export const QuotesList = ({ type }: QuotesListProps) => {
  const { quotes, deleteQuote } = useQuotes();
  const navigate = useNavigate();
  
  const filteredQuotes = quotes.filter(quote => 
    type === "completed" ? quote.status === "completed" : quote.status === "draft"
  );

  const handleEditClick = (quoteId: string) => {
    console.log(`Navigating to quote with ID: ${quoteId}`);
    navigate(`/admin/rater/quote/${quoteId}`);
  };

  const handleDeleteClick = (quoteId: string) => {
    deleteQuote(quoteId);
  };

  if (filteredQuotes.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-8 text-center">
        <FileText className="h-12 w-12 text-muted-foreground mb-4" />
        <h3 className="text-lg font-medium">No {type} quotes found</h3>
        <p className="text-muted-foreground mt-2">
          {type === "completed" 
            ? "Completed quotes will appear here" 
            : "Drafts will be saved here as you work on them"}
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {filteredQuotes.map((quote) => (
        <Card key={quote.id} className="overflow-hidden">
          <CardContent className="p-0">
            <div className="flex items-center justify-between p-4 border-b">
              <div>
                <div className="flex items-center space-x-2">
                  <h3 className="text-lg font-medium">{quote.clientInfo.firstName} {quote.clientInfo.lastName}</h3>
                  <Badge variant={quote.type === "auto" ? "default" : "outline"}>
                    {quote.type === "auto" ? "Auto" : "Home"}
                  </Badge>
                </div>
                <div className="text-sm text-muted-foreground mt-1 flex items-center">
                  <Clock className="h-3 w-3 mr-1" />
                  Last updated: {new Date(quote.updatedAt).toLocaleDateString()}
                </div>
              </div>
              <div className="flex space-x-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => handleEditClick(quote.id)}
                >
                  <Edit className="h-4 w-4 mr-1" />
                  Edit
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                >
                  <Share2 className="h-4 w-4 mr-1" />
                  Share
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="text-destructive hover:text-destructive"
                  onClick={() => handleDeleteClick(quote.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="p-4 bg-muted/50">
              {quote.type === "auto" ? (
                <p className="text-sm">{quote.vehicles ? quote.vehicles.length : 0} vehicle(s)</p>
              ) : (
                <p className="text-sm">Property: {quote.propertyInfo?.address}, {quote.propertyInfo?.city}, {quote.propertyInfo?.state}</p>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

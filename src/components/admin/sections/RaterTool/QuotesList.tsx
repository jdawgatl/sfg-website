
import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Edit, FileText, Trash2, Share2, Clock } from "lucide-react";

// Sample data - in a real implementation this would come from an API or database
const sampleQuotes = [
  {
    id: "q-001",
    clientName: "John Smith",
    type: "auto",
    status: "completed",
    vehicles: 2,
    lastUpdated: "2025-03-01T12:00:00Z"
  },
  {
    id: "q-002",
    clientName: "Sarah Johnson",
    type: "home",
    status: "completed",
    propertyAddress: "123 Main St, Atlanta, GA",
    lastUpdated: "2025-02-28T10:30:00Z"
  },
  {
    id: "q-003",
    clientName: "Michael Brown",
    type: "auto",
    status: "draft",
    vehicles: 1,
    lastUpdated: "2025-02-25T14:45:00Z"
  }
];

type QuotesListProps = {
  type: "completed" | "draft";
};

export const QuotesList = ({ type }: QuotesListProps) => {
  const [quotes, setQuotes] = useState(
    sampleQuotes.filter(quote => 
      type === "completed" ? quote.status === "completed" : quote.status === "draft"
    )
  );

  if (quotes.length === 0) {
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
      {quotes.map((quote) => (
        <Card key={quote.id} className="overflow-hidden">
          <CardContent className="p-0">
            <div className="flex items-center justify-between p-4 border-b">
              <div>
                <div className="flex items-center space-x-2">
                  <h3 className="text-lg font-medium">{quote.clientName}</h3>
                  <Badge variant={quote.type === "auto" ? "default" : "outline"}>
                    {quote.type === "auto" ? "Auto" : "Home"}
                  </Badge>
                </div>
                <div className="text-sm text-muted-foreground mt-1 flex items-center">
                  <Clock className="h-3 w-3 mr-1" />
                  Last updated: {new Date(quote.lastUpdated).toLocaleDateString()}
                </div>
              </div>
              <div className="flex space-x-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  asChild
                >
                  <Link to={`/admin/rater/quote/${quote.id}`}>
                    <Edit className="h-4 w-4 mr-1" />
                    Edit
                  </Link>
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
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="p-4 bg-muted/50">
              {quote.type === "auto" ? (
                <p className="text-sm">{quote.vehicles} vehicle(s)</p>
              ) : (
                <p className="text-sm">Property: {quote.propertyAddress}</p>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

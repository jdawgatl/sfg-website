
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { PlusCircle, FileText, Edit } from "lucide-react";
import { QuotesList } from "./QuotesList";
import { NewQuoteButton } from "./NewQuoteButton";
import { QuoteDetail } from "./QuoteDetail";
import { NewQuote } from "./NewQuote";
import { QuotesProvider } from "./context/QuotesContext";

export const RaterTool = () => {
  return (
    <QuotesProvider>
      <Routes>
        <Route index element={<RaterDashboard />} />
        <Route path="new" element={<NewQuote />} />
        <Route path="quote/:id" element={<QuoteDetail />} />
      </Routes>
    </QuotesProvider>
  );
};

const RaterDashboard = () => {
  const [activeTab, setActiveTab] = useState("quotes");

  return (
    <div className="w-full space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Comparative Rater</h2>
          <p className="text-muted-foreground">
            Create, manage, and compare insurance quotes for your clients
          </p>
        </div>
        <NewQuoteButton />
      </div>
      
      <Tabs defaultValue="quotes" onValueChange={setActiveTab} value={activeTab}>
        <TabsList className="grid w-full max-w-md grid-cols-2">
          <TabsTrigger value="quotes">Saved Quotes</TabsTrigger>
          <TabsTrigger value="drafts">Drafts</TabsTrigger>
        </TabsList>
        <TabsContent value="quotes">
          <Card>
            <CardHeader>
              <CardTitle>Saved Quotes</CardTitle>
              <CardDescription>
                View and manage all completed quotes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <QuotesList type="completed" />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="drafts">
          <Card>
            <CardHeader>
              <CardTitle>Draft Quotes</CardTitle>
              <CardDescription>
                Continue working on incomplete quotes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <QuotesList type="draft" />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

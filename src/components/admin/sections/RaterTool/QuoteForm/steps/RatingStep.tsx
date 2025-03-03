
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { InsuranceQuote } from "../../types";
import { Download, ExternalLink, Database, FileJson, FileSpreadsheet } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface RatingStepProps {
  quote: InsuranceQuote;
}

type ExportFormat = "json" | "xml" | "csv";

const RatingStep: React.FC<RatingStepProps> = ({ quote }) => {
  const { toast } = useToast();
  const [exportFormat, setExportFormat] = useState<ExportFormat>("json");
  
  const handleExport = (format: ExportFormat) => {
    setExportFormat(format);
    
    // In a real implementation, this would generate the export data
    // For now, we'll just show a toast
    let data: string;
    let fileExtension: string;
    
    if (format === "json") {
      data = JSON.stringify(quote, null, 2);
      fileExtension = "json";
    } else if (format === "xml") {
      // Simplified XML conversion
      data = `<quote>
  <id>${quote.id}</id>
  <type>${quote.type}</type>
  <!-- More data would be here in a real implementation -->
</quote>`;
      fileExtension = "xml";
    } else {
      // Simplified CSV conversion
      data = `id,type,status
${quote.id},${quote.type},${quote.status}`;
      fileExtension = "csv";
    }
    
    // Create a blob and download it
    const blob = new Blob([data], { type: `application/${fileExtension}` });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `quote-${quote.id}.${fileExtension}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast({
      title: "Quote exported",
      description: `Quote data exported as ${format.toUpperCase()}`
    });
  };
  
  const mockOpenRater = (raterName: string) => {
    toast({
      title: `Opening ${raterName}`,
      description: "In a real implementation, this would open the rater in a new tab."
    });
  };
  
  return (
    <div className="space-y-6">
      <div className="text-xl font-semibold mb-4">Generate Quotes</div>
      
      <Tabs defaultValue="export">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="export">Export Data</TabsTrigger>
          <TabsTrigger value="raters">Insurance Raters</TabsTrigger>
        </TabsList>
        
        <TabsContent value="export" className="space-y-4 pt-4">
          <p className="text-gray-600">
            Export your quote data in various formats to use with other systems or to save for later.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className={`cursor-pointer ${exportFormat === "json" ? "border-sky-500" : ""}`} onClick={() => setExportFormat("json")}>
              <CardHeader className="p-4">
                <CardTitle className="flex items-center gap-2">
                  <FileJson className="h-5 w-5" />
                  JSON
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <CardDescription>
                  Export as JSON for use with web applications and APIs.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className={`cursor-pointer ${exportFormat === "xml" ? "border-sky-500" : ""}`} onClick={() => setExportFormat("xml")}>
              <CardHeader className="p-4">
                <CardTitle className="flex items-center gap-2">
                  <Database className="h-5 w-5" />
                  XML
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <CardDescription>
                  Export as XML for use with traditional insurance systems.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className={`cursor-pointer ${exportFormat === "csv" ? "border-sky-500" : ""}`} onClick={() => setExportFormat("csv")}>
              <CardHeader className="p-4">
                <CardTitle className="flex items-center gap-2">
                  <FileSpreadsheet className="h-5 w-5" />
                  CSV
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <CardDescription>
                  Export as CSV for use with spreadsheet applications.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
          
          <div className="flex justify-center mt-6">
            <Button onClick={() => handleExport(exportFormat)} className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Download {exportFormat.toUpperCase()}
            </Button>
          </div>
        </TabsContent>
        
        <TabsContent value="raters" className="space-y-4 pt-4">
          <p className="text-gray-600">
            Connect to various insurance rater platforms to get real-time quotes for your client.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Progressive</CardTitle>
                <CardDescription>
                  Connect to Progressive's rater to get real-time auto and home quotes.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button variant="outline" className="w-full" onClick={() => mockOpenRater("Progressive")}>
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Open Progressive Rater
                </Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>GEICO</CardTitle>
                <CardDescription>
                  Connect to GEICO's rater to get competitive auto insurance quotes.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button variant="outline" className="w-full" onClick={() => mockOpenRater("GEICO")}>
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Open GEICO Rater
                </Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Safeco</CardTitle>
                <CardDescription>
                  Connect to Safeco's rater for bundled home and auto quotes.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button variant="outline" className="w-full" onClick={() => mockOpenRater("Safeco")}>
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Open Safeco Rater
                </Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Travelers</CardTitle>
                <CardDescription>
                  Connect to Travelers' rater for comprehensive insurance solutions.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button variant="outline" className="w-full" onClick={() => mockOpenRater("Travelers")}>
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Open Travelers Rater
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default RatingStep;

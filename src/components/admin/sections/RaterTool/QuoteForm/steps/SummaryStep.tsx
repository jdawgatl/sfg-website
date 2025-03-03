
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { InsuranceQuote, AutoQuote, HomeQuote } from "../../types";
import { CheckCircle, Share2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface SummaryStepProps {
  quote: InsuranceQuote;
  onComplete: () => void;
}

const SummaryStep: React.FC<SummaryStepProps> = ({ quote, onComplete }) => {
  const { toast } = useToast();
  
  const generateShareLink = () => {
    // In a real implementation, this would call an API to generate a shareable link
    const dummyLink = `https://example.com/quote/${quote.id}`;
    
    navigator.clipboard.writeText(dummyLink)
      .then(() => {
        toast({
          title: "Link copied to clipboard",
          description: "Share this link with the client to let them continue the quoting process."
        });
      })
      .catch(() => {
        toast({
          title: "Failed to copy link",
          description: "Please try again.",
          variant: "destructive"
        });
      });
  };
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-4">
        <div className="text-xl font-semibold">Quote Summary</div>
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            className="flex items-center gap-2"
            onClick={generateShareLink}
          >
            <Share2 className="h-4 w-4" />
            Share with Client
          </Button>
          <Button 
            className="flex items-center gap-2"
            onClick={onComplete}
          >
            <CheckCircle className="h-4 w-4" />
            Complete Quote
          </Button>
        </div>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Client Information</CardTitle>
        </CardHeader>
        <CardContent>
          <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
            <div>
              <dt className="text-sm font-medium text-gray-500">Name</dt>
              <dd>{quote.clientInfo.firstName} {quote.clientInfo.lastName}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Email</dt>
              <dd>{quote.clientInfo.email || "N/A"}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Phone</dt>
              <dd>{quote.clientInfo.phone || "N/A"}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Date of Birth</dt>
              <dd>{quote.clientInfo.dateOfBirth || "N/A"}</dd>
            </div>
            <div className="md:col-span-2">
              <dt className="text-sm font-medium text-gray-500">Address</dt>
              <dd>
                {quote.clientInfo.address}, {quote.clientInfo.city}, {quote.clientInfo.state} {quote.clientInfo.zipCode}
              </dd>
            </div>
          </dl>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Household Members</CardTitle>
        </CardHeader>
        <CardContent>
          {quote.householdMembers.length > 0 ? (
            <div className="grid grid-cols-1 gap-4">
              {quote.householdMembers.map((member) => (
                <div key={member.id} className="border-b pb-2 last:border-0 last:pb-0">
                  <h4 className="font-medium">{member.firstName} {member.lastName}</h4>
                  <dl className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-1 mt-1">
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Relation</dt>
                      <dd>{member.relationToInsured}</dd>
                    </div>
                    {member.dateOfBirth && (
                      <div>
                        <dt className="text-sm font-medium text-gray-500">Date of Birth</dt>
                        <dd>{member.dateOfBirth}</dd>
                      </div>
                    )}
                    {member.gender && (
                      <div>
                        <dt className="text-sm font-medium text-gray-500">Gender</dt>
                        <dd>{member.gender}</dd>
                      </div>
                    )}
                    {member.maritalStatus && (
                      <div>
                        <dt className="text-sm font-medium text-gray-500">Marital Status</dt>
                        <dd>{member.maritalStatus}</dd>
                      </div>
                    )}
                    {member.licenseNumber && (
                      <div>
                        <dt className="text-sm font-medium text-gray-500">License Number</dt>
                        <dd>{member.licenseNumber}</dd>
                      </div>
                    )}
                    {member.licenseState && (
                      <div>
                        <dt className="text-sm font-medium text-gray-500">License State</dt>
                        <dd>{member.licenseState}</dd>
                      </div>
                    )}
                  </dl>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No household members added</p>
          )}
        </CardContent>
      </Card>
      
      {quote.type === "auto" && (
        <Card>
          <CardHeader>
            <CardTitle>Vehicles</CardTitle>
          </CardHeader>
          <CardContent>
            {(quote as AutoQuote).vehicles.length > 0 ? (
              <div className="grid grid-cols-1 gap-4">
                {(quote as AutoQuote).vehicles.map((vehicle) => (
                  <div key={vehicle.id} className="border-b pb-2 last:border-0 last:pb-0">
                    <h4 className="font-medium">
                      {vehicle.year} {vehicle.make} {vehicle.model || "(Model not specified)"}
                    </h4>
                    <dl className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-1 mt-1">
                      {vehicle.vin && (
                        <div>
                          <dt className="text-sm font-medium text-gray-500">VIN</dt>
                          <dd>{vehicle.vin}</dd>
                        </div>
                      )}
                      {vehicle.annualMileage && (
                        <div>
                          <dt className="text-sm font-medium text-gray-500">Annual Mileage</dt>
                          <dd>{vehicle.annualMileage}</dd>
                        </div>
                      )}
                      {vehicle.parkingType && (
                        <div>
                          <dt className="text-sm font-medium text-gray-500">Parking Type</dt>
                          <dd>{vehicle.parkingType}</dd>
                        </div>
                      )}
                      {vehicle.primaryDriver && (
                        <div>
                          <dt className="text-sm font-medium text-gray-500">Primary Driver</dt>
                          <dd>
                            {(() => {
                              const driver = quote.householdMembers.find(m => m.id === vehicle.primaryDriver);
                              return driver ? `${driver.firstName} ${driver.lastName}` : "Unknown";
                            })()}
                          </dd>
                        </div>
                      )}
                      <div>
                        <dt className="text-sm font-medium text-gray-500">Comprehensive</dt>
                        <dd>{vehicle.hasComprehensive ? "Yes" : "No"}</dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium text-gray-500">Collision</dt>
                        <dd>{vehicle.hasCollision ? "Yes" : "No"}</dd>
                      </div>
                    </dl>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">No vehicles added</p>
            )}
          </CardContent>
        </Card>
      )}
      
      {quote.type === "home" && (
        <Card>
          <CardHeader>
            <CardTitle>Property Information</CardTitle>
          </CardHeader>
          <CardContent>
            <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
              <div className="md:col-span-2">
                <dt className="text-sm font-medium text-gray-500">Property Address</dt>
                <dd>
                  {(quote as HomeQuote).propertyInfo.address}, 
                  {(quote as HomeQuote).propertyInfo.city}, 
                  {(quote as HomeQuote).propertyInfo.state} 
                  {(quote as HomeQuote).propertyInfo.zipCode}
                </dd>
              </div>
              
              {(quote as HomeQuote).propertyInfo.yearBuilt && (
                <div>
                  <dt className="text-sm font-medium text-gray-500">Year Built</dt>
                  <dd>{(quote as HomeQuote).propertyInfo.yearBuilt}</dd>
                </div>
              )}
              
              {(quote as HomeQuote).propertyInfo.squareFootage && (
                <div>
                  <dt className="text-sm font-medium text-gray-500">Square Footage</dt>
                  <dd>{(quote as HomeQuote).propertyInfo.squareFootage}</dd>
                </div>
              )}
              
              {(quote as HomeQuote).propertyInfo.constructionType && (
                <div>
                  <dt className="text-sm font-medium text-gray-500">Construction Type</dt>
                  <dd>{(quote as HomeQuote).propertyInfo.constructionType}</dd>
                </div>
              )}
              
              {(quote as HomeQuote).propertyInfo.numberOfStories && (
                <div>
                  <dt className="text-sm font-medium text-gray-500">Number of Stories</dt>
                  <dd>{(quote as HomeQuote).propertyInfo.numberOfStories}</dd>
                </div>
              )}
              
              {(quote as HomeQuote).propertyInfo.roofReplacedYear && (
                <div>
                  <dt className="text-sm font-medium text-gray-500">Roof Replaced Year</dt>
                  <dd>{(quote as HomeQuote).propertyInfo.roofReplacedYear}</dd>
                </div>
              )}
              
              <div>
                <dt className="text-sm font-medium text-gray-500">Has Alarm System</dt>
                <dd>{(quote as HomeQuote).propertyInfo.hasAlarmSystem ? "Yes" : "No"}</dd>
              </div>
              
              <div>
                <dt className="text-sm font-medium text-gray-500">Has Basement</dt>
                <dd>{(quote as HomeQuote).propertyInfo.hasBasement ? "Yes" : "No"}</dd>
              </div>
              
              <div>
                <dt className="text-sm font-medium text-gray-500">Has Pool</dt>
                <dd>{(quote as HomeQuote).propertyInfo.hasPool ? "Yes" : "No"}</dd>
              </div>
              
              <div>
                <dt className="text-sm font-medium text-gray-500">Has Garage</dt>
                <dd>{(quote as HomeQuote).propertyInfo.hasGarage ? "Yes" : "No"}</dd>
              </div>
              
              {(quote as HomeQuote).propertyInfo.garageType && (
                <div>
                  <dt className="text-sm font-medium text-gray-500">Garage Type</dt>
                  <dd>{(quote as HomeQuote).propertyInfo.garageType}</dd>
                </div>
              )}
            </dl>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default SummaryStep;
